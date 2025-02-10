document.querySelectorAll('section').forEach(section => {
    // When the mouse enters the section
    section.addEventListener('mouseenter', () => {
      section.classList.add('activeness');
    });

    // When the mouse leaves the section
    section.addEventListener('mouseleave', () => {
      section.classList.remove('activeness');
    });

    // When the section is focused (keyboard interaction)
    section.addEventListener('focusin', () => {
      section.classList.add('activeness');
    });

    // When the section loses focus (keyboard interaction)
    section.addEventListener('focusout', () => {
      section.classList.remove('activeness');
    });

     // When the mouse enters the section
     section.addEventListener('mouseenter', () => {
      section.classList.add('img-activeness');
    });

    // When the mouse leaves the section
    section.addEventListener('mouseleave', () => {
      section.classList.remove('img-activeness');
    });

    // When the section is focused (keyboard interaction)
    section.addEventListener('focusin', () => {
      section.classList.add('img-activeness');
    });

    // When the section loses focus (keyboard interaction)
    section.addEventListener('focusout', () => {
      section.classList.remove('img-activeness');
    });
    
  });