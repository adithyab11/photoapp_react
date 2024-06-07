import React from 'react'
import NavPhoto from './NavPhoto'

const SearchPhoto = () => {
  return (
    <div>
        <NavPhoto/>
        <h1><center>SEARCH PHOTO</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">albumid</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-warning">search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPhoto