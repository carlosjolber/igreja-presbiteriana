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
var swiper = new Swiper(".swiper-fotos", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    enabled: false, 
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