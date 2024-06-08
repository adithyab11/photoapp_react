import React, { useEffect, useState } from 'react'
import NavPhoto from './NavPhoto'
import axios from 'axios'

const ViewPhoto = () => {
    
            const[data,changeData]=useState([])
             const fetchData=()=>
             {
               axios.get("https://jsonplaceholder.typicode.com/photos").then(
                 (response)=>{
                   changeData(response.data)
                 }
                 ).catch().finally()
                 }
                 useEffect(()=>{fetchData()},[])
           
    return (
        <div>
            <NavPhoto/>
            <h1><center>DISPLAY PHOTO</center></h1>
            <div className="container">
                <div className="row">
                    {data.map(
                        (value,index)=>
                            {
                                return <div className="col col-12 col-sm-3 col-md-3">
                                <div class="card">
                                    <img src={value.url}></img>
                                    <img src={value.thumbnailUrl}></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.albumId}</h5>
                                            <p class="card-text">{value.id}</p>
                                            <p class="card-text">{value.title}</p>
                                           
                                        </div>
                                </div>
                            </div>
                            }
                    )
                    
                    }
                                        

                </div>
            </div>
        </div>
    )
  }
  
export default ViewPhoto