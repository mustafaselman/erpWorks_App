import { useFormik,Formik} from 'formik';
import validationSchema from './validations';


export default function CreateOrder() {

const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema,
  });

  
 

return(
<form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder="Jane"/>
        {errors.firstName && <div>{errors.firstName}</div>}
    <br/><br/>

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" value={values.lastName}onChange={handleChange} placeholder="Doe" />


        <br/><br/>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={values.email}
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        />

<br/><br/>
        <button type="submit">Submit</button>
        <br/>
        <code>{JSON.stringify(values)}</code>
      </form>
      )
    }