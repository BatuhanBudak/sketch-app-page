import useToggle from "../../hooks/useToggle";
import { ArrowTopRight } from "../Icon";

export default function NavDrawer({ drawerOpen }) {
  const [productToggled, toggleProduct, closeProductList] = useToggle();
  const [learnToggled, toggleLearn, closeLearnList] = useToggle();
  const [supportToggled, toggleSupport, closeSupportList] = useToggle();

  function closeAllSubLists() {
    closeProductList();
    closeLearnList();
    closeSupportList();
  }

  return (
    <div className="nav__drawer" aria-expanded={!drawerOpen}>
      <ul className="nav__drawer__list" id="mobile-nav">
        <li className="nav__drawer__list__item">
          <button
            className={`nav__drawer__list__item__btn  has-arrow ${
              productToggled ? "rotate" : ""
            }`}
            onClick={() => {
              closeAllSubLists();
              toggleProduct();
            }}
          >
            Product
          </button>
          {productToggled && (
            <ul className="nav__drawer__list__item__sub-list">
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Design
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Collaborate
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Prototype
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Developer Handoff
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Workspaces
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Extensions
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Updates
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav__drawer__list__item">
          <button
            className={`nav__drawer__list__item__btn  has-arrow ${
              learnToggled ? "rotate" : ""
            }`}
            onClick={() => {
              closeAllSubLists();
              toggleLearn();
            }}
          >
            Learn
          </button>
          {learnToggled && (
            <ul className="nav__drawer__list__item__sub-list">
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Blog
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Course: Sketch 101
                  <span className="new-label" aria-hidden={true}>
                    NEW
                  </span>
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Documentation
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Events {"&"}Meetups
                  <span className="event-label" aria-hidden={true}>
                    1
                  </span>
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Newsletter
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Research Labs
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            Apps
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <a className="nav__drawer__list__item__link" href="">
            Pricing
          </a>
        </li>
        <li className="nav__drawer__list__item">
          <button
            className={`nav__drawer__list__item__btn  has-arrow ${
              supportToggled ? "rotate" : ""
            }`}
            onClick={() => {
              closeAllSubLists();
              toggleSupport();
            }}
          >
            Support
          </button>
          {supportToggled && (
            <ul className="nav__drawer__list__item__sub-list">
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Sketch Help
                  <ArrowTopRight />
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link has-arrow"
                >
                  Service Status
                  <ArrowTopRight />
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="nav__drawer__link__container">
        <a className="nav__drawer__link button" href="">
          Get started for free
        </a>
      </div>
    </div>
  );
}
