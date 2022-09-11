//Muestra encuesta de satisfacción a los 5 minutos de haber ingresado
setTimeout(() => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            title: "titleClima",
            cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: '¿Cómo te sentiste al utilizar FitApp?',
        html: `<h4 style="margin-bottom:20px; color:orange">Puntúa de 1 a 5</h4>
        <p style="margin-bottom:20px; color:orange">Donde 1 es insatisfecho y 5 es muy satisfecho</p>
        <form>
            <button type="button" id="num1" class="buttonForm"><i class="fa-solid fa-1"></i></button>
            <button type="button" id="num2" class="buttonForm" ><i class="fa-solid fa-2"></i></button>
            <button type="button" id="num3" class="buttonForm" ><i class="fa-solid fa-3"></i></button>
            <button type="button" id="num4" class="buttonForm" ><i class="fa-solid fa-4"></i></button>
            <button type="button" id="num5" class="buttonForm" ><i class="fa-solid fa-5"></i></button>
            <p> ¿Qué fue lo que más te gustó? </p>
            <textarea style="width:300px; height:100px; margin-bottom:15px; size:200; padding:10px"> </textarea>
            <p> ¿Qué fue lo que menos te gustó? </p>
            <textarea style="width:300px; height:100px; margin-bottom:15px; size:200; padding:10px"> </textarea>
        </form>`,
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Omitir',
        reverseButtons: true,

    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Se envió exitosamente, ¡Muchas gracias!'
            )
        }
    })
    selectedNum()
}, 300000)


//Funciones
//Toma el número seleccionado del csat y lo diferencia del resto para visualizar el elegido por el usuario
function selectedNum() {
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const num3 = document.getElementById("num3")
    const num4 = document.getElementById("num4")
    const num5 = document.getElementById("num5")

    num1.addEventListener('click', () => {
        num1.style.color = "black"
        num2.style.color = "white"
        num3.style.color = "white"
        num4.style.color = "white"
        num5.style.color = "white"
    })
    num2.addEventListener('click', () => {
        num1.style.color = "white"
        num2.style.color = "black"
        num3.style.color = "white"
        num4.style.color = "white"
        num5.style.color = "white"
    })
    num3.addEventListener('click', () => {
        num1.style.color = "white"
        num2.style.color = "white"
        num3.style.color = "black"
        num4.style.color = "white"
        num5.style.color = "white"
    })
    num4.addEventListener('click', () => {
        num1.style.color = "white"
        num2.style.color = "white"
        num3.style.color = "white"
        num4.style.color = "black"
        num5.style.color = "white"
    })
    num5.addEventListener('click', () => {
        num1.style.color = "white"
        num2.style.color = "white"
        num3.style.color = "white"
        num4.style.color = "white"
        num5.style.color = "black"
    })
}

