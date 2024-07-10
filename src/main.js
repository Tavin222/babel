//Criar um array de objetos com nome e nota de alunos
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 },
    { nome: 'Mariana', nota: 9 }
];

function filtrarAlunos(aprovados) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e armazenando o resultado
const alunosAprovados = filtrarAlunos(alunos);

// Exibindo o resultado
console.log("Alunos aprovados:");
console.log(alunosAprovados);
