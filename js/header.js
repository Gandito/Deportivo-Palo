const boton_menu = document.querySelector('.header_icono_menu_mostrar');
const boton_cruz = document.querySelector('.header_icono_cruz_ocultar');
const header = document.querySelector('header');
const link1 = document.querySelector('.header_cerrar_menu1');
const link2 = document.querySelectorAll('.header_cerrar_menu2');
const link3 = document.querySelector('.header_cerrar_menu3');
const link4 = document.querySelector('.header_cerrar_menu4');

const navResponsivo = document.querySelector('.header_nav_responsivo_ocultar');

boton_menu.addEventListener('click', () => {
    boton_menu.setAttribute('id', 'header_icono_menu_ocultar')
    boton_cruz.setAttribute('id', 'header_icono_cruz_mostrar')
    header.setAttribute('id', 'header_responsive')
    navResponsivo.setAttribute('id', 'header_nav_responsivo_mostrar')
});

boton_cruz.addEventListener('click', () => {
    boton_menu.removeAttribute('id', 'header_icono_menu_ocultar')
    boton_cruz.removeAttribute('id', 'header_icono_cruz_mostrar')
    header.removeAttribute('id', 'header_responsive')
    navResponsivo.removeAttribute('id', 'header_nav_responsivo_mostrar')
});

link1.addEventListener('click', () => {
    boton_menu.removeAttribute('id', 'header_icono_menu_ocultar')
    boton_cruz.removeAttribute('id', 'header_icono_cruz_mostrar')
    header.removeAttribute('id', 'header_responsive')
    navResponsivo.removeAttribute('id', 'header_nav_responsivo_mostrar')
});

for (let i = 0; i < link2.length; i++) {
    link2[i].addEventListener('click', () => {
        boton_menu.removeAttribute('id', 'header_icono_menu_ocultar')
        boton_cruz.removeAttribute('id', 'header_icono_cruz_mostrar')
        header.removeAttribute('id', 'header_responsive')
        navResponsivo.removeAttribute('id', 'header_nav_responsivo_mostrar')
    });
}

link3.addEventListener('click', () => {
    boton_menu.removeAttribute('id', 'header_icono_menu_ocultar')
    boton_cruz.removeAttribute('id', 'header_icono_cruz_mostrar')
    header.removeAttribute('id', 'header_responsive')
    navResponsivo.removeAttribute('id', 'header_nav_responsivo_mostrar')
});

link4.addEventListener('click', () => {
    boton_menu.removeAttribute('id', 'header_icono_menu_ocultar')
    boton_cruz.removeAttribute('id', 'header_icono_cruz_mostrar')
    header.removeAttribute('id', 'header_responsive')
    navResponsivo.removeAttribute('id', 'header_nav_responsivo_mostrar')
});