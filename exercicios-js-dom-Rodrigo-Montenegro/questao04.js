function validarFormulario() {
    const nome = document.getElementById('nome').value.trim(); // .trim() remove espaços em branco no início e fim
    const cpf = document.getElementById('cpf').value.trim();
    const mensagemParagrafo = document.getElementById('mensagem');

    const cpfValidoRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

    mensagemParagrafo.innerText = '';
    mensagemParagrafo.style.color = 'black'; 

    if (nome === '' || cpf === '') {
        mensagemParagrafo.innerText = 'Os campos Nome e CPF são obrigatórios.';
        mensagemParagrafo.style.color = 'red';
        return; 
    }

    if (!cpfValidoRegex.test(cpf)) {
        mensagemParagrafo.innerText = 'CPF inválido! Use o formato 000.000.000-00.';
        mensagemParagrafo.style.color = 'red';
        return;   
    }

    mensagemParagrafo.innerText = 'Cadastro validado com sucesso!';
    mensagemParagrafo.style.color = 'green';
}