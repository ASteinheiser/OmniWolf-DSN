import {TEST_ACTION} from './actions'

export default function reducer(state = {}, action){
  switch(action.type){
    case TEST_ACTION:
      return Object.assign({},state,{
        text:action.text
      })
      break;
    default:
      return state
  }
}
