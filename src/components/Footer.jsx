import logo from "./../assets/Vlive-Lab-logo-white.svg";
import ytIcon from "./../assets/yt-icon.svg";
import fbIcon from "./../assets/fb-icon.svg";
import xIcon from "./../assets/x-icon.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Vlive Lab logo" className="footer__logo" />
          <p className="footer__intro">
            We are new VTuber Studio with <br /> MMORPG & VR tech <br /> welcome
            to join!
          </p>
          <div className="footer__icons">
            <a href="https://www.youtube.com/@VliveLab/about">
              <img src={ytIcon} alt="youtube-icon" />
            </a>
            <a href="https://www.facebook.com/people/Vlive-Lab/100093708878400/">
              <img src={fbIcon} alt="facebook-icon" />
            </a>
            <a href="https://twitter.com/VliveLab">
              <img src={xIcon} alt="x-icon" />
            </a>
          </div>
        </div>
        <div>
          <ul className="footer__list">
            <li className="footer__item">
              ABOUT
              <ul>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    事務所介紹
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    成立宗旨
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    服務項目
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              REQUIREMENTS
              <ul>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    團隊職缺
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              TALENTS
              <ul>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    桑德斯.闇
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    花川夢姬
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    夜神遂心
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__item">
              RESOURCES
              <ul>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    Vtuber 統計地圖
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    超級聊天數據分析
                  </a>
                </li>
                <li className="footer__subitem">
                  <a href="#" className="footer__link">
                    StreamChart
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <small>
          © {new Date().getFullYear()} Vlive Lab. All Rights Reserved.
        </small>
        <a href="#" className="footer__link footer__link--small">
          Terms & Agreements
        </a>
        <a href="#" className="footer__link footer__link--small">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
