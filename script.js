function scrollToContact(){
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}
// Smooth scroll function
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}

// Counter Animation
const counters = document.querySelectorAll('.counter');

const startCounter = (entry) => {
    if(entry.isIntersecting){
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 100;

                if(count < target){
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(startCounter);
}, { threshold: 0.5 });

document.querySelectorAll('.credentials').forEach(section => {
    observer.observe(section);
});
// FAQ Toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
// Before After Slider
const sliders = document.querySelectorAll(".ba-slider");

sliders.forEach(slider => {
    slider.addEventListener("input", function() {
        const beforeImage = this.parentElement.querySelector(".ba-before");
        beforeImage.style.width = this.value + "%";
    });
});
let testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

setInterval(()=>{
    testimonials.forEach(t => t.style.opacity = "0");
    testimonials[index].style.opacity = "1";
    index = (index + 1) % testimonials.length;
},4000);
