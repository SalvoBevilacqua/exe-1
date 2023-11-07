const array = [
    {   nome: "leone",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {   nome: "cane",
        famiglia: "canidi",
        classe: "mammiferi"
    },
    {   nome: "gallina",
        famiglia: "fasianidi",
        classe: "uccelli" }
    ]

    console.log(array);

const arrayMammiferi = array.filter(animal => animal.classe === "mammiferi");

console.log(arrayMammiferi);