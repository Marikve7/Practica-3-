const inputNombre = document.getElementById("nombre");
const boton = document.getElementById("boton");
const imagen = document.getElementById("imagen");
const inputNombreOf = document.getElementById("nombreOf");
const inputNombreC = document.getElementById("nombreC");
const inputCapital = document.getElementById("capital");
const inputRegion = document.getElementById("region");
const inputSubregion = document.getElementById("subregion");

async function BuscarPaises(){
    const resp = await fetch("https://restcountries.com/v3.1/name/" + inputNombre.value);
    const infoPais = await resp.json();

    imagen.src = infoPais[0].flags.svg;

    inputNombreOf.innerText = infoPais[0].name.official;

    inputNombreC.innerText = infoPais[0].name.common;

    inputCapital.innerText = infoPais[0].capital;

    inputRegion.innerText = infoPais[0].region;

    inputSubregion.innerText = infoPais[0].subregion;
}

boton.addEventListener("click", e => {
    e.preventDefault();
    BuscarPaises();
})
