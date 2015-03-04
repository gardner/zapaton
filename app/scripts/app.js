'use strict';

/**
 * @ngdoc overview
 * @name zapatonApp
 * @description
 * # zapatonApp
 *
 * Main module of the application.
 */
angular
  .module('zapatonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
      })
      .when('/cooperativa', {
        templateUrl: 'views/cooperativa.html',
      })
      .when('/registered', {
        templateUrl: 'views/registered.html',
      })
      .when('/red', {
        templateUrl: 'views/red.html',
      })
      .when('/equipos', {
        templateUrl: 'views/equipos.html',
      })
      .when('/contacto', {
        templateUrl: 'views/contact.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($translateProvider) {
    $translateProvider.useCookieStorage();
    
    $translateProvider.translations('en', {
      homeLink: 'Home',
      coopLink: 'The Cooperative',
      mapLink: 'Coverage Map',
      redLink: 'The Network',
      equipmentLink: 'The Equipment',
      equipmentText: 'We use inexpensive wireless devices that are based on industry standards to connect your site to the tower on Alto Conceptión. The radios use the same technology that laptops use to connect to WiFi. They operate in the less crowded 5Ghz ISM band which does not require a license. The radios have very strong parabolic antennas which focus the signal so that it can travel up to kilometers instead of meters.',
      toConnect: 'To connect your site to Alto Conceptión you will need what is called an CPE (Customer Premise Equipment). The cheapest most effective CPE for this region is called an AirGrid which costs about $75. This device needs to be installed on a rooftop or a tall piece of steel EMT tube that is securely fashioned so that it does not move in high wind conditions. You can find out more at:',
      toShare: 'To share this connection with more than one computer you need an access point. For inside use by few people you can use any old wifi router that you can get your hands on. For a larger site like a school or a library, then you will need to invest in an outdoor AP. These have strong antennas that cover up to 183m around the access point and can support 30+ simultaneous connections. These cost around $200.',
      coverageText: 'If you have a clear line of sight to the top of Alto Conceptión then you can most likely participate.',
      coverageMap: 'Coverage Map',
      parritaBackhaul: 'The backhaul link is capable of carrying a theoretical 450Mpbs. The distance, as the crow flies, between Alto Conceptión and Parrita is almost 20km. below is a calculation of the altitude and distance of the link:',
      backhaulQuestion: 'What is a backhaul?',
      backhaul: 'A backhaul link connects serves as the main connection down to Parrita. Our network centralizes on the top of Alto Conceptión and then sends all of the information over the backhaul link down to Parrita where we connect with our upstream provider to route network traffic out to the open internet.',
      backhaulWikipedia: 'http://en.wikipedia.org/wiki/Backhaul_%28telecommunications%29',
      fresnelWikipedia: 'http://en.wikipedia.org/wiki/Fresnel_zone',
      readMore: 'Read more at',
      registered: 'You are now registered. We will contact you shortly.',
      referenceMap: 'Reference Map',
      contactLink: 'Contact',
      contact: 'Send us your information and we will contact you personally.',
      otherCoops: 'Existing cooperatives offering internet service:',
      'Estamos en paso 1': 'We are at step 1',
      looking: 'We need a minimum of 20 founding members to file the paperwork to gain legal status as a cooperative.',
      legalBasis: 'Legal Basis',
      law4179: 'Ley 4179 Artículo 4º.- Queda absolutamente prohibido a toda asociación cooperativa realizar cualquier actividad que no se concrete al fomento de los intereses económicos, sociales y culturales de sus asociados. Las cooperativas debidamente registradas gozarán en forma irrestricta de todos los derechos y garantías necesarias para el cumplimiento de sus fines. En consecuencia, serán absolutamente nulos los actos de las entidades privadas o de los órganos públicos que impongan restricciones directas o indirectas a la actividad de esas asociaciones, salvo cuando las disposiciones legales expresamente establezcan esas restricciones. Por tanto, las cooperativas quedan absolutamente libres de cualquier tipo de regulación o control por parte de organismos o instituciones del Estado, autónomas o semiautónomas, que la ley no establezca en forma específica.',
      law8642: 'Law 8642 Articulo 6º section 12 and section 16 defines an operator and a provider as: 12) Operador: persona física o jurídica, pública o privada, que explota redes de telecomunicaciones con la debida concesión o autorización, las cuales podrán prestar o no servicios de telecomunicaciones disponibles al público en general. 16) Proveedor: persona física o jurídica, pública o privada, que proporciona servicios de telecomunicaciones disponibles al público sobre una red de telecomunicaciones con la debida concesión o autorización, según corresponda.',
      coopInfo: 'Law 8642 makes no specific mention of cooperativas or Law 4179. If a cooperative does not offer services to the general public then we do not fall under jurisdiction as an operator.',
      lookingFor: 'We are looking for 20 new members to join the Zapatón internet cooperative.'
      
    })
    .translations('es', {
      homeLink: 'Inicio',
      coopLink: 'la Cooperativa',
      mapLink: 'Mapa de Cobertura',
      redLink: 'Alto Conceptión',
      equipmentLink: 'los Equipos',
      'Tell me more': '¡Quiero saber más',
      equipmentText: 'Utilizamos dispositivos inalámbricos de bajo costo que se basan en estándares de la industria para conectar su sitio a la torre en Alto Concepción. Las radios utilizan la misma tecnología que las computadoras portátiles utilizar para conectarse a Wi-Fi. Operan en la banda de 5 GHz ISM menos gente que no requiere una licencia. Las radios tienen muy fuertes antenas parabólicas que se centran la señal para que pueda viajar hasta kilómetros en lugar de metros.',
      toConnect: 'Para conectar su sitio a Alto Concepción necesitará lo que se llama un CPE (Equipo Local del Cliente / Customer Premise Equipment). El CPE más eficaz barata para esta región se denomina AirGrid que cuesta alrededor de $75USD. Este dispositivo tiene que ser instalado en un tejado o un trozo de altura del tubo EMT de acero que se formó de forma segura para que no se mueve en condiciones de fuerte viento. Puede encontrar más información en:',
      Connect: 'Conectar',
      Share: 'Compartir',
      toShare: 'Para compartir esta conexión con más de un equipo que necesita un punto de acceso. Para uso interior por pocas personas que puede utilizar cualquier edad router wifi que se pueden obtener en sus manos. Para un sitio más grande, como una escuela o una biblioteca, entonces usted tendrá que invertir en un punto de acceso al aire libre. Estos tienen fuertes antenas que cubren hasta 183m alrededor del punto de acceso y puede soportar más de 30 conexiones simultáneas. Estos cuestan alrededor de $200USD.',
      coverageText: 'Si usted tiene una línea de visión clara hacia la parte superior de Alto Concepción entonces usted puede muy probablemente participar.',
      coverageMap: 'Mapa de Cobertura',
      parritaBackhaul: 'El enlace backhaul tiene la capacidad de transportar una 450Mpbs teórico. La distancia entre Alto Conceptión y Parrita es casi 20km. A continuación es un cálculo de la altitud y la distancia del enlace:',
      backhaulQuestion: '¿Qué es un backhaul?',
      backhaul: 'Una red de retorno (traducción al español del inglés backhaul), en telecomunicaciones, es la porción de una red jerárquica, que comprende los enlaces intermedios entre el núcleo o backbone, y las subredes en sus bordes.',
      backhaulWikipedia: 'http://es.wikipedia.org/wiki/Backhaul',
      fresnelWikipedia: 'http://es.wikipedia.org/wiki/Zona_de_Fresnel',
      readMore: 'Leer más en',
      registered: 'Ya está registrado. Nos pondremos en contacto con usted en breve.',
      referenceMap: 'Mapa de Referencia',
      contactLink: 'Contacténos',
      name: 'nombre',
      Splendid: '¡Espléndido',
      phone: 'fon',
      contact: 'Envíenos sus datos y nos pondremos en contacto con usted personalmente.',
      otherCoops: 'Ya hay otras cooperativas que estan dando servicios de internet a sus miembres:',
      legalBasis: 'Base Jurídica',
      law4179: 'Ley 4179 Artículo 4º.- Queda absolutamente prohibido a toda asociación cooperativa realizar cualquier actividad que no se concrete al fomento de los intereses económicos, sociales y culturales de sus asociados. Las cooperativas debidamente registradas gozarán en forma irrestricta de todos los derechos y garantías necesarias para el cumplimiento de sus fines. En consecuencia, serán absolutamente nulos los actos de las entidades privadas o de los órganos públicos que impongan restricciones directas o indirectas a la actividad de esas asociaciones, salvo cuando las disposiciones legales expresamente establezcan esas restricciones. Por tanto, las cooperativas quedan absolutamente libres de cualquier tipo de regulación o control por parte de organismos o instituciones del Estado, autónomas o semiautónomas, que la ley no establezca en forma específica.',
      law8642: 'Law 8642 Articulo 6º section 12 and section 16 defines an operator and a provider as: 12) Operador: persona física o jurídica, pública o privada, que explota redes de telecomunicaciones con la debida concesión o autorización, las cuales podrán prestar o no servicios de telecomunicaciones disponibles al público en general. 16) Proveedor: persona física o jurídica, pública o privada, que proporciona servicios de telecomunicaciones disponibles al público sobre una red de telecomunicaciones con la debida concesión o autorización, según corresponda.',
      coopInfo: 'Law 8642 makes no mention of cooperative organizations. Ley 8642 makes no specific mention of cooperativas or Law 4179. If a cooperative does not offer services to the general public then we do not fall under jurisdiction as an operator.',
      lookingFor: 'Estamos buscando a 20 nuevos miembros a unirse a la cooperativa internet Zapatón.' 
      
    });
      $translateProvider.preferredLanguage('en');
  });
