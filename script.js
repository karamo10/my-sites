document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
    // animated skill bar 
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(level => {
        const flows = level.getAttribute('data-level');
        setTimeout(() => {
            level.style.width = flows;
        }, 500);
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// prealoder function
window.addEventListener('load', function(){
    var preload = document.querySelector('.preloader');
    setTimeout( function(){
        preload.classList.add('hide-preloader');
    }, 6000);
});