import { useState } from 'react';
import FormField from '../../components/FormField';
import { loginApi } from '../../api/product';
import './index.css';
import LOGOT from '../../assets/login-logo-top.webp'
import Check from '../../assets/shield-check-fill.svg'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    //默认设置为true要不一上来就说啥都没写
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) { newErrors.email = '请输入电子邮箱'; isValid = false; }
    // 如果是空的邮箱就判定你的isvalid是假的
    else if (!/\S+@\S+\.\S+/.test(email)) { newErrors.email = '邮箱格式不正确'; isValid = false; }
    // 正则的意思是 非空白字符加上@+非空白字符加.加非空字符 模拟了有邮箱的格式

    if (!password) { newErrors.password = '请输入密码'; isValid = false; }
    // 如果密码是空的就判失败
    else if (password.length < 6) { newErrors.password = '密码长度不能少于6位'; isValid = false; }

    // 如果你的密码小于6也不行
    //（？=.*[a-z]）小写a-z
    //（？=.*[A-Z]）大写A-Z
    //（？=.*\d） 数字0-9
    //（？=.*[@$!%?&]） 特殊符号
    //[A-Za-z\d@$%!?&{8,16}] 最少8位最多16位
    
    setErrors(newErrors);
    return isValid;
    //把最终的结果告诉调用者
  };

  //异步指挥，等待结果
  const handleSignIn = async (e) => {
    e.preventDefault();
    //默认代理行为不应该执行 防止把刚写的信息弄丢 
    if (!validate()) return;
    //取反 如果是真那就return主动结束函数
    //if函数只认真理 所以才取反 不取反数据继续往下跑


    try {
      setIsLoading(true);

      const response = await loginApi({ email, password });
      //去axios二次封装里完整的跑一边等待结果

      const token = response.token || 'VERAN_ADMIN_TOKEN';
      // 左侧为真取左边 左侧为假取右边

      setIsSuccess(true);
      localStorage.setItem('userToken', token);
      // 本地存储token

      //反馈时间
      setTimeout(() => {
        //强制刷新确保数据的一致性
        window.location.href = '/';
      }, 3000);
    } catch (error) {

      console.error("认证失败:", error);
      alert(error.message || "认证失败，请检查账号密码");
    } finally {
      //最终结算，重新渲染
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* 掩盖三秒的定时器避免跳转空白期 */}
        {isSuccess ? (
          <div className="success-feedback">
            <div className="success-icon">✓</div>
            <h2> Welcome to VÉRAN </h2>
            <p>登录成功，正在进入 VÉRAN ...</p>
            <div className="loading-bar-container">
              <div className="loading-bar-fill"></div>
            </div>
          </div>
        ) : (
          <>
            <div className="login-header">
              <div className="login-logo-container">
                <img src={LOGOT} alt='log' className='login-logo-top' />
              </div>
              <h2>Welcome</h2>
              <p className="subtitle">填写你的邮箱和密码</p>
            </div>

            <form onSubmit={handleSignIn} noValidate>
              <FormField
                label="Email Address"
                // 这是属于下面那个输入框的
                type="email"
                id="user-login-email"
                name="email"
                autoComplete="username"
                placeholder="admin@company.com"
                value={email}
                error={errors.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  //拿到最新输入的字符串
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                  // 如果重新更改的时候会删除提示的红字
                }}
              />

              <FormField
                label="Password"
                type="password"
                placeholder="••••••••"
                id="login-password"
                name="password"
                autoComplete="current-password"
                value={password}
                error={errors.password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                }}
              />

              { }
              <button type="submit" className="login-btn" disabled={isLoading}>
                {/* 防止重复点击造成大量的登录请求 */}
                {isLoading ? 'Authenticating...' : 'Sign In'}
              </button>
            </form>


          </>
        )}
      </div>
    </div>
  );
};

export default Login;