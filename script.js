const obj = {
imie: "Jan",
nazwisko: "Kowalski",
wiek: 20,
informacje(){
    console.log("wyswietlam informacje")
},
informacjeStrzalkowa: () => {
    console.log("informacje - fn strzałkowa")
}
}
console.log(obj);
console.log(obj.nazwisko);

obj.informacje();
obj.informacjeStrzalkowa();
const wypis = `To jest ${obj.imie} ${obj.nazwisko}. Ma ${obj.wiek} lat`
const panstwa =[
    {
        nazwa: "Polska",
        stolica: "Warszawa",
        ludnosc: 38,
    },
    {
        nazwa: "Niemcy",
        stolica: "Berlin",
        ludnosc: 85,
    },
    {
        nazwa: "Japonia",
        stolica: "Tokio",
        ludnosc: 110,
    },
]
console.log(panstwa);
console.log(panstwa[1].nazwa)
panstwa.forEach( (panstwo) => {
    console.log(panstwo);
})
const funkcjaFiltrujaca = (a) => {
    return a.ludnosc > 80
}
const duzeKraje =panstwa.filter(funkcjaFiltrujaca);
console.log(duzeKraje);
