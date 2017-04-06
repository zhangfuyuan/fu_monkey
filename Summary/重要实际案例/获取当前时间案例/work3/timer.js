/**
 * Created by Administrator on 2017/3/29 0029.
 */

window.onload = function () {
    var oP = document.getElementById('p1');
    function timer1() {
        var date = new Date();
        var ye = date.getFullYear();
        var mo = date.getMonth();
        var ri = date.getDate();
        var da = date.getDay();
        var ho = date.getHours();
        var mi = date.getMinutes();
        var se = date.getSeconds();

        mo = bZ(mo+1);
        ri = bZ(ri);
        da = cC(da);
        ho = bZ(ho);
        mi = bZ(mi);
        se = bZ(se);

        oP.innerHTML = ye + '年' + mo + '月' + ri + '日' + ' ' + da + ' ' + ho + ':' + mi + ':' + se
    }

    setInterval(timer1,1000);

}

function bZ(date) {
    if(date<10){
        date = '0' + date;
    }
    return date;
}

function cC(date) {
    switch(date){
        case 1:
            return '星期一';
            break;
        case 2:
            return '星期二';
            break;
        case 3:
            return '星期三';
            break;
        case 4:
            return '星期四';
            break;
        case 5:
            return '星期五';
            break;
        case 6:
            return '星期六';
            break;
        default:
            return '星期日';
            break;
    }
}