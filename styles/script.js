function toggleSidebarContato() {
  const sidebarContato = document.getElementById('sidebar-contato');  // Altera o ID para o da sidebar de contato
  const menuBtnContato = document.querySelector('.menu-btn-contato');  // Altera a classe para o botão de menu de contato
  
  if (sidebarContato.style.width === '250px') {  // Verifica se a sidebar já está aberta
    sidebarContato.style.width = '0';  // Fecha a sidebar
    menuBtnContato.classList.remove('open');  // Remove a classe 'open' do botão de menu
  } else {
    sidebarContato.style.width = '250px';  // Abre a sidebar
    menuBtnContato.classList.add('open');  // Adiciona a classe 'open' ao botão de menu
  }
}

function toggleSidebarProjeto() {
  const sidebarProjeto = document.getElementById('sidebar-projeto');
  const menuBtn = document.querySelector('.menu-btn-projeto');
  
  // Verificando a largura atual da sidebar para alternar seu estado
  const currentWidth = window.getComputedStyle(sidebarProjeto).width;
  
  if (currentWidth === '250px') {
    sidebarProjeto.style.width = '0';  // Fecha a sidebar
    menuBtn.classList.remove('open');  // Remove a classe 'open' do botão de menu
  } else {
    sidebarProjeto.style.width = '250px';  // Abre a sidebar
    menuBtn.classList.add('open');  // Adiciona a classe 'open' ao botão de menu
  }
}

document.addEventListener('click', function (e) {
  const sidebarProjeto = document.getElementById('sidebar-projeto');
  const menuBtn = document.querySelector('.menu-btn-projeto');
  
  // Fecha a sidebar se o clique não for na sidebar ou no botão de menu
  if (!sidebarProjeto.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebarProjeto.style.width = '0';  // Fecha a sidebar
    menuBtn.classList.remove('open');  // Remove a classe 'open' do botão de menu
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');

  // Alterna a largura da sidebar
  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';  // Fecha a sidebar
    menuBtn.classList.remove('open');  // Remove a classe 'open' do botão de menu
  } else {
    sidebar.style.width = '250px';  // Abre a sidebar
    menuBtn.classList.add('open');  // Adiciona a classe 'open' ao botão de menu
  }
}

document.addEventListener('click', function (e) {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');

  // Fecha a sidebar se o clique não for na sidebar ou no botão de menu
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.width = '0';  // Fecha a sidebar
    menuBtn.classList.remove('open');  // Remove a classe 'open' do botão de menu
  }
});

function showSection(sectionId) {
  const sections = document.querySelectorAll('.carousel-section');
  sections.forEach(function(section) {
    section.style.display = 'none';  // Oculta todas as seções
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';  // Exibe a seção selecionada
  }
}
