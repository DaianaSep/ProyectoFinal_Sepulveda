//Variables y constantes
const divWeather = document.getElementById("divWtr")
const API_KEY = "b70f5df831f83a9536bfa74601dccefb"
let tipRandom, valorRandom
const arrayTipsCalor = ["La hora del entrenamiento es fundamental. Evita hacer ejercicio al aire libre a primera hora de la tarde. El horario de más calor suele ser entre mediodía y las 3pm.",
    "Hidrátete. Bebe agua durante la actividad física, así como antes y después, incluso si no tienes sed. Lleva siempre una botella de agua contigo.",
    "Vístete adecuadamente. Lleva ropa ligera y holgada de colores claros. Las telas transpirables también pueden ser de gran ayuda. Protéjete del sol utilizando lentes, una gorra o una visera y mucho protector solar resistente al sudor.",
    "Recarga energías con alimentos frescos. Prueba aperitivos ligeros y sanos que también te ayuden a mantenerte fresco antes y después de hacer ejercicio tales como frutas, batidos, ensaladas frías, verduras frescas, etc.",
    "Si no puedes tolerar el calor, no te saltes el entrenamiento, busca lugares interiores donde puedas mantenerte activo, como un centro comercial o un gimnasio o modifica tu horario de entrenamiento para que coincida con las horas más frescas. ",
    "Preste atención a los signos de deshidratación: desde sed, boca seca o pegajosa, cefalea, calambres musculares, irritabilidad o confusión, mareo o aturdimiento, latido cardíaco rápido hasta pérdida del conocimiento.",]
const arrayTipsFrio = ["Mantén y refuerza tus hábitos de higiene. Lava tus manos para evitar el contagio de virus que causan los resfríos y la gripe. Además, recuerda cubrirte la boca con el brazo al momento de estornudar o toser para evitar la propagación de los gérmenes.",
    "Evita cambios bruscos de temperatura. En tu vivienda, la temperatura debe estar en torno a los 22º C y es aconsejable que ventiles periódicamente los ambientes.",
    "¡No desatiendas la protección solar! Los rayos de sol pueden quemar la piel aún en clima frío, especialmente para aquellos que practican deportes invernales o al aire libre. Para evitarlo, utiliza protección solar con altos índices de protección UV.",
    "Refuerza el cuidado de la piel. Durante esta época del año, la piel lucha contra los efectos del frío y los cambios bruscos de temperatura. Para afrontar estas variables hidrata, protege y nutre tu piel para evitar descamaciones, paspaduras y grietas.",
    "Cuida tu alimentación. Ante bajas temperaturas, el cuerpo necesita más calorías para afrontar el frío, por lo que podrías aumentar de peso. Para evitar esto, mantén los horarios de alimentación, consume alimentos tibios y añade a tu dieta frutos secos.",
    "Aumenta la ingesta de vitaminas A, C y D. La vitamina A evita la resequedad del cutis y las grietas en los labios. Por su parte, las vitaminas C y D ayudan a reforzar tu sistema inmunológico aumentando las defensas y previniendo resfríos.",
    "Persiste con el deporte, aún en tiempos de frío. Practicar ejercicio físico te ayudará a entrar en calor y combatir el frío. Por eso, es ideal programar actividades físicas adecuadas para la época del año en espacios cubiertos y bien ventilados.",]
const arrayTipsTemplado = ["No olvides tu protector solar. Como vas a estar más tiempo disfrutando de las actividades al aire libre, es importante que protejas bien tu piel de los rayos solares. Para ello, utiliza un protector solar que sea adecuado a tu tipo de piel.",
    "Mantén un hábito de sueño regular. Para combatir los trastornos del sueño, es aconsejable acostarse y levantarse siempre a la misma hora. También es recomendable dormir ocho horas y evitar que las siestas sobrepasen los veinte minutos.",
    "Practica ejercicio al aire libre. Ponte tu ropa deportiva y lánzate a hacer ejercicio aprovechando el buen clima, basta con que camines a buen ritmo unos 45 minutos, verás que bien te sientes.",
    "¡Haz un picnic! Divertido, saludable y te ayuda a salir de la rutina. Solo o en compañía, escoge un lugar soleado y disfruta de tu comida al aire libre. Te dará un aporte de energía extra para el resto del día. "]

// Llamada API de clima + mostrar tips en pantalla
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Buenos Aires,caba,Argentina&limit=1&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const { lat, lon, state, country, name } = data[0]

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(({ main }) => {
                divWeather.innerHTML = `<div>
                                            <p id="climaCity"> ${name}, CABA, ${country} </p>
                                     </div> `
                climaImg(main)
                mostrarTips(main)
            })
    })

//Funciones
//Muestra luego de 2 segundosde carga de página un tip random según el tipo de clima
function mostrarTips(main) {
    setTimeout(() => {
        if (main.temp < 18) {//Tips para clima frío
            tipRandom = Math.floor(Math.random() * arrayTipsFrio.length);
            valorRandom = arrayTipsFrio[tipRandom];
            Swal.fire({
                title: '¡El clima está frío!',
                imageUrl: 'Images/cold.gif',
                html: `<h2 style="margin-bottom:20px; color:orange">#FitAppTips</h2>
                <p style="border:5px outset; border-color:cadetblue; margin-left:30px; margin-right:30px; padding:10px; border-radius:37px">${valorRandom}</p>
                <p style="margin-top:30px; color:cadetblue"> ¡Seguinos para más FitAppTips! </p>
                <a href="https://www.facebook.com/" target="_blank"><img id="logo" src="Images/facebook2.png" class="card-img-sm" alt="..."></a>    
                <a href="https://www.twitter.com/" target="_blank"><img id="logo" src="Images/gorjeo.png" class="card-img-sm" alt="..."></a>
                <a href="https://www.instagram.com/" target="_blank"><img id="logo" src="Images/instagram2.png" class="card-img-sm" alt="..."></a>`,
                imageWidth: 250,
                imageHeight: 200,
                customClass: {
                    confirmButton: 'swalBtn',
                    title: "titleClima",
                },
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!',
            })
        } else if (18 <= main.temp <= 25) {//Tips para clima templado
            tipRandom = Math.floor(Math.random() * arrayTipsTemplado.length);
            valorRandom = arrayTipsTemplado[tipRandom];
            Swal.fire({
                title: '¡El clima está templado!',
                imageUrl: 'Images/templ.gif',
                html: `<h2 style="margin-bottom:20px; color:orange">#FitAppTips</h2>
                <p style="border:5px outset; border-color:cadetblue; margin-left:30px; margin-right:30px; padding:10px; border-radius:37px">${valorRandom}</p>
                <p> ¡Seguinos para más FitAppTips! </p>
                        <a href="https://www.facebook.com/" target="_blank"><img id="logo" src="Images/facebook2.png" class="card-img-sm" alt="..."></a>    
                        <a href="https://www.twitter.com/" target="_blank"><img id="logo" src="Images/gorjeo.png" class="card-img-sm" alt="..."></a>
                        <a href="https://www.instagram.com/" target="_blank"><img id="logo" src="Images/instagram2.png" class="card-img-sm" alt="..."></a>`,
                imageWidth: 300,
                imageHeight: 200,
                customClass: {
                    confirmButton: 'swalBtn',
                    title: "titleClima",
                },
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!',
            })
        } else {//Tips para clima cálido
            tipRandom = Math.floor(Math.random() * arrayTipsCalor.length);
            valorRandom = arrayTipsCalor[tipRandom];
            Swal.fire({
                title: '¡El clima está caluroso!',
                imageUrl: 'Images/hot.gif',
                html: `<h2 style="margin-bottom:20px; color:orange">#FitAppTips</h2>
                <p style="border:5px outset; border-color:cadetblue; margin-left:30px; margin-right:30px; padding:10px; border-radius:37px">${valorRandom}</p>
                <p> ¡Seguinos para más FitAppTips! </p>
                <a href="https://www.facebook.com/" target="_blank"><img id="logo" src="Images/facebook2.png" class="card-img-sm" alt="logoFb"></a>    
                <a href="https://www.twitter.com/" target="_blank"><img id="logo" src="Images/gorjeo.png" class="card-img-sm" alt="logoTw"></a>
                <a href="https://www.instagram.com/" target="_blank"><img id="logo" src="Images/instagram2.png" class="card-img-sm" alt="logoIg"></a>`,
                imageWidth: 320,
                imageHeight: 190,
                customClass: {
                    confirmButton: 'swalBtn',
                    title: "titleClima",
                },
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Genial!',
            })
        }
    }, 2000);
}

//Asigna gif de clima según la temperatura
function climaImg(main) {
    const tempRounded = roundTemp(main)
    const stRounded = roundST(main)
    if (tempRounded < 18) {
        divWeather.innerHTML += `<div>
                                        <p id="clima"> T: ${tempRounded}°C - ST:${stRounded}°C</p>
                                        <img id="imgClima" src="Images/frio.gif">
                                </div> `
    } else if (18 <= tempRounded <= 25) {
        divWeather.innerHTML += `<div>
                                    <p id="clima"> T: ${tempRounded}°C - ST:${stRounded}°C</p>
                                    <img id="imgClimaT" src="Images/beach.gif">
                                </div> `
    } else {
        divWeather.innerHTML += `<div>
                                    <p id="clima"> T: ${tempRounded}°C - ST:${stRounded}°C </p>
                                    <img id="imgClima" src="Images/sun.gif">
                                </div> `
    }
}

//Redondea a 1 decimal la temperatura
function roundTemp(main) {
    let temperatura = 0
    temperatura = main.temp
    return (temperatura.toFixed(1))
}

//Redondea a 1 decimal la sensación térmica
function roundST(main) {
    let sensTerm = 0
    sensTerm = main.feels_like
    return (sensTerm.toFixed(1))
}