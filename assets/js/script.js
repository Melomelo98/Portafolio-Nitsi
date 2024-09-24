AOS.init(); // Inicializa AOS

        // Validación del formulario y mensaje de éxito
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const formStatus = document.getElementById('formStatus');
            formStatus.classList.remove('d-none', 'alert-danger');
            formStatus.classList.add('alert-success');
            formStatus.innerHTML = '¡Tu mensaje ha sido enviado con éxito!';
        });

// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validación simple
    if (name === '' || email === '' || message === '') {
        // Si algún campo está vacío, muestra un mensaje de error
        displayFormStatus('Por favor, complete todos los campos.', 'alert-danger');
        return;
    }

    // Si todos los campos están completos, mostrar mensaje de éxito
    displayFormStatus('¡Tu mensaje ha sido enviado con éxito!', 'alert-success');

    // Limpiar el formulario (opcional)
    document.getElementById('contactForm').reset();
});

// Función para mostrar el estado del formulario (éxito o error)
function displayFormStatus(message, alertType) {
    const formStatus = document.getElementById('formStatus');
    formStatus.className = 'alert ' + alertType + ' mt-3'; // Cambia la clase para mostrar alerta
    formStatus.innerHTML = message; // Muestra el mensaje en el contenedor
    formStatus.classList.remove('d-none'); // Asegura que la alerta sea visible
}