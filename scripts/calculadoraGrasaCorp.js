//Variables y constantes
let porcGCH, porcGCM
const buttonGC = document.getElementById("calcGC")
const contResGC = document.getElementById("containerResultadosGC")
const formGC = document.getElementById("containerFormGC")
const resGC = document.getElementById("resGC")
const btnVolverGC = document.getElementById("volverGC")
const inputPesoGC = document.getElementById("inputPeso3")
const titResGC = document.getElementById("titleResultadosGC")
const inputAlturaGC = document.getElementById("inputAltura3")
const inputCintura = document.getElementById("inputCintura")
const inputCuello = document.getElementById("inputCuello")
const radiosGC = document.getElementsByName("genero3")
const inputCadera = document.getElementById("inputCadera")
const inputEdad3 = document.getElementById("inputEdad3")

//Eventos
buttonGC.addEventListener('click', () => {// Al hacer click en el botón despliega el formulario
    document.getElementById("formCalculadoraGC").reset()
    contFormIMC.style.display = "none"
    contIMC.style.display = "none"
    contFormTMB.style.display = "none"
    contAlimentos.style.display = "none"
    contReg.style.display = "none"
    divCards.style.display = "none"
    rtaTotalCals.style.display = "none"
    formGC.style.display = "block"
})

inputEdad3.addEventListener('input', () => {// Ingresa la edad y se guarda en la propiedad
    edad = inputEdad3.value
});

inputPesoGC.addEventListener('input', () => {// Ingresa el peso y se guarda en la propiedad
    peso = inputPesoGC.value
});

inputAlturaGC.addEventListener('input', () => {// Ingresa la altura y se guarda en la propiedad
    altura = inputAlturaGC.value
});

formGC.addEventListener('submit', (e) => { // Al hacer click en el botón de submit se muestra el resultado del cálculo del % de grasa corporal
    e.preventDefault()
    for (let radio of radiosGC) {
        if (radio.checked) {
            genero = radio.value
        }
    }

    resultadoGC(genero, peso, altura, edad)
    document.getElementById("formCalculadoraGC").reset()
})

btnVolverGC.addEventListener("click", () => { // la hacer click en volver regresa a la página de inicio
    divCards.style.display = ""
    contResGC.style.display = "none"
    formGC.style.display = "none"
})

//Funciones
//Calcula y devuelve el resultado del % de grasa corporal
function resultadoGC(genero, peso, altura, edad) {
    titResGC.style.display = "block"
    contResGC.style.display = "block"
    const imcGc = peso / Math.pow(altura / 100, 2)

    if (genero == "Hombre") {
        porcGCH = ((1.2 * imcGc) + (0.23 * edad) - 10.8 - 5.4)
        resGC.innerHTML = ` <div>  
                                    <p> 
                                        Tu porcentaje de grasa corporal es: <b>${porcGCH.toFixed(1)}%</b>
                                        <i onclick="infoGCH()" class="fa-solid fa-circle-info"></i>
                                    </p> 
                             </div> `
    }
    else if (genero == "Mujer") {
        porcGCM = ((1.2 * imcGc) + (0.23 * edad) - 5.4)
        resGC.innerHTML = ` <div>  
                                <p> 
                                Tu porcentaje de grasa corporal es: <b>${porcGCM.toFixed(1)}%</b>
                                    <i onclick="infoGCM()" class="fa-solid fa-circle-info"></i>
                                </p> 
                             </div> `
    }
}

//genera alerta de interpretación de Porcentaje de Grasa Corporal para hombres
function infoGCH() {
    Swal.fire({
        title: 'Interpretación de Porcentaje de Grasa Corporal para hombres',
        html: '<img style="width:380px; height:250px" src="Images/bodyfat_table_men_ES.jpg"></img>',
        customClass: {
            confirmButton: 'swalBtn',
            title: 'swalTitle'
        }
    })
}

//genera alerta de interpretación de Porcentaje de Grasa Corporal para mujeres
function infoGCM() {
    Swal.fire({
        title: 'Interpretación del Porcentaje de Grasa Corporal para mujeres',
        html: '<img style="width:380px; height:250px" src="Images/bodyfat_table_women_ES.jpg"></img>',
        customClass: {
            confirmButton: 'swalBtn',
            title: 'swalTitle'

        }
    })
}

