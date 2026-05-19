let archivo = './json/libros.json';


document.getElementById('btnAlta').addEventListener('click', ()=>{

    fetch(archivo)
        .then( (rpta)=>{
            return rpta.json();
        })
        .then( (libros)=>{

            let id, tit, nom, precio, stk, dispo, edit;
            id = document.getElementById('txtid').value;
            tit = document.getElementById('txttitulo').value;
            nom = document.getElementById('txtautor').value;
            precio = document.getElementById('txtprecio').value;
            stk = document.getElementById('txtstock').value;
            dispo = document.getElementById('chkdisponible').value;
            edit = document.getElementById('txteditorial').value;

            let nuevoLibro = {
                id: id,
                titulo: tit,
                autor: nom,
                precio: precio,
                editorial: edit,
                stock: stk,
                disponible: dispo
            };
            console.log(nuevoLibro);
/*            let objetosLibros = JSON.parse(libros);
            console.log(objetosLibros);
             console.log(typeof(objetosLibros));
            objetosLibros.push(nuevoLibro);
            let librosact = JSON.stringify(objetosLibros);
            console.log(typeof(librosact));
            console.log(librosact); */
console.log(libros);
console.log(typeof(libros));
        })
        .catch( (e)=>{
            alert(`Error al leer el json de Libros\n ${e}`)
        })
})
