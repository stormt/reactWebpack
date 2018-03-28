import React from 'react';
import ReactDOM from 'react-dom';
import stylesheet from './foods.css';
import IndexContainer from './component/container/indexcontainer';
ReactDOM.render(
  <IndexContainer/>,
  document.getElementById('main')
);
// import { Map, List ,is} from 'immutable';

// var Component = React.createClass({

//   getInitialState() {
//     return {
//       data: Map({ count: 0, items: List() })
//     }
//   },

//   handleCountClick() {	
//     this.setState(({data}) => ({
//       data: data.update('count', v => v + 1)
//     }));
//   },

//   handleAddItemClick() {
//     this.setState(({data}) => ({
//       data: data.update('items', list => list.push(data.get('count')))
//     }));
//   },

//   render() {
//     var data = this.state.data;
//     return (
//       <div>
//         <button onClick={this.handleCountClick}>Add to count</button>
//         <button onClick={this.handleAddItemClick}>Save count</button>
//         <div>
//           Count: {data.get('count')}
//         </div>
//         Saved counts:
//         <ul>
          
//         </ul>
//       </div>
//     );
//   }

// });


// ReactDOM.render(
//   <Component/>,
//   document.getElementById('main')
// );
//  var profile = React.createElement('div',{className:'test'},
//  	React.createElement('img',{src:'sss.png'}),
//  	React.createElement("h3", null, "this is a test")
//  	);
//  console.log(profile);

//  import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class MyContainer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 1
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.state.count++;
//         this.setState({
//             count: this.state.count++
//         })
//         console.log(this.state)
//     }

//     render() {
//     	var self= this;
//         const childrenWithProps = React.Children.map(this.props.children,function(child){
//         	console.log(child);
//         	return React.cloneElement(child,{
//                 parentState: self.state.count,
//                 handleClick: self.handleClick
//             });
//         });
//         return (
//             <div style={{border:"1px solid blue"}}>
//                 <span>父容器:</span>
//                 { childrenWithProps }
//             </div>
//         )
//     }


// }
// class MySub extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             flag: false
//         }
//     }

//     render() {
//         return (
//             <div style={{margin: "15px", border: "1px solid red"}}>
//                 子元素:{this.props.subInfo}
//                 <br/>
//                 父组件属性count值: { this.props.parentState }
//                 <br/>
//                 <span onClick={ () => this.props.handleClick() } 
//                       style={{display:"inline-block",padding: "3px 5px", color:"#ffffff", background: "green", borderRadius: "3px", cursor: "pointer"}} 
//                 >click me</span>
//             </div>
//         )
//     }
// }
// ReactDOM.render (
//     (
//         <MyContainer>
//             <MySub subInfo={"1"}/>
//             <MySub subInfo={"2"}/>
//         </MyContainer>
//     )
//     , document.getElementById('main'))


// ReactDOM.render({
//   type: Form,
//   props: {
//     isSubmitted: false,
//     buttonText: 'OK!'
//   }
// }, document.getElementById('main'));

// const Form = ({ isSubmitted, buttonText }) => {
//   if (isSubmitted) {
//     // Form submitted! Return a message element.
//     return {
//       type: Message,
//       props: {
//         text: 'Success!'
//       }
//     };
//   }

//   // Form is still visible! Return a button element.
//   return {
//     type: Button,
//     props: {
//       children: buttonText,
//       color: 'blue'
//     }
//   };
// };

// class Dotest extends React.Component{

// 	constructor(props) {
// 	  super(props);
// 	  this.handleclick = this.handleclick.bind(this);
// 	  this.state = {
// 	    color: "red"
// 	  };
// 	}

// 	shouldComponentUpdate(nextProps, nextState){

// 		console.log("shouldComponentUpdate");
// 		return true;
// 	}

// 	componentWillReceiveProps(nextProps){
// 		console.log("componentWillReceiveProps");

// 	}

// 	componentWillUpdate(nextProps, nextState){

// 		console.log("componentWillUpdate");
// 	}

// 	componentDidUpdate(prevProps, prevState){

// 		console.log("componentDidUpdate");
// 	}

// 	handleclick(){

// 		this.setState({});

// 	}

// 	render(){
// 		return(

// 			<div onClick={this.handleclick}>click   me</div>

// 		);
// 	}


// }

// import PropTypes from 'prop-types';

// class Button extends React.Component {
//   render() {
//     return (
//       <button style={{background: this.context.color}}>
//         {this.props.children}
//       </button>
//     );
//   }
// }

// Button.contextTypes = {
//   color: PropTypes.string
// };

// class Message extends React.Component {

// 	shouldComponentUpdate(nextprops,nextstate){
// 		if(nextprops.text == this.props.text){
// 			return false;
// 		}
// 		return true;
// 	}

//   render() {
//     return (
//       <div>
//         {this.props.text} <Button>Delete</Button>
//       </div>
//     );
//   }
// }

// class MessageList extends React.Component {
// 	constructor(props,context){
// 		super(props);
// 		this.state = {
// 			color:'yellow'

// 		}

// 	}
//   getChildContext() {
//     return {color: this.state.color};
//   }

//   componentDidMount(){
//   	var self = this;
//   		setTimeout(function(){

// 			self.setState({

// 	  			color:'red'
// 	  		});
//   		},3000);
  		

//   }


//   render() {
//     const children = this.props.messages.map((message,index) =>
//       <Message key={index} text={message.text} />
//     );
//     return <div>{children}</div>;
//   }
// }

// MessageList.childContextTypes = {
//   color: PropTypes.string
// };

// var messages = [{text:'hello'},{text:'world'}];
// ReactDOM.render(
//   <MessageList messages={messages}/>,
//   document.getElementById('main')
// );

