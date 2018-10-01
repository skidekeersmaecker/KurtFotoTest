
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
        innerHtml += '<img src="pictures/' + numberOfBlock + '.' + i + '.png" class="ShowPicture" onclick="ImageClick(' + numberOfBlock + ', ' + i + ')">';
    }
    innerHtml += "</div><div class='Display'>";
    for (var i = 1; i < 4; i++){
        imageNumber = numberOfBlock + "." + i;
        innerHtml += '<img src="pictures/' + numberOfBlock + '.' + i + '.png" id="' + numberOfBlock + '.' + i + '" class="DisplayPicture">';
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

    var array = [1,2,3,4,5,6,7,8,9,10,11,12];
    console.log("middle: " + array);
    array.splice(array.indexOf(imageNumber), 1);

        //MIDDLE PICTURE
    setSrcOfPicture(numberDivID, 2, imageNumber);

        //LEFT PICTURE
    var left = array[Math.floor(Math.random() * array.length)];
    setSrcOfPicture(numberDivID, 1, left);

        //RIGHT PICTURE
    array.splice(array.indexOf(left), 1);
    var right = array[Math.floor(Math.random() * array.length)];
    setSrcOfPicture(numberDivID, 3, right);
}

function setSrcOfPicture(numberDivID, displayNumber, numberOfImage) {
    document.getElementById(numberDivID + "." + displayNumber).src = "pictures/" + numberDivID + "." + numberOfImage + ".png";
}

