var keyWords = [];
var matreshka = {
    "word" : "matreshka",
    "question" : "The most knowm russian doll is ...?" 
}
keyWords.push(matreshka);
var ussr = {
    "word" : "ussr",
    "question" : "Russia is a result of broken ... country?"
}
keyWords.push(ussr);
var moscow = {
    "word" : "moscow",
    "question" : "What city is the capital of Russia?"
}
keyWords.push(moscow);
var putin = {
    "word" : "putin",
    "question" : "What is the last name of the russian's president?"
}
keyWords.push(putin);
var kvass = {
    "word" : "kvass",
    "question" : "What is the Rusiian traditional beverage commonly made from rye bread?"
}
keyWords.push(kvass);
var borscht = {
    "word" : "borscht",
    "question" : "What is the name of Russian traditional sour soup that includes beetroot?"
}
keyWords.push(borscht);
var leopard = {
    "word" : "leopard",
    "question" : "Wild animal, one of the symbols of the winter Olympic Games 2014 in Sochi?"
}
keyWords.push(leopard);
var balalaika = {
    "word" : "balalaika",
    "question" : "Russian stringed musical instrument with a characteristic triangular wooden, hollow body and three strings?"
}
keyWords.push(balalaika);
var khohloma = {
    "word" : "khohloma",
    "question" : "Russian wood painting handicraft style and national ornament, known for its vivid flower patterns, red, green, and gold colors over a black background?"
}
keyWords.push(khohloma);
var alaska = {
    "word" : "alaska",
    "question" : "What state of USA was previously owned by Russia?"
}
keyWords.push(alaska);
var kremlin = {
    "word" : "kremlin",
    "question" : "What is the name of russian 'White house', residence of the President?"
}
keyWords.push(kremlin);
var fss = {
    "word" : "fss",
    "question" : "The KGB was renamed to ..."
}
keyWords.push(fss);
var valenki = {
    "word" : "valenki",
    "question" : "Traditional Russian winter footwear, 'made by felting' is ..."
}
keyWords.push(valenki);
var ushanka = {
    "word" : "ushanka",
    "question" : "Russian fur cap with ear flaps that can be tied up to the crown of the cap, or fastened at the chin to protect the ears, jaw and lower chin from the cold."
}
keyWords.push(ushanka);
var gagarin = {
    "word" : "gagarin",
    "question" : "What is the last name of the russian person, who was the first human to journey into outer space?"
}
keyWords.push(gagarin);
var snowden = {
    "word" : "snowden",
    "question" : "American computer professional, who copied and leaked classified information from the National Security Agency (NSA) in 2013 without authorization and was granted the right of asylum by Russia?"
}
keyWords.push(snowden);

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var currentWord,wordReveal = [],lettersLeft,htmlQuest,userGuess,cloneAlpha;
var triesLeft = 8;

window.onload = function() {
    newWord();
};

document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    for (var k = 0; k < cloneAlpha.length; k++) {
        var index = cloneAlpha.indexOf(userGuess);
    }
    delete cloneAlpha[index];
    htmlLetters = "Letters available: " + "<p>" + cloneAlpha.join(" ");
    document.querySelector("#letters").innerHTML = htmlLetters;
    outputWordReveal()
}

function newWord(){
    triesLeft = 8;
    currentWord = keyWords[Math.floor(Math.random() * keyWords.length)];
    cloneAlpha = alphabet.slice(0);
    htmlLetters = "Letters available: " + "<p>" + cloneAlpha.join(" ");
    document.querySelector("#letters").innerHTML = htmlLetters;
    wordReveal.length = 0;
    lettersLeft = currentWord["word"].length;     
    for (var i = 0; i < currentWord["word"].length; i++) {
        wordReveal[i] = "_";
    }
    htmlQuest = currentWord["question"];
    htmlWord = wordReveal;
    console.log(wordReveal);
    document.querySelector("#currentQuestion").innerHTML = htmlQuest;
    document.querySelector("#currentWord").innerHTML=htmlWord;
}   


function outputWordReveal(){
    console.log(currentWord["word"].length); 
    for(var j=0; j<currentWord["word"].length; j++) {
        if (userGuess === currentWord["word"][j] && currentWord["word"][j]!==wordReveal[j] && lettersLeft >0) {
            wordReveal[j] = userGuess;
            lettersLeft--;
            console.log(wordReveal[j]);
            
        } 
        console.log(lettersLeft); 
    }

    var currentWordArr = currentWord["word"].split("");
    if(!currentWordArr.includes(userGuess)){
        triesLeft--;
        alert("Nope! Try another letter. " + triesLeft + " remaining guesses.")
    }

    document.querySelector("#currentQuestion").innerHTML = htmlQuest;
    document.querySelector("#currentWord").innerHTML = htmlWord;
    
    if (lettersLeft===0){
        alert("Congrats! You're correct - " + currentWord["word"].toUpperCase());
        newWord();
    }
    if (triesLeft === 0){
        alert("Out of tries. The word was ... " + currentWord["word"].toUpperCase());
        newWord();
    }
    console.log(currentWord["word"]);
}

