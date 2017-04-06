/**
 * Created by Administrator on 2017/3/31 0031.
 */

window.onload = function () {
    var bgColor = ['red','pink','yellow','blue'];
    var oTil = document.getElementsByClassName('til');
    var oCon = document.getElementsByClassName('con');

    for(var i=0; i<4; i++){
        oTil[i].index = i;
        oTil[i].addEventListener('mouseover',function () {
            this.style.backgroundColor = bgColor[this.index];
            oCon[this.index].style.display = 'block';
            oCon[this.index].style.color = bgColor[this.index];
        });
        oTil[i].addEventListener('mouseout',function () {
            this.style.backgroundColor = '';
            oCon[this.index].style.display = '';
            oCon[this.index].style.color = '';
        });
    }


}
