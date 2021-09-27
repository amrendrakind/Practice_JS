let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let combined = arr1.concat(arr2,arr3);
console.log(combined);

let openingWords = ["It","was","a"];
let moreOpeningWords = openingWords.concat("dark","and","stormy","night");
console.log(moreOpeningWords)
openingWords.join(" ")
console.log(openingWords.join(" "))
console.log(moreOpeningWords.join(" "))
let numArray = [1,2,3,4,5,6,7];
numArray[10]=12
console.log(numArray);
console.log(numArray.indexOf(12))

let moviesIKnow = [
    "Wayne's World",
    "The Matrix",
    "Anchorman",
    "Bridesmaids"
];

let yourFavoriteMovie = "Matrix"
if (moviesIKnow.indexOf(yourFavoriteMovie) > -1) {
    console.log("Oh, cool, I've heard of " + yourFavoriteMovie + "!");
} else {
    console.log("I haven't heard of " + yourFavoriteMovie + ". I'll check it out.");
}
