import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import store from '../../store/foodstore.js';
import ConnectRestrauntsComponent from '../contents/connectrestraunts.js';
export default class SmartComponent extends React.Component{

	render(){
		return (
			<Provider store={store}>
				<ConnectRestrauntsComponent/>
			</Provider>
			)
	}
}