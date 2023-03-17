const modo_oscuro = document.querySelector('.modo_oscuro_contenido');
const modo_oscuro_icono_sol = document.querySelector('.icono_sol');
const modo_oscuro_icono_luna = document.querySelector('.icono_luna');
const modo_oscuro_contenedor = document.querySelector('.modo_oscuro_contenedor');
let contador = 0;

modo_oscuro.addEventListener('click', ()=> {
    contador++
    console.log(contador)
    if((contador % 2) == 0 || contador == 0) {
        modo_oscuro.removeAttribute('id', 'modo_oscuro_luna');
        modo_oscuro.setAttribute('id', 'modo_oscuro_sol');
        modo_oscuro_icono_luna.removeAttribute('id', 'icono_luna_modo_oscuro');
        modo_oscuro_icono_sol.removeAttribute('id', 'icono_sol_modo_oscuro');
        modo_oscuro_contenedor.removeAttribute('id', 'modo_oscuro_contenedor');
    }
    else {
        modo_oscuro.removeAttribute('id', 'modo_oscuro_sol');
        modo_oscuro.setAttribute('id', 'modo_oscuro_luna');
        modo_oscuro_icono_luna.setAttribute('id', 'icono_luna_modo_oscuro');
        modo_oscuro_icono_sol.setAttribute('id', 'icono_sol_modo_oscuro');
        modo_oscuro_contenedor.setAttribute('id', 'modo_oscuro_contenedor');
    }
})