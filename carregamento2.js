function simulatePageLoad() {
    const bar = document.querySelector('.bar');
    bar.style.width = '100%';
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
        window.location.href = "aindex.html";
    }, 2000); // Tempo de simulação do carregamento em milissegundos
}

window.onload = simulatePageLoad;

