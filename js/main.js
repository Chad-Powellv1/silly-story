/* VARIABLES CONNECTING THE JS FILE TO THE DOM ELEMENTS */

const customName = document.getElementById('customname');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

/* FUNCTION TO GENERATE RANDOM VALUE FROM AN ARRAY */

const getRandom = function (arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

/* VARIABLE HOLDING MAIN STORY TEXT, CONTAINING THREE INTERCHANGEABLE STRINGS STORED IN THREE SEPARATE ARRAYS */

let storyText =
  'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas',
  'Mother Nature',
  'Jack Frost',
];

let insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House',
  'Area 51',
  'the Grand Canyon',
];

let insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away',
  'smiled and quietly walked away',
  'ran away screaming',
];

/* ADD EVENT LISTENER TO ACTIVATE A FUNCTION ON CLICK, CONNECTED TO THE RANDOMIZE DOM ELEMENT */

randomize.addEventListener('click', result);

const result = function () {
  /* IF NAME FIELD IS NOT LEFT BLANK THEN THE NAME ENTERED BY USER WILL BE DISPLAYED BY THIS FUNCTION */

  if (customname.value !== '') {
    const name = customName.value;
  }

  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286);
    const temperature = Math.round(((94 - 32) * 5) / 9);
  }
};
