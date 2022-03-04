import React, { } from 'react'
import "../../css/home.css"
import visitor1 from '../../images/visitor-1.jpg';
import visitor2 from '../../images/visitor-2.jpg';
import visitor3 from '../../images/visitor-3.jpg';
import sponser from '../../images/sponser.jpg';
import client1 from '../../images/client-1.png';
import client2 from '../../images/client-2.png';
import client3 from '../../images/client-3.png';
import client4 from '../../images/client-4.png';
import client5 from '../../images/client-5.png';
import client6 from '../../images/client-6.png';
import client7 from '../../images/client-7.png';
import client8 from '../../images/client-8.png';
import client9 from '../../images/client-9.png';
import client10 from '../../images/client-10.png';

export let HomePage = () => {
  return (
    <>

      <section className='testimonial-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mx-auto'>
              <div id="carouselExampleControls1" className='carousel slide' data-bs-ride="carousel">
                <div className='carousel-inner'>

                  <div className='carousel-item active'>
                    <div className='boxes'>
                      <div className='upper'>
                        <h6>Our Testimonial</h6>
                        <h2>WHAT OUR VISITOR'S SAY?</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                          laboriosam voluptatum!</p>
                      </div>
                      <div className='middle'>
                        <div className='image'>
                          <img src={visitor1} alt='' />
                        </div>
                        <div className='lower'>
                          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                            laboriosam voluptatum! </p>
                          <span className='blk'>Petey Cruiser</span>
                          <span className='blk-wht'>Visitor</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='carousel-item'>
                    <div className='boxes'>
                      <div className='upper'>
                        <h2>Customer Testimonial</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                          laboriosam voluptatum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, delectus.</p>
                      </div>
                      <div className='middle'>
                        <div>
                          <img src={visitor2} alt='' />
                        </div>
                        <div className='lower'>
                          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                            laboriosam voluptatum! </p>
                          <span className='blk'>Petey Cruiser</span>
                          <span className='blk-wht'>Visitor</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='carousel-item'>
                    <div className='boxes'>
                      <div className='upper'>
                        <h2>Customer Testimonial</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                          laboriosam voluptatum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, delectus.</p>
                      </div>
                      <div className='middle'>
                        <div>
                          <img src={visitor3} alt='' />
                        </div>
                        <div className='lower'>
                          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quasi tenetur, eligendi dolorem
                            laboriosam voluptatum! </p>
                          <span className='blk'>Petey Cruiser</span>
                          <span className='blk-wht'>Visitor</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev">
                  <span className='carousel-control-prev-icon circle' aria-hidden="true"></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next">
                  <span className='carousel-control-next-icon circle' aria-hidden="true"></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className='blog-area section-padding'>
<div className='container'>
  <div className='row'>
    <div className='col-md-12'>
      <p className='common-pre-heading'>RECENT BLOG</p>
      <h2 className='common-heading'>LATEST NEWS AND BLOG</h2>
      <p className='common-para mb-5'>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
    </div>
  </div>

  <div className='row'>
<div className='col-lg-4'>
  <div className='blog-card'>
<div className='blog-card-pic'>
  <img src={visitor1} alt=''></img>
</div>
<div className='blog-card-content'>
<h3>MARKETING AND BUSINESS MANAGING LECTURE</h3>
<div className='blog-box'><span>Demoteam </span> <span className='blog-border px-1 mx-1'> January 26, 2022 </span> <span> No Comments</span></div>
<div><a className='common-yellow-color' href='#'>READ MORE</a></div>
</div>
  </div>
  </div>

  <div className='col-lg-4'>
  <div className='blog-card'>
<div className='blog-card-pic'>
  <img src={visitor2} alt=''></img>
</div>
<div className='blog-card-content'>
<h3>ICC WALES REPORTS RECORD BREAKING SUMMER</h3>
<div className='blog-box'><span>Demoteam</span> <span className='blog-border px-1 mx-1'>January 24, 2022</span> <span>No Comments</span></div>
<div><a className='common-yellow-color' href='#'>READ MORE</a></div>
</div>
  </div>
  </div>

  <div className='col-lg-4'>
  <div className='blog-card'>
<div className='blog-card-pic'>
  <img src={visitor3} alt=''></img>
</div>
<div className='blog-card-content'>
<h3>EVENT TECHNOLOGY AWARD FOR PEOPLE CHOICE</h3>
<div className='blog-box'><span>Demoteam</span> <span className='blog-border px-1 mx-1'>January 24, 2022</span> <span>No Comments</span></div>
  <div><a className='common-yellow-color' href='#'>READ MORE</a></div>
</div>
  </div>
  </div>

  </div>

</div>
      </section>

      <section className='sponsers-area'>
        <div className='container'>
          <div className='row position-relative'>
          <div className='col-md-12'>
      <p className='common-pre-heading'>OUR PARTNERS</p>
      <h2>SPONSERS AND PARTNERS</h2>
      <p className='mb-5'>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
    </div>
  </div>
  
  <div className='row position-relative'>
    <div className='col-md-1'></div>
            <div className='col-md-2 px-0'>
              <div className='sponser-box-1'>
              <img src={client1} alt='' />
              </div>
                <div className='sponser-border-1'>
              <img src={client6} alt='' />
              </div>
            </div>
            <div className='col-md-2 px-0'>
              <div className='sponser-box-2'>
              <img src={client2} alt='' />
              </div>
                <div className='sponser-border-2'>
              <img src={client7} alt='' />
                </div>
            </div>
            <div className='col-md-2 px-0'>
              <div className='sponser-box-3'>
              <img src={client3} alt='' />
              </div>
                <div className='sponser-border-3'>
              <img src={client8} alt='' />
              </div>
            </div>
            <div className='col-md-2 px-0'>
              <div className='sponser-box-4'>
              <img src={client4} alt='' />
              </div>
                <div className='sponser-border-4'>
              <img src={client9} alt='' />
              </div>
            </div>
            <div className='col-md-2 px-0'>
              <div className='sponser-box-5'>
              <img src={client5} alt='' />
              </div>
                <div className='sponser-border-5'>
              <img src={client10} alt='' />
              </div>
            </div>
            <div className='col-md-1'></div>
          </div>

<div className='row position-relative'>
  <div className='col-md-8 mx-auto'>
    <button className='common-btn my-5'>BECAME A SPONSER</button>
  </div>
</div>
          </div>
      </section>

      <section className='Contact-area'>
<div className='container'>
<div className='row'>
  <div className='col-md-6'>
    <form>

    </form>
    </div>
  <div className='col-md-6'>
    <div className='location-wrapper'>
<h6>GET IN TOUCH</h6>
<h3>CONTACT US FOR FURTHER INFORMATION</h3>
<p>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
<div className='icon-wrap'>
  <span><i className="fa-brands fa-twitter"></i></span>
  <h3>EVENT VENUE :</h3>
  <p>Quam amet tristique adipisicing incididunt arcu, excepturi molestie turpis deserunt ducimus malesuada minus mauris veniam.</p>
</div>
    </div>
    </div>
  </div>
</div>
      </section>
    </>
  )
}