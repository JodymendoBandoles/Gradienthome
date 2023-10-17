import React from "react";
import "./Styles/PropertyListing.css";

function PropertyListing() {
  return (
    <section className="PropertyListing">
      <div className="container">
        <div className="PropertyListing">
          <h2>
            <span className="darkOrrangebackground">&nbsp;Discover Your Dream Home&nbsp;</span>
          </h2>
          <h3>Explore a Wide Range of Properties in Prime Locations</h3>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-3 py-3 py-md-0">
            <div className="card">
            </div>
          </div>

          <div className="col-md-4 col-lg-3 py-3 py-md-0">
            <div className="card">
            </div>
          </div>

          <div className="col-md-4 col-lg-3 py-3 py-md-0">
            <div className="card">
            </div>
          </div>

          <div className="col-md-4 col-lg-3 py-3 py-md-0">
            <div className="card">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyListing;