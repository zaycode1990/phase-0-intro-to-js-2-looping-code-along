const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
    
const messages = []
  
    for (let i = 0; i < names.length; i++) {
    
    const message = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    messages.push(message); }

    return messages
  }

let tenDigit = 10

  function countDown(tenDigit) {
    while (tenDigit >= 0) {
      console.log(tenDigit--)
      
    }
  }

  
  console.log(countDown(tenDigit))