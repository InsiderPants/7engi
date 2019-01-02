import axios from 'axios';
import { GET_ERRORS, GET_RESULTS, LOADING_RESULTS } from './types';

export const getResults = (data, history)=>(dispatch)=>{
	dispatch({type:LOADING_RESULTS});
	axios.post('/api/search/getResults', data)
		.then(res => {
			dispatch({
				type:GET_RESULTS,
				payload:res.data})
			history.push('/results');
		})
		.catch(err => 
			dispatch({
				type:GET_ERRORS,
				payload:err.response.data})
		);
}