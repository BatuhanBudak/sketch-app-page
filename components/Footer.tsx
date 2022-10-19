import React from "react";
import { Diamond } from "./Icon";

export default function Footer() {
  return (
    <footer className="main-footer" id="footer" role="contentinfo">
      <div className="main-footer__footer pad-viewport">
        <div className="wrapper">
          <section className="main-footer__content">
            <nav className="main-footer__nav">
              <div className="main-footer__nav__group">
                <h3 className="main-footer__nav__heading">Product</h3>
                <ul className="main-footer__nav__items">
                  <li>
                    <a className="main-footer__nav__item" href="/design/">
                      Design
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/collaborate/">
                      Collaborate
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/prototype/">
                      Prototype
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/handoff/">
                      Developer Handoff
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/workspaces/">
                      Workspaces
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/apps/">
                      Apps
                    </a>
                    <span className="event-label event-label--footer">3</span>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/extensions/">
                      Extensions
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/updates/">
                      Updates
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/pricing/">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div className="main-footer__nav__group">
                <h3 className="main-footer__nav__heading">
                  Why Sketch
                  <span className="new-label new-label--footer">NEW</span>
                </h3>
                <ul className="main-footer__nav__items">
                  <li>
                    <a className="main-footer__nav__item" href="/vs/figma/">
                      Sketch vs. Figma
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/vs/xd/">
                      Sketch vs. Adobe XD
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/education/">
                      Free for Students
                    </a>
                  </li>
                </ul>
              </div>

              <div className="main-footer__nav__group">
                <h3 className="main-footer__nav__heading">Learn</h3>
                <ul className="main-footer__nav__items">
                  <li>
                    <a className="main-footer__nav__item" href="/blog/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-footer__nav__item"
                      href="/courses/sketch-101/"
                    >
                      Course: Sketch 101
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/docs/">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/community/">
                      Events &amp; Meetups
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/labs/">
                      Research Labs
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-footer__nav__item"
                      href="https://developer.sketch.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Developer Platform
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="main-footer__nav__item__action main-footer__nav__item__action--icon"
                      >
                        <path
                          d="M10.5 8H16v5.5M16 8l-7.5 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="main-footer__nav__group">
                <h3 className="main-footer__nav__heading">Support</h3>
                <ul className="main-footer__nav__items">
                  <li>
                    <a
                      className="main-footer__nav__item"
                      href="https://help.sketch.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Sketch Help
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="main-footer__nav__item__action main-footer__nav__item__action--icon"
                      >
                        <path
                          d="M10.5 8H16v5.5M16 8l-7.5 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-footer__nav__item"
                      href="/support/contact/"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/license/">
                      Manage License
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-footer__nav__item"
                      href="https://status.sketch.com"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      Service Status
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        className="main-footer__nav__item__action main-footer__nav__item__action--icon"
                      >
                        <path
                          d="M10.5 8H16v5.5M16 8l-7.5 7.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="main-footer__nav__group">
                <h3 className="main-footer__nav__heading">Company</h3>
                <ul className="main-footer__nav__items">
                  <li>
                    <a className="main-footer__nav__item" href="/about-us/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/careers/">
                      Careers
                    </a>
                    <span className="event-label event-label--footer">9</span>
                  </li>
                  <li>
                    <a className="main-footer__nav__item" href="/legal/">
                      Terms &amp; Policies
                    </a>
                  </li>
                  <li></li>
                </ul>
              </div>
            </nav>
            <div className="main-footer__sketch">
              <div className="main-footer__logo">
                <a href="" className="main-footer__logo__link">
                  <span className="visuallyhidden">Home</span>
                  <Diamond />
                </a>
              </div>
              <p className="main-footer__notice">© 2022 Sketch B.V.</p>
              <ul className="main-footer__social">
                <li className="main-footer__social__item">
                  <a
                    href="https://twitter.com/sketch"
                    className="main-footer__social__link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Sketch Twitter Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      fill="#000"
                      className="main-footer__social__icon"
                    >
                      <path
                        d="m19.960835 3.9053673c-.7374693.31906496-1.5249365.53642283-2.3540686.63566925.8449648-.50115343 1.4949377-1.29102373 1.8024249-2.23345466-.792467.45522121-1.6707637.78658943-2.6057248.97113857-.7466355-.78658943-1.8107579-1.27872046-2.9923753-1.27872046-2.2640723 0-4.09982917 1.8069411-4.09982917 4.03301379 0 .31988517.03749844.62746706.10582892.92192546-3.40819132-.15830215-6.42889879-1.76921105-8.45048123-4.20443943-.3558185.59219767-.55497687 1.2803609-.55497687 2.0300405 0 1.40257343.72496979 2.63536166 1.82325736 3.3596145-.67247198-.02132568-1.30494562-.20341416-1.85658931-.50525453v.05003332c0 1.95622085 1.41077456 3.58763519 3.28819633 3.95919409-.34415233.0910443-.70747052.1402574-1.079955.1402574-.26165577 0-.51247865-.0246066-.76330153-.0705388.52581142 1.6018865 2.03741511 2.7698775 3.83650681 2.8026862-1.39994167 1.0818681-3.17403441 1.7265597-5.08478813 1.7265597-.32498646 0-.64913962-.018865-.97495938-.0549546 1.82409066 1.1433844 3.97316778 1.8118624 6.29723762 1.8118624 7.54468568 0 11.66534728-6.148357 11.66534728-11.47157431 0-.17142564 0-.34449172-.0124995-.51673758.8008-.56513046 1.4999375-1.27954068 2.0499146-2.08991644z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li className="main-footer__social__item">
                  <a
                    href="https://www.instagram.com/madewithsketch/"
                    className="main-footer__social__link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Sketch Instagram Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      fill="#000"
                      className="main-footer__social__icon"
                    >
                      <path d="m10 1c-2.445 0-2.75025.01125-3.71025.054-.9585.045-1.611.19575-2.18475.4185-.59175.2295-1.09425.53775-1.5945 1.038s-.80925 1.002-1.038 1.5945c-.22275.57375-.37425 1.22625-.4185 2.18475-.045.96-.054 1.26525-.054 3.71025s.01125 2.75025.054 3.71025c.045.95775.19575 1.611.4185 2.18475.2295.591.53775 1.09425 1.038 1.5945.50025.4995 1.002.80925 1.5945 1.038.5745.222 1.227.37425 2.18475.4185.96.045 1.26525.054 3.71025.054s2.75025-.01125 3.71025-.054c.95775-.045 1.611-.1965 2.18475-.4185.591-.2295 1.09425-.5385 1.5945-1.038.4995-.50025.80925-1.00125 1.038-1.5945.222-.57375.37425-1.227.4185-2.18475.045-.96.054-1.26525.054-3.71025s-.01125-2.75025-.054-3.71025c-.045-.95775-.1965-1.61175-.4185-2.18475-.2295-.59175-.5385-1.09425-1.038-1.5945-.50025-.50025-1.00125-.80925-1.5945-1.038-.57375-.22275-1.227-.37425-2.18475-.4185-.96-.045-1.26525-.054-3.71025-.054zm3.6375 1.67325c.8775.04125 1.35375.18675 1.67025.31125.4215.16275.72.35775 1.0365.672.31425.315.50925.61425.672 1.03575.123.3165.27.79275.30975 1.67025.04275.9495.0525 1.2345.0525 3.6375s-.01125 2.68875-.0555 3.6375c-.04575.8775-.192 1.35375-.31575 1.67025-.168.4215-.35925.72-.67425 1.0365-.31425.31425-.618.50925-1.035.672-.315.123-.79875.27-1.67625.30975-.9555.04275-1.23675.0525-3.64425.0525-2.40825 0-2.6895-.01125-3.64425-.0555-.87825-.04575-1.362-.192-1.677-.31575-.42675-.168-.72-.35925-1.03425-.67425-.31575-.31425-.5175-.618-.675-1.035-.12375-.315-.26925-.79875-.315-1.67625-.03375-.945-.04575-1.23675-.04575-3.633 0-2.397.012-2.6895.04575-3.64575.04575-.8775.19125-1.3605.315-1.6755.1575-.4275.35925-.72.675-1.03575.31425-.31425.6075-.51675 1.03425-.6735.315-.1245.78825-.27075 1.66575-.31575.95625-.03375 1.2375-.045 3.64425-.045l.03375.0225c2.40225 0 2.68875.012 3.6375.05325zm-3.6375 2.70525c-2.55375 0-4.6215 2.07-4.6215 4.6215 0 2.55375 2.07 4.6215 4.6215 4.6215 2.55375 0 4.6215-2.07 4.6215-4.6215 0-2.55375-2.07-4.6215-4.6215-4.6215zm0 7.6215c-1.6575 0-3-1.3425-3-3s1.3425-3 3-3 3 1.3425 3 3-1.3425 3-3 3zm5.8845-7.80375c0 .59625-.4845 1.08-1.08 1.08-.59625 0-1.08-.4845-1.08-1.08s.4845-1.07925087 1.08-1.07925087c.59475-.00074913 1.08.48375087 1.08 1.07925087z"></path>
                    </svg>
                  </a>
                </li>

                <li className="main-footer__social__item">
                  <a
                    href="https://dribbble.com/sketch"
                    className="main-footer__social__link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Sketch Dribbble Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      fill="#000"
                      className="main-footer__social__icon"
                    >
                      <path d="m10 19c-4.96125 0-9-4.03875-9-9s4.03875-9 9-9 9 4.03875 9 9-4.03875 9-9 9zm7.59-7.7685c-.2625-.0825-2.3775-.71475-4.788-.3285 1.005 2.763 1.41525 5.013 1.494 5.481 1.725-1.16625 2.952-3.015 3.29625-5.1525zm-4.58625 5.856c-.11475-.675-.5625-3.024-1.6425-5.8275l-.0495.015c-4.3425 1.51125-5.895 4.51875-6.03 4.8 1.2975 1.0185 2.94 1.6245 4.7175 1.6245 1.065 0 2.0775-.2175 3-.6105zm-8.715-1.935c.174-.3 2.28375-3.79125 6.249-5.07375.10125-.03375.2025-.063.30375-.09-.195-.43875-.405-.87525-.624-1.305-3.84 1.1475-7.563 1.09875-7.9005 1.09125l-.003.234c0 1.97475.7485 3.77775 1.9755 5.14125zm-1.815-6.71625c.345.006 3.51225.0195 7.10775-.936-1.2735-2.2635-2.6475-4.1685-2.85-4.446-2.151 1.0125-3.7575 2.9925-4.257 5.3775zm5.72625-5.89725c.2115.285 1.60875 2.1855 2.8665 4.5 2.73375-1.02375 3.8925-2.58 4.02975-2.7765-1.3575-1.2075-3.1425-1.9395-5.09625-1.9395-.61875 0-1.2225.075-1.8.21375zm7.75125 2.61225c-.1635.2175-1.45125 1.86975-4.293 3.03.18.3675.3525.73875.51 1.1145.06.135.1125.27.165.3975 2.5575-.3225 5.1.195 5.355.2475-.015-1.815-.66-3.48-1.7325-4.785z"></path>
                    </svg>
                  </a>
                </li>

                <li className="main-footer__social__item">
                  <a
                    href="https://www.youtube.com/c/SketchDesign/"
                    className="main-footer__social__link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="Sketch YouTube Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 20 20"
                      width="20"
                      fill="#000"
                      className="main-footer__social__icon"
                    >
                      <path
                        d="m19.5824595 5.16176628c-.2357598-.84611328-.8958725-1.50728401-1.740632-1.74342164-1.5588993-.41833284-7.8328439-.41833284-7.8328439-.41833284s-6.25810547-.00833788-7.83284389.41833284c-.84475941.23613763-1.5048722.89730836-1.74063198 1.74342164-.2955068 1.5985628-.44119306 3.22129109-.43533806 4.84701272-.0047141 1.6195871.14096739 3.2361126.43533806 4.8286434.23575978.8461133.89587257 1.507284 1.74063198 1.7434216 1.55723206.419156 7.83284389.419156 7.83284389.419156s6.2572719 0 7.8328439-.419156c.8447595-.2361376 1.5048722-.8973083 1.740632-1.7434216.2882207-1.5931077.427762-3.2096284.416818-4.8286434.0120848-1.62514733-.1274611-3.24787094-.416818-4.84701272zm-11.57586956 7.84539742v-6.005954l5.22189596 3.0075693z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
