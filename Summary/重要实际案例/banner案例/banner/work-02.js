/**
 * Created by Administrator on 2017/3/31 0031.
 */

window.onload = function () {
    var oUl = document.getElementsByTagName('ul')[0];
    var oBtn1 = document.getElementById('btn_l');
    var oBtn2 = document.getElementById('btn_r');
    var oBan = document.getElementById('ban');

    var k = 0;

    function moveLeft() {       //向左移动（即下一张），是右按钮功能，整个Ul向左移，用left的负值实现
        k++;
        if (k==5){
            k=0;
        }
        oUl.style.left= -k*800 + "px";
    }

    function moveRight() {      //向右移动（即上一张），是左按钮功能，整个Ul向右移，用right的负值实现
        k--;
        if (k<0){
            k=4;
        }
        oUl.style.left= -k*800 + "px";
    }

    var timer = setInterval(moveLeft,1000);

    oBtn1.addEventListener('click',moveRight);
    oBtn2.addEventListener('click',moveLeft);
    oBtn1.addEventListener('mouseout',function () {
        timer = setInterval(moveLeft,1000);
    });
    oBtn2.addEventListener('mouseout',function () {
        timer = setInterval(moveLeft,1000);
    });

    oBan.addEventListener('mouseover',function () {
        clearInterval(timer);
    });

    oBan.addEventListener('mouseout',function () {
        clearInterval(timer);
        timer = setInterval(moveLeft,1000);
    });

}