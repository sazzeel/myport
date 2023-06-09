import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Home.css"

interface User {
  id:string;
  name: string;
  email: string;
  contact: string;
}

const Home = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() =>{
    getUsers();
  }, []);


  const getUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    if (res.status === 200){
      setData(res.data)
    }
  };

  const onDeleteUser = async (id: string) => {
    if (
      window.confirm ("Are you sure")
    ){
      const res = await axios.delete (`http://localhost:5000/user/${id}`);
      if (res.status === 200){
        toast.success (res.data);
        getUsers()
      }
    }
  }

  console.log("datacf", data);
  return (
    <div >
      <table className='styled-table'>
        <thead>
          <tr>
            <th >No.</th>
            <th >Name </th>
            <th >Email</th>
            <th >Contact</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
          data.map((item, index) =>{
            return (
              <tr key = {index}>
                <th scope = "row"> {index +1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to = {`/update/${item.id}`}>
                    <button className='btn btn-edit'>Edit </button>
                  </Link>
                  <button className='btn btn-delete' onClick={() => onDeleteUser (item.id)}>Delete </button>
                  <Link to = {`/view/${item.id}`}>
                  <button className='btn btn-view'>View </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
