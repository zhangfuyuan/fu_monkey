/**
 * Created by Administrator on 2017/4/17 0017.
 */

window.onload = function () {
    var outer = document.getElementById('outer');
    var oUl = document.getElementById('banner');
    var btns = document.getElementById('btn').getElementsByTagName('li');
    var changePage = document.getElementsByTagName('p');

    banner(outer,oUl,btns,changePage,2000,800);
    function banner(outer,oUl,btns,changePage,duration,banwidth) {
        var page = 0;
        var maxPage = btns.length;

        //效果1：自动切换
        var timer = setInterval(move,duration);
        function move() {
            page++;
            if(page>maxPage){
                oUl.style.transition = '';
                page = 0;
                oUl.style.marginLeft = -page*banwidth + 'px';
                setTimeout(function () {
                    oUl.style.transition = 'all 2s';
                    page++;
                    oUl.style.marginLeft = -page*banwidth + 'px';
                },10);
            }
            oUl.style.marginLeft = -page*banwidth + 'px';
        }

        //效果2：数标切换
        outer.onmousemove = function () {
            clearInterval(timer);
        }
        outer.onmouseout = function () {
            timer = setInterval(move,duration);
        }
        for(var i=0; i<maxPage; i++){
            btns[i].index = i;
            btns[i].onclick = function () {
                page = this.index;
                oUl.style.marginLeft = -page*banwidth + 'px';
            }
        }

        //效果3：左右按钮
        changePage[0].onclick = function () {
            page--;
            if(page<0){
                oUl.style.transition = '';
                page = maxPage;
                oUl.style.marginLeft = -page*banwidth + 'px';
                setTimeout(function () {
                    oUl.style.transition = 'all 2s';
                    page--;
                    oUl.style.marginLeft = -page*banwidth + 'px';
                },10);
            }
            oUl.style.marginLeft = -page*banwidth + 'px';
        }
        changePage[1].onclick = function () {
            move();
        }
    }

}