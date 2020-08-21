const users = [{
        name: "Patience Gyan",
        age: 28,
        gender: "Female",
        lookingfor: "Male",
        location: "Kumasi - Ghana",
        image: 'https://randomuser.me/api/portraits/women/16.jpg'
    },
    {
        name: "Perez Yeboah",
        age: 20,
        gender: "Male",
        lookingfor: "Female",
        location: "Accra - Ghana",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name: "James Darko",
        age: 30,
        gender: "Male",
        lookingfor: "Female",
        location: "K'Dua - Ghana",
        image: 'https://randomuser.me/api/portraits/men/30.jpg'
    },
    {
        name: "Su Yang Yeon",
        age: 35,
        gender: "Female",
        lookingfor: "Male",
        location: "Guangzhou - China",
        image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        name: "Breonna Taylor",
        age: 22,
        gender: "Female",
        lookingfor: "Male",
        location: "Atlanta - USA",
        image: 'https://randomuser.me/api/portraits/women/10.jpg'
    },
]

function profileIterator(data) {

    let currentProfile = 0;

    return {
        next: function () {
            return currentProfile < data.length ? {
                value: data[currentProfile++],
                done: false
            } : {
                done: true
            }
        }
    }
}

//Storing output generated by profileIterator
const userProfiles = profileIterator(users);

//Showing First Profile
showUser();

//function to show user in DOM
function showUser() {

    const currentProfile = userProfiles.next().value;


    const profileDisplay = document.getElementById("profileDisplay");

    if(currentProfile !== undefined){

        profileDisplay.innerHTML =
            `<ul class= "list-group">
        <li class="list-group-item text-info">Name: ${currentProfile.name}</li>
        <li class="list-group-item text-info">Age: ${currentProfile.age}</li>
        <li class="list-group-item text-info">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item text-info">Looking For: ${currentProfile.lookingfor}</li>
        <li class="list-group-item text-info">Location: ${currentProfile.location}</li>    
        </ul>
        `

        document.getElementById("imageDisplay").innerHTML =
            `<img src= "${currentProfile.image}">
    `
    }
    else{
        window.location.reload();
    }


}


//Getting the next button in the DOM
const btnNext = document.getElementById("next");
//Appending event listener to te next button
btnNext.addEventListener("click", showUser);