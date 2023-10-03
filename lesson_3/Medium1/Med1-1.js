let string = 'The Flintstones Rock!';

for (let count = 0; count < 11; count++) {
  console.log(string.padStart(string.length + count, ' '));
}