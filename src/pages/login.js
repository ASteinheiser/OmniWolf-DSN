import React, { Component } from 'react'
import { Link } from 'react-router'

import FormField from '../components/form-field'
import OpaqueContainer from '../components/opaque-container'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'

export default class Login extends Component {

  handleSubmit = () =>

  handleChange = (event) => {
    if (event.target.name == 'email') {
      this.setState({email: event.target.value})

    } else if (event.target.name == 'password') {
      this.setState({password: event.target.value})
    }
  }

  render() {
    return <OpaqueContainer>

      <form onSubmit={this.handleSubmit}>
        <FormField
          name='email'
          placeholder='Email'
          type='email'
          onChange={this.handleChange}/>
        <FormField
          name='password'
          placeholder='Password'
          type='password'
          onChange={this.handleChange}/>

        <PrimaryButton name='login' type='submit' text='Login'/>
      </form>

      <Link to='/signup'>
        <SecondaryButton name='signup' type='submit' text='Signup'/>
      </Link>

    </OpaqueContainer>
  }
}
