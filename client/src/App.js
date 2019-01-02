// Libraries
import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

// Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';
import Result from './components/result/result';
import AboutOurProject from './components/aboutOurProject/aboutOurProject';

// Actions

// utils and others
import store from './store';

class App extends Component{
    render(){
        return(
          	<Provider store={store}>
	            <Router>
	            	<div>
	            		<Navbar/>
		                <Route exact path='/' component={Home}/>
		                <Switch>
		                	<Route exact path = '/results' component ={Result} />
							<Route exact path = '/AboutOurProject' component ={AboutOurProject} />
		                </Switch>
	            	</div>
	            </Router>
          	</Provider>
        );
    }
}

export default App;