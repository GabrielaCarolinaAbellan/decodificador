document.addEventListener("DOMContentLoaded", function() {
    const quadroTexto = document.querySelector('.container__quadro');
    const respostaTexto = document.querySelector('.container__resposta');
    const botaoCriptografar = document.querySelector('.container__botao__criptografar');
    const botaoDescriptografar = document.querySelector('.container__botao__descriptografar');
    const botaoCopiar = document.querySelector('.container__botao__copiar');
    const containerBoneco = document.querySelector('.container_boneco');
    const containerResultadoMensagem = document.querySelector('.container__resultado__mensagem');
    const containerResultadoTexto = document.querySelector('.container__resultado__texto');

    function criptografarTexto(texto) {
        return texto.replace(/e/g, 'enter')
                    .replace(/i/g, 'imes')
                    .replace(/a/g, 'ai')
                    .replace(/o/g, 'ober')
                    .replace(/u/g, 'ufat');
    }

    function descriptografarTexto(texto) {
        return texto.replace(/enter/g, 'e')
                    .replace(/imes/g, 'i')
                    .replace(/ai/g, 'a')
                    .replace(/ober/g, 'o')
                    .replace(/ufat/g, 'u');
    }

    function mostrarBotaoCopiar() {
        botaoCopiar.style.display = 'block';
    }

    botaoCriptografar.addEventListener('click', function() {
        const texto = quadroTexto.value.toLowerCase();
        const textoCriptografado = criptografarTexto(texto);
        respostaTexto.value = textoCriptografado;
        containerBoneco.style.display = 'none'; // Esconde a imagem
        containerResultadoMensagem.style.display = 'none'; // Esconde o parágrafo da mensagem
        containerResultadoTexto.style.display = 'none'; // Esconde o parágrafo do texto
        mostrarBotaoCopiar(); // Mostrar o botão "Copiar" ao clicar em Criptografar
    });

    botaoDescriptografar.addEventListener('click', function() {
        const texto = quadroTexto.value.toLowerCase();
        const textoDescriptografado = descriptografarTexto(texto);
        respostaTexto.value = textoDescriptografado;
        containerBoneco.style.display = 'none'; // Esconde a imagem
        containerResultadoMensagem.style.display = 'none'; // Esconde o parágrafo da mensagem
        containerResultadoTexto.style.display = 'none'; // Esconde o parágrafo do texto
        mostrarBotaoCopiar(); // Mostrar o botão "Copiar" ao clicar em Descriptografar
    });

    botaoCopiar.addEventListener('click', function() {
        respostaTexto.select();
        document.execCommand('copy');
        alert("Texto copiado.")
    });
});