
//1

/*const num = document.querySelector(".numbers")


for (let i = 100; i >= 50; i -= 10) {

const text = document.createElement("p")   
text.innerText = [i]
num.appendChild(text)

}
*/
//2

/*
const stringsContainer = document.querySelector(".strings_container");
const stringArray = [ " Hello ", "Welcome", "Godbye"];


for( let i = 0; i < stringArray.length; i++) {

    const text = document.createElement("p")
    text.innerText = stringArray[i]
    stringsContainer.appendChild(text)
}
*/

//3
/*
const users = [
    {
        first_name: "Antonia",
        last_name: "Borodina",
        age:23,
    },

    {
        first_name: "Vasilisa",
        last_name:"Petrova",
        age: 25,
    },

    {
        first_name: "Svetlana",
        last_name: "Vasiljeva",
        age:15,
    },
    
    {
        first_name:"Margarita",
        last_name:"Nechajeva",
        age:18,
    },
    
];
  
const usersContainer = document.querySelector(".users_container")

for( let i = 0; i < users.length; i ++) {
  if ( users[i].age >= 18) {
    usersContainer.innerHTML += `<p> ${users[i].first_name} ${users[i].last_name} ${users[i].age} </p>`
  }
}







//1
/*const text = document.querySelector(".numbers");

for (let i = 100; i >= 50; i -= 10) {
  text.innerHTML += `<p>${i}</p>`;
}
<body>
<div class="numbers">

</div>

<div class="strings_container">

</div>

<div class="users_container">
    
</div>

    <script src="./script.js"></script>
</body>
</html> */


//2

/*const letters = ["AAA", "BBB", "CCC", "DDD"];
const strings = document.querySelector(".strings_container");

for (let i = 0; i < letters.length; i++) {
  strings.innerHTML += `<p>${letters[i]}</p>`;
} 
*/

