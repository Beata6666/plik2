

const pobierzDane = async() => {
    const wynik = await fetch ("https://swapi.dev/api/people");
    const dane = await wynik.json();
    dane.results.forEach( (element) => {
        dodajPostac(element);
    });
}
pobierzDane();
console.log(123);

// <div class=""card">
//         <h3>Luke Skywalker</h3>
//         <span> Rasa: człowiek</span>
//         <span>Kolor oczu: niebieski</span>
//         <span>Kolor skóry: biała</span>
//         <div>
//         <span>Wzrost: 172cm</span>
//         <span> Waga: 77kg</span>
//         </div>
//     </div>
const sekcjaKarty = document.querySelector("#wrapper");

const dodajPostac = (postac) => {
    console.log(postac);
    const karta = document.createElement("article");
    karta.classList.add("card");

    const nazwaPostaci = document.createElement("h3");
    nazwaPostaci.textContent = postac.name;
    
    const plecPostaci = document.createElement("span");
    plecPostaci.textContent = "Płeć: " + postac.gender;

    const skinPostaci = document.createElement("span");
    skinPostaci.textContent = "Kolor skóry: " + postac.skin_color;

    const eyePostaci = document.createElement("span");
    eyePostaci.textContent = "Kolor oczu: " + postac.eye_color;

    const massPostaci = document.createElement("span");
    massPostaci.textContent = "Waga: " + postac.mass;


    karta.append(nazwaPostaci);
    karta.append(nazwaPostaci);
    karta.append(plecPostaci);
    karta.append(skinPostaci);
    karta.append(eyePostaci);
    karta.append(massPostaci);

    sekcjaKarty.append(karta);

}
