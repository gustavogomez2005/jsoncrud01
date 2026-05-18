let archivo = './json/libros.json';


document.getElementById('btnConsultaPorId').addEventListener('click', ()=>{
    let buscarId = document.getElementById('buscarId').value;
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
                h2.textContent = `el autor es ${resultado.autor} con su id ${resultado.id}`;
                h2.style.color = "black";
                alert(`el autor es ${resultado.autor} con su id ${resultado.id}`)
            } else {
                h2.textContent = `ese id no existe\n ${buscarId}`;
                h2.style.color = "red";
                h2.style.fontSize = "bold";
                alert(`ese id no existe\n ${buscarId}`)
            }
            h2.style.textAlign = "center";
            divmuestra.appendChild(h2)
            document.getElementById('buscarId').value = ""
        })
        .catch( (e)=>{
            alert(`Error, \n ${e}`)
        })
})

/*
document.getElementById('btnFiltrar').addEventListener('click', ()=>{
    let autorBuscado = prompt('Ingrese el autor a buscar');
    fetch(archivo)
        .then( (resp)=>{
            return resp.json();
        })
        .then((libros)=>{
            console.log(libros);
            console.log(autorBuscado);
            let librosDelAutor = libros.filter( (libro)=> libro.autor == autorBuscado);
            console.log(librosDelAutor);
            let divmuestra = document.getElementById('muestra');
            divmuestra.innerHTML = "";            
            librosDelAutor.forEach(libro =>{
                let li = document.createElement('li');
                li.textContent = `Título: ${libro.titulo} Autor: ${libro.autor}`
                divmuestra.appendChild(li);                
            })
        })
        .catch( (e)=>{
           // alert(`Autor inexistente\n ${e}`)
           console.log('error');
        })
})
*/
/*
document.getElementById('btnMostrarTodos').addEventListener('click', ()=>{
    fetch(archivo)
        .then( (resp)=>{
            return resp.json();
        })
        .then((libros)=>{
            console.log(libros);
            let divmuestra = document.getElementById('muestra');
            divmuestra.innerHTML = "";
            libros.forEach(libro => {
                let li = document.createElement('li');
                li.textContent = `Título: ${libro.titulo} Autor: ${libro.autor} Precio: ${libro.precio}`
                divmuestra.appendChild(li);
            });
        })
        .catch( (e)=>{
            alert(`Error ${e}`)
        })
})
*/
/*
document.getElementById('btnMostrarMorphi').addEventListener('click', ()=>{
    
})
    */