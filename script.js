
const convertir = () => {
  let texto = document.getElementById("texto").value;
  let textoConvertido = texto.split('').reverse().join('');
  document.getElementById("resultado").innerHTML =textoConvertido;

}
