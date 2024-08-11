document.getElementById('agregar-producto').addEventListener('click', function() {
  let table = document.getElementById('productos-table').getElementsByTagName('tbody')[0];
  let newRow = table.insertRow();

  let productoCell = newRow.insertCell(0);
  let cantidadCell = newRow.insertCell(1);
  let precioUnitarioCell = newRow.insertCell(2);
  let totalCell = newRow.insertCell(3);
  let accionesCell = newRow.insertCell(4);

  productoCell.innerHTML = '<input type="text" name="producto" required>';
  cantidadCell.innerHTML = '<input type="number" name="cantidad" required>';
  precioUnitarioCell.innerHTML = '<input type="number" step="0.01" name="precio-unitario" required>';
  totalCell.innerHTML = 'uj<span class="total"></span>';
  accionesCell.innerHTML = '<button type="button" class="eliminar-producto">Eliminar</button>';

  updateEventListeners();
});

function updateEventListeners() {
  document.querySelectorAll('.eliminar-producto').forEach(button => {
      button.addEventListener('click', function() {
          this.closest('tr').remove();
      });
  });
}

updateEventListeners();
