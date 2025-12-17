// 3. Toggle Dark Mode Class
// Task:

// When the button is clicked, toggle the class "dark" on the #page <div> using classList.toggle.
const changeColor = () => {
    const listElements = document.querySelector("#page");
    listElements.classList.toggle("dark");
    
};

const myButton = document.querySelector("#toggle-theme-btn");
myButton.addEventListener("click", changeColor);