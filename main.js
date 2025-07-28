window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  // Essas duas chamadas provavelmente já estão corrigidas
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  // A correção principal está aqui.
  // Agora, passamos a seção correta para a função.
  activateMenuAtCurrentSection(document.getElementById('home'));
  activateMenuAtCurrentSection(document.getElementById('services'));
  activateMenuAtCurrentSection(document.getElementById('about'));
  activateMenuAtCurrentSection(document.getElementById('contact'));
}

function activateMenuAtCurrentSection(section) {
  
  const sectionId = section.getAttribute('id');

  const targetLine = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (targetLine) {
    targetLine.classList.remove('active'); // Garanta que remove de todos primeiro
  }

  // ... o resto da sua lógica para adicionar a classe 'active'
}

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }


function showNavOnScroll() {
  const navigation = document.getElementById('navigation'); // Garante que a variável está aqui

  if (navigation) { // <-- A CORREÇÃO É ESTA LINHA
    if (scrollY > 0) {
      navigation.classList.add('scroll');
    } else {
      navigation.classList.remove('scroll');
    }
  }
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.getElementById('backToTopButton'); // Garante que o elemento seja encontrado

  if (backToTopButton) { // <-- ESSA VERIFICAÇÃO RESOLVE O ERRO
    if (scrollY > 550) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
