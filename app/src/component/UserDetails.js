import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export const UserDetails = () => {
    const [data, setData] = useState({});
    const  {id}=useParams();
    const userDetails = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        const doc = await response.json();
        setData(doc[0]);
      };
      useEffect(() => {
        userDetails();
      }, []);
      
  return (
    <>
      <div className="row bg-info text-center">
        <h2>User Details</h2>
      </div>
      <div className="container py-4">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-10 ">
                {
                    data && (
                        <div  className="card my-2" >
                
                <div className="card-header bg-warning">ID : {data.id}</div>
                <div className="card-body">
                  <h5 className="card-title">Name : {data.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">username : {data.username}</h6>
                  <p className="card-text">
                  Email : {data.email}
                  </p>
                  <p className="card-text">
                  Phone : {data.phone}
                  </p>
                  {
                    data.address && (
                        <div className='card-text border mb-4 p-3'>
                  <h6 className="card-subtitle mb-2 text-secondary ">Address :</h6>
                  <p className="card-text">
                  Street : {data.address.street}
                  </p>
                  <p className="card-text">
                  City : {data.address.city}
                  </p>
                  <p className="card-text">
                  Zipcode : {data.address.zipcode}
                  </p>
                  <p className="card-text">
                  Lat : {data.address.geo.lat}
                  </p>
                 
                  <p className="card-text">
                  Lng : {data.address.geo.lng}
                  </p>
                  </div>  
                    )
                  }      
                 {
                    data.company && (
                        <div className='card-text border p-3'>
                        <h6 className="card-subtitle mb-2 text-secondary">Company Details :</h6>
                        <p className="card-text">
                        Name : {data.company.name}
                        </p>
                        <p className="card-text ">
                        CatchPhrase : {data.company.catchPhrase}
                        </p>
                        <p className="card-text">
                        Bs : {data.company.bs}
                        </p>
                        </div>
                    )
                 }
                  <p className="card-text mt-4">
                 <b className='text-warning'>Website :</b>  {data.website}
                  </p>
                 <Link to='/'> <button className="btn btn-success m-3" >
                   Go to Main Page
                    </button>
                    </Link>
                </div>
              </div>
                    )
                }
            </div>
          </div>
        </div>
    </>
  )
}
