let usuarios = [
    {
        nombre: 'pepe',
        edad: 20,
        conocimientos:['servidores','redes','office']
    },
    {
        nombre: 'carlos',
        edad: 30,
        conocimientos: ['operaciones','programacion','artes']
    },    {
        //nombre: 'Messi'
    }
]

let estaMessi = false;

for(let i = 0;i < usuarios.length;i++){
    let usuario = usuarios[i];

    if(usuario.nombre === 'Messi'){
        estaMessi = true;
        console.log('Esta messi')
    }
    else{
        estaMessi = false;
        console.log('No esta Messi')
    }
    
}