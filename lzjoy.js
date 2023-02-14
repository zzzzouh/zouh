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
^http:\/\/cc.lzjoy.com\/.+$ url script-response-body lzjoy.js
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
    obj.is_lifelong_vip= "1";
obj.is_vip= "1";
obj.vip_num= 1102105;
obj.expire_date= "2099-12-31";
obj.vip_name= "终身卡";
obj.user_balance= "9999";
obj.expire_date_1= "2099-12-31";
obj.price= "0";
obj.sale_price= "0";
obj.has_buy= "1";
    $done({body: JSON.stringify(obj)});
