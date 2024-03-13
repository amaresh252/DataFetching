import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
export const UserData = () => {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const [searchInput,setSearchInput]=useState('');
  const [searchData,setSearchData]=useState([]);
  const [selectedData,setSelectedData]=useState([]);
  const userData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const doc = await response.json();
    setData(doc);
    setSearchData(doc);
  };

  useEffect(() => {
    userData();
  }, []);
  
  
    const handlesearchInput=(e)=>{
        e.preventDefault();
        setSearchInput(e.target.value)
    }

    const handleDelete=(e,id)=>{
        e.preventDefault();
        const updatedSearchData=searchData.filter(item=>item.id!==id)
        setSearchData(updatedSearchData);
        const updatedData=data.filter(item=>item.id!==id)
        setData(updatedData);
    }
    const  handleSelectedDelete=(e)=>{
      e.preventDefault();
      const Data = [...data];
  const SearchData = [...searchData];
  selectedData.forEach((item) => {
    const Index = Data.indexOf(item);
    if (Index !== -1) {
      Data.splice(Index, 1);
    }
    const searchIndex = SearchData.indexOf(item);
    if (searchIndex !== -1) {
      SearchData.splice(searchIndex, 1);
    }
  });
  setData(Data);
  setSearchData(SearchData);
    }
    const handleNavigate=(e,id)=>{
        e.preventDefault();
        navigate(`/userdetails/${id}`)
    }

    const handleSelect = (e, data) => {
      if (selectedData.includes(data)) {
        setSelectedData(selectedData.filter(item => item.id !== data.id));
        
      } else {
        setSelectedData([...selectedData, data]);
        
      }
    };

    const handleSearch=(e)=>{
        e.preventDefault();
        const filterData=data.filter((item)=>item.id.toString().includes(searchInput));
        setSearchData(filterData);
    }
  return (
    <>
      <div className="row bg-info text-center">
      <div className='col-md-10'><h2>User Data</h2></div>
        <div className='col-md-2 pt-1'><Link to='/instruction' className='btn btn-primary'>Instruction</Link></div>
      </div>
      <div className="container py-4">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-10 ">
            <div className="row ">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <input type="text" name="search" value={searchInput} className="form-control" onChange={handlesearchInput} />
              </div>
              <div className="col-md-2 ">
                <button onClick={handleSearch} className="btn btn-light" >Search</button>
              </div>
            </div>
            
                <div className="row my-2 d-flex justify-content-end">
              <div className="col-md-3"><button className="btn btn-danger" onClick={handleSelectedDelete}>Delete Selected</button></div>
            </div>
             
            <div className="row">
            {
              searchData.map((item) => (
                <div key={item.id}  className="border my-3 bg-light">
                <div className="card my-2" style={{'cursor':'pointer'}} onClick={(e)=>handleNavigate(e,item.id)}>
                <div className="card-header text-secondary bg-warning">ID : {item.id}</div>
                <div className="card-body">
                  <h5 className="card-title">Name : {item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">username : {item.username}</h6>
                  <p className="card-text">
                  email : {item.email}
                  </p>
                  <p className="card-text">
                  phone : {item.phone}
                  </p>
                </div>
              </div>
              <input 
            type="checkbox" 
            style={{'transform': 'scale(1.5)'}} 
            onChange={e => {handleSelect(e, item)}}
          />
              <button className="btn btn-danger m-3" onClick={(e)=>handleDelete(e,item.id)}>
                    Delete
                    </button>
                  <button className="btn btn-primary">
                    Edit
                    </button>
              </div>
              ))}
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
