import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <header className={`navbar-navbar ${props.rootClassName} `}>
        <img
          alt="Rinsee"
          src={props.brandingLogo}
          srcmobile={props.brandlogo}
          className="navbar-branding-logo"
        />
        <div className="navbar-nav-content">
          <div className="navbar-container1">
            <div className="navbar-nav-links1">
              <a href="#features" className="navbar-link10 nav-link">
                Features
              </a>
              <a href="#WhyUs" className="navbar-link11 nav-link">
                Why us
              </a>
              <Link legacyBehavior href="/prices">
                <a className="navbar-link13 nav-link">Prices</a>
              </Link>
              <span className="nav-link">Contact</span>
              <div
                data-thq="thq-dropdown"
                className="navbar-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle10"
                >
                  <span className="navbar-text10">
                    <span className="navbar-text11">Services</span>
                    <br></br>
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="navbar-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navbar-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown1 list-item"
                  >
                    <Link legacyBehavior href="/wash-fold">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-dropdown-toggle11"
                        >
                          <span className="navbar-text13">Wash &amp; Fold</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown2 list-item"
                  >
                    <Link legacyBehavior href="/wash-iron">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-dropdown-toggle12"
                        >
                          <span className="navbar-text14">Wash &amp; Iron</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown3 list-item"
                  >
                    <Link legacyBehavior href="/dry-clean">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-dropdown-toggle13"
                        >
                          <span className="navbar-text15">Dry Cleaning</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown4 list-item"
                  >
                    <Link legacyBehavior href="/steam-iron">
                      <a>
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="navbar-dropdown-toggle14"
                        >
                          <span className="navbar-text16">Steam Iron</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="get-started navbar-get-started1">
            <a href="https://drive.google.com/uc?export=download&id=1WwKp39lP3ReCJvZ73QM--KWwrjIIJ6-L" className="navbar-text17">Get started</a>
          </div>
          <div id="open-mobile-menu" className="navbar-hamburger get-started">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image1"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img
              alt="Rinsee"
              src={props.brandlogo}
              className="navbar-image2"
            />
            <div id="close-mobile-menu" className="navbar-container2">
              <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links2">
            <a href="#features" className="navbar-link19 nav-link">
              Features
            </a>
            <a href="#WhyUs" className="navbar-link20 nav-link">
              Why us
            </a>
            <Link legacyBehavior href="/prices">
              <a className="navbar-link22 nav-link">Prices</a>
            </Link>
            <div
              data-thq="thq-dropdown"
              className="navbar-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="navbar-dropdown-toggle15"
              >
                <span className="navbar-text18">
                  <span>Services</span>
                  <br></br>
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="navbar-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="navbar-icon5">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="navbar-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown5 list-item"
                >
                  <Link legacyBehavior href="/wash-fold">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle16"
                      >
                        <span className="navbar-text21">Wash &amp; Fold</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown6 list-item"
                >
                  <Link legacyBehavior href="/wash-iron">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle17"
                      >
                        <span className="navbar-text22">Wash &amp; Iron</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown7 list-item"
                >
                  <Link legacyBehavior href="/dry-clean">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle18"
                      >
                        <span className="navbar-text23">Dry Cleaning</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="navbar-dropdown8 list-item"
                >
                  <Link legacyBehavior href="/steam-iron">
                    <a>
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle19"
                      >
                        <span className="navbar-text24">Steam Iron</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <Link legacyBehavior href="/aboutus">
              <a className="navbar-link22 nav-link">Contact</a>
          </Link>

          </div>
          <div className="get-started">
            <a href="https://drive.google.com/uc?export=download&id=1WwKp39lP3ReCJvZ73QM--KWwrjIIJ6-L" className="navbar-text25">Get started</a>
          </div>
        </div>
        <div>
          <div className="navbar-container4">
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
          .navbar-navbar {
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
          .navbar-branding-logo {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-medium);
            box-sizing: inherit;
            object-fit: contain;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-nav-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            border-color: transparent;
          }
          .navbar-link10 {
            text-decoration: none;
          }
          .navbar-link11 {
            text-decoration: none;
          }
          .navbar-link13 {
            text-decoration: none;
          }
          .navbar-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle10 {
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
          .navbar-text10 {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-text11 {
            color: #ffffff;
          }
          .navbar-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navbar-icon1 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-dropdown-list1 {
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
          .navbar-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle11 {
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
          .navbar-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text13 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle12 {
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
          .navbar-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text14 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle13 {
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
          .navbar-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text15 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle14 {
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
          .navbar-dropdown-toggle14:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text16 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-text17 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-hamburger {
            display: none;
          }
          .navbar-image1 {
            width: 100px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
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
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image2 {
            width: 172px;
            // filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon3 {
            width: 24px;
            height: 24px;
          }
          .navbar-nav-links2 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-link19 {
            text-decoration: none;
          }
          .navbar-link20 {
            text-decoration: none;
          }
          .navbar-link22 {
            text-decoration: none;
          }
          .navbar-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle15 {
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
          .navbar-text18 {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navbar-icon5 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-dropdown-list2 {
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
          .navbar-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle16 {
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
          .navbar-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text21 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown6 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle17 {
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
          .navbar-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text22 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown7 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle18 {
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
          .navbar-dropdown-toggle18:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text23 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-dropdown8 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle19 {
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
          .navbar-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-text24 {
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .navbar-text25 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-container4 {
            display: contents;
          }
          .navbarroot-class-name {
            width: 95%;
          }
          .navbarroot-class-name1 {
            width: 95%;
          }
          .navbarroot-class-name4 {
            width: 95%;
          }
          .navbarroot-class-name5 {
            width: 95%;
          }
          @media (max-width: 991px) {
            .navbar-branding-logo {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-medium);
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .navbar-branding-logo {
              width: var(--dl-size-size-xlarge);
            }
            .navbar-nav-links1 {
              display: none;
            }
            .navbar-get-started1 {
              display: none;
            }
            .navbar-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-image1 {
              width: 16px;
              height: 14px;
            }
            .navbar-mobile-menu {
              z-index: 100;
            }
            .navbar-branding {
              width: 100%;
            }
            .navbar-nav-links2 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              width: 95%;
              height: 107px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-image2 {
              width: 172px;
              height: var(--dl-size-size-medium);
            }
            .navbar-text18 {
              color: #101010;
            }
            .navbar-icon5 {
              fill: #080808;
            }
            .navbarroot-class-name {
              height: auto;
            }
            .navbarroot-class-name1 {
              height: auto;
            }
            .navbarroot-class-name4 {
              height: auto;
            }
            .navbarroot-class-name5 {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar
