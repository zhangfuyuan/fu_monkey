/**
 * Created by Administrator on 2017/4/10 0010.
 */

window.onload = function () {
    var oShow = document.getElementsByClassName('shows');
    var oBtn = document.getElementsByTagName('a');

    var k = 0;
    btnLight(0);

    for(var i=0; i<9; i++ ){
        oBtn[i].index = i;
        oShow[i].style.left = document.documentElement.clientWidth*i + 'px';
        oBtn[i].addEventListener('click',function () {
            btnLight(this.index);
            k = this.index-1;
            moveBanner();
        });
    }

    setInterval(moveBanner,3000);
    function moveBanner() {
        k++;
        if(k<9){
            btnLight(k);
            for(var i=0; i<9; i++ ){
                oShow[i].style.left = document.documentElement.clientWidth*(i-k) + 'px';
            }
        }else {
            btnLight(0);
            for(var i=0; i<9; i++ ){
                oShow[i].style.left = document.documentElement.clientWidth*i + 'px';
            }
            k = 0;
        }
    }

    function btnLight(num) {
        for(var i=0; i<9; i++){
            oBtn[i].style.backgroundPositionY = '0';
        }
        oBtn[num].style.backgroundPositionY = '-23px';
    }



}