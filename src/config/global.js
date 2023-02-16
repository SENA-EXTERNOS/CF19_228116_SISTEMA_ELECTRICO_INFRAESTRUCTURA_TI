export default {
  global: {
    componenteFormativo: 'Sistema eléctrico de la infraestructura TI',
    descripcionCurso:
      'El Ministerio de Minas y Energía colombiano es el ente regulador de todas las condiciones técnicas que garantizan la utilización segura y responsable de la energía eléctrica en la República de Colombia. A partir de esto es necesario conocer las regulaciones técnicas disponibles de la normatividad vigente y sus actualizaciones esenciales para poder implementar, instalar y certificar, de acuerdo con los términos de referencia, el sistema eléctrico de una infraestructura TI.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Protocolo de empresas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normas técnicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a medidas eléctricas',
      referencia: 'Electro-Educación 08 junio 2020',
      tipo: 'Video',
      link: 'https://youtu.be/k34KVCuDcrI',
    },
    {
      tema: 'Los 5 instrumentos de medición eléctrica ¡más importantes!',
      referencia: 'Villegas, Emmanuel 22 noviembre 2021',
      tipo: 'Video',
      link: 'https://youtu.be/mmD1vh-zbJM',
    },
    {
      tema:
        'Sistema de puesta a tierra y tierra física. - Explicación de funcionamiento',
      referencia: 'AcademiaDII 11 febrero 2022',
      tipo: 'Video',
      link: 'https://youtu.be/wBJ9Lu5Mybc',
    },
    {
      tema: '¿Qué es un certificado RETIE para las instalaciones eléctricas?',
      referencia: 'Serna, Francisco febrero 15, 2021',
      tipo: 'Blog',
      link:
        'https://blog.cidet.org.co/qué-es-un-certificado-retie-para-instalaciones-eléctricas',
    },
  ],
  glosario: [
    {
      termino: 'Acreditación',
      significado:
        'procedimiento mediante el cual se reconoce la competencia técnica y la idoneidad de organismos de certificación e inspección, así como laboratorios de ensayo y de metrología.',
    },
    {
      termino: 'Circuito',
      significado:
        'trayecto o ruta de una corriente eléctrica formada por conductores y que transporta energía eléctrica entre fuentes. Se define también como el recorrido preestablecido por el que se desplazan las cargas eléctricas.',
    },
    {
      termino: 'Conductancia o Conductividad',
      significado:
        'cantidad de potencia que debe ser entregada en un punto dado de un sistema eléctrico. La conductancia está directamente relacionada con la facilidad que ofrece un material cualquiera al paso de la corriente eléctrica. La conductancia es lo opuesto a la resistencia. A mayor conductancia la resistencia disminuye, y viceversa: a mayor resistencia, menor conductancia, por lo que ambas son inversamente proporcionales.',
    },
    {
      termino: 'Corriente',
      significado:
        'medida en amperios (A). Es el flujo de carga eléctrica a través de un hilo metálico; es semejante al flujo de agua entre dos depósitos a distinto nivel (o al caudal del aire en un tubo). El instrumento para medir la corriente es el amperímetro que se conecta en serie al circuito eléctrico.',
    },
    {
      termino: 'Energía',
      significado:
        'es la capacidad de los cuerpos o conjunto de estos para efectuar un trabajo. Todo cuerpo material que pasa de un estado a otro produce fenómenos físicos que no son otra cosa que manifestaciones de alguna transformación de la energía.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'sistemas de cables de acero o cuerdas que, debidamente ancladas en un punto superior a la zona de labor, protegen al trabajador en su desplazamiento vertical (ascenso/descenso).',
    },
    {
      termino: 'Interruptor',
      significado:
        'dispositivo electromecánico que abre o cierra circuitos eléctricos y tiene la capacidad de realizarlo en condiciones de corriente nominal o, en caso extremo, de corto circuito. Su apertura y cierre pueden ser de forma automática o manual.',
    },
    {
      termino: 'Sobretensión',
      significado:
        'valor de una tensión superior a un valor de referencia o nominal. Es el exceso de tensión eléctrica en un circuito que puede causar graves daños a los equipos conectados a la corriente, desde fallas en el funcionamiento a destrucción o incendio de los mismos.',
    },
    {
      termino: 'Transformador',
      significado:
        'dispositivo que sirve para convertir el valor de un flujo eléctrico a un valor diferente. De acuerdo con su utilización se clasifica de diferentes maneras.',
    },
    {
      termino: 'Voltímetro',
      significado:
        'instrumento de medición destinado a indicar el valor de la tensión entre dos puntos de un circuito eléctrico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Disete Comunicaciones. (10 de agosto de 2022). Disete Comunicaciones. Obtenido de',
      link: 'https://disete.com/instalaciones-electricas-segun-normatividad/',
    },
    {
      referencia:
        'Icontec. (s.f.). Código eléctrico colombiano. Bogotá, Colombia. Recuperado el 10 de noviembre de 2022, de',
      link: 'https://www.evalcon.one/docs/ntc-2050-pdf',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (s.f.). minenergia.gov.co. Recuperado el 10 de noviembre de 2022, de',
      link:
        'https://www.minenergia.gov.co/documents/3809/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf',
    },
    {
      referencia: 'ONAC. (2020, octubre 13). ONAC.',
      link: 'https://onac.org.co',
    },
    {
      referencia:
        'RIG. (2020, julio 17). ¿Qué es el RETIE?, y porque es obligatoria la NTC 2050. Retie Ingeniería y Gestión.',
      link: 'https://www.retieingenieriaygestion.com/que-es-el-retie/',
    },
    {
      referencia: 'Sector Electricidad. (16 de agosto de 2018). Obtenido de',
      link: 'https://www.sectorelectricidad.com/',
    },
    {
      referencia:
        'Torres Búa, M. (s.f.). Xunta de Galicia. Recuperado el 10 de noviembre de 2022, de',
      link:
        'https://www.edu.xunta.gal/espazoAbalar/sites/espazoAbalar/files/datos/1464947843/contido/index.html',
    },
    {
      referencia:
        'Universidad Nacional de la Plata. (s.f.). Universidad Nacional de la Plata. Recuperado el 10 de noviembre de 2022, de',
      link:
        'https://yold.unlp.edu.ar/frontend/media/51/27751/5c5a8f71c013ea9277e46bcf4b1658b2.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
