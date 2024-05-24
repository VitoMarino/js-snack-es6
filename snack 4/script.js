const squadre = [
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

squadre.forEach((element) => {
    element.puntiFatti = Math.round(Math.random() * 100);
    element.falliSubiti = Math.round(Math.random() * 100);
});

squadre.forEach((element) => {
    const {nome, falliSubit} = squadre;
})
