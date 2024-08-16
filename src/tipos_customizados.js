"use strict";
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-End', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'ana',
        cursos: ['Front-end', 'python'],
        idade: 23,
    },
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 36
});
const novoAluno = {
    nome: 'Lucas',
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
