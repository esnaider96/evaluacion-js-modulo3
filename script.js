// Mi Documento JavaScript // Función principal para el saludo cordial venezolano:
   function saludarcordial() {

// Capturamos el nombre y apellido de la persona:
   const nombreInput = document.getElementById('nombre');
   const nombre = nombreInput.value.trim();
    
// Los elementos donde mostraré los resultados:
    const resultado = document.getElementById('resultado');
    const contador = document.getElementById('contador');
   
// Verificamos si el campo está vacío:
    if (nombre === '') {
        resultado.innerHTML = '<p>¡Mi estimado! no me dejaste tu nombre y apellido.</p>';
        contador.innerHTML = '<p>Parece que se te pasó escribirlo, ¡te invito a que lo ingreses de nuevo, por favor!</p>';
    } else {
// Generamos el saludo con un slang venezolano aleatorio:
        const saludos = [
            `¡Hola, un placer ${nombre}! ¿Qué más mi panita?`,
            `¡Hola ${nombre}, mi cham@! ¿Cómo te encuentras, cómo vas?`,
            `¡Saludos ${nombre}! ¿Te invito por unas arepas?`,
            `¡Dime ${nombre}, mi estimado! ¿Cómo van tus cosas?`
        ];
        const saludoAleatorio = saludos[Math.floor(Math.random() * saludos.length)];
        
        resultado.innerHTML = `<p>${saludoAleatorio}</p>`;
        
        // Conté con caracteres con estilo:
        const longitud = nombre.length;
        let mensajeLongitud;
        
        if (longitud > 10) {
            mensajeLongitud = `¡Wao ${nombre}! tienes un nombre largo (${longitud} letras), casi como "Nuestra Carretera: Guarenas-Guatire"`;
        } else if (longitud > 5) {
            mensajeLongitud = `Tu nombre tiene ${longitud} letras, un nombre fácil de memorizar, mi panita ${nombre}`;
        } else {
            mensajeLongitud = `¡${longitud} letras! Por favor, ingresa nombres cortos como "Juan" pero con mucho sabor`;
        }
        
        contador.innerHTML = `<p>${mensajeLongitud}</p>`;
    }
    
// Limpiamos el campo para un nuevo saludo:
    nombreInput.value = '';
}

// Evento al hacer clic en el botón:
document.getElementById('saludar').addEventListener('click', saludarcordial);

// Evento al presionar enter en el input:
document.getElementById('nombre').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        saludarcordial();
    }
});