let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};
console.log(instructorData.name)
console.log(instructorData.additionalData.instructor)
console.log(instructorData.additionalData.favoriteHobbies[2])
console.log(instructorData.additionalData.moreDetails.favoriteBasketballTeam)
console.log(instructorData.additionalData.moreDetails.hometown.state)
console.log(instructorData.additionalData.moreDetails.citiesLivedIn[1])

function displayCities(){
    let cityArray = instructorData.additionalData.moreDetails.citiesLivedIn;
    for(let key in cityArray){
        console.log(cityArray[key]);
    }
}
displayCities()
//-----------------
function displayHometownData(){
    let homeData = instructorData.additionalData.moreDetails.hometown
    for(let key in homeData){
        console.log(homeData[key])
    }
}
displayHometownData();
//---------------------
function addDetails(key,value){
   let addObject=instructorData.additionalData.moreDetails;
   addObject[key]=value
   console.log(addObject)
}
addDetails("isHilarious", true)
addDetails("previousApartments", ["Mission", "North Beach", "Nob Hill"])
//-------------------------