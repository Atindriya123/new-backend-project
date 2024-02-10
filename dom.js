

// const a = document.querySelector(".container");
//   a.classList.add('new');
//   a.classList.remove("container");

//   a.classList.toggle("container")


//   const b = document.querySelector(".one")

//   b.textContent = "Hello world";

//   const c = document.querySelector(".second");
//   const p = document.createElement("p");
//   c.appendChild(p);
//   p.textContent = ('hello world')

  ///======================DOM-PROJECT===========//
// const button = document.querySelector(".container button");

// const jokeText = document.querySelector(".container p");
// document.addEventListener("DOMcontentLoaded",generateJoke);
// button.addEventListener("click",displayJokes)

// const jokes = [
//     "Why don't scientists trust atoms? Because they make up everything.",
//   "How do you make a tissue dance? Put a little boogey in it!",
//   "Why do we tell actors to 'break a leg?' Because every play has a cast!",
// ];

// function generateJoke(){
//     const randomIndex = Math.floor(Math.random()*jokes.length);

//     const randomJoke = jokes[randomIndex];

//     return randomJoke;
// }

// function displayJokes(){
//     const joke = generateJoke();
//     jokeText.innerHTML = joke
// }

// console.log(generateJoke());



// const first = document.querySelector(".first ");
// const second = document.querySelector(".last ");

// const firsta = document.createElement("h2")

// const secondb = document.createElement("h2")



// firsta.textContent = "Atin";
// secondb.textContent = "Mondal";

// // first.appendChild(firsta);
// // second.appendChild(secondb);

// const btn = document.querySelector(".btn")

// btn.addEventListener("click",() => {
//   first.appendChild(firsta);
//   second.appendChild(secondb);
//   console.log("clicked")
// })


//===========DOM-PROJECT===================//

//-------------Colorchanger-Switcher----------//

// Function for bgcolorchange//

function bgchange(color){
  let colorarray = ["#e58e26","#f9b4ab","#B1FB17","#78e08f", "#fd79a8"];
  document.body.style.background = colorarray[color] 
}

let colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];

let colorbox = document.getElementById("colorbox");

colorarray.forEach(function(color,index){
  let span =  document.createElement("span");
  span.style.background = color;
  span.addEventListener("click",function(){
    bgchange(index)
  });
  colorbox.appendChild(span)
});