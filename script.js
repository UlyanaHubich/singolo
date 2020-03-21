window.onload = () => {
  MenuActive();
  PortfolioImageFrame();
  TagPortfolioActive();
  iPhoneDisplay();
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
    const portfolioImages = document.querySelectorAll('.portfolio-item');
    document.querySelector('.images-layot').addEventListener('click', (event) => {
      if (event.target.classList.contains('portfolio-item')) {
        portfolioImages.forEach(item => item.classList.remove('portfolio-item-active'))
        event.target.classList.add('portfolio-item-active');
      }
    })
}

/*Add active links in Portfolio*/

const TagPortfolioActive = () => {
    const tagLinks = document.querySelectorAll('.tag');
    tagLinks.forEach(item => {
      item.addEventListener('click', (event) => {
        tagLinks.forEach(link => link.classList.remove('tag-active'));
        event.target.classList.add('tag-active');
      })
    });
}

/*Change displays on phones in slider*/

const iPhoneDisplay = () => {
    const iphones = document.querySelectorAll('.iphone');
    iphones.forEach(iphone => {
      iphone.addEventListener('click', (event) => {
        if (event.target.classList.contains('display')) return;
        const display = iphone.querySelector('.black-display');
        display.classList.toggle('display-show');
      });
    })
}

/* Change position of images in Portfolio*/

const portfolioMenu = document.querySelector(".portfolio_menu");
    const images = document.querySelector(".images");
      portfolioMenu.addEventListener("click", function(event) {
      event.preventDefault();
      let tags = event.target;
        if (!tags.classList.contains("tag")) return;
        
        let portfolioItems = images.querySelectorAll(".portfolio-item");
        images.appendChild(portfolioItems[0]);
    })