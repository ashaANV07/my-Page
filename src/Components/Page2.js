import React from 'react'
import { Field, Formik, Form } from "formik";

export const Page2 = () => {
  return (
    <div>
        <h3> Personal Details </h3>
        <Formik initialValues={{
            CDSL: "",
            Pan: "",
            name: "",
            phone: "",
            email: "",
            upi: "",
        }}
        onSubmit={(values) => {
            console.log(values);
          }}>

            {({values}) => (
                <Form>
                    <label> CDSL Number: </label>
                    <br />
                    <Field type="number" name="CDSL" />
                    <br/> <br/>
                    <label> Pan: </label>
                    <br />
                    <Field type="text" name="Pan" />
                    <br/> <br/>
                    <label> Name: </label>
                    <br />
                    <Field type="text" name="name" />
                    <br/> <br/>
                    <label> Mobile Number: </label>
                    <br />
                    <Field type="number" name="phone" />
                    <br/> <br/>
                    <label> Email: </label>
                    <br />
                    <Field type="email" name="email" />
                    <br/> <br/>
                    <label> Bank UPI: </label>
                    <br />
                    <Field type="number" name="upi" />
                    <br/> <br/>
                </Form>
            )}

        </Formik>
    </div>
  )
}
