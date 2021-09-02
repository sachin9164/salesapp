import React from 'react'

function Filter() {
    return (
        <div className="filter">

        <div className="row">

            <div className="col-lg-4 col-sm-6 col-md-6">
                Locations

                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Where to?"></input>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
                <div className="row">
                    <div className="col-6">
                        Bed Room

                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="2"></input>
               
                    </div>
                    <div className="col-6">
                        Bath Room

                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="2"></input>
               
                    </div>
                </div>
            </div>
            <div className="col-4" >
                <button type="button" className="btn btn-light" id="filter">Search</button>
            </div>
           
        </div>
    </div>

    )
}

export default Filter
