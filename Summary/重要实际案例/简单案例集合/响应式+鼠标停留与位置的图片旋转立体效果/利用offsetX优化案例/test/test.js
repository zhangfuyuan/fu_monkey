/**
 * Created by Administrator on 2017/4/18 0018.
 */

window.onload = function () {
    var oImg = document.getElementsByTagName('img')[0];
    
    oImg.onmousemove = function () {
        var e = event||arguments[0];
        var mouseX = e.offsetX;
        var mouseY = e.offsetY;
        this.style.cssText = 'transform:rotateX(' + (16-mouseY*0.16) + 'deg)  scale(1.1)  rotateY(' + (mouseX*0.08-16) + 'deg);';
    }
    oImg.onmouseout = function () {
        this.style.transform = '';
   }
    
}