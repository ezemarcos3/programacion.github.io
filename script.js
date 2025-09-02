function mostrarSeccion(id) {
    // Ocultar todos los menús y formularios
    document.querySelectorAll('.menu, .formulario').forEach(s => {
        s.classList.add('oculto');
        limpiarFormulario(s);
    });

    // Cambiar el título según la sección seleccionada
    const titulo = document.getElementById('titulo');
    if (id === 'menu-geometria') {
        titulo.textContent = "Perímetro y Área";
    } else if (id === 'form-votacion') {
        titulo.textContent = "Votación";
    } else if (id === 'menu-principal') {
        titulo.textContent = "Menú Principal";
    }

    // Mostrar la sección elegida
    document.getElementById(id).classList.remove('oculto');
}
  
  function limpiarFormulario(seccion) {
    // Vaciar todos los inputs
    seccion.querySelectorAll('input').forEach(input => input.value = "");
    // Resetear selects
    seccion.querySelectorAll('select').forEach(select => select.value = "");
    // Limpiar y ocultar resultados
    seccion.querySelectorAll('.resultado').forEach(res => {
      res.textContent = "";
      res.classList.add('oculto');
    });
  }
  
 function calcularCirculo() {
    let r = parseFloat(document.getElementById('radio').value);
    if (isNaN(r) || r <= 0) return alert("Ingrese un radio válido");
    let perimetro = 2 * Math.PI * r; // Fórmula del perímetro
    let area = Math.PI * Math.pow(r, 2); // Fórmula del área
    mostrarResultado("resultado-circulo", 
      `Perímetro: ${perimetro.toFixed(2)} cm | Área: ${area.toFixed(2)} cm²`);
}

function calcularPentagono() {
    let lado = parseFloat(document.getElementById('ladoPentagono').value);
    let apotema = parseFloat(document.getElementById('apotema').value);
    if (isNaN(lado) || lado <= 0 || isNaN(apotema) || apotema <= 0) return alert("Ingrese valores válidos");
    let perimetro = 5 * lado; // Fórmula del perímetro
    let area = (perimetro * apotema) / 2; // Fórmula del área
    mostrarResultado("resultado-pentagono", 
      `Perímetro: ${perimetro.toFixed(2)} cm | Área: ${area.toFixed(2)} cm²`);
}

function calcularRectangulo() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) return alert("Ingrese valores válidos");
    let perimetro = 2 * (base + altura); // Fórmula del perímetro
    let area = base * altura; // Fórmula del área
    mostrarResultado("resultado-rectangulo", 
      `Perímetro: ${perimetro.toFixed(2)} cm | Área: ${area.toFixed(2)} cm²`);
}
  
  function verificarVotacion() {
    let edad = parseInt(document.getElementById('edad').value);
    let sexo = document.getElementById('sexo').value;
    if (isNaN(edad) || edad <= 0 || sexo === "") return alert("Complete todos los campos");
    let mensaje = `Usted es ${sexo} y ${edad >= 16 ? "puede votar ✅" : "no puede votar ❌"}`;
    mostrarResultado("resultado-votacion", mensaje);
  }
  
  function mostrarResultado(id, mensaje) {
    let div = document.getElementById(id);
    div.textContent = mensaje;
    div.classList.remove('oculto');
  }  