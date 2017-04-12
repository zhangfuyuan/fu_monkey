/**
 * Created by Administrator on 2017/4/11 0011.
 */
window.onload = function () {
    var oDiv = document.getElementById('side');
    var oA = document.getElementById('aa');
    var oSpan = document.getElementById('bar');

    oDiv.addEventListener('mouseover',function () {
        moveSideBar(10,0);
    });
    oDiv.addEventListener('mouseout',function () {
        moveSideBar(-10,-200);
    });
    oSpan.style.opacity = 0;
    oSpan.addEventListener('mouseover',function () {
        graChange(0.05,1);
    });
    oSpan.addEventListener('mouseout',function () {
        graChange(-0.05,0);
    });

}

var timer = null;
function moveSideBar(v,s) {
    var oDiv = document.getElementById('side');
    clearInterval(timer);
    timer = setInterval(function () {
        if(oDiv.offsetLeft == s){
            clearInterval(timer);
        }else {
            oDiv.style.left = oDiv.offsetLeft + v +'px';
        }
    },33);
}

var timer2=null;
function graChange(v,s) {
    var oSpan = document.getElementById('bar');
    clearInterval(timer2);
    timer2 = setInterval(function () {
        if(parseFloat(oSpan.style.opacity) == parseFloat(s)){
            clearInterval(timer2);
        }else {
            oSpan.style.opacity = parseFloat(oSpan.style.opacity) + v;
        }
    },33);
}