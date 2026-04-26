// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // Scroll newsletter into view when Subscribe nav button is clicked
  const navCta = document.querySelector('.nav-cta');
  if (navCta) {
    navCta.addEventListener('click', () => {
      const newsletter = document.querySelector('.newsletter');
      if (newsletter) {
        newsletter.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => newsletter.querySelector('input')?.focus(), 400);
      }
    });
  }
});
