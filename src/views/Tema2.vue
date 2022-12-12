<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normas técnicas

    .bloque-texto-g.color-secundario.bloque-35.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        .h5.texto-secundario El primero de mayo de 2005 entró a regir en Colombia el Reglamento técnico de instalaciones eléctricas - RETIE. Este insumo establece medidas que garantizan la “seguridad” de las personas, de la vida animal y vegetal y la preservación del medio ambiente al prevenir, minimizar o eliminar los riesgos de origen eléctrico.<br><br>
        p.mb-0 En el reglamento se consideran como instalaciones eléctricas los circuitos con sus componentes tales como conductores, equipos, máquinas y aparatos que conforman un sistema eléctrico y que se utilizan para la generación, transmisión, transformación, distribución o uso final de la energía eléctrica dentro de los límites de tensión y frecuencia.

    p Los requisitos y prescripciones técnicas del reglamento son de obligatorio cumplimiento en Colombia en todas las instalaciones nuevas, remodelaciones o ampliaciones, públicas o privadas, con valor de tensión nominal mayor o igual a 25 V y menor o igual a 500 kV de corriente alterna (CA), con frecuencia de servicio nominal inferior a 1000 Hz y mayor o igual a 48 V en corriente continua (CC).

    figure.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema2/img02.svg")

    .row.justify-content-center.mb-4
      .col-lg-10.cajon.color-secundario.p-4(data-aos="flip-up")
        p.mb-0 Profundizando lo visto, la inspección eléctrica de una instalación requiere de la observación, medición, verificación y evaluación, con el fin de buscar evidencias objetivas que indiquen que una instalación eléctrica fue realizada según los requerimientos establecidos por el Reglamento técnico de instalaciones eléctricas RETIE.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .h5 Durante dicha inspección es fundamental realizar las siguientes actividades:
        ul.lista-ul--color.mb-0
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Revisión de diseños, cálculos y demás documentación propia del proyecto eléctrico.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Verificación de la conformidad de los productos usados.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Visitas de seguimiento y verificación en terreno.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Registro en bitácora del inspector de las observaciones y comentarios.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Solicitud de acciones correctivas cuando se detecten no conformidades.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Mediciones y ensayos que establezca el RETIE.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img03.svg")

    .cajon.color-acento-botones.p-4.mb-4(data-aos="flip-up")
      p La conclusión del proceso de inspección es el dictamen de conformidad con el RETIE, el cual será entregado al final del cumplimiento de los requisitos y aspectos técnicos. Esta emisión del resultado es de competencia de un ingeniero, técnico o tecnólogo certificado en las competencias por organismos que avalan dicha certificación para su emisión en las instalaciones que cumplen con la normatividad eléctrica.
      p.mb-0 Para una carga eléctrica menor a 10 kW no se requiere de certificación RETIE.

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img04.png")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Empresas Públicas de Medellín ( EPM) y el Consorcio Energía del Caribe asumirán en Colombia, los planes de inversiones y de reducción de pérdidas orientados al mejoramiento de redes, estaciones y subestaciones y de la infraestructura en general, así como la tecnificación de los sistemas de medición.
        p.mb-0 Para permitir el uso de productos en las instalaciones de alumbrado interior o exterior que les aplique el presente reglamento, se debe demostrar el cumplimiento de los requisitos exigidos mediante un certificado de producto expedido por un organismo de certificación acreditado por el Organismo Nacional de Acreditación de Colombia (ONAC).
    
    separador
    #t_2_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.1 Tipos de tensión
    
    p La tensión eléctrica es una magnitud física que puede cuantificar la diferencia de potencial eléctrico entre dos puntos en específico. Es decir, el voltaje que viaja de un cuerpo a otro, y al que comúnmente conocemos como voltaje. La unidad de medida utilizada por la tensión eléctrica es el voltio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .h5 Estos son los niveles de tensión para sistemas de corriente alterna, los cuales se adoptan de la NTC 1340:
        ul.lista-ul--color.mb-0
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Extra alta tensión (EAT): corresponde a tensiones superiores a 230 kV.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Alta tensión (AT): tensiones mayores o iguales a 57,5 kV y menores o iguales a 230 kV.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Media tensión (MT): los de tensión nominal superior a 1000 V e inferior a 57,5 kV.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Baja tensión (BT): los de tensión nominal mayor o igual a 25 V y menor o igual a 1000 V.
          li(style="margin-bottom:4px")
            i.fas.fa-caret-square-right(style="color: #0B5999;")
            | Muy baja tensión (MBT): tensiones menores de 25 V.
        .cajon-b.color-secundario.p-3.mb-4
          p.mb-0 Toda instalación eléctrica objeto del RETIE debe asociarse a uno de los anteriores niveles. Si en la instalación existen circuitos en los que se utilicen distintas tensiones, el conjunto del sistema se clasificará en el grupo correspondiente al valor de la tensión nominal más elevada.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img05.png")

    .h5 Categoría de los niveles de tensión
    p Los niveles de tensión también se dividen en las siguientes categorías:

    .row.justify-content-around.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img06.png")
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Nivel 1") Sistemas con tensión nominal menor a 1 kV. ( Fuente: R.CREG - 097- 2008; Art. 1) - Casa.
          p(numero="2" titulo="Nivel 2") Sistemas con tensión nominal mayor o igual a 1 kV y menor de 30 kV. Redes de tensión 11,4 - Bogotá y alrededores.
          p(numero="3" titulo="Nivel 3") Sistemas con tensión nominal mayor o igual a 30 kV y menor de 57,5 kV. Redes de tensión 34,5 kV - Industriales.
          p(numero="4" titulo="Nivel 4") Sistemas con tensión nominal mayor o igual a 57,5 kV y menor a 220 kV. Industriales - Subcentral a subcentral - Torres eléctricas robustas y grandes.

    separador
    #t_2_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 2.2 Clasificación redes eléctricas
    
    .cajon.color-secundario.p-4.mb-4(data-aos="flip-up")
      p.mb-0 Una red eléctrica es la que se encarga de suministrar electricidad a los consumidores. Sus inicios fueron durante la Revolución Industrial y al día de hoy dan servicio a millones de hogares. #[b Thomas Edison] fue quien inventó el sistema de red eléctrico que suministraba energía para la iluminación.

    p Las redes eléctricas se clasifican en:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img07.png' alt='AvatarTop' style="width: 130%; max-width: 150%")
          .tarjeta.tarjeta--azul.BGR04.p-5
            h4.ms-5 Redes de transporte:
            p.ms-5 Transportan la energía desde la central de generación hasta la subestación de transporte. En la subestación se reduce el voltaje para la posterior distribución.
            p.ms-5.mb-0 La red de transporte es el conjunto de líneas y subestaciones, de tensión mayor o igual a 220 kV, que llevan la energía eléctrica desde las centrales de generación hasta las subestaciones de transformación. Por ejemplo, la red de transporte en España está compuesta por más de #[b 41.200 kilómetros de líneas de alta tensión].
        .tarjeta-avatar-b.img-inv.mb-4(data-aos="fade-left")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img08.png' alt='AvatarTop' style="width: 130%; max-width: 150%; right: 50%")
          .tarjeta.tarjeta--azul.BGR05.p-5
            h4.me-5 Redes de distribución:
            p.me-5.mb-0 Distribuye la energía eléctrica a los usuarios finales. Esta red lleva la energía eléctrica desde las subestaciones de transformación hasta los puntos de consumo #[b en media o baja tensión] (≤ 220 kV). Los gestores de las redes de distribución son las distribuidoras, las cuales son responsables de la explotación, el mantenimiento y el desarrollo de dicha red. Esta actividad viene regulada en el Real Decreto 1955/2000.
        .tarjeta-avatar-b.mb-4(data-aos="fade-right")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img09.png' alt='AvatarTop' style="width: 130%; max-width: 150%")
          .tarjeta.tarjeta--azul.BGR04.p-5
            h4.ms-5 Red primaria:
            p.ms-5.mb-0 Está compuesta por líneas aéreas o subterráneas de media tensión (MT) de 45 kV, 66 kV, o 132 kV), y se utilizan para alimentar la red secundaria o para consumo industrial.
        .tarjeta-avatar-b.img-inv(data-aos="fade-left")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img10.png' alt='AvatarTop' style="width: 130%; max-width: 150%; right: 50%")
          .tarjeta.tarjeta--azul.BGR05.p-5
            h4.me-5 Red secundaria:
            p.me-5 Compuesta por líneas aéreas o subestaciones de distribución de 15 kV, 20 kV, centros de transformación de media tensión a baja tensión (MT/BT), y líneas aéreas o subterráneas de baja tensión (BT).
            p.me-5.mb-0 Las redes de distribución secundarias pueden ser privadas, para un único usuario; o públicas, para más de un usuario.

    .h5 Regulación de potencia
    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p Un insumo muy importante durante la instalación es el cableado eléctrico, elemento fabricado y pensado para conducir electricidad. El material principal con el que están fabricados es el cobre, por su alto grado de conductividad, aunque también se utiliza el aluminio que, a pesar de ser menos conductivo, resulta más económico que el cobre.
    p Los cables eléctricos están compuestos por:

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="BGIMG02")
          div(titulo="Conductor eléctrico")
            p Es la parte del cable que transporta la electricidad y puede estar constituido por uno o más hilos de cobre o aluminio. Dependiendo de la tensión para la que están preparados, los cables se categorizan en grupos de tensiones que van por rangos de voltios:
            ul.lista-ul--color.mb-0
              li(style="margin-bottom:4px")
                i.fas.fa-caret-square-right(style="color: #0B5999;")
                | Cables de muy baja tensión (hasta 50 V)
              li(style="margin-bottom:4px")
                i.fas.fa-caret-square-right(style="color: #0B5999;")
                | Cables de baja tensión (hasta 1000 V)
              li(style="margin-bottom:4px")
                i.fas.fa-caret-square-right(style="color: #0B5999;")
                | Cables de media tensión (hasta 30 kV)
              li(style="margin-bottom:4px")
                i.fas.fa-caret-square-right(style="color: #0B5999;")
                | Cables de alta tensión (hasta 66 kV)
              li(style="margin-bottom:4px")
                i.fas.fa-caret-square-right(style="color: #0B5999;")
                | Cables de muy alta tensión (por encima de los 770 kV)
          div(titulo="Aislamiento")
            p.mb-0 Este componente es la parte que recubre el conductor, se encarga de que la corriente eléctrica no se escape del cable y de que sea transportada de principio a fin por el conductor.
          div(titulo="Capa de relleno")
            p.mb-0 Se encuentra entre el aislamiento y el conductor. Se encarga de que el cable conserve un aspecto circular, ya que en muchas ocasiones los conductores no son redondos o tienen más de un hilo. Con la capa de relleno se logra el aspecto homogéneo necesario.
          div(titulo="Cubierta")
            p.mb-0 Es el material que protege al cable de la intemperie y de elementos externos.
          div(titulo="Hay tres tipos de cables")
            p.mb-0 Coaxial, par trenzado, fibra óptica. Cada uno aporta una solución a los problemas ya mencionados anteriormente. El cable par trenzado es parecido al cable telefónico.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img11.png")

    .bloque-texto-g.color-primario.bloque-inv.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.jpg')})`}"
      )(data-aos="fade-left")
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Para hacer sinergia entre varios elementos se crean los conectores que unen circuitos eléctricos, bien entre cables eléctricos o entre cables eléctricos y algún otro elemento del circuito. En caso de que se necesite unir un cable eléctrico a un aparato eléctrico, este recibirá el nombre de terminal eléctrico, por lo que cabe dejar en claro las diferentes interacciones. Es importante tener en cuenta que las conexiones o uniones de cables únicamente con cinta aislante están prohibidas en cualquier instalación.<br><br>Los conectores eléctricos se utilizan para unirlos y formar una trayectoria continua de flujo de corriente eléctrica, lo que reduce drásticamente el tiempo, el esfuerzo y la mano de obra necesarios para fabricar, ensamblar e instalar dispositivos eléctricos, sus componentes y el cableado.

    .row.justify-content-center.align-items-end.mb-4
      .col-xl-3.col-md-4.col-6.px-0.img01.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img13.png")
      .col-lg-8.BGR06.p-4(data-aos="fade-left")
        p.ms-5.me-4 En caso de que se encuentren fallas en las instalaciones, aparecen los totalizadores, que cumplen la función de interrumpir la corriente eléctrica después de detectada la falla. En términos simples, el totalizador está diseñado para apagar la alimentación en caso de una emergencia.
        p.ms-5.me-4.mb-0 Los totalizadores son un dispositivo esencial en el mundo moderno, y uno de los mecanismos de seguridad más importantes en cualquier casa, edificio o industria. Cuando un cableado eléctrico en un edificio tiene demasiada corriente, estos simples elementos la cortan hasta que alguien solucione el problema.

    .cajon.color-acento-botones.p-4(data-aos="flip-up")
      p.mb-0 #[b Estimado aprendiz]: hemos llegado al final de este componente formativo. Le invitamos a continuar recorriendo este camino lleno de aprendizajes. Recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en donde encontrará la síntesis del tema abordado, una actividad didáctica, material complementario, entre otros recursos.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
