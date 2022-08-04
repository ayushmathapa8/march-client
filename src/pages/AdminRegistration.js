import React, { useState } from "react";
import { Footer } from "../components/footer/Footer";
import { Button, Container, Form } from "react-bootstrap";
import { Header } from "../components/header/Header";
import { CustomInputField } from "../components/customInputField/CustomInputField";

export const AdminRegistration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "email",
      placeholder: "Sam",
    },

    {
      label: "Last Name",
      name: "fName",
      type: "email",
      placeholder: "email",
    },
    {
      label: "Email",
      name: "Email",
      type: "email",
      placeholder: "you@gmail.com",
      required: true,
    },

    {
      label: "Phone",
      name: "Phone",
      type: "number",
      placeholder: "67890543",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "1 george st sydney",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
    {
      label: " Confirm Password",
      name: "confirm Password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
  ];

  return (
    <div>
      <Header />

      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1>New AdminRegistration</h1>

            {fields.map((item, i) => (
              <CustomInputField key={i} {...item} onChange={handleOnChange} />
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default AdminRegistration;
