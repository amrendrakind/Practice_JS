var contact =[
    {
        "firstName" : "Akira",
        "lastName" : "Lenin",
        "number" : "9930109582",
        "likes" : ["Pizza", "Coding","Brownie", "Points"]
    },
    {
        "firstName" : "Sonia",
        "lastName" : "Patel",
        "number" : "9930109583",
        "likes" : ["Movie", "Chess","Mangoes", "Panipuri"]
    },
    {
        "firstName" : "Sushma",
        "lastName" : "Swaraj",
        "number" : "9930109584",
        "likes" : ["Politics", "Speech","Travelling", "Meetings"]
    },
    {
        "firstName" : "Mohanlal",
        "lastName" : "Gandhi",
        "number" : "9930109585",
        "likes" : ["Non-Violence", "Travelling","Reading", "Exercise"]
    }
];

function lookUpProfile(name,prop){
    for(let i=0;i<contact.length;i++){
        if(contact[i].firstName===name){
            return contact[i][prop] || "No such property"
        }
    }
    return "No Such Contact"
}

var data = lookUpProfile("Mohanlal", "number")
console.log(data);