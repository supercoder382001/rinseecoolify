import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarP from '../components/navbar-p'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import FAQ3 from '../components/faq3'

const DryClean = (props) => {
  return (
    <>
      <div className="dry-clean-container1">
        <Head>
        <title>DryClean - Rinsee</title>
          <meta property="og:title" content="Refresh Your Wardrobe with Rinsee’s Premium Dry Cleaning Service in Delhi" />
          <meta name="description" content="Experience Rinsee’s premium dry cleaning service in Delhi. We provide convenient doorstep pickup and delivery,your clothes are handled with expert care and presented beautifully. Whether it’s delicate fabrics or daily outfits, our affordable and dependable service ensures your wardrobe stays refreshed and spotless. Enjoy both convenience and quality with Rinsee!"/>
          <meta name="keywords" content="dry cleaning service Delhi, professional dry cleaning near me, best dry cleaners near me, affordable dry cleaning Delhi, best dry cleaning service Delhi, dry cleaning with pickup and delivery, dry cleaners near me, dry cleaners"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <NavbarP
          brandingLogo="/external/logonn.png"
          rootClassName="navbar-proot-class-name5"
        ></NavbarP>
        <section className="dry-clean-section10">
          <div className="dry-clean-hero">
            <div className="dry-clean-content1">
              <main className="dry-clean-main1">
                <header className="dry-clean-header10">
                  <h1 className="dry-clean-heading1">Dry Clean with RINSEE</h1>
                </header>
                <div className="dry-clean-buttons">
                  <a
                    href="https://drive.google.com/file/d/1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="dry-clean-link10"
                  >
                    <div className="dry-clean-get-started1 button">
                      <span className="dry-clean-text10">Download App now</span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="dry-clean-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="dry-clean-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="dry-clean-section11">
          <header className="dry-clean-header11">
            <header className="dry-clean-left">
              <h2 className="section-heading dry-clean-heading2">
                Dry Cleaning with RINSEE
              </h2>
            </header>
            <div className="dry-clean-right">
              <p className="dry-clean-paragraph section-description">
                <span>
                  A fragile silk dress. An opulent velvet coat. A finely crafted
                  cashmere wrap. A classic embroidered skirt. Cherished family
                  treasures. These are more than clothes; they&apos;re stories
                  stitched into cloth. We recognize their
                  significance—you&apos;re entrusting us with not just garments,
                  but your heritage, too.
                </span>
                <br></br>
                <br></br>
              </p>
            </div>
          </header>
        </section>
        <section className="dry-clean-section12">
          <section className="dry-clean-note1">
            <div className="dry-clean-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name32"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; Dry"
                rootClassName="card4root-class-name33"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name34"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name35"
              ></Card4>
            </div>
            <div className="dry-clean-content2">
              <main className="dry-clean-main2">
                <header className="dry-clean-caption1">
                  <span className="dry-clean-section13 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="dry-clean-heading3">
                  <header className="dry-clean-header12">
                    <h2 className="section-heading dry-clean-heading4">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="dry-clean-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/file/d/1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dry-clean-link11"
              >
                <div className="dry-clean-get-started2 button">
                  <span className="dry-clean-text14">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="dry-clean-section14">
          <section className="dry-clean-note2">
            <div className="dry-clean-container2">
              <div className="dry-clean-container3">
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
                    
                        td {
                          padding: 10px;
                          border: 1px solid #ccc;
                          background: #fff; /* Optional: Adds a white background for a cleaner look */
                        }
                        th{
                          color:white;
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
                    
                    <!-- Tab buttons -->
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
                        </table>
                      </div>
                    </div>
                    
                    <script>
                      function openPage(pageName, elmnt, color) {
                        // Hide all elements with class="tabcontent"
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                          tabcontent[i].style.display = "none";
                        }
                    
                        // Remove the background color of all tablinks/buttons
                        tablinks = document.getElementsByClassName("tablink");
                        for (i = 0; i < tablinks.length; i++) {
                          tablinks[i].style.backgroundColor = "";
                        }
                    
                        // Show the specific tab content
                        document.getElementById(pageName).style.display = "block";
                    
                        // Add the specific color to the button used to open the tab content
                        elmnt.style.backgroundColor = color;
                      }
                    
                      // Click on the element with id="defaultOpen" to open the default tab
                      document.getElementById("defaultOpen").click();
                    
                      // Fetch data from JSON file
                      fetch('https://zmvjylvafmgqpxqtrblc.supabase.co/storage/v1/object/public/AppImages/dc.json?t=2024-10-11T14%3A19%3A07.201Z')
                      .then(response => response.json())
                      .then(data => {
                        // Create table rows for each item in the data
                        data.forEach(item => {
                          const table = document.getElementById(\`\${item.category.toLowerCase()}-table\`);
                          const row = table.insertRow(-1);
                          const cell1 = row.insertCell();
                          const cell2 = row.insertCell();
                          const cell3 = row.insertCell();
                    
                          // Create image
                          const image = document.createElement('img');
                          image.src = item.image;
                          image.alt = 'Product Image';
                          cell1.appendChild(image);
                    
                          // Create name
                          const name = document.createElement('div');
                          name.textContent = item.name;
                          cell2.appendChild(name);
                    
                          // Create price
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
            <div className="dry-clean-content3">
              <main className="dry-clean-main3">
                <header className="dry-clean-caption2">
                  <span className="dry-clean-section15 section-head">
                    Dry Clean prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/file/d/1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="dry-clean-link12"
              >
                <div className="dry-clean-get-started3 button">
                  <span className="dry-clean-text15">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section id="faqs" className="dry-clean-section16">
          <header className="dry-clean-header13">
            <span className="section-head">FAQ</span>
            <h2 className="dry-clean-heading5 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="dry-clean-accordion">
            <FAQ3 rootClassName="faq3root-class-name"></FAQ3>
          </main>
        </section>
        <section className="dry-clean-section18">
          <section className="dry-clean-note3">
            <div className="dry-clean-content4">
              <main className="dry-clean-main4">
                <header className="dry-clean-caption3">
                  <span className="dry-clean-section19 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="dry-clean-heading6">
                  <header className="dry-clean-header14">
                    <h2 className="dry-clean-heading7 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="dry-clean-footer">
          <div className="dry-clean-content5">
            <main className="dry-clean-main-content">
              <div className="dry-clean-content6">
                <header className="dry-clean-main5">
                  <div className="dry-clean-header15">
                    <img
                      alt="Dry Clean"
                      src="/external/logo.png"
                      className="dry-clean-branding"
                    />
                    <span className="dry-clean-text16">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="dry-clean-socials">
                    <a
                      href="https://www.linkedin.com/company/rinsee"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="dry-clean-link13"
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
                      className="dry-clean-link14"
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
                      className="dry-clean-link15"
                    >
                      <img
                        alt="image"
                        src="/Icons/facebook.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="dry-clean-categories">
                  <div className="dry-clean-category1">
                    <div className="dry-clean-header16">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="dry-clean-links1">
                      <Link legacyBehavior href="/aboutus">
                        <a className="dry-clean-link16 footer-link">About</a>
                      </Link>
                      <Link legacyBehavior href="/">
                      <a className="dry-clean-text19 footer-link">
                        Home
                      </a>
                      </Link>
                      <a href="#faqs" className="dry-clean-text20 footer-link">
                        FAQs
                      </a>
                      <Link legacyBehavior href="/termsand-conditions">
                        <a className="dry-clean-link17 footer-link">
                          <span>Terms</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="dry-clean-category2">
                    <div className="dry-clean-header17">
                      <span className="footer-header">Services</span>
                    </div>
                    <div className="dry-clean-links2">
                      <Link legacyBehavior href="/wash-fold">
                        <a className="dry-clean-link18 footer-link">
                          Wash &amp; Fold
                        </a>
                      </Link>
                      <Link legacyBehavior href="/wash-iron">
                        <a className="dry-clean-link19 footer-link">
                          Wash &amp; Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/steam-iron">
                        <a className="dry-clean-link20 footer-link">
                          Steam Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/dry-clean">
                        <a className="dry-clean-link21 footer-link">
                          <span>Dry Clean</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="dry-clean-category3">
                    <div className="dry-clean-header18">
                      <span className="footer-header">Get in touch</span>
                    </div>
                    <div className="dry-clean-links3">
                      <span className="footer-link">
                        <span>Email : jatindua2001@gmail.com | deepanshu4kumar@gmail.com</span>
                        <br></br>
                        <span>Contact: 7428160047 | 8527064439</span>
                        <br></br>
                        <span>Address : TRICKERR FINOO PRIVATE LIMITED , 60, Chandu Park, East Delhi, Krishna Nagar, Delhi, India, 110051</span>
                        <br></br>
                        <span>TRICKERR FINOO PRIVATE LIMITED</span>
                      </span>
                    </div>
                  </div>
                  <div className="dry-clean-category4">
                    <div className="dry-clean-header19">
                      <span className="footer-header">About Us</span>
                    </div>
                    <div className="dry-clean-links4">
                      <span className="dry-clean-text38 footer-link">
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
              <section className="dry-clean-copyright1"></section>
            </main>
            <main className="dry-clean-subscribe"></main>
            <section className="dry-clean-copyright2"></section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .dry-clean-container1 {
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
          .dry-clean-section10 {
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
          .dry-clean-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .dry-clean-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .dry-clean-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .dry-clean-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .dry-clean-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .dry-clean-link10 {
            display: contents;
          }
          .dry-clean-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .dry-clean-text10 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .dry-clean-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .dry-clean-section11 {
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
          .dry-clean-header11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-right {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-paragraph {
            width: 100%;
            font-size: 34px;
            max-width: 100%;
            text-align: center;
            line-height: 36px;
          }
          .dry-clean-section12 {
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
          .dry-clean-note1 {
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
          .dry-clean-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .dry-clean-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-section13 {
            color: #ffffff;
            font-size: 35px;
          }
          .dry-clean-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-link11 {
            display: contents;
          }
          .dry-clean-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .dry-clean-text14 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .dry-clean-section14 {
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
          .dry-clean-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .dry-clean-container2 {
            width: 100%;
            height: 531px;
          }
          .dry-clean-container3 {
            display: contents;
          }
          .dry-clean-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-section15 {
            color: #ffffff;
            font-size: 35px;
          }
          .dry-clean-link12 {
            display: contents;
          }
          .dry-clean-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .dry-clean-text15 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .dry-clean-section16 {
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
          .dry-clean-header13 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-heading5 {
            text-align: center;
          }
          .dry-clean-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .dry-clean-section18 {
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
          .dry-clean-note3 {
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
          .dry-clean-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-section19 {
            color: #ffffff;
            font-size: 35px;
          }
          .dry-clean-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-heading7 {
            text-align: center;
          }
          .dry-clean-footer {
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
          .dry-clean-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .dry-clean-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-content6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .dry-clean-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header15 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-branding {
            width: 146px;
            object-fit: cover;
          }
          .dry-clean-text16 {
            color: #ffffff;
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .dry-clean-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .dry-clean-link13 {
            display: contents;
          }
          .dry-clean-link14 {
            display: contents;
          }
          .dry-clean-link15 {
            display: contents;
          }
          .dry-clean-categories {
            gap: var(--dl-space-space-unit);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .dry-clean-category1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-link16 {
            text-decoration: none;
          }
          .dry-clean-text19 {
            text-decoration: none;
          }
          .dry-clean-text20 {
            text-decoration: none;
          }
          .dry-clean-link17 {
            text-decoration: none;
          }
          .dry-clean-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-link18 {
            text-decoration: none;
          }
          .dry-clean-link19 {
            text-decoration: none;
          }
          .dry-clean-link20 {
            text-decoration: none;
          }
          .dry-clean-link21 {
            text-decoration: none;
          }
          .dry-clean-category3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-links3 {
            gap: var(--dl-space-space-unit);
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-category4 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-header19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-text38 {
            text-align: justify;
          }
          .dry-clean-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .dry-clean-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .dry-clean-copyright2 {
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
            .dry-clean-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .dry-clean-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .dry-clean-content1 {
              position: relative;
              align-items: center;
            }
            .dry-clean-main1 {
              align-items: center;
            }
            .dry-clean-heading1 {
              text-align: left;
            }
            .dry-clean-buttons {
              width: 100%;
            }
            .dry-clean-get-started1 {
              flex: 1;
            }
            .dry-clean-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .dry-clean-pasted-image {
              width: 95%;
              height: auto;
            }
            .dry-clean-section11 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .dry-clean-header11 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .dry-clean-section12 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .dry-clean-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .dry-clean-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .dry-clean-section18 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .dry-clean-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .dry-clean-categories {
              gap: 10px;
              flex: 1;
              width: 100%;
              grid-gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
            }
            .dry-clean-category3 {
              width: auto;
            }
            .dry-clean-category4 {
              width: 100%;
              max-width: 1200px;
            }
            .dry-clean-copyright1 {
              display: none;
            }
            .dry-clean-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .dry-clean-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .dry-clean-heading1 {
              font-size: 40px;
            }
            .dry-clean-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .dry-clean-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .dry-clean-left {
              gap: var(--dl-space-space-unit);
            }
            .dry-clean-note1 {
              flex-direction: column-reverse;
            }
            .dry-clean-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .dry-clean-note2 {
              flex-direction: column-reverse;
            }
            .dry-clean-note3 {
              flex-direction: column-reverse;
            }
            .dry-clean-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .dry-clean-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .dry-clean-categories {
              gap: var(--dl-space-space-threeunits);
              flex-wrap: wrap;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .dry-clean-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .dry-clean-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .dry-clean-header10 {
              align-items: flex-start;
            }
            .dry-clean-heading1 {
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
            .dry-clean-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .dry-clean-pasted-image {
              width: 95%;
              height: auto;
            }
            .dry-clean-header11 {
              align-items: center;
              justify-content: center;
            }
            .dry-clean-heading2 {
              text-align: center;
            }
            .dry-clean-paragraph {
              fill: #ffffff;
              color: rgb(255, 255, 255);
              width: 100%;
              font-size: 20px;
              text-align: center;
              line-height: 36px;
            }
            .dry-clean-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .dry-clean-heading4 {
              text-align: center;
            }
            .dry-clean-section14 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .dry-clean-section15 {
              color: #ffffff;
              font-size: 35px;
              text-align: center;
              line-height: 49px;
            }
            .dry-clean-section19 {
              text-align: center;
              line-height: 37px;
            }
            .dry-clean-text16 {
              color: #ffffff;
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .dry-clean-categories {
              flex-direction: column;
            }
            .dry-clean-text38 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default DryClean
