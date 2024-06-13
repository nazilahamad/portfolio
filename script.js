// Toggle sticky class on the header when scrolling
window.onscroll = () => {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Update active class on navigation links
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Email sending function
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "nazilahamad4691@gmail.com", 
        Password: "441E3D3CFB6287A787A340AC63120DE6962F", 
        To: 'nazilahamad4691@gmail.com',
        From: "nazilahamad4691@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    ).catch(
        error => console.error('Error sending email:', error)
    );
}

// Form submission event listener
const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

 // Get button elements
 const phoneBtn = document.getElementById('phone-btn');
 const linkedinBtn = document.getElementById('linkedin-btn');
 const emailBtn = document.getElementById('email-btn');

 // Add click event listeners
 phoneBtn.addEventListener('click', () => {
     console.log('Phone button clicked');
     // Open phone dialer with the number
     window.location.href = 'tel:+971554607743';
 });

 linkedinBtn.addEventListener('click', () => {
     console.log('LinkedIn button clicked');
     // Open LinkedIn profile
     window.open('https://www.linkedin.com/in/nazila-hamad-bhava-4197681a4', '_blank');
 });

 emailBtn.addEventListener('click', () => {
     console.log('Email button clicked');
     // Open email client with the email address
     window.location.href = 'mailto:nazilahamad4691@gmail.com';
 });