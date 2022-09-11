//Variables y constantes
let horas
const btnCalcAg = document.getElementById("calcAgua")
const formAgua = document.getElementById("formCalculadoraAg")
const inputPesoAg = document.getElementById("inputPeso4")
const inputHoras = document.getElementById("inputHoras")
const tituloAg = document.getElementById("titleResAgua")
const resAgua = document.getElementById("resAgua")
const btnVolverAg = document.getElementById("volverAgua")
const contFormAg = document.getElementById("containerFormAgua")
const contResAg = document.getElementById("containerResultadosAgua")

//Eventos
btnCalcAg.addEventListener('click', () => {// Al hacer click en el botón despliega el formulario
    document.getElementById("formCalculadoraAg").reset()
    divCards.style.display = "none"
    contFormAg.style.display = "block"
})

inputPesoAg.addEventListener('input', () => {// Ingresa el peso y se guarda en la propiedad
    peso = inputPesoAg.value
});

inputHoras.addEventListener('input', () => {// Ingresa la altura y se guarda en la propiedad
    horas = inputHoras.value
});

formAgua.addEventListener('submit', (e) => { // Al hacer click en el botón de submit se muestra el resultado
    e.preventDefault()
    resultadoAgua(peso, horas)
    document.getElementById("formCalculadoraAg").reset()
})

btnVolverAg.addEventListener("click", () => { // la hacer click en volver regresa a la página de inicio
    divCards.style.display = ""
    contFormAg.style.display = "none"
    contResAg.style.display = "none"
})

//Funciones
//Calcula y devuelve el resultado de la TMB
function resultadoAgua(peso, horas) {
    contResAg.style.display = "block"
    tituloAg.style.display = "block"

    calculoAgua = (35 * peso) + (horas * 500)
    resAgua.innerHTML = `   <div>  
                                <p> 
                                    Necesitas beber al día: <b>${calculoAgua.toFixed(0)} ml de agua</b>
                                    <i onclick="infoAgua()" class="fa-solid fa-circle-info"></i>
                                </p> 
                            </div> `
}

//genera alerta de interpretación de TMB
function infoAgua() {
    Swal.fire({
        title: '¿Cuántos litros de agua debemos tomar al día según el peso?',
        imageUrl: 'Images/agua-cuerpo-humano-min.jpg',
        html: `<p>Las personas con un mayor peso corporal tienen unas necesidades hídricas superiores que las personas con un peso inferior, ya que nuestros cuerpos están formados por un 50-70% de agua. 
                    Cuanto más masa corporal, más agua se necesita para mantener la homeostasis.</p>`,
        imageWidth: 300,
        imageHeight: 300,
        customClass: {
            confirmButton: 'swalBtn',
            title: 'titleTmb'
        }
    })
}

