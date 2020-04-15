var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'It was a beautiful night, and :insertx: \
decided to go for a walk. When they got to :inserty:, a massive ray \
of green light rained down on them, and they were taken by aliens. \
:insertx: :insertz: as he was lifted into the mothership. Bob saw \
everything, but was not surprised - they had always seemed a \
little bit suspicious, and when others heard the news, people were \
surprised it had taken this long.';

var insertX = ['Tiger Woods','Donald Trump','Illidan the Betrayer'];
var insertY = ['Azeroth','Disneyland','the White House'];
var insertZ = ['screamed in terror','laughed maniacally','yelled in \
anger'];

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