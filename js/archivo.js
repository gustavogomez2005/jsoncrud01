let archivo = './json/libros.json';


document.getElementById('btnConsultaPorId').addEventListener('click', ()=>{

})


document.getElementById('btnFiltrar').addEventListener('click', ()=>{

})

document.getElementById('btnMostrarTodos').addEventListener('click', ()=>{
    fetch(archivo)
        .then( (resp)=>{
            return resp.json();
        })
        .then((libros)=>{
            console.log(libros);
            let divmuestra = document.getElementById('muestra');
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