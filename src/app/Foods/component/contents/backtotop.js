import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class BackToTop extends React.Component{
  constructor(props) {
    super(props);
  }

  backtotop(){

    var b = document.getElementById('detail_scroll_wraper');
    var distance_top = b.scrollTop;
    var raf = window.requestAnimationFrame || function(fn){
      setTimeout(fn,1000/60);
    }
    var stepinstance = distance_top / 6;
    var callback = function(){
      if(distance_top > 0){
        distance_top = b.scrollTop = distance_top - stepinstance;
        raf(callback);
      }

    }
    var timer = raf(callback);

  }

  render(){

      return(
        <div className={styleSheet.botfixedwrap +' ' + 'js_botfixedwrap'} style={{display:'none'}}>
            <div className={styleSheet['c-opitem'] +' '+ 'js_backToTop'} onClick={this.backtotop}></div>
        </div>
      )
  }
}
