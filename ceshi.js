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
