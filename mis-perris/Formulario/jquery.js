$(function(){
    $("#form").validate(
        {
            rules: {
                usuario: {
                    requiered: true,
                    usuario: true
                },
                contraseña: {
                    requiered: true,
                    contraseña: true
                },
                confirmarContraseña: {
                    requiered: true,
                    confirmarContraseña: contraseña
                },
                correo: {
                    requiered: true,
                    correo: true
                },
                run: {
                    requiered: true,
                    run: true
                },
                nombre: {
                    requiered: true,
                    nombre: true
                    
                },
                fono:{
                    fono: true
                },
                region:{
                    requiered: true,
                    region: true
                },
                ciudad:{
                    requiered:true,
                    ciudad:true
                },
                Vivienda:{
                    requiered:true,
                    Vivienda:true
                }
                
            },
            messages:{
                usuario: {
                    requiered: 'Ingrese su nombre de usuario',
                    usuario: 'formato de usuario incorrecto'
                },
                contraseña: {
                    requiered: 'Ingrese contraseña',
                    contraseña: 'fromato de contraseña incorrecta'
                },
                confirmarContraseña: {
                    requiered: 'reingrese contraseña',
                    confirmarContraseña: 'contraseñas no coinciden'
                },
                correo:{
                    requiered:'Ingresa tu correo electronico',
                    correo: 'formato de correo no valido'
                },
                run:{
                    requiered:'Ingresa tu rut',
                    run:'formato de run incorrecto'
                },
                nombre:{
                    requiered:'Ingresa un nombre',
                    nombre:'Formato de nombre incorrecto'
                },
                fono:{
                    fono:'formato de telefono incorrecto'
                },
                region:{
                    requiered:'Ingresa la region'
                },
                ciudad:{
                    requiered:'Ingrese la ciudad'
                },
                Vivienda:{
                    requiered:'Ingrese la vivienda'
                }
            }
        }
    );
});