export {Aluno};

interface Aluno{ 
    matricula: string;
    nome: string;
    idade:number;
    turma: string;
    contato?: string;
    caminhoImagem: string;
}