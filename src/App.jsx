import "./App.css";
import { Formik } from "formik";
function App() {
  return (
    <div className="App">
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          gender:"male",
          hobbies:[],
          country:"United State"
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
       {
        ({handleSubmit, handleChange, values})=>(
          <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email: </label>
          <input onChange={handleChange} type="email" placeholder="enter your email..." id="email" name="email" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input onChange={handleChange} type="password" name="password" id="password" placeholder="enter your password..." />
          <br />
          <br />
          <div>
            Gender: 

            <div>
              <label htmlFor="male">Male</label>
               <input onChange={handleChange} id="male" name="gender" type="radio" value="male" checked={values.gender === "male"} />
            </div>
            
            <div>
              <label htmlFor="female">Female</label>
               <input onChange={handleChange} id="female" name="gender" type="radio" value="female" checked={values.gender==="female"}  />
            </div>
          </div>
          <br />
          <div>
            Hobbies:
            <div>
              <label htmlFor="car">Car</label>
              <input onChange={handleChange} name="hobbies" id="car" type="checkbox" value="car" />
            </div>
            <div>
              <label htmlFor="code">Coding</label>
              <input onChange={handleChange} name="hobbies" id="code" type="checkbox" value="coding" />
            </div>
            <div>
              <label htmlFor="travel">Travel</label>
              <input onChange={handleChange} name="hobbies" id="travel" type="checkbox" value="travel" />
            </div>
          </div>
          <br />
          <select value={values.country} onChange={handleChange} name="country">
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Turkey">Turkey</option>
            <option value="United State">United State</option>
          </select>
          <br />
          <br />
          <input type="submit" value={"login"} />
        </form>
        )
       }
       
      </Formik>
    </div>
  );
}

export default App;
