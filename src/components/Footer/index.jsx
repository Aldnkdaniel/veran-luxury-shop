import "./index.css";
import { FOOTER_LINKS } from '../../constants/footerConfig';
import FooterLogo from '../../assets/Logo-footer.svg';

const Footer = () => {
  return (
    <>
      <div className="home-footer">
        <div className="footer-container">
          <section className="footer-top-notice">
            <h2>© 2026 VÉRAN</h2>
            <div className="notice-texts">
            <p>本网站为个人前端开发学习与作品展示用途所制作的非商业项目。页面设计仅用于技术练习与研究，不用于任何商业行为或盈利目的。</p>
            <p>网站中出现的品牌名称、商标及相关视觉素材，其版权均归各自品牌所有，仅用于学习与展示参考。</p>
            <div className="en-notice">
              <p>This website is a non-commercial personal project created for learning and demonstrating front-end development skills.</p>
              <p>All brand names, trademarks, and related visual materials referenced on this site are the property of their respective owners.</p>
            </div>
          </div>
          </section>



          <hr className="footer-sep" />



          <section className="footer-mid-content">
            <div className="footer-nav-groups">
             
              <nav className="footer-col">
                <h3>公司</h3>
                <ul>
                  <li>关于我们</li>
                  <li>平衡</li>
                  <li>道德准则</li>
                  <li>我们的故事</li>
                  <li>合法性</li>
                  <li>隐私政策</li>
                  <li>公司信息</li>
                </ul>
              </nav>

             
              <nav className="footer-col">
                <h3>有什么可以帮到您？</h3>
                <ul>
                  <li>联系我们</li>
                  <li>我的订单</li>
                  <li>常见问题解答</li>
                  <li>订阅电子邮件</li>
                  <li>客服</li>
                </ul>
              </nav>
            </div>

            
            <div className="footer-subscription">
              <div className="sub-input-wrap">
                <input type="email" placeholder="订阅邮件" className="email-input" />
                <button type="button" className="submit-btn">OK</button>
              </div>
            </div>
          </section>

          <section className="footer-brand-section">
            <img src={FooterLogo} alt="VÉRAN Logo" className="footer-big-logo" />
          </section>
        </div>
      </div>
    </>
  )
}
 
export default Footer