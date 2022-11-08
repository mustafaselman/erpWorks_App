import { useFormik } from "formik"
import { Navigate, useNavigate } from "react-router-dom"
import validationSchema from "../components/validations.js"
import CreateOrder from "./CreateOrder.js"
import UserContext from "../context/UserContext.js"

export default function Login(){
   
    const navigate=useNavigate();
    const {handleSubmit, handleChange, handleBlur, values}=useFormik({
        initialValues:{
            username:"deneme",
            password:"deneme"
        },

        onSubmit: (values) => {
            if(values.username==="deneme" && values.password==="deneme"){
                localStorage.setItem("user",JSON.stringify(values))
                navigate("homelayout")
            }
            
        },
        validationSchema


    })
   
return(

    <>
    <form onSubmit={handleSubmit}>
            <label htmlFor='username'>username</label>
            <input id="username" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} placeholder="username"/>
            <label htmlFor='password'>password</label>
            <input id="password" name="password" value={values.password} onBlur={handleBlur} onChange={handleChange} placeholder="password"/>
            <button type="submit">Submit</button>
            <br/>
           
            
        </form> 
        <code>{JSON.stringify(values)}</code>

            
    </>
)

}