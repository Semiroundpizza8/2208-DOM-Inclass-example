// console.log("Hello World!")
// const pageTitleElement = $("#PageTitle")[0];
// pageTitleElement.innerHTML = "Hi, My name is Ben!";

// // const pageTitleElement = document.getElementById("PageTitle");
// // pageTitleElement.innerHTML = "Hi, My name is Ben!";
// // pageTitleElement.addEventListener("click", () => console.log("Hello!"))

// const images = $("img");
// console.log(images)

// let itterations = 0;

// setInterval(() => {
//     itterations++;
//     for (let i = 0; i < images.length; i++) {
//         const currImage = images[i];
//         const borderColor = `
//             hsl(${itterations % 255},
//             100%,
//             50%
//         )`

//         currImage.style.border = `10px solid ${borderColor}`;
//         pageTitleElement.style.color = borderColor;
//     }
// }, 10);

// setTimeout(() => {
//     const tempTextElement = $("#tempText")[0];
//     tempTextElement.classList.add("invisible");
// }, 3000)



// console.log($("body"))

const pageTitle = $("#PageTitle")[0];
// const pageTitle = document.getElementById("PageTitle");
console.log(pageTitle)

pageTitle.innerHTML = "Hi Class 2208!";