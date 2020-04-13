var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
function randomValueFromArray(array){
var random = Math.floor(Math.random()*array.length);
return array[random];
}
var storyText = 'It was a windy day out when all of a sudden :insertx: \
went for a walk. When they got to :inserty:, they stared \
in horror for a few moments, then :insertz:. Bob saw the \
whole thing, but was not surprised with :insertx: they had been holding in allot of stress';
var insertX = ['Anime Protaganist','Ash Ketchum'];
var insertY = ['Kwik Star','the Car Dealer-Ship','their friends home'];
var insertZ = ['spontaneously combusted','seized to exist','laughed meniachly with no warning',];
randomize.addEventListener('click', result);
function result() {
var newStory = storyText;
var xItem = randomValueFromArray(insertX);

var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);
newStory = newStory.replace(':insertx:',xItem);
newStory = newStory.replace(':insertx:',xItem);
newStory = newStory.replace(':inserty:',yItem);
newStory = newStory.replace(':insertz:',zItem);
if(customName.value !== '') {
var name = customName.value;
newStory = newStory.replace('Bob',name);
}
if(document.getElementById("uk").checked) {
var weight = Math.round(300*0.0714286) + ' stone';
var temperature = Math.round((94-32) * 5 / 9) + ' centigrade';
newStory = newStory.replace('94 fahrenheit',temperature);
newStory = newStory.replace('300 pounds',weight);
}
story.textContent = newStory;
story.style.visibility = 'visible';
}