let btn = document.getElementById("fetchData");

btn.addEventListener("click", getProgrammerData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then(response => {
            console.log(response);
        });
});