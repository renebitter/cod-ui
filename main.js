const allSections = document.querySelectorAll('[data-id="feature"]');

Array.from(allSections).forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.classList.add('is-active');

    Array.from(allSections)
      .filter((globalSection) => {
        return globalSection !== section;
      })
      .forEach((otherGlobalSection) => {
        otherGlobalSection.classList.remove('is-active');
      });
  });
});
