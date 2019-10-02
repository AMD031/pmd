"use strict";
var personas = [];
function agregar() {
    var nombre = document.getElementById('nombre').value;
    var edad = +document.getElementById('edad').value;
    var contacto = {
        nombre: nombre,
        edad: edad
    };
    personas.push(contacto);
}
function imprimir() {
    for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
        var p = personas_1[_i];
        console.log(p);
    }
}
