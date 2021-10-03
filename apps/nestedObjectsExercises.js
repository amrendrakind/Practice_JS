let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

function primeNumber(){
  let primeNum = nestedData.innerData.numberData.primeNumbers
  for(let num of primeNum){
      console.log(num)
  }
}
primeNumber()
function evenFibonnaci(){
console.log("Even Fibonaci Numbers are :")
let fibonnaci= nestedData.innerData.numberData.fibonnaci
for(let fib of fibonnaci){
  if(fib%2===0){
    console.log(fib)
  }
}
}
evenFibonnaci()
console.log("The value is ",nestedData.innerData.order[1])
nestedData.innerData.addSnack("chocolate")
console.log(nestedData.innerData.snacks)
////----------------------------------Another Exercise----------------------
let nestedObject = {
speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
data: {
  continents: {
    europe: {
      countries: {
        switzerland: {
          capital: "Bern",
          population: 8000000
        }
      }
    }
  },
  languages: {
    spanish: {
        hello: "Hola"
    },
    french: {
        hello: "Bonjour"
    }
  }
}
}
function addSpeaker(speakerName){
nestedObject.speakers.push({name : speakerName})
}

addSpeaker('Amrendra')
console.log(nestedObject.speakers)
//Adding Language
function addLanguage(Language,helloLanguage){
nestedObject.data.languages[Language]={hello : helloLanguage}
}
addLanguage('Hindi', 'Namaste')
console.log(nestedObject.data.languages)
//Adding Countries
function addCountry(counrtyName, capitalName,populationNumber){
nestedObject.data.continents.europe.countries[counrtyName] = {capital:capitalName, population:populationNumber}
}
addCountry("Russia","Mosco",12000000)
console.log(nestedObject.data.continents.europe.countries)

