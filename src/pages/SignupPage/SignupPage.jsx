import React, {useState} from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment, Icon } from "semantic-ui-react";
import { useNavigate, Link } from 'react-router-dom';
import userService from '../../utils/userService';


export default function SignUpPage(props){
  const navigate = useNavigate(); // <- programtically navigate to a different route

  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    bio: "",
  });

  const [selectedFile, setSelectedFile] = useState('')


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state, 'this is state')
  };

  
  async function handleSubmit(evt){
    evt.preventDefault();
    // sets formData to pass through fetch request
    const formData = new FormData();

    formData.append('photo', selectedFile)

    for (let key in state) {
      formData.append(key, state[key])
    }
    try {
      await userService.signup(formData)
      props.handleSignUpLogin()
      navigate('/')
    }catch(err){
      console.log(err)
      setError(err.Message);
    }
  }

  function handleImage(e){
    console.log(e.target.files)
    console.log(e.target.files[0], 'this is the image file') // where the information lives
    setSelectedFile(e.target.files[0])
  }
  
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
   <Grid.Column style={{ maxWidth: 450 }}>
     <Header as="h2" color="red" textAlign="center">
       <Icon name="star" />Join the Conversation
     </Header>
     <Form autoComplete="off" onSubmit={handleSubmit}>
       <Segment stacked>
         <Form.Input
           name="username"
           placeholder="username"
           value={state.username}
           onChange={handleChange}
           required
         />
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
         <Form.Input
           name="passwordConfirm"
           type="password"
           placeholder="confirm password"
           value={state.passwordConf}
           onChange={handleChange}
           required
         />
         <Form.TextArea
           label="bio"
           name="bio"
           placeholder="say something about yourself!"
           onChange={handleChange}
         />
         <Form.Field>
           <Form.Input
             type="file"
             name="photo"
             placeholder="upload avatar"
             onChange={handleImage}
           />
         </Form.Field>
         <Button type="submit" className="btn">
           signup
         </Button>
         <br/>
         Already have an account? <Link to="/login">Login</Link>
       </Segment>
       {error ? <ErrorMessage error={error} /> : null}
     </Form>
   </Grid.Column>
 </Grid>

   );
}
