var cliente_valido;
var destino_valido; 
var escribirhora = document.getElementById("id_hora");
var escribirinicio = document.getElementById("id_escribirinicio");


var hora_min = 1;
var hora_max = 24;
var minuto_min = 0;
var minuto_max = 59;
var hora_actual = Math.floor(Math.random() * (hora_max - hora_min + 1)) + hora_min;
var minuto_actual = Math.floor(Math.random() * (minuto_max - minuto_min + 1)) + minuto_min;
var horaminuto_actual = hora_actual + ":" +minuto_actual;
escribirhora.innerHTML = (horaminuto_actual);

if(hora_actual >= 9 && hora_actual < 12 || hora_actual >= 15 && hora_actual < 20)
{
    var escribir = document.getElementById("id_escribir");
    var escribir2 = document.getElementById("id_escribir2");
    var escribir3 = document.getElementById("id_escribir3");
    var escribir4 = document.getElementById("id_escribir4");
    var escribir5 = document.getElementById("id_escribir5");
    var escribir6 = document.getElementById("id_escribir6");
    var escribir7 = document.getElementById("id_escribir7");
    var escribir8 = document.getElementById("id_escribir8");
    var var_bancocliente = document.getElementById("id_banco");
    var var_cuentacliente = document.getElementById("id_cuenta");
    var var_submit = document.getElementById("id_submit");
    var var_reset = document.getElementById("id_reset");
    
    var_submit.addEventListener("click", ingresarDatos);
    var_reset.addEventListener("click", borrarTodo);

    console.log("dentro del horario");
    function ingresarDatos()
    {
        var su_banco = var_bancocliente.value;
        var su_cuenta = var_cuentacliente.value;

        var min = 900000;
        var max = 1300000;
        var su_saldo = Math.floor(Math.random() * (max - min + 1)) + min;
        
        console.log(su_banco, su_cuenta);

        if (su_cuenta == "" || su_banco == "Seleccionar")
        {
            cliente_valido = false;
            console.log(cliente_valido);
            escribir.innerHTML = ("<h1>No se introdugeron correctamente los datos</h1>")
        }
        else
        {
            cliente_valido = true;
            console.log(cliente_valido);
            escribir.innerHTML = ("<h1> Sus datos son validos </h1>" +
            "<br> <h1> Su banco es: " + su_banco + 
            "<br> Su cuenta bancaria es: " + su_cuenta + 
            "<br> Su saldo en esta cuenta es: " + su_saldo + "</h1>");

            escribir2.innerHTML = ("<h2>Desea realizar una transacción?</h2>" + 
            "<input type='radio' id='id_si' name='eleccion' value='yes'>" +
            "<label for='id_si'>Sí</label>" + 
            "<input type='radio' id='id_no' name='eleccion' value='no'>" + 
            "<labe for='id_no'>No</label>" );

            var var_no = document.getElementById("id_no");
            var var_si = document.getElementById("id_si");
            var_no.addEventListener("click", noEnviar)
            var_si.addEventListener("click", siEnviar);

            function siEnviar()
            {
                escribir3.innerHTML = ("<label for='id_bancodestino'> Banco de la cuenta que va a recibir el dinero: </label>" +
                "<br> <select id='id_bancodestino'>" +
                "<option value='Seleccionar'>Seleccione su banco</option>" +
                "<option value='Bancolombia'>Bancolombia</option>" +
                "<option value='Davivienda'>Davivienda</option>" +
                "<option value='BBVA'>BBVA</option>" +
                "<option value='Banco_popular'>Banco_popular</option>" +
                "</select>" + 
                "<br><br> <laber for='id_cuentadestino'> Cuenta bancaria a la que vas a enviar tu dinero: </label>" + 
                "<br> <input type='text' id='id_cuentadestino' value=''>" +
                "<br><br> <input type='submit' value='Enviar_datos_del_receptor' id='id_enviardatosdelreceptor'>");

                var var_bancodestino = document.getElementById("id_bancodestino");
                var var_cuentadestino = document.getElementById("id_cuentadestino")
                
                var var_enviardatosdelreceptor = document.getElementById("id_enviardatosdelreceptor");

                var_enviardatosdelreceptor.addEventListener("click", ingresarDatos2);

                function ingresarDatos2()
                {
                    banco_destino = var_bancodestino.value; 
                    cuenta_destino = var_cuentadestino.value;
                    
                    console.log(banco_destino, cuenta_destino);

                    if (cuenta_destino == "" || banco_destino == "Seleccionar" || su_cuenta == cuenta_destino) 
                    {
                        destino_valido = false;
                        console.log(destino_valido);
                        escribir4.innerHTML = ("<h1> Los datos no fueron introducidos correctamente </h1>");   
                    }
                    else
                    {   
                        destino_valido = true;
                        console.log(destino_valido);
                        escribir4.innerHTML = ("Datos ingresados validos");

                        if (su_banco == banco_destino) 
                        {
                            escribir5.innerHTML = ("<h2> Su transacción no tendrá ninguna comisión por ser entre el mismo banco</h2>" + 
                            "<button id='id_aceptar'>Aceptar </button>");

                            var var_aceptar = document.getElementById("id_aceptar");
                            var_aceptar.addEventListener("click", aceptarComision);

                            function aceptarComision()
                            {
                                escribir6.innerHTML = ("<br> <label for='id_cantidadaenviar'>Cuanto dinero va a ser enviado?</label>" +
                                "<br> <input type='number' id='id_cantidadaenviar' value='1000000'>" +
                                "<br><br> <input type='submit' value='Introducir_cantidad' id='id_introducir_cantidad'>");

                                var var_introducir_cantidad = document.getElementById("id_introducir_cantidad");
                                var var_cantidadaenviar = document.getElementById("id_cantidadaenviar");
                                Cantidad_introducida = var_cantidadaenviar.value;
                                Cantidad_introducida = parseInt(Cantidad_introducida);
                                
                                var_introducir_cantidad.addEventListener("click", introducirCantidad)
                                console.log(Cantidad_introducida);
                        
                                function introducirCantidad()
                                {
                                    if (su_saldo < Cantidad_introducida) 
                                    {
                                        escribir7.innerHTML = ("<h1> No cuentas con suficiente saldo para enviar </h1>");
                                    }
                                    else
                                    {
                                        escribir7.innerHTML = ("<h1> El pago se ha realizado </h1>");
                                    }
                                }
                            }
                            
                        }
                        else
                        {
                            var comision = 100;

                            escribir4.innerHTML = ("<h2> Su transacción tendrá una comisión de $" + comision + " por ser entre diferentes bancos </h2>" + 
                            "<button id='id_aceptar'>Aceptar </button>");

                            var var_aceptar = document.getElementById("id_aceptar");
                            var_aceptar.addEventListener("click", aceptarComision);

                            function aceptarComision()
                            {
                                escribir6.innerHTML = ("<br> <label for='id_cantidadaenviar'>Cuanto dinero va a ser enviado?</label>" +
                                "<br> <input type='number' id='id_cantidadaenviar' value='1000000'>" +
                                "<br><br> <input type='submit' value='Introducir_cantidad' id='id_introducir_cantidad'>");

                                var var_cantidad_introducida = document.getElementById("id_cantidadaenviar");
                                var var_introducir_cantidad = document.getElementById("id_introducir_cantidad");
                                Cantidad_introducida = var_cantidad_introducida.value;    
                                Cantidad_introducida = parseInt(Cantidad_introducida);
                                console.log(Cantidad_introducida);

                                var_introducir_cantidad.addEventListener("click", introducirCantidad)
                        
                                function introducirCantidad()
                                {
                                    if (su_saldo < Cantidad_introducida) 
                                    {
                                        escribir7.innerHTML = ("<h1> No cuentas con suficiente saldo para enviar </h1>");
                                    }
                                    else
                                    {
                                        
                                        var Total_enviar = Cantidad_introducida + comision;

                                        console.log(Total_enviar);

                                        escribir7.innerHTML = ("<h1> El total a pagar para realizar la transacción es " + Total_enviar + "</h1>" +
                                        "<input type='number' value='" + Total_enviar + "' id='id_totalenviar'>" +
                                        "<br><label for='id_completartransaccion'>Presione para completar la transaccion</label>" +
                                        "<br> <input type='submit' value='Completar_transacción' id='id_completartransaccion'>");

                                        var var_completartransaccion = document.getElementById("id_completartransaccion");
                                        var_completartransaccion.addEventListener("click", enviarDinero)
                                    
                                        function enviarDinero()
                                        {
                                            if (su_saldo >= Total_enviar) 
                                            {
                                                escribir8.innerHTML = ("<h1> El pago se ha realizado </h1>");   
                                            }
                                            else
                                            {
                                                escribir8.innerHTML = ("<h1> No tienes suficiente dinero para realizar el pago completo </h1>");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }           
        }
    }
}
else
{
    escribirinicio.innerHTML = ("<h1>A esta hora no se pueden realizar transacciones <br> vuelve mas tarde <h1>");
}
    function noEnviar()
    {
        escribir3.innerHTML = (" Ok, no se realizará ninguna transacción ");
    }
    
    function borrarTodo()
    {
        window.location.reload();
    } 