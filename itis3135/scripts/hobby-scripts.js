function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
  }
  
  document.write('<script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>');