import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Pricing10 = (props) => {
  return (
    <>
      <div className="pricing10-pricing23 thq-section-padding">
        <div className="pricing10-max-width thq-section-max-width">
          <div className="pricing10-section-title">
            <div className="pricing10-content1">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="pricing10-text67 thq-heading-2">
                      Choose the Perfect Plan for You
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.subtitle1 ?? (
                  <Fragment>
                    <p className="pricing10-text50 thq-body-large">
                      <span>
                        Select a subscription plan that fits your laundry needs
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="pricing10-content3">
            <div className="pricing10-container10"></div>
            <div className="pricing10-column1">
              <div className="pricing10-price1">
                <div className="pricing10-price2">
                  <p>
                    {props.plan1 ?? (
                      <Fragment>
                        <p className="pricing10-text63 thq-body-large">
                          Basic Plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan1Price ?? (
                      <Fragment>
                        <h3 className="pricing10-text55 thq-heading-3">
                          $19.99/month
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan1Yearly ?? (
                      <Fragment>
                        <p className="pricing10-text42 thq-body-large">
                          $199.99/year
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <button className="pricing10-button1 thq-button-outline thq-button-animated">
                <span>
                  {props.plan1Action ?? (
                    <Fragment>
                      <span className="pricing10-text49 thq-body-small">
                        Sign Up Now
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing10-column2">
              <div className="pricing10-price3">
                <div className="pricing10-price4">
                  <p>
                    {props.plan2 ?? (
                      <Fragment>
                        <p className="pricing10-text46 thq-body-large">
                          Premium Plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan2Price ?? (
                      <Fragment>
                        <h3 className="pricing10-text45 thq-heading-3">
                          $29.99/month
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan2Yearly ?? (
                      <Fragment>
                        <p className="pricing10-text44 thq-body-large">
                          $299.99/year
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <button className="pricing10-button2 thq-button-filled thq-button-animated">
                <span>
                  {props.plan2Action ?? (
                    <Fragment>
                      <span className="pricing10-text74 thq-body-small">
                        Sign Up Now
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing10-column3">
              <div className="pricing10-price5">
                <div className="pricing10-price6">
                  <p>
                    {props.plan3 ?? (
                      <Fragment>
                        <p className="pricing10-text71 thq-body-large">
                          Ultimate Plan
                        </p>
                      </Fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan3Price ?? (
                      <Fragment>
                        <h3 className="pricing10-text56 thq-heading-3">
                          $39.99/month
                        </h3>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan3Yearly ?? (
                      <Fragment>
                        <p className="pricing10-text57 thq-body-large">
                          $399.99/year
                        </p>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <button className="pricing10-button3 thq-button-filled thq-button-animated">
                <span>
                  {props.plan1Action11 ?? (
                    <Fragment>
                      <span className="pricing10-text53 thq-body-small">
                        Cancel Anytime
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="pricing10-container11">
            <div className="pricing10-content21">
              <h3>
                {props.featureCategory1 ?? (
                  <Fragment>
                    <h3 className="pricing10-text72 thq-heading-3">
                      Basic Plan Features
                    </h3>
                  </Fragment>
                )}
              </h3>
            </div>
            <div className="pricing10-container12">
              <div className="pricing10-container13">
                <span>
                  {props.feature1 ?? (
                    <Fragment>
                      <span className="pricing10-text75 thq-body-small">
                        Free Home Pickup and Delivery
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container14">
                <span>
                  {props.count1 ?? (
                    <Fragment>
                      <span className="pricing10-text66 thq-body-small">
                        30+
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container15">
                <span>
                  {props.count2 ?? (
                    <Fragment>
                      <span className="pricing10-text60 thq-body-small">
                        Yes
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container16">
                <span>
                  {props.count3 ?? (
                    <Fragment>
                      <span className="pricing10-text48 thq-body-small">
                        Yes
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container17">
              <div className="pricing10-container18">
                <span>
                  {props.feature2 ?? (
                    <Fragment>
                      <span className="pricing10-text61 thq-body-small">
                        Standard Wash and Fold Service
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container19">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container20">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container21">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
            <div className="pricing10-container22">
              <div className="pricing10-container23">
                <span>
                  {props.feature3 ?? (
                    <Fragment>
                      <span className="pricing10-text70 thq-body-small">
                        48-Hour Turnaround Time
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container24">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container25">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container26">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
            <div className="pricing10-container27">
              <div className="pricing10-container28">
                <span>
                  {props.feature4 ?? (
                    <Fragment>
                      <span className="pricing10-text73 thq-body-small">
                        Express Delivery Service
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container29">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="pricing10-container30">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container31">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
            <div className="pricing10-container32">
              <div className="pricing10-container33">
                <span>
                  {props.feature5 ?? (
                    <Fragment>
                      <span className="pricing10-text64 thq-body-small">
                        Dry Cleaning Included
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container34">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="pricing10-container35">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="pricing10-container36">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="pricing10-container37">
            <div className="pricing10-content22">
              <h3>
                {props.featureCategory2 ?? (
                  <Fragment>
                    <h3 className="pricing10-text69 thq-heading-3">
                      Premium Plan Features
                    </h3>
                  </Fragment>
                )}
              </h3>
            </div>
            <div className="pricing10-container38">
              <div className="pricing10-container39">
                <span>
                  {props.feature6 ?? (
                    <Fragment>
                      <span className="pricing10-text62 thq-body-small">
                        24-Hour Turnaround Time
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container40">
                <span>
                  {props.count4 ?? (
                    <Fragment>
                      <span className="pricing10-text68 thq-body-small">
                        20
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container41">
                <span>
                  {props.count5 ?? (
                    <Fragment>
                      <span className="pricing10-text65 thq-body-small">
                        100
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container42">
                <span>
                  {props.count6 ?? (
                    <Fragment>
                      <span className="pricing10-text54 thq-body-small">
                        Unlimited
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="pricing10-container43">
              <div className="pricing10-container44">
                <span>
                  {props.feature7 ?? (
                    <Fragment>
                      <span className="pricing10-text47 thq-body-small">
                        Professional Garment Care
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container45">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container46">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container47">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
            <div className="pricing10-container48">
              <div className="pricing10-container49">
                <span>
                  {props.feature8 ?? (
                    <Fragment>
                      <span className="pricing10-text58 thq-body-small">
                        Personalized Laundry Preferences
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container50">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container51">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container52">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
            <div className="pricing10-container53">
              <div className="pricing10-container54">
                <span>
                  {props.feature9 ?? (
                    <Fragment>
                      <span className="pricing10-text59 thq-body-small">
                        Feature description goes here.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container55">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="pricing10-container56">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
              <div className="pricing10-container57">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
            <div className="pricing10-container58">
              <div className="pricing10-container59">
                <span>
                  {props.feature10 ?? (
                    <Fragment>
                      <span className="pricing10-text43 thq-body-small">
                        Feature description goes here.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="pricing10-container60">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="pricing10-container61">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
              <div className="pricing10-container62">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pricing10-pricing23 {
            gap: 0;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing10-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-shrink: 0;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .pricing10-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-content3 {
            gap: 0;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
          }
          .pricing10-container10 {
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing10-column1 {
            gap: var(--dl-space-space-twounits);
            width: 20%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            border-top-width: 0px;
          }
          .pricing10-price1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-price2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-button1 {
            width: 100%;
          }
          .pricing10-column2 {
            gap: var(--dl-space-space-twounits);
            width: 20%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
            border-top-width: 0px;
          }
          .pricing10-price3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-price4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-button2 {
            width: 100%;
          }
          .pricing10-column3 {
            gap: var(--dl-space-space-twounits);
            width: 20%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
            border-top-width: 0px;
          }
          .pricing10-price5 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-price6 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-button3 {
            width: 100%;
          }
          .pricing10-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-content21 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing10-container12 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container13 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container14 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container15 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container16 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container17 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container18 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container19 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container20 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container21 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container23 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container24 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container25 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container26 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container27 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container28 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container29 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container30 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container31 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container32 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container33 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container34 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container35 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container36 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container37 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing10-content22 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing10-container38 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container39 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container40 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container41 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container42 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container43 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container44 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container45 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container46 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container47 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container48 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container49 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container50 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container51 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container52 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container53 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container54 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container55 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container56 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container57 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container58 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: row;
          }
          .pricing10-container59 {
            flex: 0 0 auto;
            width: 25%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .pricing10-container60 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container61 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-container62 {
            flex: 1;
            width: 20%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-theme-neutral-dark);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            border-bottom-width: 0px;
          }
          .pricing10-text42 {
            display: inline-block;
            text-align: center;
          }
          .pricing10-text43 {
            display: inline-block;
          }
          .pricing10-text44 {
            display: inline-block;
            text-align: center;
          }
          .pricing10-text45 {
            display: inline-block;
            font-size: 48px;
            text-align: center;
          }
          .pricing10-text46 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing10-text47 {
            display: inline-block;
          }
          .pricing10-text48 {
            height: auto;
            display: inline-block;
            align-self: center;
          }
          .pricing10-text49 {
            display: inline-block;
          }
          .pricing10-text50 {
            display: inline-block;
            text-align: center;
          }
          .pricing10-text53 {
            display: inline-block;
          }
          .pricing10-text54 {
            height: auto;
            display: inline-block;
            align-self: center;
          }
          .pricing10-text55 {
            width: auto;
            display: inline-block;
            font-size: 48px;
            text-align: center;
          }
          .pricing10-text56 {
            display: inline-block;
            font-size: 48px;
            text-align: center;
          }
          .pricing10-text57 {
            display: inline-block;
            text-align: center;
          }
          .pricing10-text58 {
            display: inline-block;
          }
          .pricing10-text59 {
            display: inline-block;
          }
          .pricing10-text60 {
            display: inline-block;
          }
          .pricing10-text61 {
            display: inline-block;
          }
          .pricing10-text62 {
            display: inline-block;
          }
          .pricing10-text63 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing10-text64 {
            display: inline-block;
          }
          .pricing10-text65 {
            display: inline-block;
          }
          .pricing10-text66 {
            width: 20px;
            display: inline-block;
          }
          .pricing10-text67 {
            display: inline-block;
            text-align: center;
          }
          .pricing10-text68 {
            width: 20px;
            display: inline-block;
          }
          .pricing10-text69 {
            display: inline-block;
          }
          .pricing10-text70 {
            display: inline-block;
          }
          .pricing10-text71 {
            display: inline-block;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .pricing10-text72 {
            display: inline-block;
          }
          .pricing10-text73 {
            display: inline-block;
          }
          .pricing10-text74 {
            display: inline-block;
          }
          .pricing10-text75 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pricing10-content3 {
              flex-direction: row;
            }
          }
          @media (max-width: 767px) {
            .pricing10-content3 {
              flex-direction: column;
            }
            .pricing10-column1 {
              width: 100%;
              border-top-width: 1px;
            }
            .pricing10-column2 {
              width: 100%;
            }
            .pricing10-column3 {
              width: 100%;
            }
            .pricing10-container11 {
              display: none;
            }
            .pricing10-container37 {
              display: none;
            }
            .pricing10-text45 {
              font-size: 24px;
            }
            .pricing10-text55 {
              font-size: 24px;
            }
            .pricing10-text56 {
              font-size: 24px;
            }
          }
          @media (max-width: 479px) {
            .pricing10-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .pricing10-column1 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .pricing10-button1 {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
            }
            .pricing10-column2 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .pricing10-button2 {
              width: 100%;
            }
            .pricing10-column3 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .pricing10-button3 {
              width: 100%;
            }
            .pricing10-text45 {
              font-size: 16px;
            }
            .pricing10-text55 {
              font-size: 16px;
            }
            .pricing10-text56 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </>
  )
}
Pricing10.propTypes = {
  plan1Yearly: PropTypes.element,
  feature10: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2: PropTypes.element,
  feature7: PropTypes.element,
  count3: PropTypes.element,
  plan1Action: PropTypes.element,
  subtitle1: PropTypes.element,
  plan1Action11: PropTypes.element,
  count6: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Yearly: PropTypes.element,
  feature8: PropTypes.element,
  feature9: PropTypes.element,
  count2: PropTypes.element,
  feature2: PropTypes.element,
  feature6: PropTypes.element,
  plan1: PropTypes.element,
  feature5: PropTypes.element,
  count5: PropTypes.element,
  count1: PropTypes.element,
  heading1: PropTypes.element,
  count4: PropTypes.element,
  featureCategory2: PropTypes.element,
  feature3: PropTypes.element,
  plan3: PropTypes.element,
  featureCategory1: PropTypes.element,
  feature4: PropTypes.element,
  plan2Action: PropTypes.element,
  feature1: PropTypes.element,
}

export default Pricing10
