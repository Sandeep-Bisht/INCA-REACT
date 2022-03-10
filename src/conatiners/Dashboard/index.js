import React, {} from 'react'
import Dashlogo from '../../images/logo.png'
import User from '../../images/user-profile.png'
import '../../css/dashboard.css'

export const Dashboard = () => {
    return(
        <>
          <div className='dash-wrapper'>
            <header className='dashboard-header py-2 px-lg-5'>
                <nav class="navbar navbar-expand-lg py-0">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            {/* <img src={Dashlogo} className="img-fluid w-75" /> */}
                            <h1 className='dashboard-title'><span>
                           
                            </span>INCA</h1>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <form class="d-flex">
                                <div class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle p-0 d-user-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={User } className="img-fluid  me-3 dash-user-pic" />
                                        <span className='user-text me-2'>User name</span>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item">Log Out</a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <section className='dash-body'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-md-3 left-part col-lg-2'>
                            <aside>
                                <ul className='ps-0 list-unstyled mt-4'>
                                    <li className='active-blue'>
                                    <button className='common-blue'>
                                    Dashboard</button></li>
                                    <li><button className='common-blue' 
                                    >Create</button></li>
                                    <li ><button className='common-blue' 
                                    >View</button></li>
                                </ul>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button common-blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Menu
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body p-0">
                                                <ul className='ps-0 list-unstyled mt-4'>
                                                    <li ><button className='common-blue'>Doctype</button></li>
                                                    <li ><button className='common-blue'>Category</button></li>
                                                    <li ><button className='common-blue'>Sub-Category</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className='col-md-9 col-lg-10 right-part'>
                        {/* <Switch>
                            <Route exact path="/" component={Folder} {...props}/> 
                            <Route path="/Create" component = {CreateForm} {...props}/>
                            <Route path="/Dashboard" component = {Folder } {...props}/>
                            <Route exact path="/View" component={ViewData} {...props}/> 
                            <Route exact path="/viewData" component={ViewDataFile} {...props}/> 
                        </Switch> */}
                       <div className='main'>
                                <div className='row mt-4 d-none'>
                                    <div className='col-md-3'>
                                        <div className='dash-card'>
                                            <div className='dash-card-pic position-relative'>
                                                <img src={Dashlogo} className="img-fluid" />
                                                <span className='card-number f2'>1000</span>
                                                <span className='card-title f1'>charts</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='dash-card'>
                                            <div className='dash-card-pic position-relative'>
                                                <img src={Dashlogo} className="img-fluid" />
                                                <span className='card-number f2'>1000</span>
                                                <span className='card-title f1'>charts</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='dash-card'>
                                            <div className='dash-card-pic position-relative'>
                                                <img src={Dashlogo} className="img-fluid" />
                                                <span className='card-number f2'>1000</span>
                                                <span className='card-title f1'>charts</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <div className='dash-card'>
                                            <div className='dash-card-pic position-relative'>
                                                <img src={Dashlogo} className="img-fluid" />
                                                <span className='card-number f2'>1000</span>
                                                <span className='card-title f1'>charts</span>
                                            </div>

                                        </div>
                                    </div>

                                </div>


                            </div>
                            <button className='d-none' >Create</button> 
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}