window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-items a');

    function makeActive(link) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    }

    function onScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                const id = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-items a[href="#${id}"]`);
                makeActive(correspondingLink);
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    const titles = ["Front-End Engineer 👨🏻‍💻", "UI/UX Designer 📲", "Project Manager </>", "Graphics Designer 🚀"];
    const h3Element = document.querySelector(".info h3");
    let currentIndex = 0;

    function changeTitle() {
        const currentTitle = titles[currentIndex];
        const typingDuration = currentTitle.length * 0.1; // Adjust typing speed (0.1s per character)
        const backspaceDuration = typingDuration; // Backspace at the same speed

        // Apply typing animation
        h3Element.textContent = currentTitle;
        h3Element.style.animation = `typing ${typingDuration}s steps(${currentTitle.length}, end), blink-caret 0.75s step-end infinite`;

        // After typing, start backspacing
        setTimeout(() => {
            h3Element.style.animation = `backspace ${backspaceDuration}s steps(${currentTitle.length}, end), blink-caret 0.75s step-end infinite`;
        }, typingDuration * 1000);

        // Move to the next title after typing + backspacing
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            changeTitle(); // Recursively call to continue the cycle
        }, (typingDuration + backspaceDuration) * 1000);
    }

    // Start the animation
    changeTitle();
});

const serviceModals = document.querySelectorAll(".service-modal")
const learnmoreBtns = document.querySelectorAll(".learn-more-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close-btn")
var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
     learnmoreBtn.addEventListener("click", () => {
        modal(i);
     });
});

modalCloseBtns.forEach((modalCloseBtn) => {
     modalCloseBtn.addEventListener("click", () => {
         serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
         });
     });
});
//portfolio

document.addEventListener("DOMContentLoaded", function() {
    const portfolioModals = document.querySelectorAll(".portfolio-model");
    const imgCards = document.querySelectorAll(".img-card");
    const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

    imgCards.forEach((imgCard, i) => {
        imgCard.addEventListener("click", () => {
            portfolioModals[i].classList.add("active");
        });
    });

    portfolioCloseBtns.forEach((portfolioCloseBtn) => {
        portfolioCloseBtn.addEventListener("click", () => {
            portfolioModals.forEach((portfolioModal) => {
                portfolioModal.classList.remove("active");
            });
        });
    });
});

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // dark/light

  const themeBtn = document.querySelector(" .theme-btn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());

  });

  const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
  const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

  const savedTheme = localStorage.getItem("saved-theme");
  const savedIcon = localStorage.getItem("saved-icon");

  if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
  }





  //scroll to top
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
   scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//navigation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

const menuBtn = document.querySelector(" .nav-menu-btn");  
const closeBtn = document.querySelector(" .nav-close-btn");  
const navigation = document.querySelector(" .navigation");  
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
  navItem.addEventListener("click", () => {
     navigation.classList.remove("active")
  });
});

ScrollReveal({
  //  reset: true, 
    distance: '50px', 
    duration: 1200, 
    delay: 200, 
    easing: 'cubic-bezier(0.5, 0, 0, 1)', 
    viewFactor: 0.3, 
});

ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { 
    delay: 300, 
    origin: 'left', 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { 
    delay: 400, 
    origin: 'right', 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.home .info .btn', { 
    delay: 500, 
    origin: 'bottom', 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.media-icons i, .contact-left li', { 
    delay: 300, 
    origin: 'left', 
    interval: 150, 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.home-img, .about-img', { 
    delay: 400, 
    origin: 'bottom', 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.about .description, .contact-right', { 
    delay: 500, 
    origin: 'right', 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.about .professional-list li', { 
    delay: 400, 
    origin: 'right', 
    interval: 150, 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.skills-description1, .service-description, .contact-card, .client-swiper, .contact-left h2', { 
    delay: 500, 
    origin: 'left', 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { 
    delay: 600, 
    origin: 'bottom', 
    interval: 150, 
    viewFactor: 0.3 
});
ScrollReveal().reveal('.footer-container .group', { 
    delay: 400, 
    origin: 'top', 
    interval: 150, 
    viewFactor: 0.3 
});

window.addEventListener('load', function() {
    const loading = document.getElementById('loading');

    setTimeout(() => {
        loading.classList.add('hidden');

        loading.addEventListener('transitionend', () => {
            loading.remove();
        });
    }, 800); 
});