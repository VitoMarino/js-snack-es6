const bici = [
    {
        nome: 'Speed',
        peso: 15
    },
    {
        nome: 'Velox',
        peso: 20
    },
    {
        nome: 'Flash',
        peso: 30
    }
];

bici.forEach((element) => {
    peso = Math.min(element.peso);
    console.log(peso);
});

