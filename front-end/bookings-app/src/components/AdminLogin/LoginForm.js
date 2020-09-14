import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './services/Common';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function LoginForm(props) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
       Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <Button color='teal' fluid size='large' content={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
      </Grid.Column>
      </Grid>
      {/* <input type="button"  /><br /> */}
    </div>
  );
}


export default LoginForm;