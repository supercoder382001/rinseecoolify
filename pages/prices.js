import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarP from '../components/navbar-p'
import Card4 from '../components/card4'
import Mark from '../components/mark'

const Prices = (props) => {
  return (
    <>
      <div className="prices-container1">
        <Head>
          <title>Prices - Rinsee</title>
          <meta property="og:title" content="Prices - Rinsee" />
        </Head>
        <NavbarP
          brandingLogo="/external/logonn.png"
          rootClassName="navbar-proot-class-name"
        ></NavbarP>
        <section className="prices-section1">
          <div className="prices-hero">
            <div className="prices-content1">
              <main className="prices-main1">
                <header className="prices-header1">
                  <h1 className="prices-heading1">
                    Laundry at Affordable Prices
                  </h1>
                </header>
                <div className="prices-buttons">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1tXrUBEa1us9V7rst5HiFdcKh_nGkHXeg"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="prices-link10"
                  >
                    <div className="prices-get-started1 button">
                      <span className="prices-text10">Download App now</span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="prices-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="prices-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="prices-section2">
          <section className="prices-note1">
            <div className="prices-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name36"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; Dry"
                rootClassName="card4root-class-name37"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name38"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name39"
              ></Card4>
            </div>
            <div className="prices-content2">
              <main className="prices-main2">
                <header className="prices-caption1">
                  <span className="prices-section3 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="prices-heading2">
                  <header className="prices-header2">
                    <h2 className="section-heading prices-heading3">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="prices-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1tXrUBEa1us9V7rst5HiFdcKh_nGkHXeg"
                target="_blank"
                rel="noreferrer noopener"
                className="prices-link11"
              >
                <div className="prices-get-started2 button">
                  <span className="prices-text11">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="prices-section4">
          <section className="prices-note2">
            <div className="prices-container2">
              <div className="prices-container3">
                <Script
                  html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Tabs with Product Table</title>
    <style>
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Tabs with Product Table</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
          display: flex;
          max-height: 90vh; /* Limit the height of the background */
          overflow: hidden; /* Prevent overflow */
          background-color: inherit; /* Background color */
      }

      .main-tabs {
          flex-direction: column;
          width: 20%;
          border-right: 1px solid #ddd;
          padding: 10px;
      }

      .main-tab {
          background-color: white; /* Default tab color */
          border: none;
          padding: 10px;
          cursor: pointer;
          text-align: left;
          width: 100%;
          color: black; /* Default text color */
      }

      .main-tab.active {
          background-color: #301cc0; /* Active tab color */
          color: white; /* Active text color */
      }

      .sub-container {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          padding: 10px;
      }

      .sub-tabs {
          display: flex;
          background-color: #f4f4f4; /* Sub tab background color */
          border-bottom: 1px solid #ddd;
          padding: 5px 0;
      }

      .sub-tab {
          background-color: white; /* Default sub-tab color */
          border: none;
          padding: 10px;
          cursor: pointer;
          margin-right: 10px;
          color: black; /* Default text color */
      }

      .sub-tab.active {
          background-color: #301cc0; /* Sub tab active color */
          color: white; /* Active text color */
      }

      .content {
          padding: 10px;
          border: 1px solid #ddd;
          flex-grow: 1; /* Allow content to grow */
          background-color: white; /* Content background color */
      }

      .content-item {
          display: none;
      }

      .content-item.active {
          display: block; /* Show active content item */
      }

      .table-container {
          margin-top: 10px;
          max-height: 300px; /* Set the maximum height for the table */
          overflow-y: auto; /* Enable vertical scrolling */
          border: 1px solid #ddd; /* Optional border for table container */
      }

      table {
          width: 100%;
          border-collapse: collapse;
          background-color: white; /* Table background color */
      }

      th, td {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: left;
      }

      th {
          background-color: #f4f4f4; /* Header background color */
      }

      img {
          width: 50px; /* Set a fixed width for images */
          height: auto; /* Maintain aspect ratio */
      }    
    </style>
</head>
<body>
    <div class="container">
        <div class="main-tabs">
            <button class="main-tab active" onclick="showMainSection('Wash & Fold')">Wash & Fold</button>
            <button class="main-tab" onclick="showMainSection('Wash & Iron')">Wash & Iron</button>
            <button class="main-tab" onclick="showMainSection('Steam Iron')">Steam Iron</button>
            <button class="main-tab" onclick="showMainSection('Dry Cleaning')">Dry Cleaning</button>
        </div>
        <div class="sub-container">
            <div class="sub-tabs">
                <button class="sub-tab active" onclick="showSubContent('Men')">Men</button>
                <button class="sub-tab" onclick="showSubContent('Women')">Women</button>
                <button class="sub-tab" onclick="showSubContent('Kids')">Kids</button>
                <button class="sub-tab" onclick="showSubContent('Household')">Household</button>
            </div>
            <div class="content">
                <div id="Men" class="content-item active">
                    <h3>Men's Products</h3>
                    <div class="table-container">
                        <table id="itemTableMen">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic content will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="Women" class="content-item">
                    <h3>Women's Products</h3>
                    <div class="table-container">
                        <table id="itemTableWomen">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic content will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="Kids" class="content-item">
                    <h3>Kids' Products</h3>
                    <div class="table-container">
                        <table id="itemTableKids">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic content will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="Household" class="content-item">
                    <h3>Household Products</h3>
                    <div class="table-container">
                        <table id="itemTableHousehold">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Dynamic content will be inserted here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const categories = ["Men", "Women", "Kids", "Household"];
        const types = ["Wash & Fold", "Wash & Iron", "Steam Iron", "Dry Cleaning"];

        let currentMainSection = 'Wash & Fold'; // Variable to track current main section

        // Function to show the selected main section
        function showMainSection(section) {
            currentMainSection = section; // Update current main section
            const mainTabs = document.querySelectorAll('.main-tab');
            mainTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active'); // Set clicked tab as active

            // Automatically show the first sub-content (Men)
            showSubContent('Men');
        }

        // Function to show the selected sub-section content
        function showSubContent(subSection) {
            const contentItems = document.querySelectorAll('.content-item');
            contentItems.forEach(item => {
                item.classList.remove('active');
            });
            document.getElementById(subSection).classList.add('active');

            // Set the active sub-tab
            const subTabs = document.querySelectorAll('.sub-tab');
            subTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            const activeTab = Array.from(subTabs).find(tab => tab.textContent === subSection);
            if (activeTab) {
                activeTab.classList.add('active');
            }

            // Populate the corresponding table based on the main section and sub-section
            populateTable(currentMainSection, subSection);
        }

        function populateTable(mainSection, subSection) {
            const tables = {
                Men: document.querySelector('#itemTableMen tbody'),
                Women: document.querySelector('#itemTableWomen tbody'),
                Kids: document.querySelector('#itemTableKids tbody'),
                Household: document.querySelector('#itemTableHousehold tbody')
            };

            // Clear previous table data
            Object.values(tables).forEach(tbody => {
                tbody.innerHTML = '';
            });

            // Fetch data from JSON link (replace with your actual JSON URL)
            const jsonUrl = 'https://zmvjylvafmgqpxqtrblc.supabase.co/storage/v1/object/public/profileimage/all.json?t=2024-10-11T17%3A01%3A45.565Z'; // Replace with your actual JSON URL

            fetch(jsonUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Fetched data:', data); // Debugging line
                    data.forEach(item => {
                        // Check if item type and category match
                        if (types.includes(item.type) && categories.includes(item.category)) {
                            // If the item's type and category match the current selections, add it to the table
                            if (item.type === mainSection && item.category === subSection) {
                                const tbody = tables[subSection];
                                // Create a new row for the item
                                const row = document.createElement('tr');
                                row.innerHTML = \`
                                    <td><img src="\${item.image}" alt="\${item.name}"></td>
                                    <td>\${item.name}</td>
                                    <td>\${item.price}</td>
                                \`;
                                tbody.appendChild(row);
                            }
                        }
                    });
                })
                .catch(error => console.error('Error fetching JSON data:', error));
        }

        document.addEventListener("DOMContentLoaded", function() {
            // Show Men's Products in Wash & Fold by default
            showMainSection('Wash & Fold');
            showSubContent('Men');
        });
    </script>
</body>
</html>
`}
                ></Script>
              </div>
            </div>
            <div className="prices-content3">
              <main className="prices-main3">
                <header className="prices-caption2">
                  <span className="prices-section5 section-head">
                    Affordable Prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1tXrUBEa1us9V7rst5HiFdcKh_nGkHXeg"
                target="_blank"
                rel="noreferrer noopener"
                className="prices-link12"
              >
                <div className="prices-get-started3 button">
                  <span className="prices-text12">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="prices-section6">
          <section className="prices-note3">
            <div className="prices-content4">
              <main className="prices-main4">
                <header className="prices-caption3">
                  <span className="prices-section7 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="prices-heading4">
                  <header className="prices-header3">
                    <h2 className="prices-heading5 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="prices-footer">
          <div className="prices-content5">
            <main className="prices-main-content">
              <div className="prices-content6">
                <header className="prices-main5">
                  <div className="prices-header4">
                    <img
                      alt="Dry Clean"
                      src="/external/logo.png"
                      className="prices-branding"
                    />
                    <span className="prices-text13">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="prices-socials">
                    <a
                      href="https://www.linkedin.com/company/rinsee"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="prices-link13"
                    >
                      <img
                        alt="image"
                        src="/Icons/linkedin-200h.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/rinsee.in/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="prices-link14"
                    >
                      <img
                        alt="image"
                        src="/Icons/instagram-200h.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61567156468003"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="prices-link15"
                    >
                      <img
                        alt="image"
                        src="/Icons/facebook.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="prices-categories">
                  <div className="prices-category1">
                    <div className="prices-header5">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="prices-links1">
                      <Link legacyBehavior href="/aboutus">
                      <span className="footer-link">About</span>
                      </Link>
                      <Link legacyBehavior href="/">
                      <a className="prices-text16 footer-link">
                        Home
                      </a>
                      </Link>
                      <Link legacyBehavior href="/termsand-conditions">
                        <a className="prices-link16 footer-link">
                          <span>Terms</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="prices-category2">
                    <div className="prices-header6">
                      <span className="footer-header">Services</span>
                    </div>
                    <div className="prices-links2">
                      <Link legacyBehavior href="/wash-fold">
                        <a className="prices-link17 footer-link">
                          Wash &amp; Fold
                        </a>
                      </Link>
                      <Link legacyBehavior href="/wash-iron">
                        <a className="prices-link18 footer-link">
                          Wash &amp; Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/steam-iron">
                        <a className="prices-link19 footer-link">Steam Iron</a>
                      </Link>
                      <Link legacyBehavior href="/dry-clean">
                        <a className="prices-link20 footer-link">
                          <span>Dry Clean</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="prices-category3">
                    <div className="prices-header7">
                      <span className="footer-header">Get in touch</span>
                    </div>
                    <div className="prices-links3">
                      <span className="footer-link">
                      <span>Address : TRICKERR FINOO PRIVATE LIMITED , 60, Chandu Park, East Delhi, Krishna Nagar, Delhi, India, 110051</span>
                      <br></br>
                        <span>Email : jatindua2001@gmail.com | deepanshu4kumar@gmail.com</span>
                        <br></br>
                        <span>Contact: 7428160047 | 8527064439</span>
                        <br></br>
                        <span>TRICKERR FINOO PRIVATE LIMITED</span>
                      </span>
                    </div>
                  </div>
                  <div className="prices-category4">
                    <div className="prices-header8">
                      <span className="footer-header">About Us</span>
                    </div>
                    <div className="prices-links4">
                      <span className="prices-text35 footer-link">
                        <span>
                          We at Rinsee are dedicated to saving time, effort, and
                          precious resources for all our delighted customers who
                          seek the best laundry service. With exciting ideas
                          that have been spinning in our heads, we are thrilled
                          to introduce you to our compelling and innovative
                          services, including the convenient wash and fold
                          laundry service near me, designed to meet your needs
                          effortlessly.
                        </span>
                        <span>Readmore</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="prices-copyright1"></section>
            </main>
            <main className="prices-subscribe"></main>
            <section className="prices-copyright2"></section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .prices-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .prices-section1 {
            width: 100%;
            height: 105%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .prices-hero {
            width: 100%;
            display: flex;
            max-width: 1100px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .prices-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .prices-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .prices-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .prices-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .prices-link10 {
            display: contents;
          }
          .prices-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .prices-text10 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .prices-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .prices-section2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .prices-note1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .prices-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .prices-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-section3 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .prices-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-link11 {
            display: contents;
          }
          .prices-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .prices-text11 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .prices-section4 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 868px;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .prices-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .prices-container2 {
            width: 100%;
            height: 600px;
          }
          .prices-container3 {
            display: contents;
          }
          .prices-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-section5 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .prices-link12 {
            display: contents;
          }
          .prices-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .prices-text12 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .prices-section6 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .prices-note3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .prices-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-section7 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .prices-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-heading5 {
            text-align: center;
          }
          .prices-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .prices-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .prices-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-content6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .prices-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header4 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-branding {
            width: 146px;
            object-fit: cover;
          }
          .prices-text13 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .prices-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .prices-link13 {
            display: contents;
          }
          .prices-link14 {
            display: contents;
          }
          .prices-link15 {
            display: contents;
          }
          .prices-categories {
            gap: 34px;
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .prices-category1 {
            gap: var(--dl-space-space-unit);
            width: fit-content;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-text16 {
            text-decoration: none;
          }
          .prices-text17 {
            text-decoration: none;
          }
          .prices-link16 {
            text-decoration: none;
          }
          .prices-category2 {
            gap: var(--dl-space-space-unit);
            width: fit-content;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-link17 {
            text-decoration: none;
          }
          .prices-link18 {
            text-decoration: none;
          }
          .prices-link19 {
            text-decoration: none;
          }
          .prices-link20 {
            text-decoration: none;
          }
          .prices-category3 {
            gap: var(--dl-space-space-unit);
            width: fit-content;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links3 {
            gap: var(--dl-space-space-unit);
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-category4 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            max-width: 350px;
          }
          .prices-header8 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-text35 {
            text-align: justify;
          }
          .prices-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .prices-section1 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .prices-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .prices-content1 {
              position: relative;
              align-items: center;
            }
            .prices-main1 {
              align-items: center;
            }
            .prices-heading1 {
              text-align: left;
            }
            .prices-buttons {
              width: 100%;
            }
            .prices-get-started1 {
              flex: 1;
            }
            .prices-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .prices-pasted-image {
              width: 95%;
              height: auto;
            }
            .prices-section2 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .prices-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .prices-section4 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .prices-section6 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .prices-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .prices-categories {
              gap: 10px;
              flex: 1;
              width: 100%;
              grid-gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
            }
            .prices-category3 {
              width: 100%;
            }
            .prices-category4 {
              width: 100%;
              max-width: 1200px;
            }
            .prices-copyright1 {
              display: none;
            }
            .prices-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .prices-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .prices-heading1 {
              font-size: 40px;
            }
            .prices-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .prices-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .prices-note1 {
              flex-direction: column-reverse;
            }
            .prices-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .prices-note2 {
              flex-direction: column-reverse;
            }
            .prices-note3 {
              flex-direction: column-reverse;
            }
            .prices-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .prices-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .prices-categories {
              gap: var(--dl-space-space-threeunits);
              flex-wrap: wrap;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .prices-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .prices-section1 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .prices-header1 {
              align-items: flex-start;
            }
            .prices-heading1 {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 50px;
              max-width: 100%;
              align-self: flex-start;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 600;
            }
            .prices-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .prices-pasted-image {
              width: 95%;
              height: auto;
            }
            .prices-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .prices-heading3 {
              text-align: center;
            }
            .prices-section4 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .prices-section5 {
              color: rgb(198, 255, 75);
              font-size: 35px;
              text-align: center;
              line-height: 49px;
            }
            .prices-section7 {
              text-align: center;
              line-height: 36px;
            }
            .prices-text13 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .prices-categories {
              flex-direction: column;
            }
            .prices-text35 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default Prices
