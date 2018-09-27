
window.onload = function(){
    setShowPictures();
    setDisplayPictures();
};


function setShowPictures() {
    setPicturesInHtml();
    setSizesShowPictures();
}
function setPicturesInHtml() {
    var innerHtml = "";
    for (var i = 1; i < 13; i++){
        innerHtml += '<img src="pictures/' + i + '.png" class="show">';
    }
    document.getElementById("showPictures").innerHTML = innerHtml;
}
function setSizesShowPictures() {
    var showPictureElements = document.getElementsByClassName("show");
    for (var i = 0; i < showPictureElements.length; i++){
        showPictureElements[i].style.width = (screen.width/showPictureElements.length) + "px";
        showPictureElements[i].style.height = (screen.width/showPictureElements.length) * (2/3) + "px";
    }
}


function setDisplayPictures() {
    setDisplayPicturesInHtml();
    setSizesDisplayPictures();
}
function setDisplayPicturesInHtml() {
    var innerHtml = "";
    for (var i = 1; i < 4; i++){
        innerHtml += '<img src="pictures/' + i + '.png" class="displayPicture">';
    }
    document.getElementById("displayPictures").innerHTML = innerHtml;
}
function setSizesDisplayPictures() {
    var showPictureElements = document.getElementsByClassName("displayPicture");
    for (var i = 0; i < showPictureElements.length; i++){
        showPictureElements[i].style.width = (screen.width/showPictureElements.length) + "px";
        showPictureElements[i].style.height = (screen.width/showPictureElements.length) * (2/3) + "px";
    }
}