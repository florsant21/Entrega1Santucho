function iniciarCompra() {
    let nombreCliente = prompt("Bienvenido a nuestra tienda online. Por favor, ingresá tu nombre:");

    if (!nombreCliente) {
        alert("Debes ingresar tu nombre para continuar.");
        return;
    }

    let producto = prompt("Hola " + nombreCliente + ", ¿qué producto deseas adquirir?\n1. Computadora\n2. Celular\n3. Tablet");

    if (producto !== "1" && producto !== "2" && producto !== "3") {
        alert("Opción inválida. Debes elegir entre: 1, 2, o 3.");
        return;
    }

    let nombreProducto;
    switch (producto) {
        case "1":
            nombreProducto = "Computadora";
            break;
        case "2":
            nombreProducto = "Celular";
            break;
        case "3":
            nombreProducto = "Tablet";
            break;
    }

    let confirmarCompra = confirm("Has elegido " + nombreProducto + ". ¿Quieres confirmar la compra?");

    if (confirmarCompra) {
        alert("Gracias " + nombreCliente + " por tu compra. Has adquirido tu nuevo " + nombreProducto + ".");
    } else {
        alert("La compra fue cancelada.");
    }
}


iniciarCompra();
