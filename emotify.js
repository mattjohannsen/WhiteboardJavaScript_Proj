function emotify(str) {
    var emoticons = {smile:":D", grin:":)", sad:":(", mad:":P"};
    return str.replace(/smile|grin|sad|mad/gi, function(value){
        return emoticons[value];
    });
    // const arrayOfObjects = [
    //     { smile: ':D' },
    //     { grin:':)' },
    //     { sad:':(' },
    //     { mad: ':P' }
    //   ]
    //   return arrayOfObjects.reduce((f, s) => `${f}`.replace(Object.keys(s)[0], s[Object.keys(s)[0]]), str);
}
module.exports = emotify;
// Emotify Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
// Examples
// emotify("Make me smile") --> "Make me :D"
// emotify("Make me grin") --> "Make me :)"
// emotify("Make me sad") --> "Make me :("
// Notes
// The sentence always starts with "Make me".
// Try to solve this without using conditional statements like if/else or switch.