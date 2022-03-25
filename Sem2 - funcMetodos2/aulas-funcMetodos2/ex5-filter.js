// Filter

const professores = [
    { nome: 'Bruno', stack: 'back' },
    { nome: 'Junior', stack: 'back' },
    { nome: 'Vida', stack: 'front' },
    { nome: 'Adelson', stack: 'front' }
]

// filtrar todos back
// filtrar todos front

const filtroBack = professores.filter((professor) => {
    return professor.stack === 'back'
})

const filtroFront = professores.filter((professor) => {
    return professor.stack === 'front'
})

console.log(filtroBack);
console.log(filtroFront);