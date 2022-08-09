const corp = document.querySelector('#cuerpo');
const nombre = document.querySelector('#Nombre');
const apellido = document.querySelector('#Apellido');
const telefono = document.querySelector('#Telefono');

function cargar()
{
    fetch("http://www.raydelto.org/agenda.php")
    .then((respuesta) => {
        return respuesta.json();
    }).then((data) => {
        console.log(data);
        data.forEach(contact => {
            cuerpo.innerHTML += `
            <tr>
                <td>${contact.nombre}</td>
                <td>${contact.apellido}</td>
                <td>${contact.telefono}</td>
            </tr>
            
        `});
    })
}

function guardar()
{
    fetch("http://www.raydelto.org/agenda.php",{
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value
        })
    }).then((respuesta) => {
        return respuesta.json();
    }).then((data) => {
        console.log(data);
        alert("DATOS GAURDADO!!");
        location.reload();
    })
}