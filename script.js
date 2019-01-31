// - In your JavaScript file, select each element by its id. 
// - Log each element to the console to make sure you selected it correctly.

// const lead =document.querySelector("#keith")
const vocal =document.querySelector("#mic")
// const rhythm =document.querySelector("#ronnie")

document.querySelector("#keith")
// document.querySelector("#mic")
document.querySelector("#ronnie")

console.log(document.querySelector("#keith"))
console.log(vocal)
console.log(document.querySelector("#ronnie"))


function enterKeith(){
    console.log("You clicked Keith. Keith brandishes guitar aggressively")
}

function enterMic(){
    console.log("You clicked Mic.Thank you for your wine, California")
}

function enterRonnie(){
    console.log("You clicked Ronnie and he can feel the fire")
}

document.querySelector("#keith").addEventListener("click", enterKeith)

document.querySelector("#mic").addEventListener("click", function(){
    console.log("You clicked Mic.Thank you for your wine, California")
})

document.querySelector("#ronnie").addEventListener("click", () =>{
    console.log("You clicked Ronnie and he can feel the fire")
})

console.log(document.querySelector("#keith"))

const allBlogPosts = document.querySelectorAll(".BlogPost")
console.log(allBlogPosts);

for(let i=0; i < allBlogPosts.length; i++) {
    const currentBlogPost = allBlogPosts[i];
    currentBlogPost.addEventListener("mouseover", (event) => {
        console.log(event);
        event.target.classList.add("purple-rain");
    })
    currentBlogPost.addEventListener("mouseleave", (event) => {
        console.log(event);
        event.target.classList.remove("purple-rain");
    })
}

document.querySelector("#keith").addEventListener("click", (event) => {
    console.log(event);
    event.target.classList.add("red-text");
})

document.querySelector("#darkButton").addEventListener("click", (event) => {
    console.log(event);
    document.body.classList.add("void-background");
})

document.querySelector("#contact-submit").addEventListener("click", () => {
    const messageToPrint = document.querySelector("#contact-me").value;
    console.log(messageToPrint);


document.querySelector("#output-div").textContent = messageToPrint;
console.log(document.querySelector("#output-div"))
console.log("You sent the message!");
})

