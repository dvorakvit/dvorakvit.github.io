// /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetBot - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



// $('html').css('overflow-x', 'initial');
$(document).ready(function(){
  $('#contact-form').on('submit',function(e) {  //Don't foget to change the id form
  $.ajax({
      url:'contact.php', //===PHP file name====
      data:$(this).serialize(),
      type:'POST',
      success:function(data){
        console.log(data);
        //Success Message == 'Title', 'Message body', Last one leave as it is
        swal("Podařilo se!", "Zpráva byla odeslána!", "success");
      },
      error:function(data){
        //Error Message == 'Title', 'Message body', Last one leave as it is
        swal("Ups...", "Něco se pokazilo! :(", "error");
      }
    });
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
  });
});

// $('#contact-form').submit(function () {
//  sendContactForm();
//  return false;
// });
