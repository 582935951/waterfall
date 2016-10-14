/**
 * Created by –°»Û on 2016/9/10.
 */
onload = function () {
    imgLocation("container", "box");
    var dataImg = {"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"3.jpg"},{"src":"6.jpg"}]};
    window.onscroll =function(){
       if(checkFlag()){
          var ccontainer = document.getElementById("container");
           for(var i=0;i<dataImg.data.length;i++){
               var container = document.createElement("div");
               container.className = "box";
               ccontainer.appendChild(container);
               var boximg = document.createElement("div");
               boximg.className = "box_img";
               container.appendChild(boximg);
               var img = document.createElement("img");
               img.src = "img/"+dataImg.data[i].src;
               boximg.appendChild(img);
           }
           imgLocation("container", "box");
       }
    }
};
function checkFlag(){
    var ccontainer = document.getElementById("container");
    var ccontent = getChildElment(ccontainer, "box");
    var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
    if(lastContentHeight < scrollTop+pageHeight){
        return true
    }
}


function imgLocation(parent, content) {
    var ccontainer = document.getElementById(parent);
    var ccontent = getChildElment(ccontainer, content);
    var imgWidth = ccontent[0].offsetWidth;
    var num = Math.floor(document.documentElement.clientWidth/imgWidth);
    ccontainer.style.cssText = "width:"+num*imgWidth+"px";
    var ArrImgHeight = [];
    for(var i = 0;i < ccontent.length;i++){
        if(i<num){
            ArrImgHeight[i] = ccontent[i].offsetHeight;
        }else{
            var minHeight = Math.min.apply(null,ArrImgHeight);
            var minIndex = getMinHeightLocation(ArrImgHeight,minHeight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minHeight+"px";
            ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
            ArrImgHeight[minIndex] = ArrImgHeight[minIndex] + ccontent[i].offsetHeight;
        }
    }
        }

function getMinHeightLocation(ArrImgHeight,minHeight){
   for(var i in ArrImgHeight){
       if(ArrImgHeight[i] == minHeight){
           return i;
       }
   }
}

    function getChildElment(parent, content) {
        var allContent = [];
        var pcontent = parent.getElementsByTagName("*");
        for (var i = 0; i < pcontent.length; i++) {
            if (pcontent[i].className == content) {
                allContent.push(pcontent[i]);
            }
        }
        return allContent;
    }