import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Toast } from 'react-toastify/dist/components';

interface Iitems{
  id: string,
  name: string,
  email: string,
  contact: string,

}

const Home = () => {
    const [data, setData] = useState<Iitems[]>([]);

    const loadData = async () => {
        const res = await axios.get ("http://localhost:5000/api/get");
        setData(res.data);
    };

    useEffect (() =>{
        loadData();
    }, []);

const deleteContact = (id:string) => {
  if (
    window.confirm("Are you sure?")
  ) {
    axios.delete(`http://localhost:5000/api/remove/${id}`);
    toast.success("Deleted");
    setTimeout(() => loadData(), 500);
  }
}

  return (
    <div>
     <Link to ="/addContact">
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Contact
      </button>
     </Link>
        
      {/* <table className="table-auto w-full text-left">
  <thead>
    <tr className="bg-gray-800 text-white">
      <th className="px-4 py-2">Column 1</th>
      <th className="px-4 py-2">Column 2</th>
      <th className="px-4 py-2">Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">Row 1, Column 1</td>
      <td className="border px-4 py-2">Row 1, Column 2</td>
      <td className="border px-4 py-2">Row 1, Column 3</td>
    </tr>
    <tr className="bg-gray-200">
      <td className="border px-4 py-2">Row 2, Column 1</td>
      <td className="border px-4 py-2">Row 2, Column 2</td>
      <td className="border px-4 py-2">Row 2, Column 3</td>
    </tr>
  </tbody>
</table> */}
    <div className='flex justify-center'>

<table className="table-auto w-full text-left hover:table-fixed m-4">
  <thead className='bg-gray-800 text-white'>
    <tr>
      <th className='px-4 py-2'>No.</th>
      <th className='px-4 py-2'>Name</th>
      <th className='px-4 py-2'>Email</th>
      <th className='px-4 py-2'>Contact</th>
      <th className='px-4 py-2'>Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((items, index)=>{
      return(

    //     <tr className="bg-gray-100">
    //   <td className="border px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
    //   <td className="border px-4 py-2">Malcolm Lockyer</td>
    //   <td className="border px-4 py-2">1961</td>
    // </tr>
    // <tr className="bg-gray-200">
    //   <td className="border px-4 py-2">Witchy Woman</td>
    //   <td className="border px-4 py-2">The Eagles</td>
    //   <td className="border px-4 py-2">1972</td>
    // </tr>
    // <tr className="bg-gray-100">
    //   <td className="border px-4 py-2">Shining Star</td>
    //   <td className="border px-4 py-2">Earth, Wind, and Fire</td>
    //   <td className="border px-4 py-2">1975</td>
    // </tr>
    <tr key={items.id} className="bg-gray-100">
    <th scope="row">{index + 1}</th>
    <td>{items.name}</td>
    <td>{items.email}</td>
    <td>{items.contact}</td>
    <Link to={`/update/${items.id}`} >
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Edit
</button>
    </Link>
    <button className="bg-blue-500
     hover:bg-blue-700
      text-white 
      font-bold
       py-2 px-4
        rounded"
        onClick = {() => deleteContact(items.id)}>
      Delete
    </button>
    <Link to={`/view/${items.id}`} >
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View
</button>
    </Link>
  </tr>
)
})}
</tbody>
</table>

    </div>
    </div>
  )
}

export default Home
