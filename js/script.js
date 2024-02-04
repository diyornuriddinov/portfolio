// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
	e.stopPropagation()
	document.querySelector('body').classList.toggle('mobile-nav-active')
	this.classList.toggle('fa-xmark')
})

document.body.addEventListener('click', function () {
	const body = document.querySelector('body')
	if (body.classList.contains('mobile-nav-active')) {
		body.classList.remove('mobile-nav-active')
		MenuBtn.classList.remove('fa-xmark')
	}
})

// Typing Effect

let typed = new Typed('.auto-input', {
	strings: [
		'Front-End Developer!',
		'Freelancer!',
		'UI Designer!',
		'YouTuber!',
		'Back-End Developer!',
	],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 2000,
	loop: true,
})

// Active Link State on Scroll
let navLinks = document.querySelectorAll('nav ul li a');
// Get All Sections
let sections = document.querySelectorAll('section');
window.addEventListener('scroll', function (){
    const scrollPos = window.pageYOffset + 20;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
