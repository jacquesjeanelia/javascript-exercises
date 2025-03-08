const repeatString = function(string, occurrences) {
    if (occurrences < 0) {
        return 'ERROR';
    }
    let output = '';
    for (let i = 0; i < occurrences; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
