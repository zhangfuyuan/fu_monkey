/**
 * Created by Administrator on 2017/4/17 0017.
 */

function calc() {
    var e = window.event||arguments[0];
    var src = e.srcElement||e.target;
    var txt = document.querySelectorAll('#txt')[0];
    if(src.nodeName == 'BUTTON'){		//此处一定要大写
        switch(src.innerHTML){
            case 'C':
                txt.innerHTML = '';
                break;
            case '=':
                txt.innerHTML = eval(txt.innerHTML);
                break;
            default:
                txt.innerHTML += src.innerHTML;
                break;
        }
    }
}
    

