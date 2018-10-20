const datamuse = require('datamuse');
const thesaurus = require('thesaurus-com');

function prompt(question) {
  return new Promise((resolve, reject) => {
    const { stdin, stdout } = process;

    stdin.resume();
    stdout.write(question);

    stdin.on('data', data => resolve(data.toString().trim()));
    stdin.on('error', err => reject(err));
  });
}


// ############ Here begins the code ###############

let target = process.argv[2];
let wordBank = thesaurus.search(target).synonyms;
console.log(wordBank);

prompt(`What is a synonym for ${target}?  (We've found ${wordBank.length} of them...)  `)
  .then((answer) => {
    if (wordBank.includes(answer.toLowerCase())) {
      console.log(`Yep, it's in there!`);
    }
    else {
      console.log(`Nope.  What're you on?`);
    }
  });

// prompt("What's your name? ")
//   .then((name) => {
//     console.log(`User's name is ${name}`);
//     user.name = name;
//     return prompt("What's your age? ");
//   })

// Collect a pool of correct answers
// Prompt the user
// Check the user's answer against the pool