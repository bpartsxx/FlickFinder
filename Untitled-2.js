document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const changeColorBtn = document.getElementById("changeColorBtn");

    // Array of possible colors
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF5733", "#33FF57"];

    // Function to generate a random color from the array
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    // Function to change the background color
    function changeBackgroundColor() {
        const newColor = getRandomColor();
        container.style.backgroundColor = newColor;
    }

    // Event listener for the button click
    changeColorBtn.addEventListener("click", changeBackgroundColor);
});
