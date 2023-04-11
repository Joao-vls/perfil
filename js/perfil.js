
$(document).ready(()=>{
  console.log(conhecimentos);

  $(".mostra-img").hover(function(){
    if ($(".ocul")?.length && $(".mostra-img").width()==50) {
      $('.mod').removeClass('ocul');
      $(".mostra-img").animate({
        width : '+=110',
        height : '+=150'
      },500)
    }
  },
  function(){
    if (!$(".ocul")?.length) {
      $('.mod').toggleClass('ocul');
      $(".mostra-img").animate({
        width : '-=110',
        height : '-=150'
      },500)
    }
  });
  $(".opcoes button").click(function(){
    var i=$(this).attr("name");
    switch (i) {
      case "Info-pessoa":
      $(".mop")?.empty()?.text("i");
      info_pessoa();
      break;
      case "Conhecimentos":
      $(".mop")?.empty()?.append(`<i class="fa-solid fa-book"></i>`);
      conheci();
      break;
      case "Contatos":
      $(".mop")?.empty()?.text("@");
      redes();
      break;
      case "Projetos":
      $(".mop")?.empty()?.append(`<i class="fa-solid fa-code-branch"></i>`);
      cproject();
      break;
      default:
    }
  });
});
