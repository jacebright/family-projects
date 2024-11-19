const reciever = document.getElementById("receiver");
const button = document.getElementById("getReceiver");
const form = document.querySelector('form'); 
 
form.addEventListener('submit', function(event) { 
    event.preventDefault(); 
    let selectElement = document.getElementById("giver");
    const giver = selectElement.value;
    const year = document.getElementById("year").value;
    const numYear = parseInt(year);

    if (numYear < 2017) {
        reciever.innerHTML = "Year not valid";
    }
    else if (giver == ""){
        reciever.innerHTML = "Please select a name"
    }
    else {
        reciever.innerHTML= `<h2>Receiver:</h2><p>${givingToWho(giver, numYear)}</p>`;
    }
}); 

const giving = ["Merie", "Jace", "Jo", "Evin", "Morgan", "Rissa", "Izy"];
let recieving = ["Merie", "Jace", "Jo", "Evin", "Morgan", "Rissa", "Izy"];

function givingToWho(name, year) {
    const filteredRecieving = recieving.filter(function(e) { return e !== name })
    let nameIndex = giving.indexOf(name);

    let newIndex = year - 2016 + nameIndex;

    newIndex = newIndex % 6;

    return filteredRecieving[newIndex];
}