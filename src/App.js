//React and pages
import React, {Component} from 'react';
import GitHubApp from './pages/GitHubApp/GitHubApp';
import ListRepositories from './pages/ListRepositories/ListRepositories';
import ListStarred from './pages/ListStarred/ListStarred';
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './Reducers';
// Router
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Config from './Config';
//css
import './app.css';

const store = createStore(Reducers); 
class App extends Component{
	render(){
		return(
				<Provider store={store}>
					<BrowserRouter basename={Config.BASE_URL}>
						<Route  exact path="/" component={GitHubApp} />
						<Route path="/repositorios" component={ListRepositories}/>
						<Route path="/starred" component={ListStarred}/>
					</BrowserRouter>
				</Provider>
		);
	}
}
export default App;