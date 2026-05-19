let archivo = './json/libros.json';


document.getElementById('btnAlta').addEventListener('click', ()=>{
            let id, tit, nom, precio, stk, dispo, edit;
            id = parseInt(document.getElementById('txtid').value);
            tit = document.getElementById('txttitulo').value;
            nom = document.getElementById('txtautor').value;
            precio = parseInt(document.getElementById('txtprecio').value);
            stk = parseInt(document.getElementById('txtstock').value);
            dispo = document.getElementById('chkdisponible').value;
            if (dispo == "on") {
                dispo = true;
            } else {
                dispo = false;
            }
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

        fetch(archivo)
        .then( (rpta)=>{
            return rpta.json();
        })
        .then( (libros)=>{
            console.log(libros);
            console.log(typeof(libros));
            libros.push(nuevoLibro);            
            console.log(libros);
        })
        .catch( (e)=>{
            alert(`Error al leer el json de Libros\n ${e}`)
        })

    })

/*
                let objetosLibros = JSON.parse(libros);
            console.log(objetosLibros);
             console.log(typeof(objetosLibros));
            objetosLibros.push(nuevoLibro);
            let librosact = JSON.stringify(objetosLibros);
            console.log(typeof(librosact));
            console.log(librosact); 
*/