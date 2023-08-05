const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const keypad = {
  '1': ['1'],
  '2': ['2','a', 'b', 'c'],
  '3': ['3', 'd', 'e', 'f'],
  '4': ['4', 'g', 'h', 'i'],
  '5': ['5', 'j', 'k', 'l'],
  '6': ['6', 'm', 'n', 'o'],
  '7': ['7', 'p', 'q', 'r', 's'],
  '8': ['8', 't', 'u', 'v'],
  '9': ['9', 'w', 'x', 'y', 'z'],
  '10': ['*'],
  '11': ['0'],
  '12': ['#'],
};

function findButtonInfo(input) {
  for (const property in keypad) {
    if(keypad[property].includes(input)){
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
          const button = (row * 3 + col + 1).toString();
          if (property === button) {
            return {
              data: [row + 1, col + 1],
            };
          }
        }
      }
    }
  }
   
    return null;
}

function main() {
  rl.question('Enter (0-9, * or #): ', (input) => { 
    const buttonInfo = findButtonInfo(input.toLocaleLowerCase());
    if (buttonInfo) {
      const [row, col] = buttonInfo.data;
      console.log(`Output: [${row}, ${col}]`);
    } else {
      console.log('Button not found.');
    }
    main();
  });
}

main();
