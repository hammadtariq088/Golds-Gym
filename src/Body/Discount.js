import React from 'react'
import discount1 from '../img/photos/discount1.jpg'

function Discount() {
  return (
  <div className="main-content bg-dark">
    <section className="features-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="featured-columns-wrap">


                {/* left discount */}
              <div className="featured-discount-item">
                  
                    <img src={discount1} />
                  <div className="content">
                    <h2>35%</h2>
                    <h3>DISCOUNT</h3>
                  </div>
                </div>

                    {/* left end */}


                <div
                  className="featured-items-style2 bg-img"
                  data-bg-img="assets/img/photos/bg-f2.jpg">
                    
                  <div className="row row-gutter-0">
                    <div className="col-md-6">
                      {/* Start Featured Item */}
                      <div className="featured-item">
                        <div className="featured-icon">
                          <img src="assets/img/icons/f1.png" alt="Image" />
                        </div>
                        <div className="featured-info">
                          <h4>Best Training</h4>
                          <p>
                            Best Training dolor sit consectetur adipiscing elit,
                            sed do eiusmod temp incididunt ut labore et dolore
                          </p>
                        </div>
                      </div>
                      {/* End Featured Item */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Featured Item */}
                      <div className="featured-item">
                        <div className="featured-icon">
                          <img src="assets/img/icons/f2.png" alt="Image" />
                        </div>
                        <div className="featured-info">
                          <h4>Qualified Instructor</h4>
                          <p>
                            Qualified Instructor consectetur adipg elit, sed do
                            eiusmod tempor incididu ut labore dolore are same
                            magna{" "}
                          </p>
                        </div>
                      </div>
                      {/* End Featured Item */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Featured Item */}
                      <div className="featured-item">
                        <div className="featured-icon">
                          <img src="assets/img/icons/f3.png" alt="Image" />
                        </div>
                        <div className="featured-info">
                          <h4>Latest Equipment</h4>
                          <p className="m-0">
                            Latest equipment dolor consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna{" "}
                          </p>
                        </div>
                      </div>
                      {/* End Featured Item */}
                    </div>
                    <div className="col-md-6">
                      {/* Start Featured Item */}
                      <div className="featured-item">
                        <div className="featured-icon">
                          <img src="assets/img/icons/f4.png" alt="Image" />
                        </div>
                        <div className="featured-info">
                          <h4>Award Winners</h4>
                          <p className="m-0">
                            Award winner dolor sit consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna{" "}
                          </p>
                        </div>
                      </div>
                      {/* End Featured Item */}
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    
  </div>

  )
}

export default Discount