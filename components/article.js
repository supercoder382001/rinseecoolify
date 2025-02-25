import React from 'react'

import PropTypes from 'prop-types'

const Article = (props) => {
  return (
    <>
      <section className={`article-card ${props.rootClassName} `}>
        <main className="article-content">
          <header className="article-header1">
            <h1 className="article-header2">{props.header}</h1>
          </header>
          <p className="article-description">{props.description}</p>
          <div className="article-button">
            <a
              href={props.buttonLink}
              target="_blank"
              rel="noreferrer noopener"
              className="article-link"
            >
              <p className="article-text">{props.button}</p>
            </a>
          </div>
        </main>
      </section>
      <style jsx>
        {`
          .article-card {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #292929;
          }
          .article-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .article-header1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .article-header2 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 36px;
          }
          .article-description {
            color: #c2c6cc;
            font-family: Poppins;
            line-height: 28px;
          }
          .article-button {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .article-button:hover {
            opacity: 0.5;
          }
          .article-link {
            display: contents;
          }
          .article-text {
            color: #80ff44;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }

          @media (max-width: 991px) {
            .article-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  buttonLink: PropTypes.string,
  description: PropTypes.string,
  header: PropTypes.string,
}

export default Article
