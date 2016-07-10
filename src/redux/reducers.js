import { VALIDATE_TOKEN } from './actions'

export default function reducer(state = {}, action) {

  switch(action.type){

    case VALIDATE_TOKEN:
      return Object.assign({},state,{
        isValid: isValid(action.token)
      })
      break;

    default:
      return state
  }
}

function isValid(token) {
  return true
}
