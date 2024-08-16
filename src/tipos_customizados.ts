type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}
const alunos: aluno[] = [
    {
        nome: 'Carlos',
        cursos: ['Front-End','UX/UI'],
        idade: 27,
    },
    {
        nome: 'ana',
        cursos: ['Front-end', 'python'],
        idade: 23,
    },
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 36
})

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}