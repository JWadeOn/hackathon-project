//document.addEventListener('DOMContentLoaded', () => {
// declare a constant that captures the item on the dom with the id "contents" and save it to the global memory
/*
  let searchBox = document.querySelector("input");
  searchBox.setAttribute('autofocus', 'true');
  let body = document.querySelector("body");
  body.addEventListener('click', function() {
    searchBox.style.backgroundColor = 'pink';
  })
*/
// use const allInputs = document.querySelectorAll('input')
  //for (const element of allInputs) {
    //if allInputs[element]['type'] === 'hidden'

    //else document.querySelector(allInputs[element])
  //}
const searchBox = document.querySelector('input');
console.log('this is searchBox', searchBox)
//searchBox.focus();
//searchBox.setAttribute('autofocus', true);
const body = document.querySelector('body');
console.log(body);
body.addEventListener('keydown', (e) => {
  const alphanumericArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0']
    if(e.code === 'ArrowLeft'){
      // console.log('/[^A-Za-z0-9]+/g')
        searchBox.style.backgroundColor = 'pink';
        // searchBox.style.background = 'red';
        console.log('clicked left arrow');
    }
    ///^[a-z0-9]+$/i
    // if(e.code === /[^A-Za-z0-9]+/g) {
    //   console.log('clicked up')
    //   searchBox.focus();
    //   searchBox.setAttribute('value', `${e.code}`)
    // }
    // if(e.code === 'a' || 'B' || 'c'||'D'||'e'||'F') {
      searchBox.focus();
      //searchBox.setAttribute('value',`${e.code}`)
    // }
    console.log('test');
})
// grab element with id of contents
/*
const contents = document.getElementById('contents');

// delete the item labeled 'contents' from the dom

// set contentsParent the value of parent node of contents
const contentsParent = contents.parentNode;

// access contents, looks for parentNode and removes child with id of contents
contents.parentNode.removeChild(contents);

// creating a div/box element for newText
let newText = document.createElement('div')

// give tag, id = motivation, to newText so we can access element for styling in index.css
newText.setAttribute('id', 'motivation')

// set innerHTML to be motivational
newText.innerHTML = "Get back to building your dreams"

// append div newText to contentsParent to give it a location at the end of contentsParent (the last child)
contentsParent.appendChild(newText);
// initialize result to null
// let result = null;
// replace removed videos with image

// fetch is asynchronous and fetches url
fetch('https://picsum.photos/list')
  // takes repsone received from GET request above and runs an anon func that parses into an array of objects
  .then((response) => response.json()) // response = evaluated result from above GET request to url

  // returned result from above (the array of objects) is passed into func below
  .then((data) => {
    // generate a random number to randomly access an image from array of objects
    // by between 0 and 1, * length of data, to get a random num between 0 and length of array
    let random = Math.floor((Math.random() * data.length)) // maximum
    // result = data[randIndex];// access random object  -> access image

    // reassigning newImg's src attribute to be url that uses random number to fill in the specific img id
    newImg.setAttribute('src', `https://unsplash.it/1200/800?image=${random}`)
   }) // data = evaluated result from above

  // creating a box with image tag on our DOM and storing in newImg
let newImg = document.createElement('img');

// create our box for image and append it to contentsParent (it is below newText as appendChild makes last child in parent node)
contentsParent.appendChild(newImg)

// add id of success kid to give flexibility to access/edit css
newImg.setAttribute('id', 'success kid')

// set src attribute to access our image and make newImg an image
newImg.setAttribute('src', 'data:image/jpeg;base64,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');

// create one other file to tell Google the settings for this code - that this code is a Chrome extensions and should apply only when we visit YouTube
  // refer to manifest.json


  // create one other file to tell Google the settings for this code - that this code is a Chrome extensions and should apply only when we visit YouTube
// refer to manifest.json


// object containing extension settings
// Chrome requires this file to contain

// version 2 is requires by Chrome 18+



// var $profilePhoto = $('<div> <img id="shawndrost" class="profile-photo" src="assets/img/shawndrost.png" /></div>');
// $profilePhoto.appendTo($tweet);*/
  //});
