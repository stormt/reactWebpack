//import Util from './Util.js';
// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';
export default class AbstractModel{
		constructor(){
			/**
			 * 数据请求url, 必填
			 * @name cAbstractModel#url
			 * @type {string}
			 */
			this.url = null;

			/**
			 * 请求参数,必选
			 * @name cAbstractModel#param
			 * @type {object}
			 */
			this.param = {};

		/**
		 * 提交数据格式 json/form/jsonp, 默认json
		 * @name cAbstractModel#contentType
		 * @type {string}
		 */
		 this.contentType = AbstractModel.CONTENT_TYPE_JSON;

	  /**
		 * 数据提交方式,post/get， 默认post
		 * @name cAbstractModel#method
		 * @type {string}
		 */
			this.method = 'POST';

		 /**
			 * 超时时间
			 * @name cAbstractModel#timeout
			 * @type {number}
			 */
			this.timeout = 30000;

		/**
		 * 通讯协议,http/https,默认为``location.protocol``
		 * @name cAbstractModel#protocol
		 * @type {string}
		 */
		  this.protocol = (window.location.protocol.indexOf("https") == -1) ? "https" : "http";
		}

	/**
   * Model的单例获取方式
   * @method cAbstractModel.getInstance
   * @returns {object}
   */
    static getInstance(){
				if(this.instance && this.instance instanceof this){
					return this.instance;
				}else{
					this.instance = new AbstractModel();
					return this.instance;
				}
		}

		/**
	 * 发送数据请求数据
	 * @param {Function} onComplete 取完的回调函数
	 * @param {Function} onError 发生错误时的回调
	 * @param {Boolean} [ajaxOnly] 可选，默认为false当为true时只使用ajax调取数据
	 * @param {Boolean} [scope] 可选，设定回调函数this指向的对象
	 * @param {Function} [onAbort] 可选，取消时会调用的函数
	 */
	execute(onComplete, onError, scope, onAbort) {
		this._execute(onComplete, onError, scope, onAbort);
	}

	_execute(onComplete, onError, scope, onAbort){
		// @description 请求数据的地址
		//先写死，框架太他妈sb了。
		this.param.head = {"cid":"09031014211785765051","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":null,"extension":[{"name":"protocal","value":"http"}]}
		this.param["contentType"]="json";
		var url = this.buildurl();
		if(this.method == 'POST'){
				// var reqHeaders = new Headers({
				// 		"Accept":"application/json",
				// 		"accept-encoding":"gzip, deflate",
				// 		"accept-language":"zh-CN,zh;q=0.8",
				// 		"cache-control":"no-cache",
				// 		"connection":"keep-alive",
				// 		"content-type":"application/json",
				// 		"credentials":"credentials"
        //
				// });
				// var myInit = {
				// 			 method: 'POST',
        //        headers: reqHeaders,
				// 			 body:JSON.stringify(this.param),
        //        mode: 'cors',
        //        cache: 'default' };
        //
				// var myRequest = new Request(url, myInit);
				// fetch(myRequest).then(onComplete,onError);
				var XHRObj = new XMLHttpRequest();
				XHRObj.onreadystatechange = function(){
						if(XHRObj.readyState == 4){
								var status = XHRObj.status;
								if(status>=200 && status<300){
										onComplete.call(null,XHRObj.responseText);
								}else{
										onError.call(null,status);
								}
						}
				}
				XHRObj.open("POST",url,true);
				XHRObj.setRequestHeader('content-type',"application/json");
				XHRObj.setRequestHeader('Accept',"application/json");
				XHRObj.send(JSON.stringify(this.param));

		}else{

		}



	}

	/**
	 * 设置提交参数的值，如只传key一个参数，则置
	 * @param {string|object} key 参数
	 * @param {object} val 参数值
	 */
	setParam(key, val) {
			if(typeof key == 'object' && !val){
					for(var keyy in key){
						this.param[keyy] = key[keyy];
					}
			}else{
				this.param[key] = val;
			}

	}

	/**
	 * 获取model的查询参数
	 * @returns {json|Store} param  查询参数
	 */
	getParam () {
		return this.param || {};
	}

	isUrl(url) {
		return /^http(s)?:\/\/[A-Za-z0-9\-]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\:+!]*([^<>])*$/.test(url);
	}

	buildurl() {
		var url = this.url;
		if (!this.isUrl(this.url)) {
			var domain = 'm.ctrip.com',restfulApi = "";
			if( this.protocol == "http"){
				restfulApi ="http://m.ctrip.com/restapi";
			}else if(this.protocol == "https"){
				restfulApi = "https://m.ctrip.com/restapi";
			}
			url = restfulApi +  this.url;
		} else {
			if (url.trim().indexOf('http://') === 0 && location.protocol === 'https:') {
				url = 'https://' + url.trim().substr(7);
			}
		}
		return url;
	}

	//增加model url请求的后缀
	appendSuffix(url){
		var cid = Util.getGuid();
		//如果h5,并且clienId为服务端下发
		if(cid && cid.indexOf('-') < 0){
			var segChar = url.indexOf('?')>-1 ? "&":'?' ;
			url = url + segChar + '_fxpcqlniredt=' + cid;
		}
		return url;
	}


}

  /**
   * JSON方式提交请求
   * @constants
   * @name cAbstractModel.CONTENT_TYPE_JSON
   **/
  AbstractModel.CONTENT_TYPE_JSON = 'json';
  /**
   * FORM方式提交请求
   * @constants
   * @name cAbstractModel.CONTENT_TYPE_FORM
  **/
  AbstractModel.CONTENT_TYPE_FORM = 'form';
  /**
   * JSONP方式提交请求
   * @constants
   * @name cAbstractModel.CONTENT_TYPE_JSONP
  **/
  AbstractModel.CONTENT_TYPE_JSONP = 'jsonp';
