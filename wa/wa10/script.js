
//initialize variables and assign values by ID and Class values in html doc
let customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//function that returns a random value from an array passed
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertx = ["Jonnie the squirrel", "J-Lo", "Donald J Trump"];

const inserty = ["Florida","Sweden", "Hell"];

const insertz = ["Blew up", "transformed into my grandmother", "flew into the sun"];


//Event Listener and partial function definition*******

//add an event listener to the randomize object. upon a click of this object, run the result function:
randomize.addEventListener('click', result);


//result function
function result() {
    //create a newStory variable and assign value to be storyText:
    let newStory = storyText;

    //pull random string out of each x y z array and assign them to new variables:
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    if(customName.value !== '') {
        const name = customname.value;
        newStory = newStory.replaceAll("Bob", name);
        newStory = newStory.replaceAll(":insertx:", xItem);
        newStory = newStory.replaceAll(":inserty:", yItem);
        newStory = newStory.replaceAll(":insertz:", zItem);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}