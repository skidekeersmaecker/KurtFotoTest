
window.onload = function(){
    setPictures();
};

function setPictures() {
    setPicturesInHtml("showPictures", 12, "show");
    setPicturesInHtml("displayPictures", 3, "display");
    setSizesPicturesOfClass("show");
    setSizesPicturesOfClass("display");
}
function setPicturesInHtml(divID, amount, className) {
    var innerHtml = "";
    for (var i = 1; i < amount + 1; i++){
        innerHtml += '<img src="pictures/' + i + '.png" class="' + className + '">';
    }
    document.getElementById(divID).innerHTML = innerHtml;
}
function setSizesPicturesOfClass(className) {
    var showPictureElements = document.getElementsByClassName(className);
    for (var i = 0; i < showPictureElements.length; i++){
        showPictureElements[i].style.width = (screen.width/showPictureElements.length) + "px";
        showPictureElements[i].style.height = (screen.width/showPictureElements.length) * (2/3) + "px";
    }
}
