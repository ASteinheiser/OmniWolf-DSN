import React, { Component } from 'react'
import { Link } from 'react-router'

import FormField from '../components/form-field'
import OpaqueContainer from '../components/opaque-container'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'

export default class Login extends Component {
  render() {
    return <OpaqueContainer>

      <form>
        <FormField
          name='email'
          placeholder='Email'
          type='email'/>
        <FormField
          name='password'
          placeholder='Password'
          type='password'/>

        <PrimaryButton name='login' type='submit' text='Login'/>
      </form>

      <Link to='/signup'>
        <SecondaryButton name='signup' type='submit' text='Signup'/>
      </Link>

    </OpaqueContainer>
  }
}
