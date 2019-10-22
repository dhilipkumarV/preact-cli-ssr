import {h, Component} from 'preact';
import Home from './Component/Home';
import './style';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Home/>
			</div>
		);
	}
}

