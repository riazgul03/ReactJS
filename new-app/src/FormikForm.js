import { Formik, useFormik } from 'formik'
import React from 'react'
import { formSchema } from './FormSchema';

function FormikForm() {
    const ForminialValue = {
        name: '',
        email: ''
    }
    // const formik = useFormik({
    //     initialValues: ForminialValue,
    //     onSubmit: (values) => {
    //         console.log(values);
    //         console.log(values.name);
    //         console.log(values.email);
    //     }
    // });

    const {handleSubmit, handleChange, values, errors} =  useFormik({
        initialValues:ForminialValue,
        validationSchema:formSchema,
        onSubmit: (values) =>{
            console.log(values);
            console.log(values.name);
            console.log(values.email);
        }
       });

    return (
        <div>
            <h1>Formik Demo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Name:</label>
                <input type="text" name='name' onChange={handleChange} value={values.name} />
                <br />
                <span style={{color:'red'}}>{errors.name}</span>
                <br /><br />
                <label htmlFor="">Enter Emai:</label>
                <input type="text" name='email' onChange={handleChange} value={values.email} />
                <br />
                <span style={{color:'red'}}>{errors.email}</span>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FormikForm