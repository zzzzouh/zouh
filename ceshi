/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
虫虫
脚本名称:虫虫
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/cc.lzjoy.com\/.+$ url script-response-body lzjoy.js
[mitm] 
hostname = *.lzjoy.*
*******************************
Surge

[Script]
^http[s]?:\/\/cc.lzjoy.com\/.+$ requires-body=1,max-size=0,script-path=lzjoy.js

[MITM]
hostname = *.lzjoy.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.is_lifelong_vip= "0;
obj.data.is_vip= "1;
obj.data.vip_num= 1;
obj.data.expire_date= "终身会员不会过期;
obj.data.vip_name= "终身会员;
    $done({body: JSON.stringify(obj)});
