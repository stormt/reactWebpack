export default var util = (function(util){
/**
 * 优先从cookie中取
 * 返回GUID，与createGuid不同的是，会首先检查LocalStorage中的值
 * @method Util.cUtilCommon.getGuid
 * @returns {string} GUID 唯一标示
 */
util.getGuid = function () {
		var guid = this.getCookie("GUID");
		var ws = window.localStorage;
		if(!guid){
			guid = ws.getItem('GUID') || '';
		}else{
			try{
				ws.setItem('GUID',guid);
			} catch (e){
			}
		}
	  return guid;
	};

	util.getCookie = function(key){
    var cookies = document.cookie;
    var value = "";
    if(cookies){
      var cookieArr = cookies.split("; ");
      for(var i= 0,cookie,index;i<cookieArr.length;i++){
        cookie = cookieArr[i];
        index = cookie.indexOf("=");
        if(cookie.substr(0,index) == key){
          value = cookie.substr(index+1);
        }
      }
    }
    return value;
  };


})(util || {});
