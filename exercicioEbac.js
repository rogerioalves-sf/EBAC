const alunos = [
    { nome: 'Alice', nota: 8 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Diana', nota: 7 },
    { nome: 'Eduardo', nota: 4 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);