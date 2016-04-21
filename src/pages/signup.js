import React, { Component } from 'react'
import { Link } from 'react-router'

import OpaqueContainer from '../components/opaque-container'
import FormField from '../components/form-field'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'

export default class Signup extends Component {

  handleSubmit = () =>
    console.log('submitting: ', this.state.email, ' and ', this.state.password)

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
          name='name'
          placeholder='Name'
          type='text'
          onChange={this.handleChange}/>
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
        <FormField
          name='passwordConfirm'
          placeholder='Confirm Password'
          type='password'
          onChange={this.handleChange}/>

        <PrimaryButton name='signup' type='submit' text='Signup'/>
      </form>

      <Link to='/login'>
        <SecondaryButton name='login' type='button' text='Login'/>
      </Link>

    </OpaqueContainer>
  }
}
