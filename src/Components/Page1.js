import React from "react";
import { Field, Formik, Form } from "formik";

export const Page1 = () => {
  return (
    <div>
        <h3> BSE IPO Details </h3>
      <Formik
        initialValues={{
          BSEipo: "",
          Quantity: "",
          cutoff: "",
          utoffPrice: "",
          amount: "",
          BSEipoType: "",
          subCaterory: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label> BSE IPO: </label>
            <br />
            <Field as="select" name="BSEipo">
              <option value="option1"> Option1</option>
              <option value="option1"> Option1</option>
              <option value="option1"> Option1</option>
              <option value="option1"> Option1</option>
            </Field>
            <br /> <br />
            <label> Quantity: </label>
            <br />
            <Field as="select" name="Quantity">
              <option value="quantuty1"> quantuty1 </option>
              <option value="quantuty2"> quantuty2 </option>
              <option value="quantuty3"> quantuty3 </option>
              <option value="quantuty4"> quantuty4 </option>
            </Field>
            <br /> <br />
            <label>
              <Field type="checkbox" name="cutoff" />
              Cut-off Price:
            </label>
            <br />
            <Field type="number" name="cutoffPrice" />
            <br /> <br />
            <label> Amount: </label>
            <br />
            <Field type="number" name="amount" />
            <br /> <br/>
            <label> BSE IPO Type: </label>
            <br />
            <Field as="select" name="BSEipoType">
              <option value="type1"> Type 1</option>
              <option value="type2"> Type 2</option>
              <option value="type3"> Type 3</option>
              <option value="type4"> Type 4</option>
            </Field>
            <br /> <br />
            <label> Sub Category: </label>
            <br />
            <Field as="select" name="subCategory">
              <option value="subCategory1"> Sub Category-1</option>
              <option value="subCategory2"> Sub Category-2</option>
              <option value="subCategory3"> Sub Category-3</option>
              <option value="subCategory4"> Sub Category-4</option>
            </Field>
            <br /> <br />
          </Form>
        )}
      </Formik>
    </div>
  );
};
