document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const elementSelect = document.getElementById('elementSelect');
  
    searchInput.addEventListener('input', function() {
      const searchText = this.value.toLowerCase();
      const options = elementSelect.options;
  
      for (let i = 0; i < options.length; i++) {
        const optionText = options[i].textContent.toLowerCase();
        if (optionText.includes(searchText)) {
          options[i].style.display = '';
        } else {
          options[i].style.display = 'none';
        }
      }
    });
  
    elementSelect.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      if (selectedOption.value !== '') {
        const elementId = selectedOption.value;
        vote(elementId);
      }
    });
  
    function votar() {
      const select = document.getElementById('selectPaises');
      const paisSeleccionado = paises.find(pais => pais.id === parseInt(select.value));
      if (paisSeleccionado) {
        paisSeleccionado.votos++;
        alert(`Has votado por ${paisSeleccionado.nombre}. Total de votos: ${paisSeleccionado.votos}`);
      }
  
    // Función para preseleccionar automáticamente la opción al escribir en el campo de búsqueda
    searchInput.addEventListener('input', function() {
      const searchText = this.value.toLowerCase();
      const options = elementSelect.options;
  
      for (let i = 0; i < options.length; i++) {
        const optionText = options[i].textContent.toLowerCase();
        if (optionText.includes(searchText)) {
          elementSelect.value = options[i].value;
          break;
        }
      }
    });
  });
  