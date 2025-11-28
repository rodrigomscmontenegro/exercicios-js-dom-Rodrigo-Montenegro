function mudarForma() {
    const divForma = document.getElementById('forma');
    const botao = document.getElementById('btn-forma');

    if (divForma.style.borderRadius === '50%' || divForma.style.borderRadius === '') {
        // Mudar para Quadrado (0%)
        divForma.style.borderRadius = '0%';
        botao.innerText = 'Retornar forma original';
    } else {
        divForma.style.borderRadius = '50%';
        botao.innerText = 'Mudar forma';
    }
}