let btn = document.getElementById("fetchData");

btn.addEventListener("click", getProgrammerData = () => {
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then(response => {
            console.log(response);

            const dataDiv = document.createElement("div");
            dataDiv.setAttribute('id', 'dane-programisty');

            const first = `Imię: ${response.imie}`;
            const last = `Nazwisko: ${response.nazwisko}`;
            const job = `Zawód: ${response.zawod}`;
            const comp = `Firma: ${response.firma}`;

            const info = document.createTextNode(`${first}; ${last}; ${job}; ${comp}.`);

            btn.after(dataDiv);
            dataDiv.appendChild(info);

        });
});