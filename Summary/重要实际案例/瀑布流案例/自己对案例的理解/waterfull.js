/**
 * Created by Administrator on 2017/4/1 0001.
 */

    // 第一步：创建变量获取父子元素的名字
    // var cparent = document.getElementById(parent);
    // var ccontent = document.getElementsByClassName(content);

    // 第二步：解决居中问题，也即设定整体宽度
    //         而整体宽度应该由客户端浏览器的可见宽度而定，已知每个box的固定宽度，而一行应该有多少个box也是由客户端浏览器的可见宽度而定
    // var imgWidth = ccontent[0].offsetWidth;     //已知box的宽度是确定的
    // var numBox = Math.floor(document.documentElement.clientWidth/imgWidth);     //由客户端浏览器的可见宽度的响应变量除以已知的box宽度，得到一行box的个数变量
    // cparent.style.width = imgWidth * numBox + 'px';
    // cparent.style.margin = '0 auto';

    //第三步：瀑布流布局的实现过程，填满一行后的第一张图居于上一行最小高度图片的下方   ——  封装成一个方法 function imgLocation(parent,content){ }
    //        1.根据上一行的box数变量numBox判断，把上一行图片的*高度*放入一个数组中，然后遍历判断最小值，超出上一行的box数的图片依次进行其他判断   ——  创建数组
    // var imgHeightArr = [];
    // for(var i=0; i<ccontent.length; i++){
    //     if(i<numBox){
    //         imgHeightArr.push(ccontent[i].offsetHeight);    //  offsetHeight此元素可见高度
    //     }else {                                              //  超出上一行的box数的图片依次放置
    //
    //     }
    // }

    //        2.然后判断上一行最小高度   ——  Math.min方法判断
    // var minHeight = Math.min.apply(null,imgHeightArr);
    
    //        3.最后确定上一行最小高度图片的位置，再插入图片    ——  创建一个可以获取数组索引indxe的方法，并调用方法
    // function getMinIndex(arr,min) {
    //     for(j in arr){
    //         if(arr[j] == min){       //  是数组里面的元素（即高度）进行等值判断
    //             return j;
    //         }
    //     }
    // }

    // ccontent[i].style.position = 'absolute';        //  位移的前提是有定位关系
    // ccontent[i].style.left = ccontent[0].offsetWidth * getMinIndex(imgHeightArr,minHeight) + 'px';      //用子元素自身可见宽度*所得最小高度索引也可以得到位移距离
    // // 或者写成 ccontent[i].style.left = ccontent[getMinIndex(imgHeightArr,minHeight)].offsetLeft + 'px';      //ccontent[.].offsetLeft表示此元素与可见的左边界的距离
    // ccontent[i].style.top = minHeight + 'px';
    //imgHeightArr[getMinIndex(imgHeightArr,minHeight)] += ccontent[i].offsetHeight;        //自加后加图片高度，实现循环条件重置

    //第四步：瀑布流的最后一步  ——  自动加载（封装方法）function (){ }
    //        1.触发此封装方法的调用是有个前提的，需用窗口（滑动条）事件，即 window.onscroll = function(){ } ，并且放在页面加载函数内（侦听事件都要放入）
    // window.onscroll = function () {
    //
    // }

    //        2.自动加载有个条件：滑动条滑动到页面最下方，另需要一个判断函数
    //          而要判断的条件是：当前子元素数组的最后元素与可见的上边界的距离（包括滑动条大部分高度） < 滚动条滚动的距离（即滚动条顶部与滚动条所在条框顶部的距离，不包含滚动条自身高度） + 当前页面高度（即滚动条自身高度）【注意：滚动条相当于当前页面的缩影】
    // function checkLastImg() {
    //     var cparent = document.getElementById('container');
    //     var ccontent = document.getElementsByClassName('box');
    //     var lastHeight = ccontent[ccontent.length-1].offsetTop;     //当前子元素数组的最后元素与可见的上边界的距离（不包括滑动条高度）
    //     var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;;     //当前子元素数组的最后元素与可见的上边界的距离（包括滑动条高度）;‘||’解决兼容问题
    //     var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;     //当前页面高度；‘||’解决兼容问题
    //     if(lastHeight<scrollTop+pageHeight){
    //         return true;
    //     }
    // }

    //        3.达到自动加载条件后，用JS代码创建DOM的各层节点，并调用瀑布流布局imgLocation(parent,content)方法，实现自动加载新的图片
    //          创建一个关于图片路径的json数组
    // var imgData = {'data':[{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'}]};

    //          创建DOM的各层节点
    // if(checkLastImg()){
    //     var cparent = document.getElementById('container');     //父类继续用html的container
    //     for(var i=0; i<imgData.data.length; i++){
    //         //创建父类下的子节点（box）
    //         var ccontent = document.createElement('div');       //创建一个子节点，标签为div
    //         ccontent.className = 'box';                         //与HTML类名相同，样式便可复制
    //         cparent.appendChild(ccontent);                       //在父类中插入子节点
    //         //创建父类下的子节点的子节点(imgBox)
    //         var imgBox = document.createElement('div');
    //         imgBox.className = 'imgBox';
    //         ccontent.appendChild(imgBox);
    //         //创建父类下的子节点的子节点的子节点(img)
    //         var img = document.createElement('img');
    //         img.src = 'img/' + imgData.data[i].src;
    //         imgBox.appendChild(img);
    //     }
    //     imgLocation('container','box');     //不放在循环里的原因：图片自动加载是以一个图片为单位，而不是imgData.data.length为单位，所以checkLastImg()为true就要继续一张一张图片自加载
    // }

    //最后一步：梳理变量和函数调用的逻辑顺序，调整代码顺序
    //          最后实现瀑布流效果的代码如下：

window.onload = function () {

    //调用瀑布流布局函数
    imgLocation('container','box');

    //第四步.3     创建一个关于图片路径的json数组
    var imgData = {'data':[{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'},{'src':'29.jpg'}]};

    //第四步.1     滑动条侦听事件(** 若开始没有滑动条，此方法不会被调用！！！ **)
    window.onscroll = function(){
        if(checkLastImg()){
            var cparent = document.getElementById('container');
            for(var i=0; i<imgData.data.length; i++){

                var ccontent = document.createElement('div');
                ccontent.className = 'box';
                cparent.appendChild(ccontent);

                var imgBox = document.createElement('div');
                imgBox.className = 'imgBox';
                ccontent.appendChild(imgBox);

                var img = document.createElement('img');
                img.src = 'img/' + imgData.data[i].src;
                imgBox.appendChild(img);
            }
            imgLocation('container','box');
        }
    }


};

//瀑布流布局函数
function imgLocation(parent,content){
    //第一步
    var cparent = document.getElementById(parent);
    var ccontent = document.getElementsByClassName(content);

    //第二步
    var imgWidth = ccontent[0].offsetWidth;
    var numBox = Math.floor(document.documentElement.clientWidth/imgWidth);
    cparent.style.width = imgWidth * numBox + 'px';
    cparent.style.margin = '0 auto';

    //第三步.1
    var imgHeightArr = [];
    for(var i=0; i<ccontent.length; i++){
        if(i<numBox){
            imgHeightArr.push(ccontent[i].offsetHeight);
        }else {
            //第三步.2
            var minHeight = Math.min.apply(null,imgHeightArr);
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.left = ccontent[getMinIndex(imgHeightArr,minHeight)].offsetLeft + 'px';
            ccontent[i].style.top = minHeight + 'px';
            imgHeightArr[getMinIndex(imgHeightArr,minHeight)] += ccontent[i].offsetHeight;
        }
    }
}

//第三步.3  获取最小高度图片在数组中的索引
function getMinIndex(arr,min) {
    for(j in arr){
        if(arr[j] == min){
            return j;
        }
    }
}

//第四步.2     自加载条件判断函数
function checkLastImg() {
    var ccontent = document.getElementsByClassName('box');
    var lastHeight = ccontent[ccontent.length-1].offsetTop;
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;;
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    if(lastHeight<scrollTop+pageHeight){
        return true;
    }
}