const students = [
    {
        id: 213,
        nome: 'Giuseppina della Rovere',
        sommaVoti: 78
    },
    {
        id: 110,
        nome: 'Paola Cortellessa',
        sommaVoti: 96
    },
    {
        id: 250,
        nome: 'Andrea Montegna',
        sommaVoti: 48
    },
    {
        id: 145,
        nome: 'Gaia Borromini',
        sommaVoti: 74
    },
    {
        id: 196,
        nome: 'Luigi Grimaldello',
        sommaVoti: 68
    },
    {
        id: 102,
        nome: 'Piero della Francesca',
        sommaVoti: 50
    },
    {
        id: 120,
        nome: 'Francesca da Polenta',
        sommaVoti: 84
    },
]

const nomi = students.map((element) => {
    return element.nome.toUpperCase();
});
console.log(nomi)

const voto = students.filter((element) => {
    if (element.sommaVoti > 70) {
        return true;
    }
});
console.log(voto);

const votoId = students.filter((element) => {
    if (element.id > 120 && element.sommaVoti > 70) {
        return true;
    } 
});
console.log(votoId);


