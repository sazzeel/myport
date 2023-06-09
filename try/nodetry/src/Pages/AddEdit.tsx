import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, useParams} from 'react-router-dom';


import { toast } from 'react-toastify';

interface State {
    name: string;
    email: string;
    contact: string;
  }

const intialState: State  = {
    name: '',
    email: '',
    contact: '',
}

const AddEdit = () => {
    const [state, setState] = useState<State>(intialState);
    const {name,email, contact} = state;
    // const history = useHistory();

    const {id} = useParams();

    useEffect(() =>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then ((resp) => setState({...resp.data[0]}));
    }, [id]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !contact ) {
            toast.error("Please provide data")
        } else{
            if(!id){

                axios.post("http://localhost:5000/api/post", {
                    name,
                    email,
                    contact,
                })
                .then (() => {
                    setState({name: "", email:"", contact: ""});
                    
                })
                .catch((err) => toast.error(err.res.data));
                toast.success ("Added")
            } else {
                axios.put(`http://localhost:5000/api/update/${id}`, {
                    name,
                    email,
                    contact,
                })
                .then (() => {
                    setState({name: "", email:"", contact: ""});
                    
                })
                .catch((err) => toast.error(err.res.data));
                toast.success ("UPDATED") 
            }
            setTimeout(()=>
                // history.push("/"), 500   
                console.log("error"), 1000      
                
        );
    }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target;
    setState({ ...state, [name]: value });
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
            Name
        </label>
        <input
        type="text"
        id='name'
        name='name'
        placeholder='Your Name is ........'
        value={name || ""}
        // onChange={handleInputChange}
        onChange = {handleInputChange}
        />
        <label htmlFor='email'>
            Email
        </label>
        <input
        type="text"
        id='email'
        name='email'
        placeholder='Your Email is ........'
        value={email || ""}
        onChange={handleInputChange}
        />
        <label htmlFor='contact'>
            Contact
        </label>
        <input
        type="text"
        id='contact'
        name='contact'
        placeholder='Your Contact info is ........'
        value={contact || ""}
        onChange={handleInputChange}
        />
        <input type ="submit" value={id ? "Update": "Save"} />
        <Link to="/">
            <input type = "button" value="Go back"/>
        </Link>
        
        </form>
    </div>
  )
}

export default AddEdit
