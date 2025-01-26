import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarP from '../components/navbar-p'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import FAQ1 from '../components/faq1'

const WashFold = (props) => {
  return (
    <>
      <div className="wash-fold-container1">
        <Head>
        <title>WashFold - Rinsee</title>
          <meta property="og:title" content="Affordable Wash & Fold Laundry Service in Delhi | Rinsee" />
          <meta name="description" content="Are you searching for an affordable wash and fold laundry service in Delhi? Look no further than Rinsee! We provide professional laundry services with convenient doorstep pickup and delivery. Enjoy our fast, same-day service that ensures your clothes come back clean, fresh, and neatly folded. Experience hassle-free laundry solutions with the top service in Delhi."/>
          <meta name="keywords" content="wash and fold laundry service Delhi, laundry service near me, wash and fold near me, doorstep laundry service, wash and fold laundry near me, wash and fold, best laundry service Delhi, same day laundry service, laundry delivery service, fluff and fold laundry near me"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <NavbarP
          imageAlt="/Icons/hamburger-200h.png"
          imageSrc="/Icons/hamburger-200h.png"
          brandingLogo="../external/logonn.png"
          rootClassName="navbarroot-class-name2"
        ></NavbarP>
        <section className="wash-fold-section10">
          <div className="wash-fold-hero">
            <div className="wash-fold-content1">
              <main className="wash-fold-main1">
                <header className="wash-fold-header10">
                  <h1 className="wash-fold-heading1">
                    Wash &amp; Fold Laundry Service
                  </h1>
                </header>
                <div className="wash-fold-buttons">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1P9223aocYRuS_xNc6LUhOL3agtRNbevc"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="wash-fold-link10"
                  >
                    <div className="wash-fold-get-started1 button">
                      <span className="wash-fold-text10">Download App now</span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="wash-fold-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="wash-fold-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="wash-fold-section11">
          <header className="wash-fold-header11">
            <header className="wash-fold-left">
              <h2 className="section-heading wash-fold-heading2">
                Wash &amp; Fold with RINSEE
              </h2>
            </header>
            <div className="wash-fold-right">
              <p className="wash-fold-paragraph section-description">
                You&apos;re managing a laundry load that goes beyond just simple
                fabric—it&apos;s a complex assortment of personal essentials,
                cherished keepsakes, and everyday necessities. Each item in this
                collection demands a unique level of care, attention, and
                meticulous handling. This process is not just about cleaning;
                it’s about preserving memories and ensuring that everything is
                treated with respect.
              </p>
            </div>
          </header>
        </section>
        <section className="wash-fold-section12">
          <section className="wash-fold-note1">
            <div className="wash-fold-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name4"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; Dry"
                rootClassName="card4root-class-name5"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name6"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name7"
              ></Card4>
            </div>
            <div className="wash-fold-content2">
              <main className="wash-fold-main2">
                <header className="wash-fold-caption1">
                  <span className="wash-fold-section13 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="wash-fold-heading3">
                  <header className="wash-fold-header12">
                    <h2 className="section-heading wash-fold-heading4">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="wash-fold-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1P9223aocYRuS_xNc6LUhOL3agtRNbevc"
                target="_blank"
                rel="noreferrer noopener"
                className="wash-fold-link11"
              >
                <div className="wash-fold-get-started2 button">
                  <span className="wash-fold-text11">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="wash-fold-section14">
          <section className="wash-fold-note2">
            <div className="wash-fold-container2">
              <div className="wash-fold-container3">
                <Script
                  html={`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Tabbed Table Example</title>
                      <style>
                        body, html {
                          height: 1000px;
                          margin: 0;
                          font-family: Arial, sans-serif;
                          background-color:inherit;
                        }
                    
                        /* Tab button styles */
                        .tablink {
                          background-color: #555;
                          color: white;
                          float: left;
                          border: none;
                          outline: none;
                          cursor: pointer;
                          padding: 14px 16px;
                          font-size: 14px;
                          width: 25%;
                          text-align: center;
                        }
                    
                        .tablink:hover {
                          background-color: #301cc0;
                        }
                    
                        /* Tab content styles */
                        .tabcontent {
                          display: none;
                          
                          height: calc(100% - 56px); /* Adjust height considering the tab buttons height */
                          box-sizing: border-box; /* Include padding in height calculation */
                          background-color: inherit;
                        }
                    
                        /* Specific styles for tab content backgrounds */
                        #Home { background-color: inherit; }
                        #News { background-color: inherit; }
                        #Contact { background-color: inherit; }
                        #About { background-color: inherit; }
                    
                        /* Container for scrollable table */
                        .table-container {
                          height: 400px; /* Adjust height as needed */
                          overflow-y: auto; /* Enables vertical scrolling */
                          margin-top: 20px; /* Space between the table and tabs */
                           /* Optional: Adds a border around the scrollable area */
                          padding: 10px; /* Optional: Adds padding inside the scrollable area */
                          background-color: inherit; /* Optional: Ensures the background color is white for better visibility */
                        }
                    
                        /* Table styling */
                        table {
                          width: 100%;
                          border-collapse: separate;
                          border-spacing: 0 10px; /* Space between rows */
                          height:100%;
                        }
                        th{
                          color:white;
                        }
                        td {
                          padding: 10px;
                          border: 1px solid #ccc;
                          background: #fff; /* Optional: Adds a white background for a cleaner look */
                        }
                    
                        /* Container for item with image, name, and price */
                        .item-container {
                          display: flex;
                          justify-content: space-between;
                          align-items: center;
                          width: 100%;
                        }
                    
                        /* Left section containing image and name */
                        .left-section {
                          display: flex;
                          gap: 10px;
                          align-items: center;
                        }
                    
                        /* Circle container to display images in a circular shape */
                        .circle-container {
                          width: 50px; 
                          height: 50px;
                          border-radius: 50%;
                          overflow: hidden;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        }
                    
                        .circle-container img {
                          width: 100%;
                          height: 100%;
                          object-fit: cover;
                        }
                    
                        /* Styling for the price section */
                        .price {
                          font-size: 14px;
                          color: #555;
                          margin-left: auto;
                          white-space: nowrap;
                        }
                    
                        /* Set a maximum width for the images */
                        table img {
                          max-width: 50px;
                          height: auto;
                        }
                      </style>
                    </head>
                    <body>
                    
                    <button class="tablink" onclick="openPage('Home', this, '#301cc0')" id="defaultOpen">Men</button>
<button class="tablink" onclick="openPage('News', this, '#301cc0')">Women</button>
<button class="tablink" onclick="openPage('Contact', this, '#301cc0')">Kids</button>
<button class="tablink" onclick="openPage('About', this, '#301cc0')">Household</button>

<!-- Tab content for Home -->
<div id="Home" class="tabcontent">
  <div class="table-container">
    <table id="men-table">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <!-- Rows will be dynamically inserted here -->
    </table>
  </div>
</div>

<!-- Tab content for News -->
<div id="News" class="tabcontent">
  <div class="table-container">
    <table id="women-table">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <!-- Rows will be dynamically inserted here -->
    </table>
  </div>
</div>

<!-- Tab content for Contact -->
<div id="Contact" class="tabcontent">
  <div class="table-container">
    <table id="kids-table">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <!-- Rows will be dynamically inserted here -->
    </table>
  </div>
</div>

<!-- Tab content for About -->
<div id="About" class="tabcontent">
  <div class="table-container">
    <table id="household-table">
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <!-- Rows will be dynamically inserted here -->
    </table>
  </div>
</div>

<script>
  function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }

  document.getElementById("defaultOpen").click();

  fetch('https://zmvjylvafmgqpxqtrblc.supabase.co/storage/v1/object/public/AppImages/steam.json?t=2024-10-11T14%3A02%3A10.268Z')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const table = document.getElementById(\`\${item.category.toLowerCase()}-table\`); // Use the predefined table
        const row = table.insertRow(-1); // Insert a new row
        const cell1 = row.insertCell(0); // Insert image cell
        const cell2 = row.insertCell(1); // Insert name cell
        const cell3 = row.insertCell(2); // Insert price cell

        // Insert image
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = 'Product Image';
        cell1.appendChild(image);

        // Insert name
        const name = document.createElement('div');
        name.textContent = item.name;
        cell2.appendChild(name);

        // Insert price
        const price = document.createElement('div');
        price.textContent = \`₹\${item.price}\`;
        cell3.appendChild(price);
      });
    })
    .catch(error => console.error('Error:', error));
</script>
</body>
</html>
`}
                ></Script>
              </div>
            </div>
            <div className="wash-fold-content3">
              <main className="wash-fold-main3">
                <header className="wash-fold-caption2">
                  <span className="wash-fold-section15 section-head">
                    Wash and fold prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1P9223aocYRuS_xNc6LUhOL3agtRNbevc"
                target="_blank"
                rel="noreferrer noopener"
                className="wash-fold-link12"
              >
                <div className="wash-fold-get-started3 button">
                  <span className="wash-fold-text12">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section id="faq" className="wash-fold-section16">
          <header className="wash-fold-header13">
            <span className="section-head">FAQ</span>
            <h2 className="wash-fold-heading5 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="wash-fold-accordion">
            <FAQ1 rootClassName="faq1root-class-name"></FAQ1>
          </main>
        </section>
        <section className="wash-fold-section18">
          <section className="wash-fold-note3">
            <div className="wash-fold-content4">
              <main className="wash-fold-main4">
                <header className="wash-fold-caption3">
                  <span className="wash-fold-section19 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="wash-fold-heading6">
                  <header className="wash-fold-header14">
                    <h2 className="wash-fold-heading7 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="wash-fold-footer">
          <div className="wash-fold-content5">
            <main className="wash-fold-main-content">
              <div className="wash-fold-content6">
                <header className="wash-fold-main5">
                  <div className="wash-fold-header15">
                    <img
                      alt="Dry Clean"
                      src="/external/logo.png"
                      className="wash-fold-branding"
                    />
                    <span className="wash-fold-text13">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="wash-fold-socials">
                    <a
                      href="https://www.linkedin.com/company/rinsee"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="wash-fold-link13"
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
                      className="wash-fold-link14"
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
                      className="wash-fold-link15"
                    >
                      <img
                        alt="image"
                        src="/Icons/facebook.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="wash-fold-categories">
                  <div className="wash-fold-category1">
                    <div className="wash-fold-header16">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="wash-fold-links1">
                      <Link legacyBehavior href="/aboutus">
                        <a className="wash-fold-link16 footer-link">About</a>
                      </Link>
                      <Link legacyBehavior href="/">
                      <a className="wash-fold-text16 footer-link">
                        Home
                      </a>
                      </Link>
                      <a href="#faq" className="wash-fold-text17 footer-link">
                        FAQs
                      </a>
                      <Link legacyBehavior href="/termsand-conditions">
                        <a className="wash-fold-link17 footer-link">
                          <span>Terms</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="wash-fold-category2">
                    <div className="wash-fold-header17">
                      <span className="footer-header">Services</span>
                    </div>
                    <div className="wash-fold-links2">
                      <Link legacyBehavior href="/wash-fold">
                        <a className="wash-fold-link18 footer-link">
                          Wash &amp; Fold
                        </a>
                      </Link>
                      <Link legacyBehavior href="/wash-iron">
                        <a className="wash-fold-link19 footer-link">
                          Wash &amp; Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/steam-iron">
                        <a className="wash-fold-link20 footer-link">
                          Steam Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/dry-clean">
                        <a className="wash-fold-link21 footer-link">
                          <span>Dry Clean</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="wash-fold-category3">
                    <div className="wash-fold-header18">
                      <span className="footer-header">Get in touch</span>
                    </div>
                    <div className="wash-fold-links3">
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
                  <div className="wash-fold-category4">
                    <div className="wash-fold-header19">
                      <span className="footer-header">About Us</span>
                    </div>
                    <div className="wash-fold-links4">
                      <span className="wash-fold-text35 footer-link">
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
              <section className="wash-fold-copyright1"></section>
            </main>
            <main className="wash-fold-subscribe"></main>
            <section className="wash-fold-copyright2"></section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .wash-fold-container1 {
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
          .wash-fold-section10 {
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
          .wash-fold-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .wash-fold-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .wash-fold-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .wash-fold-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .wash-fold-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .wash-fold-link10 {
            display: contents;
          }
          .wash-fold-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .wash-fold-text10 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .wash-fold-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .wash-fold-section11 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .wash-fold-header11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-right {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-paragraph {
            font-size: 34px;
            max-width: 100%;
            text-align: center;
            line-height: 36px;
          }
          .wash-fold-section12 {
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
          .wash-fold-note1 {
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
          .wash-fold-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-fold-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-section13 {
            color: #ffffff;
            font-size: 35px;
          }
          .wash-fold-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-link11 {
            display: contents;
          }
          .wash-fold-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .wash-fold-text11 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .wash-fold-section14 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 868px;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .wash-fold-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .wash-fold-container2 {
            width: 100%;
            height: 531px;
          }
          .wash-fold-container3 {
            display: contents;
          }
          .wash-fold-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-section15 {
            color: #ffffff;
            font-size: 35px;
          }
          .wash-fold-link12 {
            display: contents;
          }
          .wash-fold-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .wash-fold-text12 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .wash-fold-section16 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .wash-fold-header13 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-heading5 {
            text-align: center;
          }
          .wash-fold-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-fold-section18 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 343px;
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
          .wash-fold-note3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 354px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .wash-fold-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-section19 {
            color: #ffffff;
            font-size: 35px;
          }
          .wash-fold-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-heading7 {
            text-align: center;
          }
          .wash-fold-footer {
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
          .wash-fold-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .wash-fold-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-content6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .wash-fold-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header15 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-branding {
            width: 145px;
            object-fit: cover;
          }
          .wash-fold-text13 {
            color: #ffffff;
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .wash-fold-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .wash-fold-link13 {
            display: contents;
          }
          .wash-fold-link14 {
            display: contents;
          }
          .wash-fold-link15 {
            display: contents;
          }
          .wash-fold-categories {
            gap: var(--dl-space-space-unit);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .wash-fold-category1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-link16 {
            text-decoration: none;
          }
          .wash-fold-text16 {
            text-decoration: none;
          }
          .wash-fold-text17 {
            text-decoration: none;
          }
          .wash-fold-link17 {
            text-decoration: none;
          }
          .wash-fold-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-link18 {
            text-decoration: none;
          }
          .wash-fold-link19 {
            text-decoration: none;
          }
          .wash-fold-link20 {
            text-decoration: none;
          }
          .wash-fold-link21 {
            text-decoration: none;
          }
          .wash-fold-category3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-links3 {
            gap: var(--dl-space-space-unit);
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-category4 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-text35 {
            text-align: justify;
          }
          .wash-fold-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-copyright2 {
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
            .wash-fold-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .wash-fold-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .wash-fold-content1 {
              position: relative;
              align-items: center;
            }
            .wash-fold-main1 {
              align-items: center;
            }
            .wash-fold-heading1 {
              text-align: left;
            }
            .wash-fold-buttons {
              width: 100%;
            }
            .wash-fold-get-started1 {
              flex: 1;
            }
            .wash-fold-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .wash-fold-pasted-image {
              width: 95%;
              height: auto;
            }
            .wash-fold-section11 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-header11 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wash-fold-section12 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .wash-fold-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-section18 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wash-fold-categories {
              gap: 10px;
              flex: 1;
              width: 100%;
              grid-gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
            }
            .wash-fold-category3 {
              width: auto;
            }
            .wash-fold-category4 {
              width: 100%;
              max-width: 1200px;
            }
            .wash-fold-copyright1 {
              display: none;
            }
            .wash-fold-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .wash-fold-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .wash-fold-heading1 {
              font-size: 40px;
            }
            .wash-fold-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .wash-fold-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .wash-fold-left {
              gap: var(--dl-space-space-unit);
            }
            .wash-fold-note1 {
              flex-direction: column-reverse;
            }
            .wash-fold-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .wash-fold-note2 {
              flex-direction: column-reverse;
            }
            .wash-fold-note3 {
              flex-direction: column-reverse;
            }
            .wash-fold-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .wash-fold-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .wash-fold-categories {
              gap: var(--dl-space-space-threeunits);
              flex-wrap: wrap;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .wash-fold-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .wash-fold-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .wash-fold-header10 {
              align-items: flex-start;
            }
            .wash-fold-heading1 {
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
            .wash-fold-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .wash-fold-pasted-image {
              width: 95%;
              height: auto;
            }
            .wash-fold-header11 {
              align-items: center;
              justify-content: center;
            }
            .wash-fold-heading2 {
              text-align: center;
            }
            .wash-fold-paragraph {
              fill: #ffffff;
              color: #ffffff;
              font-size: 20px;
            }
            .wash-fold-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .wash-fold-heading4 {
              text-align: center;
            }
            .wash-fold-container2 {
              width: 95%;
            }
            .wash-fold-section15 {
              text-align: center;
              line-height: 49px;
            }
            .wash-fold-text13 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .wash-fold-categories {
              flex-direction: column;
            }
            .wash-fold-text35 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default WashFold
