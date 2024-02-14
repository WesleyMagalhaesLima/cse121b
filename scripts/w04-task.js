/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Wesley Magalhães Lima",
    photo: "images/profilePicture.png",
    favoriteFoods: [
        "Rice",
        "Beans",
        "Lasagna",
        "Beef Stroganoff",
        "Sushi"
    ],
    hobbies: [
        "Running",
        "Reading",
        "Watching MMA"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "São Roque, SP",
        length: "17 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Sorocaba, SP",
        length: "8 years"
    }
)

myProfile.placesLived.push(
    {
        place: "Cruz Alta, RS",
        length: "6 months"
    }
)

myProfile.placesLived.push(
    {
        place: "São Borja, RS",
        length: "6 months"
    }
)

myProfile.placesLived.push(
    {
        place: "Palmeira das Missões, RS",
        length: "4.5 months"
    }
)

myProfile.placesLived.push(
    {
        place: "Santa Maria, RS",
        length: "4.5 months"
    }
)

myProfile.placesLived.push(
    {
        place: "Uruguaiana, RS",
        length: "6 months"
    }
)

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo)
document.getElementById("photo").setAttribute("alt", myProfile.name)

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li)
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li)
});

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let dt = document.createElement("dt");
    dt.textContent = item.place;

    let dd = document.createElement("dd");
    dd.textContent = item.length;
    
    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)

})