const textoEntrada = document.getElementById('textoEntrada');
const textoSaida = document.getElementById('textoSaida');
const btnCriptografar = document.getElementById('btnCriptografar');
const btnDescriptografar = document.getElementById('btnDescriptografar');
const btnCopiar = document.getElementById('btnCopiar');

btnCriptografar.addEventListener('click', criptografarTexto);
btnDescriptografar.addEventListener('click', descriptografarTexto);
btnCopiar.addEventListener('click', copiarTexto);

function criptografarTexto() {
    let texto = textoEntrada.value.toLowerCase();
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    textoSaida.value = texto;
    btnCopiar.disabled = false; // Habilita o botão de copiar
}

function descriptografarTexto() {
    let texto = textoEntrada.value;
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    textoSaida.value = texto;
    btnCopiar.disabled = false; // Habilita o botão de copiar
}

function copiarTexto() {
    textoSaida.select();
    navigator.clipboard.writeText(textoSaida.value);
    alert("Texto copiado para a área de transferência!");
}
