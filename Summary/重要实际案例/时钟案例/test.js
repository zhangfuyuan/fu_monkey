/**
 * Created by Administrator on 2017/3/29 0029.
 */
window.onload = function() {
    var oNumber=document.getElementById("number");      //获取时钟上的数值
    var oDiv=oNumber.getElementsByTagName("div");       //获取id为number层下的div元素，即每层时钟上的数值的div
    var oSpan=oNumber.getElementsByTagName("span");     //获取id为number层下的span元素，即每层时钟上的数值的span
    for(var i=0;i<oDiv.length;i++){
        oDiv[i].style.WebkitTransform="rotate(" + i * 30 + "deg)";      //从时钟上的9开始，每个数所在的div层依次顺时针叠加旋转30°
    }
    for(var j=0;j<oSpan.length;j++){
        oSpan[j].style.WebkitTransform="rotate("+ j * -30 + "deg)";     //从时钟上的9开始，每个数所在的span层依次逆时针叠加旋转30°
    }
    function ColorNumber(){
        var oHoure=document.getElementById("houre");        //获取时针元素
        var oMinute=document.getElementById("minute");      //获取分针元素
        var oSecond=document.getElementById("second");      //获取秒针元素

        var nowTime=new Date();                                //实例化Date对象
        var nowHoure=nowTime.getHours();                       //获取当前时钟数
        var nowMinute=nowTime.getMinutes();                    //获取当前分钟数
        var nowSecond=nowTime.getSeconds();                    //获取当前秒钟数
        var houreDeg=(nowMinute/60)*30;                         //将每1小时，即任意两个数值之间的角度设定为30°，并将分钟数换算成时钟数的角度
        var minuteDeg=(nowSecond/60)*6;                        //将每5分钟，即任意两个数值之间的角度设定为30°，并将秒钟数换算成分钟数的角度
        oHoure.style.WebkitTransform="rotate("+ (nowHoure * 30+houreDeg) + "deg)";      //将当前时钟数与分钟转换数的和换算成时针实际偏移角度（每1小时30°）
        oMinute.style.WebkitTransform="rotate("+ (nowMinute * 6+ minuteDeg) + "deg)";   //将当前分钟数与秒钟转换数的和换算成分针实际偏移角度（每1分钟6°）
        oSecond.style.WebkitTransform="rotate("+ (nowSecond * 6) + "deg)";              //换算成秒针实际偏移角度（每1秒钟6°）
    }
    ColorNumber();                      //调用ColorNumber函数
    setInterval(ColorNumber,1000);      //启动定时器，并每1秒刷新一次
}
