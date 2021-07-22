
// declare a constant that captures the item on the dom with the id "contents" and save it to the global memory
// const contents = document.getElementById('contents');
var contents = $('#contents');

// delete the item labeled 'contents' from the dom
// contents.parentNode.removeChild(contents);
//contents.parentNode.removeChild('.contents');

console.log('before', contents)

//store contents parent as a variable
// const contentsParent = contents.parent();
const contentsParent = contents.parentNode;
contents.remove();
console.log('after', contents);
// <img src="img_girl.jpg">

let newText = document.createElement('div')
newText.innerHTML = "Get back to building your dreams"
contentsParent.prepend(newText);

/*
let newImg = document.createElement('img');
contentsParent.prepend(newImg)
newImg.setAttribute('id', 'success kid')
newImg.setAttribute('src', 'https://en.wikipedia.org/wiki/Success_Kid#/media/File:SuccessKid.jpg');
// https://en.wikipedia.org/wiki/Success_Kid#/media/File:SuccessKid.jpg
//  $(contentsParent).prepend('<img src= "https://en.wikipedia.org/wiki/Success_Kid#/media/File:SuccessKid.jpg">');
// contentsParent.prepend(...)
//$(contentsParent).prepend("<p>Test</p>");
// /Users/justinbuckner/Desktop/Codesmith FTRI/hackathon-project/OIP.jpeg

// create one other file to tell Google the settings for this code - that this code is a Chrome extensions and should apply only when we visit YouTube
  // refer to manifest.json


  // create one other file to tell Google the settings for this code - that this code is a Chrome extensions and should apply only when we visit YouTube
// refer to manifest.json


// object containing extension settings
// Chrome requires this file to contain

// version 2 is requires by Chrome 18+



// var $profilePhoto = $('<div> <img id="shawndrost" class="profile-photo" src="assets/img/shawndrost.png" /></div>');
// $profilePhoto.appendTo($tweet);