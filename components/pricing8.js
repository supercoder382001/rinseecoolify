import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const Pricing8 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div className="pricing8-pricing23 thq-section-padding">
        <div className="pricing8-max-width thq-section-max-width">
          <div className="pricing8-section-title">
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="pricing8-text187 thq-body-small">
                    Pricing plans
                  </span>
                </Fragment>
              )}
            </span>
            <div className="pricing8-content">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="pricing8-text198 thq-heading-2">
                      Remind everyone why to pick you
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.content2 ?? (
                  <Fragment>
                    <p className="pricing8-text180 thq-body-large">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
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
          <div className="pricing8-tabs">
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing8-button10 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(true)}
                className="pricing8-button11 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Monthly</span>
              </button>
            )}
            {!isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing8-button12 thq-button-filled thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
            {isMonthly && (
              <button
                onClick={() => setIsMonthly(false)}
                className="pricing8-button13 thq-button-outline thq-button-animated"
              >
                <span className="thq-body-small">Yearly</span>
              </button>
            )}
          </div>
          {isMonthly && (
            <div className="pricing8-container1">
              <div className="pricing8-column1 thq-card">
                <svg viewBox="0 0 1024 1024" className="pricing8-icon10">
                  <path d="M853.333 853.333h-682.667c-70.571 0-128-57.429-128-128v-426.667c0-70.571 57.429-128 128-128h682.667c70.571 0 128 57.429 128 128v426.667c0 70.571-57.429 128-128 128zM170.667 256c-23.509 0-42.667 19.157-42.667 42.667v426.667c0 23.509 19.157 42.667 42.667 42.667h682.667c23.509 0 42.667-19.157 42.667-42.667v-426.667c0-23.509-19.157-42.667-42.667-42.667h-682.667z"></path>
                  <path d="M426.667 640h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                  <path d="M426.667 469.333h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                  <path d="M768 448c0 47.128-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333c0-47.128 38.205-85.333 85.333-85.333 47.128 0 85.333 38.205 85.333 85.333z"></path>
                  <path d="M682.667 569.856c-66.645 0-106.667 30.507-106.667 60.971 0 15.232 40.021 30.507 106.667 30.507 62.549 0 106.667-15.232 106.667-30.507 0-30.464-41.813-60.971-106.667-60.971z"></path>
                </svg>
                <div className="pricing8-price10">
                  <div className="pricing8-price11">
                    <p>
                      {props.plan1 ?? (
                        <Fragment>
                          <p className="pricing8-text185 thq-body-large">
                            Basic Plan
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <h3>
                      {props.plan1Price ?? (
                        <Fragment>
                          <h3 className="pricing8-text164 thq-heading-3">
                            $10 per load
                          </h3>
                        </Fragment>
                      )}
                    </h3>
                    <p>
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <p className="pricing8-text166 thq-body-large">
                            or $200 yearly
                          </p>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing8-list1">
                    <div className="pricing8-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="pricing8-text194 thq-body-small">
                              Standard wash and fold
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="pricing8-text205 thq-body-small">
                              48-hour turnaround time
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="pricing8-text179 thq-body-small">
                              Free home pickup and delivery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing8-button14 thq-button-outline thq-button-animated">
                  <span>
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="pricing8-text169 thq-body-small">
                          Get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing8-column2 thq-card">
                <svg viewBox="0 0 1024 1024" className="pricing8-icon22">
                  <path d="M598 298v-84h-172v84h172zM854 298q34 0 59 26t25 60v128q0 34-25 60t-59 26h-256v-86h-172v86h-256q-36 0-60-25t-24-61v-128q0-34 25-60t59-26h170v-84l86-86h170l86 86v84h172zM426 682h172v-42h298v170q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-170h298v42z"></path>
                </svg>
                <div className="pricing8-price12">
                  <div className="pricing8-price13">
                    <p>
                      {props.plan2 ?? (
                        <Fragment>
                          <p className="pricing8-text170 thq-body-large">
                            Premium Plan
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <h3>
                      {props.plan2Price ?? (
                        <Fragment>
                          <h3 className="pricing8-text168 thq-heading-3">
                            $15 per load
                          </h3>
                        </Fragment>
                      )}
                    </h3>
                    <p>
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <p className="pricing8-text157 thq-body-large">
                            or $299 yearly
                          </p>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing8-list2">
                    <div className="pricing8-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="pricing8-text186 thq-body-small">
                              Premium wash and fold
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="pricing8-text202 thq-body-small">
                              24-hour turnaround time
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="pricing8-text171 thq-body-small">
                              Express delivery option available
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="pricing8-text195 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing8-button15 thq-button-filled thq-button-animated">
                  <span>
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="pricing8-text183 thq-body-small">
                          Get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing8-column3 thq-card">
                <svg viewBox="0 0 1024 1024" className="pricing8-icon32">
                  <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
                </svg>
                <div className="pricing8-price14">
                  <div className="pricing8-price15">
                    <p>
                      {props.plan3 ?? (
                        <Fragment>
                          <p className="pricing8-text159 thq-body-large">
                            Ultimate Plan
                          </p>
                        </Fragment>
                      )}
                    </p>
                    <h3>
                      {props.plan3Price ?? (
                        <Fragment>
                          <h3 className="pricing8-text200 thq-heading-3">
                            $20 per load
                          </h3>
                        </Fragment>
                      )}
                    </h3>
                    <p>
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <p className="pricing8-text161 thq-body-large">
                            or $499 yearly
                          </p>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="pricing8-list3">
                    <div className="pricing8-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="pricing8-text199 thq-body-small">
                              Deluxe wash and fold
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="pricing8-text204 thq-body-small">
                              12-hour turnaround time
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="pricing8-text165 thq-body-small">
                              Priority express delivery
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="pricing8-text173 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item21">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature5 ?? (
                          <Fragment>
                            <span className="pricing8-text162 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing8-button16 thq-button-filled thq-button-animated">
                  <span>
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="pricing8-text197 thq-body-small">
                          Get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {!isMonthly && (
            <div className="pricing8-container2">
              <div className="pricing8-column4 thq-card">
                <svg viewBox="0 0 1024 1024" className="pricing8-icon44">
                  <path d="M853.333 853.333h-682.667c-70.571 0-128-57.429-128-128v-426.667c0-70.571 57.429-128 128-128h682.667c70.571 0 128 57.429 128 128v426.667c0 70.571-57.429 128-128 128zM170.667 256c-23.509 0-42.667 19.157-42.667 42.667v426.667c0 23.509 19.157 42.667 42.667 42.667h682.667c23.509 0 42.667-19.157 42.667-42.667v-426.667c0-23.509-19.157-42.667-42.667-42.667h-682.667z"></path>
                  <path d="M426.667 640h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                  <path d="M426.667 469.333h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                  <path d="M768 448c0 47.128-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333c0-47.128 38.205-85.333 85.333-85.333 47.128 0 85.333 38.205 85.333 85.333z"></path>
                  <path d="M682.667 569.856c-66.645 0-106.667 30.507-106.667 60.971 0 15.232 40.021 30.507 106.667 30.507 62.549 0 106.667-15.232 106.667-30.507 0-30.464-41.813-60.971-106.667-60.971z"></path>
                </svg>
                <div className="pricing8-price16">
                  <div className="pricing8-price17">
                    <span>
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="pricing8-text175 thq-body-large">
                            Basic plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3>
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <h3 className="pricing8-text203 thq-heading-3">
                            $200/year
                          </h3>
                        </Fragment>
                      )}
                    </h3>
                    <span>
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="pricing8-text188 thq-body-large">
                            or $20 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list4">
                    <div className="pricing8-list-item22">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="pricing8-text178 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item23">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan1Feature21 ?? (
                          <Fragment>
                            <span className="pricing8-text206 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item24">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan1Feature31 ?? (
                          <Fragment>
                            <span className="pricing8-text191 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing8-button17 thq-button-outline thq-button-animated">
                  <span>
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="pricing8-text158 thq-body-small">
                          Get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing8-column5 thq-card">
                <svg viewBox="0 0 1024 1024" className="pricing8-icon56">
                  <path d="M598 298v-84h-172v84h172zM854 298q34 0 59 26t25 60v128q0 34-25 60t-59 26h-256v-86h-172v86h-256q-36 0-60-25t-24-61v-128q0-34 25-60t59-26h170v-84l86-86h170l86 86v84h172zM426 682h172v-42h298v170q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-170h298v42z"></path>
                </svg>
                <div className="pricing8-price18">
                  <div className="pricing8-price19">
                    <span>
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="pricing8-text156 thq-body-large">
                            Business plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3>
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <h3 className="pricing8-text155 thq-heading-3">
                            $299/year
                          </h3>
                        </Fragment>
                      )}
                    </h3>
                    <span>
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="pricing8-text174 thq-body-large">
                            or $29 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list5">
                    <div className="pricing8-list-item25">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="pricing8-text207 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item26">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature21 ?? (
                          <Fragment>
                            <span className="pricing8-text176 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item27">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature31 ?? (
                          <Fragment>
                            <span className="pricing8-text196 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item28">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan2Feature41 ?? (
                          <Fragment>
                            <span className="pricing8-text177 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing8-button18 thq-button-filled thq-button-animated">
                  <span>
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="pricing8-text201 thq-body-small">
                          Get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="pricing8-column6 thq-card">
                <svg viewBox="0 0 1024 1024" className="pricing8-icon66">
                  <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
                </svg>
                <div className="pricing8-price20">
                  <div className="pricing8-price21">
                    <span>
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="pricing8-text184 thq-body-large">
                            Enterprise plan
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3>
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <h3 className="pricing8-text167 thq-heading-3">
                            $499/year
                          </h3>
                        </Fragment>
                      )}
                    </h3>
                    <span>
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="pricing8-text189 thq-body-large">
                            or $49 monthly
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list6">
                    <div className="pricing8-list-item29">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="pricing8-text163 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item30">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature21 ?? (
                          <Fragment>
                            <span className="pricing8-text193 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item31">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature31 ?? (
                          <Fragment>
                            <span className="pricing8-text192 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item32">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature41 ?? (
                          <Fragment>
                            <span className="pricing8-text190 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="pricing8-list-item33">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span>
                        {props.plan3Feature51 ?? (
                          <Fragment>
                            <span className="pricing8-text160 thq-body-small">
                              Feature text goes here
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="pricing8-button19 thq-button-filled thq-button-animated">
                  <span>
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="pricing8-text172 thq-body-small">
                          Get started
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .pricing8-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing8-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-section-title {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .pricing8-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-tabs {
            display: flex;
            align-items: flex-start;
          }
          .pricing8-button10 {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
            border-top-left-radius: var(--dl-radius-radius-buttonradius);
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-right-radius: 0;
          }
          .pricing8-button11 {
            gap: var(--dl-space-space-halfunit);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .pricing8-button12 {
            gap: var(--dl-space-space-halfunit);
            color: var(--dl-color-theme-neutral-light);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          .pricing8-button13 {
            gap: var(--dl-space-space-halfunit);
            width: 120px;
            height: 60px;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            justify-content: center;
            border-top-left-radius: 0;
            border-top-right-radius: var(--dl-radius-radius-buttonradius);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: var(--dl-radius-radius-buttonradius);
          }
          .pricing8-container1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing8-column1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing8-icon10 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-end;
          }
          .pricing8-price10 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-price11 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing8-list-item10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item11 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-button14 {
            width: 100%;
          }
          .pricing8-column2 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing8-icon22 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-end;
          }
          .pricing8-price12 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-price13 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing8-list-item13 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item14 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item15 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-button15 {
            width: 100%;
          }
          .pricing8-column3 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing8-icon32 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-end;
          }
          .pricing8-price14 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-price15 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-list3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing8-list-item17 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item19 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item20 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item21 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-button16 {
            width: 100%;
          }
          .pricing8-container2 {
            gap: 32px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .pricing8-column4 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .pricing8-icon44 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-end;
          }
          .pricing8-price16 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-price17 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-list4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing8-list-item22 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item23 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item24 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-button17 {
            width: 100%;
          }
          .pricing8-column5 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent1);
          }
          .pricing8-icon56 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-end;
          }
          .pricing8-price18 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-price19 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-list5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing8-list-item25 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item26 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item27 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item28 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-button18 {
            width: 100%;
          }
          .pricing8-column6 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .pricing8-icon66 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            align-self: flex-end;
          }
          .pricing8-price20 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-price21 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .pricing8-list6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .pricing8-list-item29 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item30 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item31 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item32 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-list-item33 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .pricing8-button19 {
            width: 100%;
          }
          .pricing8-text155 {
            display: inline-block;
            font-size: 48px;
          }
          .pricing8-text156 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .pricing8-text157 {
            display: inline-block;
          }
          .pricing8-text158 {
            display: inline-block;
          }
          .pricing8-text159 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .pricing8-text160 {
            display: inline-block;
          }
          .pricing8-text161 {
            display: inline-block;
          }
          .pricing8-text162 {
            display: inline-block;
          }
          .pricing8-text163 {
            display: inline-block;
          }
          .pricing8-text164 {
            display: inline-block;
            font-size: 48px;
          }
          .pricing8-text165 {
            display: inline-block;
          }
          .pricing8-text166 {
            display: inline-block;
          }
          .pricing8-text167 {
            display: inline-block;
            font-size: 48px;
          }
          .pricing8-text168 {
            display: inline-block;
            font-size: 48px;
          }
          .pricing8-text169 {
            display: inline-block;
          }
          .pricing8-text170 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .pricing8-text171 {
            display: inline-block;
          }
          .pricing8-text172 {
            display: inline-block;
          }
          .pricing8-text173 {
            display: inline-block;
          }
          .pricing8-text174 {
            display: inline-block;
          }
          .pricing8-text175 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .pricing8-text176 {
            display: inline-block;
          }
          .pricing8-text177 {
            display: inline-block;
          }
          .pricing8-text178 {
            display: inline-block;
          }
          .pricing8-text179 {
            display: inline-block;
          }
          .pricing8-text180 {
            display: inline-block;
            text-align: center;
          }
          .pricing8-text183 {
            display: inline-block;
          }
          .pricing8-text184 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .pricing8-text185 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .pricing8-text186 {
            display: inline-block;
          }
          .pricing8-text187 {
            display: inline-block;
            text-align: center;
          }
          .pricing8-text188 {
            display: inline-block;
          }
          .pricing8-text189 {
            display: inline-block;
          }
          .pricing8-text190 {
            display: inline-block;
          }
          .pricing8-text191 {
            display: inline-block;
          }
          .pricing8-text192 {
            display: inline-block;
          }
          .pricing8-text193 {
            display: inline-block;
          }
          .pricing8-text194 {
            display: inline-block;
          }
          .pricing8-text195 {
            display: inline-block;
          }
          .pricing8-text196 {
            display: inline-block;
          }
          .pricing8-text197 {
            display: inline-block;
          }
          .pricing8-text198 {
            display: inline-block;
            text-align: center;
          }
          .pricing8-text199 {
            display: inline-block;
          }
          .pricing8-text200 {
            display: inline-block;
            font-size: 48px;
          }
          .pricing8-text201 {
            display: inline-block;
          }
          .pricing8-text202 {
            display: inline-block;
          }
          .pricing8-text203 {
            display: inline-block;
            font-size: 48px;
          }
          .pricing8-text204 {
            display: inline-block;
          }
          .pricing8-text205 {
            display: inline-block;
          }
          .pricing8-text206 {
            display: inline-block;
          }
          .pricing8-text207 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .pricing8-container1 {
              flex-direction: column;
            }
            .pricing8-column3 {
              width: 100%;
            }
            .pricing8-container2 {
              flex-direction: column;
            }
            .pricing8-column6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .pricing8-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .pricing8-button14 {
              width: 100%;
            }
            .pricing8-button15 {
              width: 100%;
            }
            .pricing8-button16 {
              width: 100%;
            }
            .pricing8-button17 {
              width: 100%;
            }
            .pricing8-button18 {
              width: 100%;
            }
            .pricing8-button19 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Pricing8.propTypes = {
  plan2Price1: PropTypes.element,
  plan21: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan3: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Action: PropTypes.element,
  plan2: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan11: PropTypes.element,
  plan2Feature21: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Feature3: PropTypes.element,
  content2: PropTypes.element,
  plan2Action: PropTypes.element,
  plan31: PropTypes.element,
  plan1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  content1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Action: PropTypes.element,
  heading1: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan2Feature11: PropTypes.element,
}

export default Pricing8
