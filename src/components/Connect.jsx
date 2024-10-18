import React from "react";
import Header from './Header'
import Top from './Top'
import { Formik } from 'formik';
import { Link } from '@react-email/link'

const Connect = ()=>{
  return(
    <div className="connect ">  
      <Header></Header>
      <Top></Top>

      <div className="container connect_wrap">
        <div className="connect_content">
          <h3>Contact Me</h3>
          <Link href="https://mail.google.com/mail/u/0/#search/ulzhan.nabieva%40gmail.com">
            <p>ulzhan.nabieva@gmail.com</p>
          </Link>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validate={values => {
            const errors = {};
            if(!values.name){
              errors.name = 'Required'
            }
            if(!values.message){
              errors.message = 'Required'
            }
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            setSubmitting(false);
          }, 400);
          }}
        >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,}) => (
          <form onSubmit={handleSubmit} className='connect_form'>
            <div className="connect_form-error">
              <label htmlFor="">NAME</label>
              <label>{errors.name && touched.name && errors.name}</label>
            </div>
            <input type="name" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
            

            <div  className="connect_form-error">
              <label htmlFor="">EMAIL</label>
              <label>{errors.email && touched.email && errors.email}</label>
            </div>
            <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
            

            <div  className="connect_form-error">
              <label htmlFor="">MESSAGE</label>
              <label>{errors.message && touched.message && errors.message}</label>
            </div>
            <input type="message" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message}/>
            

            <button type="submit" disabled={isSubmitting}>SUBMIT</button>
          </form>
        )}
        </Formik>
        </div>
      </div>
    </div>
  )
}

export default Connect
