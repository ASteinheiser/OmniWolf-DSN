import React, { Component } from 'react'
import { Link } from 'react-router'

import OpaqueContainer from '../components/opaque-container'
import FormField from '../components/form-field'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'

export default class Signup extends Component {
  render() {
    return <OpaqueContainer>

      <form action='/signup' method='post'>
        <FormField
          name='name'
          placeholder='Name'
          type='text'/>
        <FormField
          name='email'
          placeholder='Email'
          type='email'/>
        <FormField
          name='password'
          placeholder='Password'
          type='password'/>
        <FormField
          name='passwordConfirm'
          placeholder='Confirm Password'
          type='password'/>

        <PrimaryButton name='signup' type='submit' text='Signup'/>
      </form>

      <Link to='/login'>
        <SecondaryButton name='login' type='button' text='Login'/>
      </Link>

    </OpaqueContainer>
  }
}
