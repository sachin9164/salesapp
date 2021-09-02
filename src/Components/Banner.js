import React from 'react'

function Banner() {
    return (
        <div className="banner">
            <div class="banner-wrapper ">
        <div class="banner-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, aut error. Porro nulla tempora vero repudiandae aut sapiente, quas dolores nemo ab consequuntur minus. Dolorem mollitia blanditiis quidem perspiciatis numquam repellendus commodi autem.</p>
        </div>
   
    <div class="dropdown">
                <div class="row">
                    <div class="col-lg-2 col-sm-12 col-md-6"> 
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Search by Location
                    </button></div>
                    <div class="col-lg-2 col-sm-12 col-md-6">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Search by Occupancy
                        </button>
                    </div>
                    <div class="col-lg-2 col-sm-12 col-md-6">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Search by Developer
                        </button>
                    </div>
                    <div class="col-lg-2 col-sm-12 col-md-6">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Search by Deposit
                        </button>
                    </div>
                    
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Banner
