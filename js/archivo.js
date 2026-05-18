let archivo = './json/libros.json';


document.getElementById('btnConsultaPorId').addEventListener('click', ()=>{

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

document.getElementById('btnMostrarMorphi').addEventListener('click', ()=>{
    
})