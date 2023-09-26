//madlibs
/*
Create a simple madlib program that prompts for a noun,
a verb, an adverb, and an adjective,
and injects them into a story that you create.
*/

let readline = require('readline-sync');

function getNoun() {
  return readline.question('Enter a noun: ');
}

function getVerb() {
  return readline.question('Enter a verb: ');
}

function getAdj() {
  return readline.question('Enter an adjective: ');
}

function getAdverb() {
  return readline.question('Enter an adverb: ');
}

function createMadlib(noun, verb, adjective, adverb) {
  console.log(`In the heart of the mystical forest, a ${noun} awaited,
    beckoning me to ${verb} onward. The trees whispered secrets of the ancient, ${adjective} magic,
    guiding my steps ${adverb} through the moss-covered path. `);
}

while (true) {
  console.clear();
  console.log('Welcome to Madlibs!');

  let noun = getNoun();
  let verb = getVerb();
  let adjective = getAdj();
  let adverb = getAdverb();

  createMadlib(noun, verb, adjective, adverb);

  console.log('\nThat concludes todays Madlib, see you tomorrow!');
}