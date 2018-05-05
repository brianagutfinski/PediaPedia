import React from 'react';
// import { Link } from "react-router-dom";
import "./pricing.css";

class Home extends React.Component {
  render() {
    return (
      <div className="App"><div class="pure-menu pure-menu-horizontal">
          <a href="/" class="pure-menu-heading">PediaPedia</a>
          <ul class="pure-menu-list">
              <li class="pure-menu-item"><a href="/Baby" class="pure-menu-link">Baby</a></li>
              <li class="pure-menu-item pure-menu-selected"><a href="/Toddlers" class="pure-menu-link">Toddlers</a></li>
              <li class="pure-menu-item"><a href="/Child" class="pure-menu-link">Child</a></li>


          </ul>
      </div>

      <div class="banner">
          <h1 class="banner-head">
              Enter a catchy phrase here.
          </h1>
      </div>

      <div class="l-content">
          <div class="pricing-tables pure-g">
              <div class="pure-u-1 pure-u-md-1-3">
                  <div class="pricing-table pricing-table-free">
                      <div class="pricing-table-header">

                          <span class="pricing-table-price">
                            Baby
                          </span>
                      </div>

                      <ul class="pricing-table-list">
                          <li>Free setup</li>
                          <li>Custom sub-domain</li>
                          <li>Standard customer support</li>
                          <li>file storage</li>
                          <li>1 database</li>
                          <li>Unlimited bandwidth</li>
                      </ul>

                      <button class="button-choose pure-button">Choose</button>
                  </div>
              </div>

              <div class="pure-u-1 pure-u-md-1-3">
                  <div class="pricing-table pricing-table-biz pricing-table-selected">
                      <div class="pricing-table-header">

                          <span class="pricing-table-price">
                              Toddler
                          </span>
                      </div>

                      <ul class="pricing-table-list">
                          <li>Free setup</li>
                          <li>Use your own domain</li>
                          <li>Standard customer support</li>
                          <li>file storage</li>
                          <li>5 databases</li>
                          <li>Unlimited bandwidth</li>
                      </ul>

                      <button class="button-choose pure-button">Choose</button>
                  </div>
              </div>

              <div class="pure-u-1 pure-u-md-1-3">
                  <div class="pricing-table pricing-table-enterprise">
                      <div class="pricing-table-header">

                          <span class="pricing-table-price">
                              Child
                          </span>
                      </div>

                      <ul class="pricing-table-list">
                          <li>Free setup</li>
                          <li>Use your own domain</li>
                          <li>Premium customer support</li>
                          <li>Unlimited file storage</li>
                          <li>25 databases</li>
                          <li>Unlimited bandwidth</li>
                      </ul>

                      <button class="button-choose pure-button">Choose</button>
                  </div>
              </div>
          </div>

          <div class="information pure-g">
              <div class="pure-u-1 pure-u-md-1-2">
                  <div class="l-box">
                      <h3 class="information-head">Get started today</h3>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                      </p>
                  </div>
              </div>

              <div class="pure-u-1 pure-u-md-1-2">
                  <div class="l-box">
                      <h3 class="information-head">Pay monthly or annually</h3>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                      </p>
                  </div>
              </div>

              <div class="pure-u-1 pure-u-md-1-2">
                  <div class="l-box">
                      <h3 class="information-head">24/7 customer support</h3>
                      <p>
                          Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                  </div>
              </div>

              <div class="pure-u-1 pure-u-md-1-2">
                  <div class="l-box">
                      <h3 class="information-head">Cancel your plan anytime</h3>
                      <p>
                          Duis aute irure dolor in reprehenderit in voluptate velit esse
                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      <div class="footer l-box">
          <p>

          </p>
      </div></div>
    );
  }
}

export default Home;
