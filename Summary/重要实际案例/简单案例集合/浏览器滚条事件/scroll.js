/**
 * Created by Administrator on 2017/4/17 0017.
 */

window.onload = function () {
    var txt = document.getElementById('txt');
    var sec = document.getElementById('sec');
    var odiv = document.getElementById('box').getElementsByTagName('div')[0];
    
    window.onscroll = function () {
        var scrolltop = document.body.scrollTop||document.documentElement.scrollTop;
        txt.innerHTML = 'odiv.offsetWidth:' + odiv.offsetWidth + '\n' +
                         'odiv.offsetHeight:' + odiv.offsetHeight + '\n' +
                         'odiv.clientWidth:' + odiv.clientWidth + '\n' +
                         'odiv.clientHeight:' + odiv.clientHeight + '\n' +
                         'odiv.offsetTop:' + odiv.offsetTop + '\n' +
                         'odiv.offsetLeft:' + odiv.offsetLeft + '\n' +
                         '当前srcolltop为：' + scrolltop;
        if(scrolltop>500){
            sec.style.display = 'block';
        }else {
            sec.style.display = '';
        }
    }
    
    sec.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
}