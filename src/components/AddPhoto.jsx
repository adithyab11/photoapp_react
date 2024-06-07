import React from 'react'
import NavPhoto from './NavPhoto'

const AddPhoto = () => {
    return (
        <div>
            <NavPhoto/>
            <h1><center>ADD PHOTO</center></h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Album id</label>
                        <input type="text" className="form-control" />                </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Upload image</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">folder</label>
                        <select name="" id="" className="form-control">
                            <option value="favourate">favourate</option>
                            <option value="old">old</option>
                            <option value="latest">latest</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">Date of upload</label>
                    <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <button className="btn btn-success">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPhoto