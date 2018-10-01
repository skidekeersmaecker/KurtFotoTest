
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
    var innerHtml = "<div class='Show'>";
    var imageNumber = "";
    for (var i = 1; i < 13; i++){
        imageNumber = numberOfBlock + "." + i;
        //innerHtml += '<img src="pictures/' + imageNumber + '.png" class="ShowPicture" onclick="ImageClick(this.parentNode.parentNode.id, ' + imageNumber + ')">';
        innerHtml += '<img src="pictures/' + imageNumber + '.png" class="ShowPicture" onclick="ImageClick(' + numberOfBlock + ', ' + imageNumber + ')">';
    }
    innerHtml += "</div><div class='Display'>";
    for (var i = 1; i < 4; i++){
        imageNumber = numberOfBlock + "." + i;
        innerHtml += '<img src="pictures/' + imageNumber + '.png" id="' + imageNumber + '" class="DisplayPicture" onclick="ImageClick(' + imageNumber + ')">';
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

function ImageClick(numberDivID, imageNumber) {
    console.log(numberDivID + " " + imageNumber); //de geklickte krijgt een eigen vaste plaats, dus bijvoorbeed de middelste (2)

    //MIDDLE PICTURE
    document.getElementById(numberDivID + ".2").src = "pictures/" + imageNumber + ".png";

    //LEFT PICTURE

    //RIGHT PICTURE
    
}

function placePictureInDisplay(divID, imageNumber, displayNumber) {

}