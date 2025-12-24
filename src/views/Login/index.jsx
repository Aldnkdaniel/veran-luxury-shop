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

    let isValid = true;
    const newErrors = { email: '', password: '' };
    if (!email) { newErrors.email = '请输入电子邮箱'; isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(email)) { newErrors.email = '邮箱格式不正确'; isValid = false; }
    if (!password) { newErrors.password = '请输入密码'; isValid = false; }
    else if (password.length < 6) { newErrors.password = '密码长度不能少于6位'; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };


  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsLoading(true);

      const response = await loginApi({ email, password });



      const token = response.token || 'VERAN_ADMIN_TOKEN';

      setIsSuccess(true);
      localStorage.setItem('userToken', token);

      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {

      console.error("认证失败:", error);
      alert(error.message || "认证失败，请检查账号密码");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
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
                type="email"
                placeholder="admin@company.com"
                value={email}
                error={errors.email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                }}
              />

              <FormField
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                error={errors.password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors(prev => ({ ...prev, password: '' }));
                }}
              />

              { }
              <button type="submit" className="login-btn" disabled={isLoading}>
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