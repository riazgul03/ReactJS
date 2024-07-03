import { Formik, useFormik } from 'formik'
import React from 'react'

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

    const {handleSubmit, handleChange, values} =  useFormik({
        initialValues:ForminialValue,
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
                <br /><br />
                <label htmlFor="">Enter Emai:</label>
                <input type="text" name='email' onChange={handleChange} value={values.email} />
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FormikForm