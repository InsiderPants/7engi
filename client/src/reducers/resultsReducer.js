import {GET_RESULTS,LOADING_RESULTS} from '../actions/types'

const initialState = {
  resultData: {},
  isLoading: false
};

export default function(state=initialState,action){
  switch(action.type){
    case GET_RESULTS:
      return {...state,
      		resultData:action.payload,
          isLoading:false
      	};
    case LOADING_RESULTS:
      return {...state,
          isLoading:true
        };
    default:
      return state;
  }
}