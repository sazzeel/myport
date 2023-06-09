import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import "./AddEdit.css"
import axios from "axios"
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

interface User {
  name: string;
  email: string;
  contact: string;
  }

const initialstate = {
  name: "",
  email: "",
  contact: "",
}

interface ContactData {
  name: string;
  email: string;
  contact: string;
}

interface UserParams {
  id: string;
}

const AddEdit = () => {

  const [state, setState] =useState<User>(initialstate);

  const {name , email, contact} = state;

  // const {id} = useParams<UserParams> ();

  // useEffect(() => {
  //   if (id){
  //     getSingleUser(id);
  //   }
  // }, [id])

  const {id} = useParams();

    useEffect(() =>{
      if (id) {
        getSingleUser (id);
      }
    }, [id])
    const getSingleUser = async (id:string) => {
      const res = await axios.get(`http://localhost:5000/user/${id}`)
      if (res.status === 200){
        setState({...res.data [0]})
      }
      console.log(res.data,"shvhjsdvh")
        // .then ((resp) => setState({...resp.data[0]}));
    }

  // const getSingleUser = async (id: string) => {
  //   const res = await axios.get(`http://localhost:5000/users/${id}`);
  //   if (res.status === 200){
  //     setState({...res.data[0]});
  //   }
  // }

  const addContact = async (data: ContactData) => {
    try {
      const res = await axios.post("http://localhost:5000/user", data);
      if (res.status === 200) {
        toast.success(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (!name || !email || !contact){
      toast.error ("fill the needed values")
    }else{
    addContact(state);
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
    let { value} = e.target;
    setState ({...state, [e.target.name]: value});
  }

  return (
    <div className='card'>
      <h1>Add Users</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor = "name">Name</label>
        <input
        type = "text"
        id = "name"
        name = "name"
        placeholder = "ENter Name ..."
        onChange = {handleInputChange}
        value = {name}
        />

        <label htmlFor = "email">Email</label>
        <input
        type = "text"
        id = "email"
        name = "email"
        placeholder = "ENter Email ..."
        onChange = {handleInputChange}
        value = {email}
        />
        <label htmlFor = "contact">Contact</label>
        <input
        type = "text"
        id = "contact"
        name = "contact"
        placeholder = "ENter Contact ..."
        onChange = {handleInputChange}
        value = {contact}
        />
       <button type="submit">Add</button>
        {/* <input type ="submit"  value = "Add" /> */}
      </form>
    </div>
  )
}

export default AddEdit
