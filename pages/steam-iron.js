import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarP from '../components/navbar-p'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import FAQ2 from '../components/faq2'

const SteamIron = (props) => {
  return (
    <>
      <div className="steam-iron-container1">
        <Head>
          <title>SteamIron - Rinsee</title>
          <meta property="og:title" content="Expert Steam Ironing Service in Delhi | Rinsee - Wrinkle-Free Clothes with Fast Deliver" />
          <meta name="description" content="Rinsee offers expert steam ironing services in Delhi to give your clothes a flawless, wrinkle-free finish. Our professionals use advanced steam technology for a crisp and polished look. Enjoy convenient pickup and delivery right at your doorstep, making laundry care effortless and stress-free."/>
          <meta name="keywords" content="Steam iron service Delhi, Professional clothes ironing, Steam ironing in Delhi, Wrinkle-free clothes ironing, Rinsee ironing service, Laundry steam iron service, Ironing service with delivery"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <NavbarP
          brandingLogo="/external/logonn.png"
          rootClassName="navbar-proot-class-name1"
        ></NavbarP>
        <section className="steam-iron-section10">
          <div className="steam-iron-hero">
            <div className="steam-iron-content1">
              <main className="steam-iron-main1">
                <header className="steam-iron-header10">
                  <h1 className="steam-iron-heading1">
                    Steam Iron Laundry Service
                  </h1>
                </header>
                <div className="steam-iron-buttons">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1WwKp39lP3ReCJvZ73QM--KWwrjIIJ6-L"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="steam-iron-link10"
                  >
                    <div className="steam-iron-get-started1 button">
                      <span className="steam-iron-text10">
                        Download App now
                      </span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="steam-iron-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="steam-iron-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="steam-iron-section11">
          <header className="steam-iron-header11">
            <header className="steam-iron-left">
              <h2 className="section-heading steam-iron-heading2">
                Steam Iron with RINSEE
              </h2>
            </header>
            <div className="steam-iron-right">
              <p className="steam-iron-paragraph section-description">
                A creased jacket. A rumpled blanket. A folded serviette. A
                bunched-up drape. A crinkled handkerchief. If this heap seems
                all too common, don&apos;t let the creases prevail—take a break
                and allow the vapor to work wonders
              </p>
            </div>
          </header>
        </section>
        <section className="steam-iron-section12">
          <section className="steam-iron-note1">
            <div className="steam-iron-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name28"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; Dry"
                rootClassName="card4root-class-name29"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name30"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name31"
              ></Card4>
            </div>
            <div className="steam-iron-content2">
              <main className="steam-iron-main2">
                <header className="steam-iron-caption1">
                  <span className="steam-iron-section13 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="steam-iron-heading3">
                  <header className="steam-iron-header12">
                    <h2 className="section-heading steam-iron-heading4">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="steam-iron-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1WwKp39lP3ReCJvZ73QM--KWwrjIIJ6-L"
                target="_blank"
                rel="noreferrer noopener"
                className="steam-iron-link11"
              >
                <div className="steam-iron-get-started2 button">
                  <span className="steam-iron-text11">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="steam-iron-section14">
          <section className="steam-iron-note2">
            <div className="steam-iron-container2">
              <div className="steam-iron-container3">
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
      background-color:rgb(255, 255, 255);
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
  fetch('https://zmvjylvafmgqpxqtrblc.supabase.co/storage/v1/object/public/AppImages/steam.json?t=2024-10-11T14%3A02%3A10.268Z')
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
            <div className="steam-iron-content3">
              <main className="steam-iron-main3">
                <header className="steam-iron-caption2">
                  <span className="steam-iron-section15 section-head">
                    Steam Iron Prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1WwKp39lP3ReCJvZ73QM--KWwrjIIJ6-L"
                target="_blank"
                rel="noreferrer noopener"
                className="steam-iron-link12"
              >
                <div className="steam-iron-get-started3 button">
                  <span className="steam-iron-text12">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section id="faq" className="steam-iron-section16">
          <header className="steam-iron-header13">
            <span className="section-head">FAQ</span>
            <h2 className="steam-iron-heading5 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="steam-iron-accordion">
            <FAQ2 rootClassName="faq2root-class-name"></FAQ2>
          </main>
        </section>
        <section className="steam-iron-section18">
          <section className="steam-iron-note3">
            <div className="steam-iron-content4">
              <main className="steam-iron-main4">
                <header className="steam-iron-caption3">
                  <span className="steam-iron-section19 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="steam-iron-heading6">
                  <header className="steam-iron-header14">
                    <h2 className="steam-iron-heading7 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="steam-iron-footer">
          <div className="steam-iron-content5">
            <main className="steam-iron-main-content">
              <div className="steam-iron-content6">
                <header className="steam-iron-main5">
                  <div className="steam-iron-header15">
                    <img
                      alt="Dry Clean"
                      src="/external/logo.png"
                      className="steam-iron-branding"
                    />
                    <span className="steam-iron-text13">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="steam-iron-socials">
                    <a
                      href="https://www.linkedin.com/company/rinsee"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="steam-iron-link13"
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
                      className="steam-iron-link14"
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
                      className="steam-iron-link15"
                    >
                      <img
                        alt="image"
                        src="/Icons/facebook.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="steam-iron-categories">
                  <div className="steam-iron-category1">
                    <div className="steam-iron-header16">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="steam-iron-links1">
                      <Link legacyBehavior href="/aboutus">
                        <a className="steam-iron-link16 footer-link">About</a>
                      </Link>
                      <Link legacyBehavior href="/">
                      <a className="steam-iron-text16 footer-link">
                        Home
                      </a>
                      </Link>
                      <a href="#faq" className="steam-iron-text17 footer-link">
                        FAQs
                      </a>
                      <Link legacyBehavior href="/termsand-conditions">
                        <a className="steam-iron-link17 footer-link">
                          <span>Terms</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="steam-iron-category2">
                    <div className="steam-iron-header17">
                      <span className="footer-header">Services</span>
                    </div>
                    <div className="steam-iron-links2">
                      <Link legacyBehavior href="/wash-fold">
                        <a className="steam-iron-link18 footer-link">
                          Wash &amp; Fold
                        </a>
                      </Link>
                      <Link legacyBehavior href="/wash-iron">
                        <a className="steam-iron-link19 footer-link">
                          Wash &amp; Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/steam-iron">
                        <a className="steam-iron-link20 footer-link">
                          Steam Iron
                        </a>
                      </Link>
                      <Link legacyBehavior href="/dry-clean">
                        <a className="steam-iron-link21 footer-link">
                          <span>Dry Clean</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="steam-iron-category3">
                    <div className="steam-iron-header18">
                      <span className="footer-header">Get in touch</span>
                    </div>
                    <div className="steam-iron-links3">
                      <span className="footer-link">
                      <span>Address : TRICKERR FINOO PRIVATE LIMITED , 60, Chandu Park, East Delhi, Krishna Nagar, Delhi, India, 110051</span>
                      <br></br>
                        <span>Email : jatindua2001@gmail.com | deepanshu4kumar@gmail.com </span>
                        <br></br>
                        <span>Contact: 7428160047 | 8527064439</span>
                        <br></br>
                        <span>TRICKERR FINOO PRIVATE LIMITED</span>
                      </span>
                    </div>
                  </div>
                  <div className="steam-iron-category4">
                    <div className="steam-iron-header19">
                      <span className="footer-header">About Us</span>
                    </div>
                    <div className="steam-iron-links4">
                      <span className="steam-iron-text35 footer-link">
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
              <section className="steam-iron-copyright1"></section>
            </main>
            <main className="steam-iron-subscribe"></main>
            <section className="steam-iron-copyright2"></section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .steam-iron-container1 {
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
          .steam-iron-section10 {
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
          .steam-iron-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .steam-iron-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .steam-iron-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steam-iron-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .steam-iron-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .steam-iron-link10 {
            display: contents;
          }
          .steam-iron-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .steam-iron-text10 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .steam-iron-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .steam-iron-section11 {
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
          .steam-iron-header11 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-right {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-paragraph {
            font-size: 34px;
            max-width: 100%;
            text-align: center;
            line-height: 36px;
          }
          .steam-iron-section12 {
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
          .steam-iron-note1 {
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
          .steam-iron-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steam-iron-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-section13 {
            color: #301cc0;
            font-size: 35px;
          }
          .steam-iron-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-link11 {
            display: contents;
          }
          .steam-iron-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .steam-iron-text11 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .steam-iron-section14 {
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
          .steam-iron-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .steam-iron-container2 {
            width: 100%;
            height: 531px;
          }
          .steam-iron-container3 {
            display: contents;
          }
          .steam-iron-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-section15 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .steam-iron-link12 {
            display: contents;
          }
          .steam-iron-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #301cc0;
          }
          .steam-iron-text12 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .steam-iron-section16 {
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
          .steam-iron-header13 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-heading5 {
            text-align: center;
          }
          .steam-iron-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steam-iron-section18 {
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
          .steam-iron-note3 {
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
          .steam-iron-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-section19 {
            color: #ffffff;
            font-size: 35px;
          }
          .steam-iron-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-heading7 {
            text-align: center;
          }
          .steam-iron-footer {
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
          .steam-iron-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .steam-iron-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-content6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .steam-iron-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header15 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-branding {
            width: 145px;
            object-fit: cover;
          }
          .steam-iron-text13 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .steam-iron-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .steam-iron-link13 {
            display: contents;
          }
          .steam-iron-link14 {
            display: contents;
          }
          .steam-iron-link15 {
            display: contents;
          }
          .steam-iron-categories {
            gap: var(--dl-space-space-unit);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .steam-iron-category1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-link16 {
            text-decoration: none;
          }
          .steam-iron-text16 {
            text-decoration: none;
          }
          .steam-iron-text17 {
            text-decoration: none;
          }
          .steam-iron-link17 {
            text-decoration: none;
          }
          .steam-iron-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-link18 {
            text-decoration: none;
          }
          .steam-iron-link19 {
            text-decoration: none;
          }
          .steam-iron-link20 {
            text-decoration: none;
          }
          .steam-iron-link21 {
            text-decoration: none;
          }
          .steam-iron-category3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-links3 {
            gap: var(--dl-space-space-unit);
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-category4 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-text35 {
            text-align: justify;
          }
          .steam-iron-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-copyright2 {
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
            .steam-iron-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .steam-iron-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .steam-iron-content1 {
              position: relative;
              align-items: center;
            }
            .steam-iron-main1 {
              align-items: center;
            }
            .steam-iron-heading1 {
              text-align: left;
            }
            .steam-iron-buttons {
              width: 100%;
            }
            .steam-iron-get-started1 {
              flex: 1;
            }
            .steam-iron-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .steam-iron-pasted-image {
              width: 95%;
              height: auto;
            }
            .steam-iron-section11 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-header11 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .steam-iron-section12 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .steam-iron-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-section18 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .steam-iron-categories {
              gap: 10px;
              flex: 1;
              width: 100%;
              grid-gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
            }
            .steam-iron-category3 {
              width: auto;
            }
            .steam-iron-category4 {
              width: 100%;
              max-width: 1200px;
            }
            .steam-iron-copyright1 {
              display: none;
            }
            .steam-iron-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .steam-iron-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steam-iron-heading1 {
              font-size: 40px;
            }
            .steam-iron-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .steam-iron-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .steam-iron-left {
              gap: var(--dl-space-space-unit);
            }
            .steam-iron-note1 {
              flex-direction: column-reverse;
            }
            .steam-iron-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .steam-iron-note2 {
              flex-direction: column-reverse;
            }
            .steam-iron-note3 {
              flex-direction: column-reverse;
            }
            .steam-iron-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .steam-iron-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .steam-iron-categories {
              gap: var(--dl-space-space-threeunits);
              flex-wrap: wrap;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .steam-iron-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .steam-iron-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .steam-iron-header10 {
              align-items: flex-start;
            }
            .steam-iron-heading1 {
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
            .steam-iron-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .steam-iron-pasted-image {
              width: 95%;
              height: auto;
            }
            .steam-iron-header11 {
              align-items: center;
              justify-content: center;
            }
            .steam-iron-heading2 {
              text-align: center;
            }
            .steam-iron-paragraph {
              fill: #ffffff;
              color: rgb(255, 255, 255);
              font-size: 20px;
              line-height: 36px;
            }
            .steam-iron-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .steam-iron-heading4 {
              text-align: center;
            }
            .steam-iron-section14 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .steam-iron-section15 {
              color: #ffffff;
              font-size: 35px;
              text-align: center;
              line-height: 49px;
            }
            .steam-iron-section19 {
              text-align: center;
              line-height: 37px;
            }
            .steam-iron-text13 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .steam-iron-categories {
              flex-direction: column;
            }
            .steam-iron-text35 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default SteamIron
