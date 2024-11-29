import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  company: Yup.string().required("Company name is required"),
});

const AddUserForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
  };

  const onSubmit = (values) => {
    console.log("New User Data:", values);
  };

  return (
    <div className="flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
        {() => (
          <Form className="bg-white p-6 rounded-lg shadow-md w-[50rem]">
            <div>
              <h1 className="text-gray-700 font-bold text-xl pb-4">Add User Details</h1>
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-bold">Name</label>
              <Field name="name"
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="name"
                component="div"
                className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-bold">Email</label>
              <Field name="email" type="email" className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="email"
                component="div"
                className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-bold">Phone</label>
              <Field name="phone"
                type="tel"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="phone"
                component="div"
                className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label className="text-gray-700 font-bold">Company Name</label>
              <Field name="company"
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              <ErrorMessage name="company"
                component="div"
                className="text-red-500 text-sm mt-1" />
            </div>
            <div className="flex items-center justify-center">
              <button type="submit"
                className="py-2 px-8 bg-[#5B6CFF] text-white rounded-lg font-semibold text-base">
                Add User
              </button>
            </div>
          </Form>)}
      </Formik>
    </div>
  );
};

export default AddUserForm;
