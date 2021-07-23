$(document).ready(function(){
    for (var i=1; i <= $('.slider__slide').length; i++){
      $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
    }
    setTimeout(function(){
      $('.slider__wrap').addClass('slider__wrap--hacked');
    }, 1000);
  })
  
  function goToSlide(number){
    $('.slider__slide').removeClass('slider__slide--active');
    $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
  }
  
  $('.slider__next, .go-to-next').on('click', function(){
    var currentSlide = Number($('.slider__slide--active').data('slide'));
    var totalSlides = $('.slider__slide').length;
    currentSlide++
    if (currentSlide > totalSlides){
      currentSlide = 1;
    }
    goToSlide(currentSlide);
  })
  
  $(document).ready(function() {
    var ir_a = $(".desplazar");
  
    ir_a.click(function(e) {
        e.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 2000,         
        )
    })
  })
  
  $(document).ready(function() {
  $(".ir-arriba").click(function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: '0px'
    },2000);
  })
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    }else {
      $(".ir-arriba").slideUp(300);
    }
  })
  })

  const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
      if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
  };
  const removeAttr = (el, attr) => {
    if( el.hasAttribute(attr) ) el.removeAttribute(attr)
  };
  
  // Crear elementos con atributos e hijo
  const createCustomElement = (element,attributes,children) => {
    let customElement = document.createElement(element);
    if (children !== undefined) children.forEach(el => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
    addAttributes(customElement,attributes);
    return customElement;
  };
  
  // Imprimir modal
  const printModal = content => {
    // crear contenedor interno
    const modalContentEl = createCustomElement('div', {
      id: 'ed-modal-content',
      class: 'ed-modal-content'
    }, [content]),
  
    // crear contenedor principal
    modalContainerEl = createCustomElement('div', {
     id: 'ed-modal-container',
     class: 'ed-modal-container' 
    }, [modalContentEl]);
  
    let modalId = modalContainerEl.attributes.id.value;
    let FatherDOM = document.getElementById('heroMain');
  
    // Imprimir el modal
    FatherDOM.appendChild(modalContainerEl);
    // Agregar clase para animar elemento
    setTimeout(function() {
      document.getElementById(modalId).classList.add('is-active');
    }, 10);
  
    // Remover el modal
    const removeModal = () => {
      // Remover Clase de animación el modal
      document.getElementById(modalId).classList.remove('is-active');
      document.getElementById(modalId).classList.add('is-remove');
  
      setTimeout(function() { 
        FatherDOM.removeChild(modalContainerEl)
      }, 330);
    };
  
    modalContainerEl.addEventListener('click', e => {
      if (e.target === modalContainerEl) removeModal();
      else {
          //console.log(e.target)
      }
    })
  }
  
  // ^\.(_)?[a-z]+-[a-z0-9-]+((_{2}|-{2})?[a-z0-9-]+)?(-{2}[a-z0-9-]+)?[a-z0-9]$
  
  [...document.querySelectorAll('.c-card')].forEach((a, i) => {
      a.addEventListener('mouseover', (e) => {
          [...document.querySelectorAll('.c-card')].map( e => {
            if (!e.classList.contains('is-focus')) {
                e.classList.add('no-focus')
            }
          });
          document.querySelector('.hero-portfolio--grid').classList.add('is-focus')
          a.classList.remove('no-focus')
          a.classList.add('is-focus')
          addAttributes(a, {id: 'show-modal'})
      });
      a.addEventListener('mouseleave', (e) => {
          [...document.querySelectorAll('.c-card')].map( e => {
            if (e.classList.contains('no-focus')) {
                e.classList.remove('no-focus')
            }
          });
          a.classList.remove('is-focus')
          removeAttr(a, 'id')
      });
      a.addEventListener('click', (e) => {
          let srcIMg = a.firstElementChild.src;
          printModal(`
              <section class="ed-modal-content--section">
                  <img class="ed-modal-content--image" src="${srcIMg}" alt=""/>
                  <a >ir a juego</a>
              </section>
          `)
      });
  });

  document.addEventListener('DOMContentLoaded', ()=> {
    $(document).ready(main);
    var contador = 1;

    function main() {
        const btn = document.querySelector('.menu-burger');
        let open = false;
        $('.menu_bar').click(function(){
            if(contador == 1) {
                $('.barra-menu').animate({
                    left: '0'
                });
                btn.classList.add('open');
                open = true;
                contador = 0;
            }else {
                btn.classList.remove('open');
                open = false;
                contador = 1;
                $('.barra-menu').animate({
                    left: '-100%'
                
                });
            }

        });
        $('.set').click(function(){
          if(contador == 1) {
              $('.barra-menu').animate({
                  left: '0'
              });
              btn.classList.add('open');
              open = true;
              contador = 0;
          }else {
              btn.classList.remove('open');
              open = false;
              contador = 1;
              $('.barra-menu').animate({
                  left: '-100%'
              
              });
          }

      });
        
    };
});