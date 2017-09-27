var imgUrl = require('../img/title-3.png');
alert("我是common.js")
$("p").click(function(){
	alert("jq已经全局存在了！")
})
$(".son").css("backgroundImage","url("+imgUrl+")");