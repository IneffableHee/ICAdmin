/**
 *
 *  Base64 encode / decode
 *
 *  @author heyong
 *  @date   2018-09-26
 *
 */

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	} else {
		return null;
	}
}

function getCookie(c_name) {
	//判断document.cookie对象里面是否存有cookie
	if(document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		//如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
		if(c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if(c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

function Setcookie(name, value) {
	if(getCookie(name)!="") delCookie(name);
	//设置名称为name,值为value的Cookie
	var expdate = new Date(); //初始化时间
	expdate.setTime(expdate.getTime() + 30 * 60 * 1000); //时间单位毫秒
	document.cookie = name + "=" + value + ";expires=" + expdate.toGMTString() + ";path=/";

	//即document.cookie= name+"="+value+";path=/";  时间默认为当前会话可以不要，但路径要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！
}

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if(cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//function getCookie(c_name) {
//	if(document.cookie.length > 0) {
//		c_start = document.cookie.indexOf(c_name + "=");
//		if(c_start != -1) {
//			c_start = c_start + c_name.length + 1;
//			c_end = document.cookie.indexOf(";", c_start);
//			if(c_end == -1) c_end = document.cookie.length;
//			return unescape(document.cookie.substring(c_start, c_end));
//		}
//	}
//	return "";
//}
//
//function setCookie(c_name, value) {
//	expiredays = 30;
//	var exdate = new Date();
//	exdate.setDate(exdate.getDate() + expiredays);
//	document.cookie = c_name + "=" + escape(value) +
//		((expiredays == null) ? "" : "; expires=" + exdate.toGMTString());
//}