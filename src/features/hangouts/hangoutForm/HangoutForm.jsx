/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Button, Form, Header, Segment,
} from 'semantic-ui-react';
import cuid from 'cuid';

export default function HangoutForm({ setFormDisplayed, createHangout }) {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = () => {
    createHangout({
      ...values, id: cuid(), hostedBy: 'Rich', attendees: [], hostPhotoURL: '/assets/defaultUserImage.png',
    });
    setFormDisplayed(false);
  };

  return (
    <Segment clearing>
      <Header content="Create New Hangout" />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            name="title"
            type="text"
            placeholder="Hangout Title"
            value={values.title}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="category"
            type="text"
            placeholder="Category"
            value={values.category}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={values.description}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="city"
            type="text"
            placeholder="City"
            value={values.city}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="venue"
            type="text"
            placeholder="Venue"
            value={values.venue}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="date"
            type="text"
            placeholder="Date"
            value={values.date}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Create" />
        <Button onClick={() => setFormDisplayed(false)} type="submit" floated="right" content="Cancel" />
      </Form>
    </Segment>
  );
}
