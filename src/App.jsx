import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';

const App = () => {
  const apiUrl = 'https://fakestoreapi.com/auth/login';
  let {handleChange, handleSubmit, values} = useFormik({
    initialValues:{
      username:"",
      password:""
    },
    onSubmit:()=>{
      console.log(values);
      axios.post(apiUrl, {
        username:values.username,
        password:values.password
      }).then((response)=>{
        console.log(response.data.token);
      }).catch((error)=>{
        console.log(error.response.data);
      })
    }
  })
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <br />
        <input type="text" placeholder='enter your username...' name='username' id='username' onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input type="password" placeholder='enter your password...' name='password' id='password' onChange={handleChange} />
        <br />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  )
}

export default App
