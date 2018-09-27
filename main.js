
window.onload = function(){
    setPictureBlocks();
};

function setPictureBlocks() {
    for (var i = 1; i <= document.getElementsByClassName("PictureBlock").length; i++) {
        setPictures("block" + i, i);
    }
}
function setPictures(divID, numberOfBlock) {
    setPicturesInHtml(divID, numberOfBlock);
    setSizesPicturesOfClass("ShowPicture", 12);
    setSizesPicturesOfClass("DisplayPicture", 3);
}
function setPicturesInHtml(divID, numberOfBlock) {
    var innerHtml = "<div class='Show' id='" + divID + "Show'>";
    for (var i = 1; i < 13; i++){
        innerHtml += '<img src="pictures/' + numberOfBlock + "." + i + '.png" class="ShowPicture" id="' + divID + "ShowPicture" + i + '">';
    }
    innerHtml += "</div><div class='Display' id='" + divID + "Display'>";
    for (var i = 1; i < 4; i++){
        innerHtml += '<img src="pictures/' + numberOfBlock + "." + i + '.png" class="DisplayPicture" id="' + divID + "DisplayPicture" + i + '">';
    }
    innerHtml += "</div>";
    document.getElementById(divID).innerHTML = innerHtml;
}
function setSizesPicturesOfClass(className, amountOfImages) {
    var pictureElements = document.getElementsByClassName(className);
    var length = pictureElements.length;
    for (var i = 0; i < length; i++){
        pictureElements[i].style.width = (screen.width/(length / (length / amountOfImages))) + "px";
        pictureElements[i].style.height = (screen.width/(length / (length / amountOfImages))) * (2/3) + "px";
    }
}

