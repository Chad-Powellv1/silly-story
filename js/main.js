/* VARIABLES CONNECTING TO THE DOM ELEMENTS */

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

/* FUNCTION TO GENERATE RANDOM VALUE FROM AN ARRAY */

const randomValueFromArray = function (array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

/* FUNCTION TO GET RESULTS OF STORY GENERATOR */

const result = function () {
  /* VARIABLE FOR BASIC STORY TEXT */

  let storyText = `It was 94 degrees fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

  /* ARRAYS TO HOLD STORY VARIATIONS */

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

  /* VARIABLES TO HOLD THE RANDOM STORY VARIATIONS AFTER PULLED BY randomValueFromArray() FUNCTION */

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  /* VARIABLE HOLDING UPDATED TEXT, AND REPLACING IT */
  let newStory = storyText;
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  /* CONDITIONAL STATEMENT SETS NAME TO USER'S INPUT */
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  /* IF UK CHECKED CONVERTS POUNDS TO STONES / FAHRENHEIT TO CELSIUS */
  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.0714286);
    const temperature = Math.round((94 - 32) / 1.8);

    newStory = newStory.replace(`300 pounds`, `${weight} stones`);
    newStory = newStory.replace(
      `94 degrees fahrenheit`,
      `${temperature} degrees Celsius`
    );
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
};

/* EVENT LISTENER FOR RANDOMIZE BUTTON ELEMENT */

randomize.addEventListener('click', result);
