var message="This is an alert!";

function showAlert() {
    alert(message);
    console.log("The button was clicked.")
};

console.log("The page loaded.")

var friends = ["Asa Prime", "Asa", "Dottie", "Honey", "Michael", "Liz", "Shelly", "Hilty", "Dana", "Mackenzie","MyKala"];

function addFriend() {
    let div = document.getElementById("friendDiv");
    for (let i = 0; i < friends.length; i++) {
        let h1 = document.createElement("h1");
        let text = document.createTextNode (friends[i]);
        h1.appendChild(text);
        div.appendChild(h1);
    }
    
}

function showFriend() {
    alert(friends[0].name + " lives in " + friends[0].city)
    for (let name = 0; name < friends.length; name++) {
        console.log (friends[i]);
        
    }
}

var dog = {
    Breed: "Pit Bull",
    Color: "Black and Brindle",
    Name: "Dottie",
    Gender: "Female",
    GoodDog: "yes"
};

function dogInfo() {
    alert(dog.Name);
    for(prop in dog) {
        console.log(dog[prop]);
    }
}

function loopThis() {
    for(var i = 0; i < 100; i++)
    console.log(i);
}