import React from "react";
import Button from "react-bootstrap/Button";
import { Container} from "react-bootstrap";
import { Form, Input } from 'antd';

const ContactForm = () => {
  const onFinish = (values) => {
    alert('Success:', values) ;
  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo);
  };

  return (
    <Container fluid className="about-section" >
    <Container>
    <Form style={{"border":"10px solid white"}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <br/>
      <Form.Item 
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        <br/>
      <Form.Item
        label="Mail-id"
        name="Mail-Id"
        rules={[
          {
            required: true,
            message: 'Please input your Mail-Id!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <br/>
      <Form.Item
        label="Mobile No"
        name="Mobile No"
        rules={[
          {
            required: true,
            message: 'Please input your Mobile No!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <br/>
      <Form.Item
        label="Message"
        name="Message"
        rules={[
          {
            required: true,
            message: 'Please input your Message!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <br/>
      <br/><br/>
      <Form.Item>
      <Button color="info" type="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <br/><br/><br/><br/>
    </Container>
    </Container>
  );
};

export default ContactForm;