import { YtIcon, FbIcon, XIcon, EmailIcon } from "@/components/IconSvgs";
import styles from "./Footer.module.css";
import Link from "next/link";

const {
  footer,
  footer__container: footerContainer,
  footer__logo: footerLogo,
  footer__icons: footerIcons,
  icon,
  footer__list: footerList,
  footer__link: footerLink,
  "footer__link--small": footerLinkSmall,
  footer__item: footerItem,
  footer__subitem: footerSubitem,
  footer__copyright: footerCopyright,
} = styles;

function Footer() {
  return (
    <footer className={footer} id="footer">
      <div className={footerContainer}>
        <div>
          <img
            alt="Vlive Lab"
            src="/Vlive-Lab-logo-white.svg"
            className={footerLogo}
          />
          <p>
            We are new VTuber Studio with <br /> MMORPG & VR tech <br /> welcome
            to join!
          </p>
          <div className={footerIcons}>
            <Link
              href="https://www.youtube.com/@VliveLab/about"
              className={icon}
              target="_blank"
              rel="noreferrer"
            >
              <YtIcon size={30} lineFill="#fff" />
            </Link>
            <Link
              href="https://www.facebook.com/people/Vlive-Lab/100093708878400/"
              className={icon}
              target="_blank"
              rel="noreferrer"
            >
              <FbIcon size={30} lineFill="#fff" />
            </Link>
            <Link
              href="https://twitter.com/VliveLab"
              className={icon}
              target="_blank"
              rel="noreferrer"
            >
              <XIcon size={30} lineFill="#fff" />
            </Link>
            <Link
              href="mailto:vlivelab@gmail.com"
              className={icon}
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon size={30} lineFill="#fff" />
            </Link>
          </div>
        </div>
        <div>
          <ul className={footerList}>
            <li className={footerItem}>
              ABOUT
              <ul>
                <li className={footerSubitem}>
                  <Link href="/about#intro" className={footerLink}>
                    事務所介紹
                  </Link>
                </li>
                <li className={footerSubitem}>
                  <Link href="/about#mission" className={footerLink}>
                    成立宗旨
                  </Link>
                </li>
                <li className={footerSubitem}>
                  <Link href="/about#services" className={footerLink}>
                    服務項目
                  </Link>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              TALENTS
              <ul>
                <li className={footerSubitem}>
                  <Link
                    href="https://twitter.com/@GameSeasoning66"
                    className={footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    桑德斯.闇
                  </Link>
                </li>
                <li className={footerSubitem}>
                  <Link
                    href="https://twitter.com/hanakawa0516"
                    className={footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    花川夢姬
                  </Link>
                </li>
                <li className={footerSubitem}>
                  <Link
                    href="https://twitter.com/nochedioslobo/"
                    className={footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    夜神遂心
                  </Link>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              SHOP
              <ul>
                <li className={footerSubitem}>
                  <Link href="/shop" className={footerLink}>
                    線上商店
                  </Link>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              NEWS
              <ul>
                <li className={footerSubitem}>
                  <Link href="/news?page=1" className={footerLink}>
                    最新消息
                  </Link>
                </li>
              </ul>
            </li>
            <li className={footerItem}>
              RESOURCES
              <ul>
                <li className={footerSubitem}>
                  <Link
                    href="https://vchama.xyz/"
                    className={footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vtuber 統計地圖
                  </Link>
                </li>
                <li className={footerSubitem}>
                  <Link
                    href="https://neptunia.github.io/vtubers-data-science/"
                    className={footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    超級聊天數據分析
                  </Link>
                </li>
                <li className={footerSubitem}>
                  <Link
                    href="https://streamscharts.com/channels?vtuber=all"
                    className={footerLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    StreamChart
                  </Link>
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
        <Link href="/privacy" className={`${footerLink} ${footerLinkSmall}`}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
