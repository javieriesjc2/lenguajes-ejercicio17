function CargarDatosEnTabla() {
    // Carga el archivo XML
    var request = new XMLHttpRequest();
    request.open("GET", "../libros.xml", false);
    request.send();
    // Comprueba que se encontró el archivo
    if (request.status === 200) {
        var xmlDoc = request.responseXML;
        var productos = xmlDoc.getElementsByTagName("libro");
        var tableBody = document.getElementById("datos");
        tableBody.innerHTML = "";
        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];
            if (document.getElementById("input").value == producto.getElementsByTagName("anio")[0].textContent || document.getElementById("input").value == "") {
                // Se crea una nueva fila en el HTML
                var row = tableBody.insertRow();
                // Se insertan celdas en la fila (HTML)
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                // Se cambia el contenido de cada celda con los datos del producto
                cell1.textContent =
                    producto.getElementsByTagName("titulo")[0].textContent;
                cell2.textContent =
                    producto.getElementsByTagName("autor")[0].textContent;
                cell3.textContent =
                    producto.getElementsByTagName("anio")[0].textContent;
                cell4.textContent =
                    producto.getElementsByTagName("precio")[0].textContent + " €";
            }

        }

    }
}