const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;
function increaseNumberAnimationStep(i, element, endNumber) {
    if(i <= endNumber){
        if (i === endNumber) {
            element.innerText = i + '+';
            console.log(element.innerText);
          } else {
            element.innerText = i;
            console.log(element.innerText);
          }
          i+=100;
    }
    setTimeout(function() {increaseNumberAnimationStep(i, element, endNumber)}, INCREASE_NUMBER_ANIMATION_SPEED );

  };
  
  function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    
    increaseNumberAnimationStep(0, element, 5000);
  }
 


  document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
  
      let formContainer = document.createElement("div");
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input');
         const input = document.querySelector("input");
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
      formContainer.appendChild(input);
      formContainer.appendChild(input);
      document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit'));
    }
    const otherInput= document.querySelector(".form__other-input");
  
    if (event.target.value !== 'other' && Boolean(otherInput)) {
      
      document.querySelector(".form form").removeChild(otherInput);
    }
  });
  function updateScroll() {
    if (window.scrollY > 0) {
      let header = document.querySelector("header");
      header.classList.add("header__scrolled");
    } else {
      header = document.querySelector("header");
      header.classList.remove("header__scrolled");
    }
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
      animationInited = true;
      initIncreaseNumberAnimation();
    }
  }
  window.addEventListener("scroll", updateScroll);
  

  function addSmoothScroll(link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
   
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
   
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    addSmoothScroll(link);
  });
  addSmoothScroll(document.querySelector('.more-button'));