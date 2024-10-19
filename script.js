$(document).ready(function () {
    // Navbar Menu Toggle
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');  // Toggle the menu visibility
        $('.menu-btn i').toggleClass('active');    // Toggle the icon's active state
    });

    // Scroll-up Button Show/Hide
    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');  // Show the scroll-up button after scrolling down 500px
        } else {
            $('.scroll-up-btn').removeClass('show');  // Hide the scroll-up button when near the top
        }
    });

    // Scroll-up Button Click Event
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });  // Scroll back to the top
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth Scroll on Menu Items Click
    $('.navbar .menu li a').click(function () {
        // Applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Typing Text Animation
    var typed = new Typed(".typing", {
        strings: ["Java Full Stack Developer", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Java Full Stack Developer", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
$(document).ready(function () {
    // Navbar Menu Toggle
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Navbar Scrolling Effect
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(result => {
      if (result === "Success") {
        document.getElementById('successMessage').style.display = 'block';
        form.reset();
      } else {
        alert("There was an error. Please try again.");
      }
    });
  });