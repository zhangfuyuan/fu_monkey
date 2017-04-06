/**
 * Created by Administrator on 2017/3/29 0029.
 */

window.onload = function () {
    var oSpan1 = document.getElementById('num1');
    var oSpan2 = document.getElementById('num2');
    var oSpan3 = document.getElementById('num3');
     var oBtn1 = document.getElementById('start');
    var oBtn2 = document.getElementById('stop');
    var oBtn3 = document.getElementById('restart');


    oBtn1.addEventListener('click',function () {

        this.style.display = 'none';

        var timer1 = setInterval(function () {
            oSpan1.innerHTML = Math.floor(Math.random()*3+5);
            oSpan2.innerHTML = Math.floor(Math.random()*3+5);
            oSpan3.innerHTML = Math.floor(Math.random()*3+5);
        },100);

        oBtn3.addEventListener('click',function () {
			clearInterval(timer1);
            timer1 = setInterval(function () {
                oSpan1.innerHTML = Math.floor(Math.random()*3+5);
                oSpan2.innerHTML = Math.floor(Math.random()*3+5);
                oSpan3.innerHTML = Math.floor(Math.random()*3+5);
            },100);
        });

        oBtn2.addEventListener('click',function () {
            clearInterval(timer1);
            var oNum1 = parseInt(oSpan1.innerText);
            var oNum2 = parseInt(oSpan2.innerText);
            var oNum3 = parseInt(oSpan3.innerText);
            if(oNum1 == 6 && oNum2 == 6 && oNum3 == 6){
                alert("恭喜中奖！恭喜中奖！恭喜中奖！恭喜中奖！恭喜中奖！");
            }else {
                alert("再来一次！");
            }
        });

    });

}