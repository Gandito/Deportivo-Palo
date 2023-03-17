<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSS ICONO WEB -->
    <link rel="icon" href="./icons/escudoPalo.png">
    <!-- CSS ICONOS -->
    <link rel="stylesheet" href="./icons/css/all.min.css">
    <!-- CSS PRINCIPAL -->
    <link rel="stylesheet" href="./css/index.css">
    <title>C.F. Deportivo Palo</title>
</head>

<body>
    <header>
        <a href="index.php">
            <img src="./icons/escudoPalo.png" alt="" title="Escudo Deportivo Palo">
        </a>
        <nav class="header_nav">
            <ul class="header_menu_horizontal">
                <li class="header_verde">
                    <span class="header_verde">Club</span>
                    <ul class="header_menu_vertical">
                        <li><a href="./vistas/club.php#ancla_datos">Datos</a></li>
                        <li><a href="./vistas/club.php#ancla_historia">Historia</a></li>
                    </ul>
                </li>
                <li class="header_rojo">
                    <span class="header_rojo">Futbol</span>
                    <ul class="header_menu_vertical">
                        <li><a href="./vistas/futbol_plantel.php">Plantel</a></li>
                        <li><a href="./vistas/futbol.php#ancla_fixture">Fixture</a></li>
                        <li><a href="./vistas/futbol.php#ancla_torneo">Torneo</a></li>
                        <li><a href="./vistas/futbol.php#ancla_titulos">Titulos</a></li>
                    </ul>
                </li>
                <li class="header_verde header_uno_verde">
                    <span class="header_verde">Deportivo</span>
                    <ul class="header_menu_vertical">
                        <li><a href="./vistas/deportivo.php">Noticias</a></li>
                    </ul>
                </li>
                <li class="header_rojo">
                    <span class="header_rojo">Socios</span>
                    <ul class="header_menu_vertical">
                        <li><a href="./vistas/socios.php#ancla_informacion">Informacion</a></li>
                        <li><a href="./vistas/socios.php#ancla_valores">Valores</a></li>
                        <li><a href="./vistas/socios.php#ancla_preguntas">Preguntas</a></li>
                        <li><a href="./vistas/socios_asociate.php#ancla_asociate">Asociate</a></li>
                    </ul>
                </li>
                <li class="header_verde header_uno_verde">
                    <span class="header_verde">Marketing</span>
                    <ul class="header_menu_vertical">
                        <li><a href="./vistas/marketing.php">Marketing</a></li>
                    </ul>
                </li>
                <li class="header_rojo header_uno_rojo">
                    <span class="header_rojo" href="">Canticos</span>
                    <ul class="header_menu_vertical">
                        <li><a href="./vistas/canticos.php">Temas</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- Responsive Header -->
        <div class="header_contenedor_iconos">
            <i class="header_icono_cruz_ocultar header_icono fa-solid fa-xmark"></i>
            <i class="header_icono_menu_mostrar header_icono fa-solid fa-bars"></i>
        </div>
        <nav class="header_nav_responsivo_ocultar">
            <section class="header_nav_seccion_superior">
                <div class="header_contenedor_seccion_responsivo">
                    <p class="header_verde_responsivo">Club</p>
                    <div class="header_contenedor_links">
                        <ul>
                            <li><a class="header_cerrar_menu1" href="./vistas/club.php#ancla_datos">Datos</a></li>
                            <li><a class="header_cerrar_menu2" href="./vistas/club.php#ancla_historia">Historia</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_contenedor_seccion_responsivo">
                    <p class="header_verde_responsivo">Futbol</p>
                    <div class="header_contenedor_links">
                        <ul>
                            <li><a class="header_cerrar_menu1" href="./vistas/futbol_plantel.php">Plantel</a></li>
                            <li><a class="header_cerrar_menu2" href="./vistas/futbol.php#ancla_fixture">Fixture</a></li>
                            <li><a class="header_cerrar_menu3" href="./vistas/futbol.php#ancla_torneo">Torneo</a></li>
                            <li><a class="header_cerrar_menu4" href="./vistas/futbol.php#ancla_titulos">Titulos</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_contenedor_seccion_responsivo">
                    <p class="header_verde_responsivo">Deportivo</p>
                    <div class="header_contenedor_links">
                        <ul>
                            <li><a class="header_cerrar_menu1" href="deportivo.php">Noticias</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_contenedor_seccion_responsivo">
                    <p class="header_rojo_responsivo">Socios</p>
                    <div class="header_contenedor_links">
                        <ul>
                            <li><a class="header_cerrar_menu1" href="./vistas/socios.php#ancla_informacion">Informacion</a></li>
                            <li><a class="header_cerrar_menu2" href="./vistas/socios.php#ancla_valores">Valores</a></li>
                            <li><a class="header_cerrar_menu3" href="./vistas/socios.php#ancla_preguntas">Preguntas</a></li>
                            <li><a class="header_cerrar_menu4" href="./vistas/socios_asociate.php#ancla_asociate">Asociate</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_contenedor_seccion_responsivo">
                    <p class="header_rojo_responsivo">Marketing</p>
                    <div class="header_contenedor_links">
                        <ul>
                            <li><a class="header_cerrar_menu1" href="./vistas/marketing.php">Marketing</a></li>
                        </ul>
                    </div>
                </div>
                <div class="header_contenedor_seccion_responsivo">
                    <p class="header_rojo_responsivo">Canticos</p>
                    <div class="header_contenedor_links">
                        <ul>
                            <li><a class="header_cerrar_menu1" href="./vistas/canticos.php">Temas</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </nav>
    </header>


    <main class="main_index">
        <section class="main_seccion_superior">
            <div class="main_superior_izquierda">
                <article id="img_1" class="main_img1_mostrar"></article>
                <article id="img_2" class="main_img2_ocultar"></article>
                <article id="img_3" class="main_img3_ocultar"></article>
                <article id="img_4" class="main_img4_ocultar"></article>
                <article id="img_5" class="main_img5_ocultar"></article>
                <i class="main_icono_img_anterior fa-solid fa-less-than"></i>
                <i class="main_icono_img_siguiente fa-solid fa-greater-than"></i>
                <div class="main_contenedor_puntos">
                    <i id="mostrar" class="main_punto1 fa-solid fa-circle"></i>
                    <i id="ocultar" class="main_punto2 fa-solid fa-circle"></i>
                    <i id="ocultar" class="main_punto3 fa-solid fa-circle"></i>
                    <i id="ocultar" class="main_punto4 fa-solid fa-circle"></i>
                    <i id="ocultar" class="main_punto5 fa-solid fa-circle"></i>
                </div>
            </div>
            <div class="main_superior_derecha">
                <h2>SIGUIENTE PARTIDO ></h2>
                <div class="main_partido">
                    <div class="main_local">
                        <img src="./icons/escudoPalo.png" alt="">
                        <h3>C.F. DEPORTIVO PALO</h3>
                    </div>
                    <div>
                        <h4><span class="main_resultado">-</span> <span class="main_vs">VS.</span> <span class="main_resultado">-</span></h4>
                    </div>
                    <div class="main_visita">
                        <img src="./icons/escudoVisita.png" alt="">
                        <h3>REAL SICARIONA</h3>
                    </div>
                </div>
                <h4 style="text-align: center; font-size: 16px; font-family: Graduate; font-weight: 400; color: white;">
                    19/03/2023 18:00HS AV. DIRECTORIO 4147</h4>
                <div class="main_videos">
                    <a href="./vistas/videos.php">VIDEOS ></a>
                    <div class="main_video_principal">
                        <video src="" controls></video>
                    </div>
                </div>
            </div>
        </section>
        <section class="main_seccion_inferior">
            <div class="main_inferior">
                <a href="./vistas/galeria.php"><span class="main_letra_verde">VER</span> <span class="main_letra_blanca">GAL</span><span class="main_letra_roja">ERIA</span></a>
            </div>
        </section>
        <div class="main_videos_xxs">
            <a href="">VIDEOS ></a>
        </div>
        <div class="main_galeria_xxs">
            <a href="">GALERIA ></a>
        </div>
    </main>

    <footer>
        <div class="footer_escudo">
            <img src="./icons/escudoPalo.png" alt="">
        </div>
        <div class="footer_info">
            <h2>DEPORTIVO PALO</h2>
            <h3>EL PRIMERO EN SER UN GRAN BARRIO</h3>
            <p class="footer_copyright">&copy; COPYRIGHT DEPORTIVO PALO 2023</p>
        </div>
        <div class="footer_redes">
            <div>
                <a class="footer_links" target="_blank" href="https://www.instagram.com/cfdeportivopalo/"><i class="icono_footer fa-brands fa-instagram"></i></a>
            </div>
            <div>
                <a class="footer_links" target="_blank" href="https://www.tiktok.com/@cfdeportivopalo"><i class="icono_footer fa-brands fa-tiktok"></i></a>
            </div>
            <div>
                <a class="footer_links" target="_blank" href="https://twitter.com/CFDeportivoPalo"><i class="icono_footer fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </footer>

    <!-- JS PRINCIPAL -->
    <script src="./js/modo_oscuro.js"></script>
    <script src="./js/main.js"></script>
    <script src="./js/header.js"></script>
</body>

</html>