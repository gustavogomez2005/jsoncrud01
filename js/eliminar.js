let archivo = './json/libros.json';


document.getElementById('btnEliminar').addEventListener('click', ()=>{
    let buscarId = document.getElementById('eliminarId').value;
    fetch(archivo)
        .then( (rpta)=>{
            return rpta.json();
        })
        .then( (libros)=>{
            let resultado = libros.find( libro => libro.id == buscarId)
            let divmuestra = document.getElementById('muestra');
            divmuestra.innerHTML = "";
            let h2 = document.createElement('h2');
            if (resultado != undefined) {
                h2.textContent = `el autor eliminado es ${resultado.autor} con su id ${resultado.id} titulo: ${resultado.titulo}`;
                h2.style.color = "black";
                let resultadoNroIndice = libros.findIndex( libro => libro.id == buscarId)
                let eliminados = libros.splice(resultadoNroIndice, 1);
                h2.style.textAlign = "center";
                divmuestra.appendChild(h2)
console.log(eliminados);
                let divmuestra2 = document.createElement('div');
                divmuestra2.innerHTML = ""
                libros.forEach(libro => {
                    let li = document.createElement('li');
                    li.textContent = `Título: ${libro.titulo} Autor: ${libro.autor} ID: ${libro.id} Precio: ${libro.precio} `
                    divmuestra2.appendChild(li);
                    divmuestra.appendChild(divmuestra2)
                });                
//                alert(`el autor es ${resultado.autor} con su id ${resultado.id}`)
                
            } else {
                h2.textContent = `ese id no existe\n ${buscarId}`;
                h2.style.color = "red";
                h2.style.fontSize = "bold";
                alert(`ese id no existe\n ${buscarId}`)
                h2.style.textAlign = "center";
                divmuestra.appendChild(h2)                
            }

            document.getElementById('eliminarId').value = ""
        })
        .catch( (e)=>{
            alert(`Error, \n ${e}`)
        })
})

