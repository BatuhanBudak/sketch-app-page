import { ArrowTopRight } from "../Icon";

export default function NavMenu() {
  return (
    <div className="nav__menu">
      <ul className="nav__menu__list" role="navigation">
        <li className="nav__menu__list__item has-content">
          <button className="nav__menu__list__item__button has-arrow">
            Product
          </button>
          <div className="nav__menu__list__item__sub-list-container">
            <ul className="nav__menu__list__item__sub-list">
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Design
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Collaborate
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Prototype
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Developer Handoff
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Workspaces
                </a>
              </li>
            </ul>
            <ul className="nav__menu__list__item__sub-list nav__menu__sub-list--last">
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Extensions
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Updates
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav__menu__list__item has-content">
          <button className="nav__menu__list__item__button has-arrow">
            Learn
          </button>
          <div className="nav__menu__list__item__sub-list-container">
            <ul className="nav__menu__list__item__sub-list">
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Blog
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Course: Sketch 101
                  <span className="new-label" aria-hidden={true}>
                    NEW
                  </span>
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Documentation
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Events {"&"}Meetups
                  <span className="event-label" aria-hidden={true}>
                    1
                  </span>
                </a>
              </li>
            </ul>
            <ul className="nav__menu__list__item__sub-list nav__menu__sub-list--last">
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Newsletter
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  {" "}
                  Research Labs
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav__menu__list__item">
          <a href="" className="nav__menu__list__item__link">
            Apps
          </a>
        </li>
        <li className="nav__menu__list__item">
          <a className="nav__menu__list__item__link" href="">
            Pricing
          </a>
        </li>
        <li className="nav__menu__list__item nav__menu__list__item--last-item has-content ">
          <button className="nav__menu__list__item__button has-arrow">
            Support
          </button>
          <div className="nav__menu__list__item__sub-list-container">
            <ul className="nav__menu__list__item__sub-list">
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Sketch Help
                  <ArrowTopRight />
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav__menu__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__sub-list__item__link"
                >
                  Service Status
                  <ArrowTopRight />
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div className="nav__menu__auth">
        <a className="nav__menu__auth__link" href="">
          Sign In
        </a>
        <a className="nav__menu__auth__link button" href="">
          Get started for free
        </a>
      </div>
    </div>
  );
}
