document.addEventListener("DOMContentLoaded", function() {
    // Cargar las animaciones al cargar la página
    loadAnimation("Animation - 1715594621144.json", "animation1");
    loadAnimation("Animation - 1715604149821.json", "animation2");
    loadAnimation("Animation - 1715604374356.json", "animation3");
});

// Función para cargar una animación en un elemento específico
function loadAnimation(animationFile, elementId) {
    lottie.loadAnimation({
        container: document.getElementById(elementId),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "animations/" + animationFile // Ruta de la carpeta animations
    });
}

// Agregar evento de clic al botón de registro en el encabezado
document.getElementById('register-btn').addEventListener('click', function() {
    // Aquí puedes redirigir al usuario a la página de registro o abrir un modal de registro
    alert('Redirecting to registration page or opening registration modal...');
});

// Agregar evento de clic al botón de inicio de sesión en el encabezado
document.getElementById('login-btn').addEventListener('click', function() {
    // Aquí puedes redirigir al usuario a la página de inicio de sesión o abrir un modal de inicio de sesión
    alert('Redirecting to login page or opening login modal...');
});



 // codigo del registro con node
 import { auth, database, createUserWithEmailAndPassword } from './firebase.js';

 document.addEventListener('DOMContentLoaded', function() {
     const registerForm = document.getElementById('registerForm');
 
     registerForm.addEventListener('submit', function(event) {
         event.preventDefault();
 
         console.log('Formulario enviado'); // Agregamos este mensaje de consola para verificar si se envía el formulario correctamente
 
         const username = document.getElementById('username').value;
         const email = document.getElementById('email').value;
         const password = document.getElementById('password').value;
 
         createUserWithEmailAndPassword(auth, email, password)
             .then((userCredential) => {
                 const user = userCredential.user;
                 console.log('Usuario creado:', user); // Agregamos este mensaje de consola para verificar si el usuario se crea correctamente
                 // Guardar el nombre de usuario en la base de datos de Firebase
                 // Esto es opcional, depende de tu aplicación
                 return set(ref(database, 'users/' + user.uid), {
                     username: username,
                     email: email
                 });
             })
             .then(() => {
                 alert('Usuario registrado exitosamente');
                 // Redireccionar al usuario a otra página, por ejemplo, la página de inicio
                 window.location.href = 'index.html';
             })
             .catch((error) => {
                 const errorCode = error.code;
                 const errorMessage = error.message;
                 alert('Error en el registro: ' + errorMessage);
             });
     });
 });
 
