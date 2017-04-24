/**
 * Created by Administrator on 2017/4/18 0018.
 */

window.onload = function () {
    var oBtn = document.getElementsByTagName('button')[0];
    var oBall = document.getElementsByTagName('div')[0];
    
    oBtn.onclick = function () {
        var vX = 8;     //水平初始速度
        var vY = 0;     //垂直初始速度

        var timer = setInterval(function () {
            vY += 2;    //垂直定值加速度
            var t = oBall.offsetTop + vY;      //当前上边界距离
            var l = oBall.offsetLeft + vX;      //当前左边界距离
            if(t >= document.documentElement.clientHeight - oBall.offsetHeight ){   //底边临界条件
                t = document.documentElement.clientHeight - oBall.offsetHeight;     //定死临界状态
                vY*=-0.8;       //反弹效果
            } else if(t <= 0){      //顶边临界
                t = 0;
                vY*=-0.8;
            } 
            /*需要注意，t和l的判断条件不能连用else if，必须分开！*/
            if(l >= document.documentElement.clientWidth - oBall.offsetWidth ){        //右边临界
                l = document.documentElement.clientWidth - oBall.offsetWidth;
                vX*=-0.5;
            } else if(l <= 0){      //左边临界
                l = 0;
            }
            
            oBall.style.top = t + 'px';
            oBall.style.left = l + 'px';
        },20);
        
        
    }
}