let usuarios =[]

let usuario = { // let es todo en bloque de codigo-los corchetes son para declarar el array
    nombre: 'pepe',
    edad: 20,
    habilidades:['node', 'java', 'sqlserver'] 
}

let usuario2 = {
    nombre:'ratomanocu',
    edad: 45,
    habilidades:['sql', 'redes', 'eletronica']    
}

//usuario.nombre = "elpepe3687" //Modificando parametro del Let
//usuario.nombre2 = "elpepe3687" //Agregando nuevo parametro en Let
usuarios.push(usuario)// push(es para agregar en un array) pop (es para sacar del array)
console.log(usuarios) // Mostrar en pantalla

