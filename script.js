// ESE 1
const arrayAnimal = [
    {
        nome: "leone",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {
        nome: "cane",
        famiglia: "canidi",
        classe: "mammiferi"
    },
    {
        nome: "gallina",
        famiglia: "fasianidi",
        classe: "uccelli"
    }
]

console.log(arrayAnimal);

const arrayMammiferi = arrayAnimal.filter(animal => animal.classe === "mammiferi");

console.log(arrayMammiferi);


// ESE 2
const arrayAuto = [
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: "bravo",
        alimentazione: "gpl"
    },
    {
        marca: "seat",
        modello: "leon",
        alimentazione: "elettrico"
    },
    {
        marca: "vw",
        modello: "polo",
        alimentazione: "metano"
    },
    {
        marca: "abarth",
        modello: "500",
        alimentazione: "diesel"
    },
    {
        marca: "ferrari",
        modello: "458",
        alimentazione: "benzina"
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "diesel"
    }

]

console.log(arrayAuto);

const arrayBenzina = arrayAuto.filter(auto => auto.alimentazione === "benzina");

console.log(arrayBenzina);

const arrayDiesel = arrayAuto.filter(auto => auto.alimentazione === "diesel");

console.log(arrayDiesel);

const arrayAltro = arrayAuto.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel");

console.log(arrayAltro);