let accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
  let header = accordion.querySelector('.accordion-header');
  
  header.addEventListener('click', function() {
    let content = this.nextElementSibling;
    content.classList.toggle("accordion-show");
  })
})
