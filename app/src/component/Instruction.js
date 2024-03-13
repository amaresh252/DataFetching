import React from 'react'
import { Link } from 'react-router-dom'

export const Instruction = () => {
  return (
    <div>
        <div className='container-fluid bg-secondary vh-100'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-8'>
                <div className='row bg-success'>
                    <div className='col-md-8'>
                    <h1 className='py-3 '>Instruction to Use Application </h1>
                    </div> 
                    <div className='col-md-4 py-4'><Link to='/' className='btn btn-primary'>Go to Main Page</Link></div>
            </div>
            <div className='row py-3 text-start '>
                <h5 className='bg-warning py-2'>Introduction : In this application we are showing detail of users</h5>
            </div>
            <div className='row text-start bg-white px-2'>
                <h6 className='text-primary my-2'>Instruction</h6>
                <ol>
                    <li className='my-2'>At Home showing few data of user</li>
                    <li className='my-2'>For showing all  data scroll down</li>
                    <li className='my-2'><b>Full Detail of Particular User:</b>On Clicking card you can see the full details of users</li>
                    <li className='my-2'><b>Search Data by Id :</b>For Searching write only id inside search box and click search button</li>
                    <li className='my-2'><b>See All Data After Search : </b>For Seeing the all data after searching erase search box input and click search button</li>
                    <li className='my-2'><b>Delete Button :</b> On Clicking the delete button data of that particular user will be deleted</li>
                    <li className='my-2'><b>Edit Button :</b>Edit button only of showing purpose it is not working</li>
                    <li className='my-2'><b>Delete Selected Button :</b> For Deleting more than one select multiple checkbox on click selected delete button which is at top</li>
                </ol> 
            </div>
                </div>
            </div>  
        </div>
    </div>
  )
}
