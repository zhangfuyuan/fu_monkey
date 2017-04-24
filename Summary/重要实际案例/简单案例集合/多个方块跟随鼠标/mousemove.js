/**
 * Created by Administrator on 2017/4/18 0018.
 */

window.onload = function () {
    var oBoxs = document.getElementsByTagName('div');
    
    document.onmousemove = function () {
        var e = window.event||arguments[0];
        var num = 0;
        var timer = setInterval(function () {
            if(num==oBoxs.length){
                clearInterval(timer);
                return;
            } else {
                oBoxs[num].style.left = e.clientX - 10 + 'px';
                oBoxs[num].style.top = e.clientY - 10 + 'px';
                num++;      
            }
            
        },20)
        
    }
}