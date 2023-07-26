import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const form = useRef();
  const onFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        "service_bcfxwoj",
        "template_5cgucij",
        form.current,
        "e5-pc8ZsdpLOmILub"
      );
        setLoading(false);
      console.log(result.text);
    } catch (error) {
      console.log(error.text);
    }
  };
  return (
    <div className="container">
      <h1>Contact</h1>
      <Form onSubmit={onFormSubmit} ref={form}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
          <Form.Control
            name="name"
            placeholder="Your name here."
            aria-label="name"

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
          <Form.Control
            // type="email"
            name="email"
            placeholder="email@example.com"
            aria-label="email"

          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Message</InputGroup.Text>
          <Form.Control
            name="message"
            placeholder="Your message here."
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        <Button type="submit" variant="primary" size="lg" active>
          Submit
        </Button>
      </Form>
      {loading && (
        <h2>loading...</h2>
      )}
    </div>
  );
}



//bootstrap options for alert components