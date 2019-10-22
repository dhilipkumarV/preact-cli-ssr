import {h, Component} from 'preact';
import { Router } from 'preact-router';
import Home from './Component/Home';
import NotFound from './Component/NotFound';
import './style';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
						<Home path="/" />
						<NotFound path="*"/>
					</Router>
			</div>
		);
	}
}

