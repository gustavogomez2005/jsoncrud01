let archivo = './json/libros.json';


document.getElementById('btnConsultaPorId').addEventListener('click', ()=>{

})


document.getElementById('btnFiltrar').addEventListener('click', ()=>{
    let autorBuscado = prompt('Ingrese el autor a buscar');
    fetch(archivo)
        .then( (resp)=>{
            return resp.json();
        })
        .then((libros)=>{
            console.log(libros);
        })
        .catch( (e)=>{
            alert(`Autor inexistente\n ${e}`)
        })
})

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

document.getElementById('btnMostrarMorphi').addEventListener('click', ()=>{
    
})