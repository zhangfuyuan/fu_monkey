/**
 * Created by Administrator on 2017/4/12 0012.
 */

window.onload = function () {
    var oA = document.getElementsByClassName('link');
    //var oImg = document.getElementsByClassName('img');

    for(var i=0; i<5; i++){
        oA[i].index = i;
        oA[i].addEventListener('mousemove',function (e) {
            this.style.cssText = 'transform:rotateX(' + (-(e.clientY-document.getElementById('pp').offsetTop)*0.2+11)*2 + 'deg)  scale(1.2)  rotateY(' + ((e.clientX-document.getElementById('pp').offsetLeft-oA[this.index].offsetLeft)*0.1-11)*2 + 'deg);';
        });
        oA[i].addEventListener('mouseout',function () {
            this.style.transform = '';
        });
    }
    
};

