import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

interface User {
    id: string,
    name: string,
    email: string,
    contact: string,
}

const View = () => {
    
    const [user, setUser] = useState<User>({} as User);

    const {id} = useParams();

    useEffect(() =>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then ((resp) => setUser({...resp.data[0]}));
    }, [id]);
  return (
    <div>
        <div className='card'>
            <div className='card-header'>
                <p> user Contact Details </p>
            </div>

            <div className='container'>
                <strong>Id:</strong>
                <span>{id}</span>
                <br />
                <br/>
                <strong>Name: </strong>
                <span>{user.name} </span>
                <br/>
                <br/>
                <strong>Email: </strong>
                <span>{user.email} </span>
                <br/>
                <br/>
                <strong>Contact: </strong>
                <span>{user.contact} </span>
                <br/>
                <br/>

                <Link to = "/">
                <input type = "button" value="Go back"/>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default View
