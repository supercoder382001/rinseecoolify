import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const NavbarP = (props) => {
  return (
    <>
      <header className={`navbar-p-navbar ${props.rootClassName} `}>
        <img
          alt="Rinsee"
          src={props.brandingLogo}
          className="navbar-p-branding-logo"
        />
        <div className="navbar-p-nav-content">
          <div className="navbar-p-container1">
            <div className="navbar-p-nav-links1">
              <Link legacyBehavior href="/">
                <a className="navbar-p-link11 nav-link">Home</a>
              </Link>
              <Link legacyBehavior href="/prices">
                <a className="navbar-p-link13 nav-link">Prices</a>
              </Link>
              <Link legacyBehavior href="/aboutus">
                <a className="navbar-p-link15 nav-link">Contact</a>
              </Link>
              <div
                data-thq="thq-dropdown"
                className="navbar-p-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-p-dropdown-toggle10"
                >
                  <span className="navbar-p-text10">
                    <span className="navbar-p-text11">Services</span>
                    <br></br>
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navbar-p-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="navbar-p-icon1">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navbar-p-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-p-dropdown1 list-item"
                  >
                    <Link legacyBehavior href="/wash-fold">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-p-dropdown-toggle11"
                        >
                          <span className="navbar-p-text13">
                            Wash &amp; Fold
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-p-dropdown2 list-item"
                  >
                    <Link legacyBehavior href="/wash-iron">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-p-dropdown-toggle12"
                        >
                          <span className="navbar-p-text14">
                            Wash &amp; Iron
                          </span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-p-dropdown3 list-item"
                  >
                    <Link legacyBehavior href="/dry-clean">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-p-dropdown-toggle13"
                        >
                          <span className="navbar-p-text15">Dry Cleaning</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-p-dropdown4 list-item"
                  >
                    <Link legacyBehavior href="/steam-iron">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-p-dropdown-toggle14"
                        >
                          <span className="navbar-p-text16">Steam Iron</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="get-started navbar-p-get-started1">
            <span className="navbar-p-text17">Get started</span>
          </div>
          <div id="open-mobile-menu" className="navbar-p-hamburger get-started">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-p-image1"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-p-mobile-menu">
          <div className="navbar-p-branding">
            <img
              alt="Rinsee"
              src={props.brandingLogo}
              className="navbar-p-image2"
            />
            <div id="close-mobile-menu" className="navbar-p-container2">
              <svg viewBox="0 0 1024 1024" className="navbar-p-icon3">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-p-nav-links2">
            <Link legacyBehavior href="/">
              <a className="navbar-p-link21 nav-link">Home</a>
            </Link>
            <Link legacyBehavior href="/prices">
              <a className="navbar-p-link23 nav-link">Prices</a>
            </Link>
            <Link legacyBehavior href="/aboutus">
              <a className="navbar-p-link25 nav-link">About Us</a>
            </Link>
            <div
              data-thq="thq-dropdown"
              className="navbar-p-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-p-dropdown-toggle15"
              >
                <span className="navbar-p-text18">
                  <span>Services</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-p-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-p-icon5">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="navbar-p-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="navbar-p-dropdown5 list-item"
                >
                  <Link legacyBehavior href="/wash-fold">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-p-dropdown-toggle16"
                      >
                        <span className="navbar-p-text21">Wash &amp; Fold</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-p-dropdown6 list-item"
                >
                  <Link legacyBehavior href="/wash-iron">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-p-dropdown-toggle17"
                      >
                        <span className="navbar-p-text22">Wash &amp; Iron</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-p-dropdown7 list-item"
                >
                  <Link legacyBehavior href="/dry-clean">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-p-dropdown-toggle18"
                      >
                        <span className="navbar-p-text23">Dry Cleaning</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-p-dropdown8 list-item"
                >
                  <Link legacyBehavior href="/steam-iron">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-p-dropdown-toggle19"
                      >
                        <span className="navbar-p-text24">Steam Iron</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="get-started">
            <span className="navbar-p-text25">Get started</span>
          </div>
        </div>
        <div>
          <div className="navbar-p-container4">
          <Script
  html={`<script defer>
    (() => {
        const listenForUrlChangesMobileMenu = () => {
            let url = location.href;
            document.body.addEventListener("click", () => {
                requestAnimationFrame(() => {
                    if (url !== location.href) {
                        runMobileMenuCodeEmbed();
                        url = location.href;
                    }
                });
            }, true);
        };

        const runMobileMenuCodeEmbed = () => {
            // Mobile menu
            const mobileMenu = document.querySelector("#mobile-menu");

            // Buttons
            const closeButton = document.querySelector("#close-mobile-menu");
            const openButton = document.querySelector("#open-mobile-menu");

            // On openButton click, set the mobileMenu position left to -100vw
            openButton && openButton.addEventListener("click", function() {
                mobileMenu.style.transform = "translateX(0%)";
            });

            // On closeButton click, set the mobileMenu position to 0vw
            closeButton && closeButton.addEventListener("click", function() {
                mobileMenu.style.transform = "translateX(100%)";
            });
        };

        // Initialize
        runMobileMenuCodeEmbed();
        listenForUrlChangesMobileMenu();
    })();
  </script>`}
>
</Script>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navbar-p-navbar {
            width: 85%;
            display: flex;
            opacity: 0.95;
            z-index: 1000;
            position: relative;
            max-width: 1200px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            padding-top: 13px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 19px;
            background-color: #6d6767;
          }
          .navbar-p-branding-logo {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-medium);
            box-sizing: inherit;
            object-fit: contain;
          }
          .navbar-p-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-p-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-p-nav-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            border-color: transparent;
          }
          .navbar-p-link11 {
            text-decoration: none;
          }
          .navbar-p-link13 {
            text-decoration: none;
          }
          .navbar-p-link15 {
            text-decoration: none;
          }
          .navbar-p-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle10 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .navbar-p-text10 {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-text11 {
            color: #ffffff;
          }
          .navbar-p-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navbar-p-icon1 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-p-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-p-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle11 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text13 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle12 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text14 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle13 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text15 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle14 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text16 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-text17 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-p-hamburger {
            display: none;
          }
          .navbar-p-image1 {
            width: 100px;
            object-fit: cover;
          }
          .navbar-p-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-p-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-p-image2 {
            width: 100px;
            // filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-p-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-p-icon3 {
            width: 24px;
            height: 24px;
          }
          .navbar-p-nav-links2 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-p-link21 {
            text-decoration: none;
          }
          .navbar-p-link23 {
            text-decoration: none;
          }
          .navbar-p-link25 {
            text-decoration: none;
          }
          .navbar-p-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle15 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: 0px;
            padding-bottom: 0px;
          }
          .navbar-p-text18 {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navbar-p-icon5 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-p-dropdown-list2 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .navbar-p-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle16 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text21 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown6 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle17 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text22 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown7 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle18 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle18:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text23 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-dropdown8 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-p-dropdown-toggle19 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navbar-p-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-p-text24 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-p-text25 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-p-container4 {
            display: contents;
          }
          .navbar-proot-class-name {
            width: 90%;
          }
          .navbar-proot-class-name1 {
            width: 90%;
          }
          .navbar-proot-class-name2 {
            width: 90%;
          }
          .navbar-proot-class-name3 {
            width: 90%;
          }
          .navbar-proot-class-name4 {
            width: 90%;
          }
          .navbar-proot-class-name5 {
            width: 90%;
          }
          .navbar-proot-class-name6 {
            width: 90%;
          }
          @media (max-width: 991px) {
            .navbar-p-branding-logo {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-medium);
            }
            .navbar-p-nav-content {
              gap: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .navbar-p-navbar {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .navbar-p-branding-logo {
              width: var(--dl-size-size-xlarge);
            }
            .navbar-p-nav-links1 {
              display: none;
            }
            .navbar-p-dropdown-list1 {
              display: none;
            }
            .navbar-p-get-started1 {
              display: none;
            }
            .navbar-p-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-p-image1 {
              width: 16px;
              height: 14px;
            }
            .navbar-p-mobile-menu {
              z-index: 100;
            }
            .navbar-p-branding {
              width: 100%;
            }
            .navbar-p-nav-links2 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
            .navbar-p-link21 {
              text-decoration: none;
            }
            .navbar-p-dropdown-list2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar-p-navbar {
              width: 95%;
              height: 107px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-p-image2 {
              width: 80px;
              height: var(--dl-size-size-medium);
            }
            .navbar-p-text18 {
              color: #101010;
            }
            .navbar-p-icon5 {
              fill: #080808;
            }
          }
        `}
      </style>
    </>
  )
}

NavbarP.propTypes = {
  brandingLogo1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default NavbarP
