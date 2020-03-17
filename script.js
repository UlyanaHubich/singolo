window.onload = () => {
    MenuActive();
    PortfolioImageFrame();
  }
  /*Add active menu links*/
  
  const MenuActive = () => {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(item => {
      item.addEventListener('click', (event) => {
        menuLinks.forEach(link => link.classList.remove('menu-active'));
        event.target.classList.add('menu-active');
      })
    });
  }
  
  /*Add frame around Portfolio images*/
  
  const PortfolioImageFrame = () => {
      const portfolioItems = document.querySelectorAll('.portfolio-item');
      document.querySelector('.images-layot').addEventListener('click', (event) => {
        if (event.target.classList.contains('portfolio-item')) {
          portfolioItems.forEach(item => item.classList.remove('portfolio-item-active'))
          event.target.classList.add('portfolio-item-active');
        }
      })
    }