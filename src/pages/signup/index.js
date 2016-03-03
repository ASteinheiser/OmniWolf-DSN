import React, { Component } from 'react'

import OpaqueContainer from '../../components/opaque-container'
import FormField from '../../components/form-field'
import PrimaryButton from '../../components/primary-button'
import SecondaryButton from '../../components/secondary-button'

export default class Signup extends Component {
  render() {
    return <OpaqueContainer>

      <form>
        <FormField
          name='email'
          placeholder='Email'
          type='email'/>
        <FormField
          name='emailConfirm'
          placeholder='Confirm Email'
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

      <a href='/login'>
        <SecondaryButton name='login' type='button' text='Login'/>
      </a>

    </OpaqueContainer>
  }
}
