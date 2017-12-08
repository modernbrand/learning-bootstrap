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

var $para = $("<p>Hello</p>");

$("#bkinsert").append ()

$(document).ready(function() {
    $("#btn").click(function() {
        $("#unique").append("<h1>A Whole New World</h1>");
    });
});

function addHeader() {
    var header = document.createElement(h1);
    var headerText = document.createTextNode("A Whole New World");
    header.append(headerText);
}

var friends = ["Asa Prime", "Asa", "Dottie", "Honey", "Michael", "Liz", "Shelly", "Hilty", "Dana", "Mackenzie","MyKala"];
var colors = ["red", "green", "blue"];

function addColorfulFriends() {
    let div = $("#jqueryDiv");
    let x = 0;
    for (let i = 0; i < friends.length; i++) {
        let h1 = $("<h1 class='colorName'>").append(friends[i]);
        div.append(h1);
    }
    let button = $("<button class='colorChanger'>").append("Change Color!");
    $(".buttonHolder").append(button);
    $(".colorChanger").click(function() {
        $(".colorName").css("color", colors[x])
        x++;
    })
};

