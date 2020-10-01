
let sueldo = 20000
let porcentaje

if ((sueldo > 0) && (sueldo < 1001)) {
    porcentaje = .15
    sueldo = ((sueldo * porcentaje) + sueldo)
}

else if ((sueldo > 1000) && (sueldo <1201)) {
    porcentaje = .12
    sueldo = ((sueldo * porcentaje) + sueldo)
}

else if ((sueldo > 1200) && (sueldo < 1401)) {
    porcentaje = .10
    sueldo = ((sueldo * porcentaje) + sueldo)
}

else if ((sueldo > 1400) && (sueldo < 1501)) {
    porcentaje = .08
    sueldo = ((sueldo * porcentaje) * sueldo)
}

else if (sueldo > 1500) {
    porcentaje = .05
    sueldo = ((sueldo * porcentaje) + sueldo)
}

console.log("El empleado tuvo un bono con porcentaje de: " + porcentaje + "% y su sueldo es de $" + sueldo )
