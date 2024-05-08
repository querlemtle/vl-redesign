import logo from "./../assets/Vlive-Lab-logo-white.svg";
import { YtIcon, FbIcon, XIcon } from "./../components/IconSvgs";
import styles from "./Footer.module.css";

const {
  footer,
  footer__container: footerContainer,
  footer__logo: footerLogo,
  footer__icons: footerIcons,
  footer__list: footerList,
  footer__link: footerLink,
  "footer__link--small": footerLinkSmall,
  footer__item: footerItem,
  footer__subitem: footerSubitem,
  footer__copyright: footerCopyright,
} = styles;

function Footer() {
  return (
    <footer className={footer}>
      <div className={footerContainer}>
        <div>
          <img src={logo} className={footerLogo} />
          <p>
            We are new VTuber Studio with <br /> MMORPG & VR tech <br /> welcome
            to join!
          </p>
          <div className={footerIcons}>
            <a href="https://www.youtube.com/@VliveLab/about">
              <YtIcon size={30} lineFill="#fff" />
            </a>
            <a href="https://www.facebook.com/people/Vlive-Lab/100093708878400/">
              <FbIcon size={30} lineFill="#fff" />
            </a>
            <a href="https://twitter.com/VliveLab">
              <XIcon size={30} lineFill="#fff" />
            </a>
          </div>
        </div>
        <div>
          <ul className={footerList}>
            <li className={footerItem}>
              ABOUT
              <ul>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    事務所介紹
                  </a>
                </li>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    成立宗旨
                  </a>
                </li>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    服務項目
                  </a>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              REQUIREMENTS
              <ul>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    團隊職缺
                  </a>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              TALENTS
              <ul>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    桑德斯.闇
                  </a>
                </li>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    花川夢姬
                  </a>
                </li>
                <li className={footerSubitem}>
                  <a href="#" className={footerLink}>
                    夜神遂心
                  </a>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              RESOURCES
              <ul>
                <li className={footerSubitem}>
                  <a href="https://vchama.xyz/" className={footerLink}>
                    Vtuber 統計地圖
                  </a>
                </li>
                <li className={footerSubitem}>
                  <a
                    href="https://neptunia.github.io/vtubers-data-science/"
                    className={footerLink}
                  >
                    超級聊天數據分析
                  </a>
                </li>
                <li className={footerSubitem}>
                  <a
                    href="https://streamscharts.com/channels?vtuber=all"
                    className={footerLink}
                  >
                    StreamChart
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={footerCopyright}>
        <small>
          © {new Date().getFullYear()} Vlive Lab. All Rights Reserved.
        </small>
        <a href="#" className={`${footerLink} ${footerLinkSmall}`}>
          Terms & Agreements
        </a>
        <a href="#" className={`${footerLink} ${footerLinkSmall}`}>
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

export default Footer;
