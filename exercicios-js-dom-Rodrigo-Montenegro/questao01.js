function inserirTitulo() {
    const inputTitulo = document.getElementById('txt-titulo');
    const novoTitulo = inputTitulo.value
    
    const h1Elemento = document.getElementById('titulo');
    h1Elemento.innerText = novoTitulo;

    h1Elemento.style.color = 'blue';
}