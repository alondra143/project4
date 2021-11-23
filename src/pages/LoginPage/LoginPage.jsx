import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import {useNavigate, Link } from "react-router-dom";
import {Button, Form, Grid, Header, Icon, Message, Segment} from "semantic-ui-react";

export default function LoginPage(props) {
  const [errr, setErrr] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpLogin();
      navigate("/");
    } catch (errr) {
      // probably duplicate email)
      setErrr(errr.message);
    }
  }

  return (
    <div style={{backgroundImage: `url("https://i.imgur.com/iLV9uSr.jpg")`, backgroundSize: 'cover'}} id="logindiv">
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="red" textAlign="center">
            <Icon name="star" />Login to Ventigo
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color="red"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Message>
          {errr ? <ErrorMessage error={errr} /> : null}
        </Grid.Column>
      </Grid>
    </div>
  );
}

