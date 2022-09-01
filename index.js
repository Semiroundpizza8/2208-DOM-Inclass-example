// console.log("Hello World!")

// const pageTitleElement = $("#PageTitle")[0];
// pageTitleElement.innerHTML = "Hi, My name is Ben!";

/**
 * 1. Basic Example
 */
// Grab page title
const pageTitleElement = document.getElementById("PageTitle");
// Change the text of our page title
pageTitleElement.innerHTML = "Hi, Class 2208!";
// Log something on page title click
pageTitleElement.addEventListener("click", () => console.log("Hello!"))

/**
 * 2. Updating the dom using JS (glowing borders)
 */
const images = $("img");

let itterations = 0;
const colorChangeSpeed = 100;

// Every x seconds...
setInterval(() => {
    // Count how many times we've been through here
    itterations++;
    // For each image...
    for (let i = 0; i < images.length; i++) {
        const currImage = images[i];

        // Update that images border color
        const borderColor = `
            hsl(${itterations % 255},
                100%,
                50%
            )
        `
        // Apply new border color
        currImage.style.border = `10px solid ${borderColor}`;
    }
}, colorChangeSpeed);

/**
 * 3. Make element disappear after x seconds
 */
var timeToDisappear = 3000;
setTimeout(() => {
    const tempTextElement = $("#tempText")[0];
    tempTextElement.classList.add("invisible");
}, timeToDisappear)



/**
 * 4. Cookie Clicker
 */
// Keep track of how many cookies we have on hand
let cookieCount = 0;

function render() {
    const cookieCounterElementArray = [...document.getElementsByClassName("cookieCounter")];
    const cookieCounterElement = cookieCounterElementArray[0];


    cookieCounterElement.innerHTML = `Number Of Cookies: ${cookieCount}`;
}

// Every 1/2 second...
setInterval(() => {
    // Increase our number of cookies by 1
    cookieCount += 1;

    // Update our cookie counter with the new current value
    render();
}, 500);

/**
 * Click Cookie To Add Points 
 */
const cookieImageEle = document.getElementsByClassName("cookieImage")[0];
cookieImageEle.addEventListener("click", () => {
    cookieCount++;

    render();
})

/**
 * Clickable Cookie w/ Jquery
 */
// const cookieImageEle = $(".cookieImage")
// cookieImageEle.click((event) => {
//     console.log(event.target)
//     cookieCount++;

//     render();
// })

/**
 * Setting up "Buy X" buttons
 */
/**
 *  1. Event Delegation - We add the event to the parent element and figure out
 *  what was clicked afterwards
 */
const buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener("click", function (event) {
    console.log(this)

    if (event.target.tagName === "BUTTON") {
        const whatWasBought = event.target.classList[0];


        console.log(event.target);
    } else {
        console.log("No button was clicked on...")
    }
})

/**
 * Adding a event listener to each item individually
 */
function logWhatWasBought(event) {
    const whatWasBought = event.target.classList[0];
    console.log(whatWasBought)
}

const ovenButton = document.getElementsByClassName("oven")[0];
ovenButton.addEventListener("click", logWhatWasBought)

const grandmaButton = document.getElementsByClassName("grandma")[0];
grandmaButton.addEventListener("click", logWhatWasBought)

const factoryButton = document.getElementsByClassName("factory")[0];
factoryButton.addEventListener("click", logWhatWasBought)

/**
 * 3. Adding an event listener to each item using a loop
 */
const purchaseButtons = document.getElementsByClassName("purchaseButton");
for (var i = 0; i < purchaseButtons.length; i++) {
    const button = purchaseButtons[i];
    button.addEventListener("click", logWhatWasBought)
}


/**
 * Working with select elements
 */
// Change via select example
const selectEle = document.getElementById("factorySelect");

let selectedColor = "";
selectEle.addEventListener("change", (event) => {
    selectValue = event.target.value
    console.log(selectValue)
});
