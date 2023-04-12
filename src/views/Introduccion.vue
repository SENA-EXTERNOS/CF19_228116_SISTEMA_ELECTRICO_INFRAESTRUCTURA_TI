<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Estimado aprendiz: en este componente formativo podrá encontrar todo lo relacionado con la instalación y montaje del sistema eléctrico de una infraestructura de tecnología informática (TI) partiendo del Código técnico para las instalaciones eléctricas y su normativa vigente, ya que, a partir de él, y según la norma de gestión de calidad, se implementa y opera actualmente en el territorio colombiano.
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Adicionalmente, se explorarán los conocimientos básicos acerca de los tipos de magnitudes de un sistema eléctrico y su relación con la simbología técnica, lo cual le permitirá identificar y conocer los equipos que cumplen con la función y normativa para poder realizar las mediciones de las unidades y magnitudes de tensión y verificar el funcionamiento de los circuitos eléctricos en sistemas de cableado estructurado de acuerdo con el plan de pruebas establecido.
        .h5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/intro/img02.svg")
    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EKokaMonPPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
