let archivo = './json/libros.json';

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
                li.textContent = `Título: ${libro.titulo} Autor: ${libro.autor} con su id ${libro.id} Precio: ${libro.precio}`
                divmuestra.appendChild(li);
            });
        })
        .catch( (e)=>{
            alert(`Error ${e}`)
        })
