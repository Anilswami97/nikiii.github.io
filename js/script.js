// const parallaxElements = document.querySelectorAll('.top-banner-section .icons img');

// let targetX = 0;
// let targetY = 0;
// let animationFrame;

// function handleMovement(e) {
//   const x = e.touches ? e.touches[0].clientX : e.clientX;
//   const y = e.touches ? e.touches[0].clientY : e.clientY;

//   const w = window.innerWidth / 2;
//   const h = window.innerHeight / 2;

//   targetX = (x - w) / w;
//   targetY = (y - h) / h;

//   if (!animationFrame) {
//     animationFrame = requestAnimationFrame(updateParallax);
//   }
// }

// function updateParallax() {
//   parallaxElements.forEach((el) => {
//     const depth = el.getAttribute('data-depth') || 1;
//     const moveX = targetX * 10 * depth;
//     const moveY = targetY * 10 * depth;

//     el.style.transform = `translate(${moveX}px, ${moveY}px)`;
//   });

//   animationFrame = null;
// }

// document.addEventListener('mousemove', handleMovement);
// document.addEventListener('touchmove', handleMovement);



// Active Navbar
/*
let nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
*/

// nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach((a) => {
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    })
})


// Counter Design with Scroll Trigger
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    // Observer for triggering counters
    const counters = document.querySelectorAll('.counter-circle span');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                if (!entry.target.classList.contains('counted')) { // Ensure it runs only once
                    if (id === 'count1') counter(id, 0, 850, 3000);
                    if (id === 'count2') counter(id, 0, 50, 3000);
                    if (id === 'count3') counter(id, 0, 20, 3000);
                    if (id === 'count4') counter(id, 0, 50, 3000);
                    entry.target.classList.add('counted'); // Mark as counted
                }
                observer.unobserve(entry.target); // Stop observing after triggering
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    counters.forEach(counter => observer.observe(counter));
});




// Send Email via EmailJS

function sendEmail() {
    let parms = {
        sender_name : document.getElementById("name").value,
        phone_no : document.getElementById("phone_no").value,
        email_id : document.getElementById("email").value,
        insta_id : document.getElementById("insta_id").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_q5cxjpc", "template_zq0ygu5", parms).then(alert("Email Sent Successfully!"));
}




// Vanish audio Player

document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const vanishDate = new Date("2025-01-01");

    if (currentDate > vanishDate) {
      const audioPlayerSection = document.getElementById("audio-player");
      if (audioPlayerSection) {
        audioPlayerSection.style.display = "none";
      }
    }
  });
