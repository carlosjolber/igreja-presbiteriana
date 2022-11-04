let menuPrincipal = document.querySelector(".menu ul");
let submenu = document.querySelector(".menu ul ul");
let secao = document.querySelector(".secao-fotos");

//ESTÁ FUNÇÃO CONTROLE A EXIBIÇÃO DO MENU PRINCIPAL
function gerenciarMenu() {
  menuPrincipal.classList.toggle("active-menu");
}

//ESTÁ FUNÇÃO CONTROLE A EXIBIÇÃO DO SUBMENU
function gerenciarSubmenu() {
  submenu.classList.toggle("active-submenu");
}



/*********MANIPULA AS AÇÕES DA SEÇÃO DE FOTOS USANDO O PLUGIN SWIPER.JS*********/
const swiperSectionFotos = new Swiper('.swiper-fotos', {
  // PARÂMETROS OPCIONAISs
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  // CASO TENHA PAGINAÇÃO
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  // SETAS OU FLEXAS DE NAVEGAÇÃO
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
/*********MANIPULA AS AÇÕES DA SEÇÃO DE FOTOS USANDO O PLUGIN SWIPER.JS*********/



/*********MANIPULA AS AÇÕES DA SEÇÃO DE ENCONTROS SEMANAIS USANDO O PLUGIN SWIPER.JS*********/
const swiperEncontrosSemanais = new Swiper('.swiper-encontros-semanais', {
  // PARÂMETROS OPCIONAISs
  direction: 'horizontal',
  loop: true,
  speed: 2000,
  // CASO TENHA PAGINAÇÃO
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true
  },
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    992: {
      enabled: false,
      slidesPerView: 3,
      spaceBetween: -50,
      navigation:{
      enabled: false
      }
    },
    768: {
      enabled: true,
      slidesPerView: 2,
      spaceBetween: 5,
      // SETAS OU FLEXAS DE NAVEGAÇÃO
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
      }
    },
    400: {
      enabled: true,
      slidesPerView: 1,
      spaceBetween: 5,
      // SETAS OU FLEXAS DE NAVEGAÇÃO
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        enabled: true,
        clickable: true
      }
    }
  }
});
/*********MANIPULA AS AÇÕES DA SEÇÃO DE ENCONTROS SEMANAIS USANDO O PLUGIN SWIPER.JS*********/

AOS.init();