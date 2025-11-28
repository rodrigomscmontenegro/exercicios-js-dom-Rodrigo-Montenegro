function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const dataNasc = document.getElementById('dataNasc').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;

    let dataFormatada = dataNasc;
    if (dataNasc) {
        dataFormatada = dataNasc.split('-').reverse().join('/');
    }
    
    const resultadoParagrafo = document.getElementById('resultado');
    const frase = `${nome} nasceu no dia ${dataFormatada} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${uf}.`;

    resultadoParagrafo.innerText = frase;

    resultadoParagrafo.style.color = 'green';
    resultadoParagrafo.style.fontSize = '24px';
}