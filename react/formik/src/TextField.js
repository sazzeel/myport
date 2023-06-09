import React from 'react';
import {useField} from "formik";

const TextField = (props) => {
    const [field,meta] = useField(props.name);

  return (
    <div>
      <input type="text" {...field} {...props}/>
      <span style={{color:"blue"}}>{meta.error}</span>
      <br/>
    </div>
  )
}

export default TextField
