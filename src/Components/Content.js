import React from 'react'
import address from "../assets/address.png"
import children from "../assets/children.png"

function Content() {
    return (
        <>
            <div class="content">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-md-6">
                                <div class="content-home">
                                    <div class="content-child">
                                    <h1>HOW MUCH IS YOUR HOME REALLY WORTH?</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae Lorem ipsum dolor sit amet.</p>
                                    <p class="address">Enter your address below to get started !</p>
                                    <img src={address} alt="" srcset="" width="100%"></img>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-sm-12 col-md-6">
                            <img id="children" src={children} alt="" srcset="" ></img>
                        </div>
                    </div>
                </div>
                </div>

                <div class="footer">
                <div class="footer-wrapper">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-md-6">
                            <h1>95% OF CONDOS ARE NOT WORTH INVESTING IN</h1>

                            <h4>YOU NEED TO FIND OUT THE 5% THAT ARE.</h4>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-md-6">
                            <div class="login">

                                <label  class="form-label">First name <span class="star">*</span></label>
                <input type="text" class="form-control"  required></input>
                <br></br>
                <label  class="form-label">Email  <span class="star">*</span></label>
                <input type="text" class="form-control"  required></input>

                <button type="button" class="btn btn-light">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
