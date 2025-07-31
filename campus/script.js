// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    // Importamos Zod (esta línea no es necesaria si lo incluyes desde un CDN en el HTML)
    // const z = require('zod');

    // 1. Define el esquema de validación con Zod
    const registroSchema = z.object({
        nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
        correo_electronico: z.string().email("El formato del correo electrónico no es válido."),
        contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
    });

    // 2. Selecciona el formulario y los elementos de error del DOM
    const form = document.getElementById('registro-form');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo_electronico');
    const contrasenaInput = document.getElementById('contrasena');
    
    // Elementos para mostrar los errores
    const errorNombre = document.getElementById('error-nombre');
    const errorCorreo = document.getElementById('error-correo');
    const errorContrasena = document.getElementById('error-contrasena');
    const mensajeExito = document.getElementById('mensaje-exito');

    // Función para mostrar mensajes de error
    const mostrarError = (element, message) => {
        element.textContent = message;
        element.style.color = 'red';
        element.style.fontSize = '0.9em';
    };

    // Función para limpiar los mensajes de error
    const limpiarErrores = () => {
        errorNombre.textContent = '';
        errorCorreo.textContent = '';
        errorContrasena.textContent = '';
        mensajeExito.textContent = '';
    };

    // 3. Maneja el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        // Evita que el formulario se envíe por defecto (recargue la página)
        event.preventDefault();

        // Limpia cualquier mensaje de error previo
        limpiarErrores();

        // Obtén los datos del formulario
        const formData = {
            nombre: nombreInput.value,
            correo_electronico: correoInput.value,
            contrasena: contrasenaInput.value,
        };

        // 4. Valida los datos ingresados utilizando el esquema de Zod
        try {
            // El método .parse() lanzará un error si la validación falla
            registroSchema.parse(formData);

            // Si la validación es exitosa, muestra un mensaje de éxito
            mensajeExito.textContent = '¡Registro exitoso!';
            mensajeExito.style.color = 'green';
            console.log('Datos validados y listos para enviar:', formData);

        } catch (error) {
            // Si la validación falla, maneja el error de Zod
            if (error instanceof z.ZodError) {
                // Itera sobre los errores de Zod y muestra el mensaje correspondiente
                error.errors.forEach(err => {
                    if (err.path[0] === 'nombre') {
                        mostrarError(errorNombre, err.message);
                    }
                    if (err.path[0] === 'correo_electronico') {
                        mostrarError(errorCorreo, err.message);
                    }
                    if (err.path[0] === 'contrasena') {
                        mostrarError(errorContrasena, err.message);
                    }
                });
            }
        }
    });
});