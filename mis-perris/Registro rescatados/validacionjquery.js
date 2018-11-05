$(function(){
    $("#form").validate(
        {
            rules: {
                foto: {
                    requiered: true,
                    foto: true
                },
                nombre: {
                    requiered: true,
                    nombre: true
                },
                raza: {
                    requiered: true,
                    raza: true
                    
                },
                descripcion:{
                    requiered: true,
                    descripcion: true
                },
                estado:{
                    requiered: true,
                    estado: true
                }
                
            },
            messages:{
                foto:{
                    requiered:'Ingresa una foto',
                    foto: 'formato de foto no valido'
                },
                nombre:{
                    requiered:'Ingresa un nombre',
                    nombre:'Formato de nombre incorrecto'
                },
                raza:{
                    requiered:'Ingrese la raza',
                    raza:'formato de raza incorrecto'
                },

                descripcion:{
                    requiered:'ingrese una descripcion'
                },
                estado:{
                    requiered:'seleccione un estado'
                }
            }
        }
    );
});