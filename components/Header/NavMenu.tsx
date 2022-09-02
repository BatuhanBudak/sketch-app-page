import React from "react";

export default function NavMenu() {
  return (
    <div className="nav__menu">
      <ul className="nav__menu__list" role="list">
        <li className="nav__menu__list__item">
          <button className="nav__menu__list__item__button has-content">
            Product
          </button>
          <ul className="nav__menu__list__item__sub-list">
            <li className="nav__menu__list__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__sub-list__item__link"
              ></a>
              Design
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
          <ul className="nav__menu__list nav__menu__list--last">
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
        </li>
        <li className="nav__menu__list__item">
          <button className="nav__menu__list__item__button has-content">
            Learn
          </button>
          <ul className="nav__menu__list__item__item__sub-list">
            <li className="nav__menu__list__item__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__item__sub-list__item__link"
              >
                Blog
              </a>
            </li>
            <li className="nav__menu__list__item__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__item__sub-list__item__link"
              >
                Course: Sketch 101
                <span>NEW</span>
              </a>
            </li>
            <li className="nav__menu__list__item__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__item__sub-list__item__link"
              >
                Documentation
              </a>
            </li>
            <li className="nav__menu__list__item__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__item__sub-list__item__link"
              >
                Events {"&"}Meetups
                <span>1</span>
              </a>
            </li>
            <ul className="nav__menu__list nav__menu__list--last">
              <li className="nav__menu__list__item__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__item__sub-list__item__link"
                ></a>
                Newsletter
              </li>
              <li className="nav__menu__list__item__item__sub-list__item">
                <a
                  href=""
                  className="nav__menu__list__item__item__sub-list__item__link"
                ></a>
                Research Labs
              </li>
            </ul>
          </ul>
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
        <li className="nav__menu__list__item nav__menu__list__item__last-item has-content">
          <button>Support</button>
          <ul className="nav__menu__list__item__sub-list">
            <li className="nav__menu__list__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__sub-list__item__link has-arrow"
              >
                Sketch Help
              </a>
            </li>
            <li className="nav__menu__list__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__sub-list__item__link"
              >
                Contact Us
                <span>NEW</span>
              </a>
            </li>
            <li className="nav__menu__list__item__sub-list__item">
              <a
                href=""
                className="nav__menu__list__item__sub-list__item__link has-arrow"
              >
                Service Status
              </a>
            </li>
          </ul>
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
