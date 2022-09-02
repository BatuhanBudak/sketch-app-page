import React, { useRef, useState } from "react";
import useToggle from "../../hooks/useToggle";

export default function NavDrawer({ drawerOpen }) {
  const [productToggled, toggleProduct] = useToggle();
  const [learnToggled, toggleLearn] = useToggle();
  const [supportToggled, toggleSupport] = useToggle();

  return (
    <div className="nav__drawer" aria-expanded={!drawerOpen}>
      <ul className="nav__drawer__list" id="mobile-nav">
        <li className="nav__drawer__list__item">
          <button
            className={`nav__drawer__list__item__btn  has-arrow ${
              productToggled ? "rotate" : ""
            }`}
            onClick={toggleProduct}
          >
            Product
          </button>
          {productToggled && (
            <ul className="nav__drawer__list__item__sub-list">
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                ></a>
                Design
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
            onClick={toggleLearn}
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
                  <span>NEW</span>
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
                  <span>1</span>
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                ></a>
                Newsletter
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                ></a>
                Research Labs
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
            onClick={toggleSupport}
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
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link"
                >
                  Contact Us
                  <span>NEW</span>
                </a>
              </li>
              <li className="nav__drawer__list__item__sub-list__item">
                <a
                  href=""
                  className="nav__drawer__list__item__sub-list__item__link has-arrow"
                >
                  Service Status
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
