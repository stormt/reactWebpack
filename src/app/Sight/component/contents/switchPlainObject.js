import {toJS} from 'immutable';
import React from 'react';
export default function switchPlainObject(WrappedComponent){

	return function(WrappedComponentProps){
		console.log(WrappedComponentProps);
		const propsJS = Object.entries(WrappedComponentProps).reduce((newProps,WrappedComponentProp)=>{
			newProps[WrappedComponentProp] = WrappedComponentProps[WrappedComponentProp] && WrappedComponentProps[WrappedComponentProp].toJS();

			return newProps;
		},{})


		return <WrappedComponent {...propsJS} />
	}


}