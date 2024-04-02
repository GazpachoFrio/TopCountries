// Lista de países
const paises = [
  { id: 1, nombre: "Afganistan" ,votos:0 },
  { id: 2, nombre: "Albania" ,votos: 0 },
  { id: 3, nombre: "Alemania", votos: 0},
  { id: 4, nombre: "Andorra" ,votos: 0},
  { id: 5, nombre: "Angola" ,votos: 0},
  { id: 6, nombre: "Antigua y Barbuda",votos: 0 },
  { id: 7, nombre: "Arabia Saudita" ,votos: 0},
  { id: 8, nombre: "Argelia", votos: 0},
  { id: 9, nombre: "Argentina" ,votos: 0},
  { id: 10, nombre: "Armenia" ,votos: 0},
  { id: 11, nombre: "Australia", votos: 0},
  { id: 12, nombre: "Austria" ,votos: 0},
  { id: 13, nombre: "Azerbaiyán", votos: 0},
  { id: 13, nombre: "Azerbaiyán", votos: 0},
  { id: 14, nombre: "Bahamas" ,votos: 0},
  { id: 15, nombre: "Bangladés" ,votos: 0},
  { id: 16, nombre: "Barbados", votos: 0},
  { id: 17, nombre: "Baréin", votos: 0},
  { id: 18, nombre: "Bélgica" ,votos: 0},
  { id: 19, nombre: "Belice" ,votos: 0},
  { id: 20, nombre: "Benín" ,votos: 0},
  { id: 21, nombre: "Bielorrusia" ,votos: 0},
  { id: 22, nombre: "Birmania", votos: 0},
  { id: 23, nombre: "Bolivia",votos: 0 },
  { id: 24, nombre: "Bosnia y Herzegovina" ,votos: 0},
  { id: 25, nombre: "Botsuana",votos: 0 },
  { id: 26, nombre: "Brasil", votos: 0},
  { id: 27, nombre: "Brunéi",votos: 0 },
  { id: 28, nombre: "Bulgaria", votos: 0},
  { id: 29, nombre: "Burkina Faso",votos: 0 },
  { id: 30, nombre: "Burundi", votos: 0},
  { id: 31, nombre: "Bután",votos: 0},
  { id: 32, nombre: "Cabo Verde" ,votos: 0},
  { id: 33, nombre: "Camboya",votos: 0 },
  { id: 34, nombre: "Camerún" ,votos: 0},
  { id: 35, nombre: "Canadá" ,votos: 0},
  { id: 36, nombre: "Catar" ,votos: 0},
  { id: 37, nombre: "Chad" ,votos: 0},
  { id: 38, nombre: "Chile", votos: 0},
  { id: 39, nombre: "China" ,votos: 0},
  { id: 40, nombre: "Chipre",votos: 0},
  { id: 41, nombre: "Ciudad del Vaticano" ,votos: 0},
  { id: 42, nombre: "Colombia" ,votos: 0},
  { id: 43, nombre: "Comoras", votos: 0},
  { id: 44, nombre: "Corea del Norte",votos: 0 },
  { id: 45, nombre: "Corea del Sur" ,votos: 0},
  { id: 46, nombre: "Costa de Marfil",votos: 0 },
  { id: 47, nombre: "Costa Rica" ,votos: 0},
  { id: 48, nombre: "Croacia" ,votos: 0},
  { id: 49, nombre: "Cuba" ,votos: 0},
  { id: 50, nombre: "Dinamarca" ,votos: 0},
  { id: 51, nombre: "Dominica" ,votos: 0},
  { id: 52, nombre: "Ecuador" ,votos: 0},
  { id: 53, nombre: "Egipto", votos: 0},
  { id: 54, nombre: "El Salvador" ,votos: 0},
  { id: 55, nombre: "Emiratos Árabes Unidos" ,votos: 0},
  { id: 56, nombre: "Eritrea" ,votos: 0},
  { id: 57, nombre: "Eslovaquia" ,votos: 0},
  { id: 58, nombre: "Eslovenia", votos: 0},
  { id: 59, nombre: "España", votos: 0},
  { id: 60, nombre: "Estados Unidos" ,votos: 0},
  { id: 61, nombre: "Estonia", votos: 0},
  { id: 62, nombre: "Etiopía",votos: 0},
  { id: 63, nombre: "Filipinas" ,votos: 0},
  { id: 64, nombre: "Finlandia" ,votos: 0},
  { id: 65, nombre: "Fiyi" ,votos: 0,},
  { id: 66, nombre: "Francia" ,votos: 0},
  { id: 67, nombre: "Gabón" ,votos: 0},
  { id: 68, nombre: "Gambia",votos: 0 },
  { id: 69, nombre: "Georgia",votos: 0 },
  { id: 70, nombre: "Ghana", votos: 0},
  { id: 71, nombre: "Granada",votos: 0 },
  { id: 72, nombre: "Grecia" ,votos: 0},
  { id: 73, nombre: "Guatemala",votos: 0 },
  { id: 74, nombre: "Guinea",votos: 0 },
  { id: 75, nombre: "Guinea-Bisáu" ,votos: 0},
  { id: 76, nombre: "Guinea Ecuatorial" ,votos: 0},
  { id: 77, nombre: "Guyana",votos: 0 },
  { id: 78, nombre: "Haití" , votos: 0},
  { id: 79, nombre: "Honduras", votos: 0 },
  { id: 80, nombre: "Hungría" , votos: 0},
  { id: 81, nombre: "India", votos: 0 },
  { id: 82, nombre: "Indonesia" , votos: 0},
  { id: 83, nombre: "Irak" , votos: 0},
  { id: 84, nombre: "Irán" , votos: 0},
  { id: 85, nombre: "Irlanda" , votos: 0},
  { id: 86, nombre: "Islandia", votos: 0 },
  { id: 87, nombre: "Islas Marshall" , votos: 0},
  { id: 88, nombre: "Islas Salomón", votos: 0 },
  { id: 89, nombre: "Israel" , votos: 0},
  { id: 90, nombre: "Italia" , votos: 0},
  { id: 91, nombre: "Jamaica" , votos: 0},
  { id: 92, nombre: "Japón" , votos: 0},
  { id: 93, nombre: "Jordania" , votos: 0},
  { id: 94, nombre: "Kazajistán" , votos: 0},
  { id: 95, nombre: "Kenia" , votos: 0},
  { id: 96, nombre: "Kirguistán", votos: 0 },
  { id: 97, nombre: "Kiribati", votos: 0 },
  { id: 98, nombre: "Kuwait" , votos: 0},
  { id: 99, nombre: "Laos", votos: 0},
  { id: 99, nombre: "Laos" , votos: 0},
  { id: 100, nombre: "Lesoto" , votos: 0},
  { id: 101, nombre: "Letonia" , votos: 0},
  { id: 102, nombre: "Líbano" , votos: 0},
  { id: 103, nombre: "Liberia", votos: 0 },
  { id: 104, nombre: "Libia" , votos: 0},
  { id: 105, nombre: "Liechtenstein", votos: 0 },
  { id: 106, nombre: "Lituania", votos: 0 },
  { id: 107, nombre: "Luxemburgo", votos: 0 },
  { id: 108, nombre: "Macedonia del Norte", votos: 0 },
  { id: 109, nombre: "Madagascar", votos: 0 },
  { id: 110, nombre: "Malasia" , votos: 0},
  { id: 111, nombre: "Malaui" , votos: 0},
  { id: 112, nombre: "Maldivas" , votos: 0},
  { id: 113, nombre: "Malí" , votos: 0},
  { id: 114, nombre: "Malta" , votos: 0},
  { id: 115, nombre: "Marruecos" , votos: 0},
  { id: 116, nombre: "Mauricio" , votos: 0},
  { id: 117, nombre: "Mauritania" , votos: 0},
  { id: 118, nombre: "México" , votos: 0},
  { id: 119, nombre: "Micronesia", votos: 0 },
  { id: 120, nombre: "Moldavia", votos: 0 },
  { id: 121, nombre: "Mónaco", votos: 0 },
  { id: 122, nombre: "Mongolia" , votos: 0},
  { id: 123, nombre: "Montenegro" , votos: 0},
  { id: 124, nombre: "Mozambique" , votos: 0},
  { id: 125, nombre: "Namibia", votos: 0 },
  { id: 126, nombre: "Nauru" , votos: 0},
  { id: 127, nombre: "Nepal" , votos: 0},
  { id: 128, nombre: "Nicaragua", votos: 0 },
  { id: 129, nombre: "Níger" , votos: 0},
  { id: 130, nombre: "Nigeria" , votos: 0},
  { id: 131, nombre: "Noruega" , votos: 0},
  { id: 132, nombre: "Nueva Zelanda" , votos: 0},
  { id: 133, nombre: "Omán", votos: 0 },
  { id: 134, nombre: "Países Bajos", votos: 0 },
  { id: 135, nombre: "Pakistán" , votos: 0},
  { id: 136, nombre: "Palaos" , votos: 0},
  { id: 137, nombre: "Panamá", votos: 0 },
  { id: 138, nombre: "Papúa Nueva Guinea" , votos: 0},
  { id: 139, nombre: "Paraguay" , votos: 0},
  { id: 140, nombre: "Perú" , votos: 0},
  { id: 141, nombre: "Polonia", votos: 0 },
  { id: 142, nombre: "Portugal", votos: 0 },
  { id: 143, nombre: "Reino Unido" , votos: 0},
  { id: 144, nombre: "República Centroafricana" , votos: 0},
  { id: 145, nombre: "República Checa" , votos: 0},
  { id: 146, nombre: "República del Congo" , votos: 0},
  { id: 147, nombre: "República Democrática del Congo" , votos: 0},
  { id: 148, nombre: "República Dominicana", votos: 0},
  { id: 149, nombre: "Ruanda" , votos: 0},
  { id: 150, nombre: "Rumanía" , votos: 0},
  { id: 151, nombre: "Rusia" , votos: 0},
  { id: 152, nombre: "Samoa" , votos: 0},
  { id: 153, nombre: "San Cristóbal y Nieves", votos: 0 },
  { id: 154, nombre: "San Marino" , votos: 0},
  { id: 155, nombre: "San Vicente y las Granadinas" , votos: 0},
  { id: 156, nombre: "Santa Lucía" , votos: 0},
  { id: 157, nombre: "Santo Tomé y Príncipe", votos: 0 },
  { id: 158, nombre: "Senegal" , votos: 0},
  { id: 159, nombre: "Serbia" , votos: 0},
  { id: 160, nombre: "Seychelles" , votos: 0},
  { id: 161, nombre: "Sierra Leona", votos: 0 },
  { id: 162, nombre: "Singapur" , votos: 0},
  { id: 163, nombre: "Siria" , votos: 0},
  { id: 164, nombre: "Somalia" , votos: 0},
  { id: 165, nombre: "Sri Lanka" , votos: 0},
  { id: 166, nombre: "Suazilandia" , votos: 0},
  { id: 167, nombre: "Sudáfrica" , votos: 0},
  { id: 168, nombre: "Sudán" , votos: 0},
  { id: 169, nombre: "Sudán del Sur" , votos: 0},
  { id: 170, nombre: "Suecia" , votos: 0},
  { id: 171, nombre: "Suiza", votos: 0 },
  { id: 172, nombre: "Surinam", votos: 0 },
  { id: 173, nombre: "Tailandia" , votos: 0},
  { id: 174, nombre: "Tanzania" , votos: 0},
  { id: 175, nombre: "Tayikistán" , votos: 0},
  { id: 176, nombre: "Timor Oriental" , votos: 0},
  { id: 177, nombre: "Togo" , votos: 0},
  { id: 178, nombre: "Tonga" , votos: 0},
  { id: 179, nombre: "Trinidad y Tobago", votos: 0 },
  { id: 180, nombre: "Túnez" , votos: 0},
  { id: 181, nombre: "Turkmenistán" , votos: 0},
  { id: 182, nombre: "Turquía" , votos: 0},
  { id: 183, nombre: "Tuvalu" , votos: 0},
  { id: 184, nombre: "Ucrania", votos: 0 },
  { id: 185, nombre: "Uganda" , votos: 0},
  { id: 186, nombre: "Uruguay" , votos: 0},
  { id: 187, nombre: "Uzbekistán", votos: 0 },
  { id: 188, nombre: "Vanuatu" , votos: 0},
  { id: 189, nombre: "Venezuela", votos: 0 },
  { id: 190, nombre: "Vietnam" , votos: 0},
  { id: 191, nombre: "Yemen" , votos: 0},
  { id: 192, nombre: "Yibuti" , votos: 0},
  { id: 193, nombre: "Zambia" , votos: 0},
  { id: 194, nombre: "Zimbabue" , votos: 0},
  { id: 195, nombre: "Taiwan", votos: 0 },
  { id: 196, nombre: "Cook's Island", votos: 0 },
  { id: 197, nombre: "Western Sahara", votos: 0 }

];

// Función para generar las opciones de la lista de países
function generarOpciones() {
  const select = document.getElementById('selectPaises');
  paises.forEach(pais => {
    const option = document.createElement('option');
    option.value = pais.id;
    option.textContent = pais.nombre;
    select.appendChild(option);
  });
}

// Función para votar por un país
function votar() {
  const select = document.getElementById('selectPaises');
  const paisSeleccionado = paises.find(pais => pais.id === parseInt(select.value));
  if (paisSeleccionado) {
    // Verificar si el usuario ya votó por este país
    if (localStorage.getItem(`voto${paisSeleccionado.id}`)) {
      alert('Ya has votado por este país anteriormente. Solo puedes votar una vez por país.');
      return;
    }

    // Incrementar el contador de votos del país seleccionado
    paisSeleccionado.votos++;

    // Guardar el voto del usuario para este país
    localStorage.setItem(`voto${paisSeleccionado.id}`, true);

    // Actualizar la lista de países más votados
    actualizarTopPaises();

    alert(`Has votado por ${paisSeleccionado.nombre}. Total de votos: ${paisSeleccionado.votos}`);
  }
}

// Función para obtener los 10 países más votados
function obtenerTopPaises() {
  const paisesOrdenados = paises.slice().sort((a, b) => b.votos - a.votos);
  return paisesOrdenados.slice(0, 10); // Devuelve los 10 primeros países más votados
}

// Función para actualizar la lista de países más votados en la página
function actualizarTopPaises() {
  const topPaises = obtenerTopPaises();
  const topPaisesElement = document.getElementById('topPaises');
  topPaisesElement.innerHTML = '';
  topPaises.forEach(pais => {
    const li = document.createElement('li');
    li.textContent = `${pais.nombre} - ${pais.votos} votos`;
    topPaisesElement.appendChild(li);
  });
}

// Al cargar la página, generar las opciones de la lista de países
generarOpciones();
// Actualizar la lista de países más votados al cargar la página
actualizarTopPaises();
