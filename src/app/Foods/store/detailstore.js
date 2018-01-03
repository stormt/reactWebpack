import EventEmitter from 'events';
var DetailStore = Object.assign({},EventEmitter.prototype,{
	restfuldata:{},
	bottomHeaderOpacity:1,
	upperHeaderOpacity:0,
	addChangeListener:function(callback){
		this.on('change',callback);
	},
	setRestfulData:function(data){

		this.restfuldata = data;
	},
	removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
	emitChange: function () {
    this.emit('change');
  },
	getRestfulData:function(){

		return this.restfuldata;
	},
	getBottomOpacity:function(){
		return this.bottomHeaderOpacity;
	},
	setBottomOpacity:function(opa){
		this.bottomHeaderOpacity = opa;
	},
	getUpOpacity:function(){
		return this.upperHeaderOpacity;
	},
	setUpOpacity:function(opa){
		this.upperHeaderOpacity = opa;
	},
	resetOpacity:function(scrollTop){
			if(scrollTop > 60){
					this.bottomHeaderOpacity=0;
	        this.upperHeaderOpacity=1;
			}else if(scrollTop > 40){
					this.bottomHeaderOpacity = 0.3;
	        this.upperHeaderOpacity= 0.7;
			}else if(scrollTop > 20){
					this.bottomHeaderOpacity = 0.7;
	        this.upperHeaderOpacity= 0.3;
			}else if(scrollTop > 10){
					this.bottomHeaderOpacity = 0.9;
					this.upperHeaderOpacity= 0.1;
			}else if(scrollTop >= 0){
					this.bottomHeaderOpacity = 1;
					this.upperHeaderOpacity= 0;
			}
	}

});
export default DetailStore;
