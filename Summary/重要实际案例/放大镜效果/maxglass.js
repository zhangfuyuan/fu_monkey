/**
 * Created by Administrator on 2017/4/17 0017.
 */

window.onload = function () {
    var oBox = document.getElementsByClassName('box')[0];
    var oSpan = document.getElementsByTagName('span')[0];
    var oBig = document.getElementsByClassName('big')[0];

    //鼠标划入划出事件给oBox
    oBox.onmouseover = function () {
        oSpan.style.display = 'block';
        oBig.style.display = 'block';
    }
    oBox.onmouseout = function () {
        oSpan.style.display = '';
        oBig.style.display = '';
    }

    //鼠标移动事件给oBox
    oBox.onmousemove = function () {
        var e = event||arguments[0];
        var l = e.clientX - oBox.offsetLeft - oSpan.offsetWidth/2;
        var t = e.clientY - oBox.offsetTop - oSpan.offsetHeight/2;

        //给予放大镜范围限制
        /*X的限制*/
        if(l <= 0){
            l = 0;
            oSpan.style.left = '0px';
        } else if(l >= (oBox.offsetWidth-oSpan.offsetWidth)){
            l = oBox.offsetWidth-oSpan.offsetWidth;
            oSpan.style.left = (oBox.offsetWidth-oSpan.offsetWidth) + 'px';
        }else {
            oSpan.style.left = l + 'px';
        }
        /*Y的限制*/
        if(t <= 0){
            t = 0;
            oSpan.style.top = '0px';
        } else if(t >= (oBox.offsetHeight-oSpan.offsetHeight)){
            t = oBox.offsetHeight-oSpan.offsetHeight;
            oSpan.style.top = (oBox.offsetHeight-oSpan.offsetHeight) + 'px';
        }else {
            oSpan.style.top = t + 'px';
        }

        //放大区域跟随播放效果
        var xK = 800/oBox.offsetWidth;      /*水平等比例跟随、放大*/
        var yK = 800/oBox.offsetHeight;     /*垂直等比例跟随、放大*/
        oBig.style.backgroundPosition = (-l*xK) + 'px ' + (-t*yK) + 'px';
        
    }

}