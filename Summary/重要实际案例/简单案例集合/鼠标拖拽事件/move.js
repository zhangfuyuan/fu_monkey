/**
 * Created by Administrator on 2017/4/17 0017.
 */
window.onload = function () {
    var oDiv = document.getElementsByTagName('div')[0];


    //event对象在事件中可以直接调用
    oDiv.onmousedown = function () {
        var reX = event.offsetX;
        var reY = event.offsetY;
        document.onmousemove = function () {
            oDiv.style.left = event.clientX - reX + 'px';
            oDiv.style.top = event.clientY - reY + 'px';
        }
    }
    oDiv.onmouseup = function () {
        document.onmousemove = null;
    }
    
}