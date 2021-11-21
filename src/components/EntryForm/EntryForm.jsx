import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";

export default function AddEntryForm(props) {
  const [state, setState] = useState({
    title:"",
    body:"",
  });

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAddEntry(state);
  }

  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
          <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Field>
                <input 
                    placeholder='title'
                    name="title"
                    onChange={handleChange}
                    value={state.title}
                    required
                />
            </Form.Field>
            <Form.TextArea 
                placeholder="scream into the void"
                name="body"
                onChange={handleChange}
                value={state.body}
                required
            />
            <Button type="submit" className="btn">
              +++
            </Button>
          </Form>
      </Grid.Column>
    </Grid>
  );
}
