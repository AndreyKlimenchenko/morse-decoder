const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decodeBits(bits){
    const mors = bits.split(/(.{10})/);
    const morsWords = mors.map(item=> {
    const word = item.replace(/10/g,".").replace(/11/g,'-').replace(/0/g,'');
    return word;
});
	return morsWords;
}; 	



function decode(bits) {
    const code = decodeBits(bits);
    const letters = [];
    code.forEach(item=> {
        if(MORSE_TABLE[item]){
        letters.push(MORSE_TABLE[item]);
    }
    
    if(item === '**********') {
      letters.push(' ');
    }
  });
  return letters.join('');
}


module.exports = {
    decode
}