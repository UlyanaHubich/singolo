window.onload = () => {
  MenuActive();
  PortfolioImageFrame();
  TagPortfolioActive();
  iPhoneDisplay();
  ChangePortfolioTags();
  DialogWindow();
  ScrollMenu();
  BurgerMenu();
}

/*document.addEventListener('scroll', onScroll);*/


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

const ChangePortfolioTags = () => {

  const portfolioMenu = document.querySelector(".portfolio_menu");
    const images = document.querySelector(".images");
      portfolioMenu.addEventListener("click", (event) => {
      event.preventDefault();
      let tags = event.target;
        if (!tags.classList.contains("tag")) return;
          
        let portfolioItems = images.querySelectorAll(".portfolio-item");
        images.appendChild(portfolioItems[0]);
      })
}  
   
/*Add dialog window in Form */

const DialogWindow = () => {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const subjectInput = document.querySelector("#subject");
  const messageInput = document.querySelector("#project");
  const submit = document.querySelector("#register");
  const dialog = document.querySelector("dialog");
  const buttonClose = document.querySelector(".buttonClose");


  submit.addEventListener("click", () => {
      event.preventDefault();
      if (nameInput.value != "" && emailInput.value != "") {
          dialog.show();
          if (subjectInput.value == "") document.querySelector(".noSubject").after("Без темы");
            else document.querySelector(".noSubject").after(`Тема: ${subjectInput.value}`);
          if (messageInput.value == "") document.querySelector(".noMessage").after("Без описания");
            else document.querySelector(".noMessage").after(`Описание: ${messageInput.value}`);
      }
  })
  
  buttonClose.addEventListener("click", () => {
      event.preventDefault();
      dialog.close();
      dialog.remove();
  })

}


/* Create burger-menu for responsive*/

const BurgerMenu = () => {

  /*-----------Open-----------*/
  document.querySelector('.burger').addEventListener('click', (e) => {
    
    e.currentTarget.classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.querySelector('.logo').classList.toggle('burger-active');

      if(document.querySelector('.burger').classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
  });

  /*-----------Close-----------*/
  document.addEventListener('click', (e) => {

    let checkActiveNavigation = document.querySelector('.burger').classList.contains('active');
    
    if(checkActiveNavigation && e.target.tagName === 'a' || e.target.tagName === 'nav') {
      document.querySelector('.burger').classList.toggle('active');
      document.getElementById('menu').classList.toggle('active');
      document.querySelector('.logo').classList.toggle('burger-active');
      document.body.style.overflow = '';
    }
  }, 
  true);

}



const ScrollMenu = () => {
  const sections = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('.menu-link');
  document.addEventListener('scroll', (event) => {
      let cursorPositionY = window.scrollY + 75;
      sections.forEach(item => {
        if (item.offsetTop <= cursorPositionY && (item.offsetTop + item.offsetHeight) > cursorPositionY) {
          menuLinks.forEach(link => {
            link.classList.remove('menu-active');
            if (item.getAttribute('id') === link.getAttribute('href').substring(1)) {
              link.classList.add('menu-active');
            } else if (item.getAttribute('id') === 'slider' && link.getAttribute('href') === '#') {
              link.classList.add('menu-active');
            } else if (cursorPositionY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight && link.getAttribute('href') === '#get_a_quote') {
              menuLinks.forEach(link => {
                link.classList.remove('menu-active');
              })
              link.classList.add('menu-active');
            }
          })
        }
      })
    }
  )
}
