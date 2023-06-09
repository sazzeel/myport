
import React from "react";
import {} from "yup";
import { string, number, object } from "yup/lib/locale";
import User from "../../loginnregister/src/components/User";

const App = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();

      const contactFormSchema = object ({
        email: string().req().email(),
        password: string().req().min(7).max(30),
        address: string().req().min(8),
        contact: number().positive().req(),
      });

       
    const formData ={
      email: event.target[0].value,
      password: event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,
    };
    const isValid = await contactFormSchema.isValid(formData);
    console.log(isValid);

  } ;
  return(
    <div>
      <form onSubmit ={handleSubmit} autoComplete="off">
        <input type="text" name="email"/>
        <br/>
        
        <input type="text" name="password"/>
        <br/>
        <input type="text" name="address"/>
        <br/>
        <input type="text" name="contact"/>
        <br/>
        <input type="submit"/>
      </form>
      <User/>
      </div>
  )
}
export default App;
