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
//            divmuestra.innerHTML = "";
            if (resultado != undefined) {
                let inputId = document.getElementById('txtid');
                inputId.value = `${resultado.id}`;
                inputId.style.color = "black";
                let inputTitulo = document.getElementById('txttitulo');
                inputTitulo.value = `${resultado.titulo}`;
                inputTitulo.style.color = "black";
                let inputAutor = document.getElementById('txtautor');
                inputAutor.value = `${resultado.autor}`;
                inputAutor.style.color = "black";
                let inputPrecio = document.getElementById('txtprecio');
                inputPrecio.value = `${resultado.precio}`;
                inputPrecio.style.color = "black";
                let inputEditorial = document.getElementById('txteditorial');
                inputEditorial.value = `${resultado.editorial}`;
                inputEditorial.style.color = "black";
                let inputStock = document.getElementById('txtstock');
                inputStock.value = `${resultado.stock}`;
                inputStock.style.color = "black";
                let inputDispo = document.getElementById('chkdisponible');
                inputDispo.checked = `${resultado.disponible}`;
                inputDispo.style.color = "black";                                                                                
                
                //divmuestra.appendChild(inputId)
            } else {
                let h2 = document.createElement('h2');
                h2.textContent = `ese id no existe\n ${buscarId}`;
                h2.style.color = "red";
                h2.style.fontSize = "bold";
                h2.style.textAlign = "center";
                divmuestra.appendChild(h2)
                alert(`ese id no existe\n ${buscarId}`)
            }
            document.getElementById('buscarId').value = ""
        })
        .catch( (e)=>{
            alert(`Error, \n ${e}`)
        })
})


document.getElementById('btncambiar').addEventListener('click', ()=>{
    let id, tit, nom, precio, edit, stk, dispo;
    id = parseInt(document.getElementById('txtid').value);
    tit = document.getElementById('txttitulo').value;
    nom = document.getElementById('txtautor').value;
    precio = parseInt(document.getElementById('txtprecio').value);
    edit = document.getElementById('txteditorial').value;
    stk = parseInt(document.getElementById('txtstock').value);
    dispo = document.getElementById('chkdisponible').checked;

    const libroModificado = {
        id: id,
        titulo: tit,
        autor: nom,
        precio: precio,
        editorial: edit,
        stock: stk,
        disponible: dispo        
    }

    fetch(archivo)
        .then( (rpta)=>{
            return rpta.json();
        })
        .then((libros)=>{
            let resultado = libros.find( libro => libro.id == id)
            if (resultado != undefined) {
                console.log(resultado);
                resultado.id = id;
                resultado.titulo = tit
                resultado.autor = nom
                resultado.precio = precio
                resultado.editorial = edit
                resultado.stock = stk
                resultado.disponible = dispo
            } else {
                alert(`Error al buscar el indice del json \n${e}`)                                
            }

//            libros.push(libroModificado)
            console.log(libros);
        })
        .catch((e)=>{
            alert(`Error al leer el json \n${e}`)
        })
})
