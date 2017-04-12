/**
 * Created by Administrator on 2017/3/28 0028.
 */

window.onload = function () {
    var bgColor = ['','#FF0055','#8D7AFB','#A8C001','#A2745B','#FF4400','#FF4400','#FF4400'];
    var oA = document.getElementsByTagName('a');

    for( var i=1; i<oA.length; i++ ){

        oA[i].index = i;    // ** 循环所有oA 然后给每个oA 加上序列值,并只能应用在下标值位置，即[]内 **

        oA[i].onmouseover = function () {
            this.style.backgroundColor = bgColor[this.index] ;
            this.style.color = 'white';
        }

        oA[i].onmouseout = function () {
            this.style.backgroundColor = 'white';
            this.style.color = '';
        }
    }

}