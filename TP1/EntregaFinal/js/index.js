$(document).ready(function() {
    "uses strict"
    $(".navegacion").on("click", function(event){
      event.preventDefault();
      let dir = $(this).attr("href");
      $.ajax({
        "url" : dir,
        "method" : "GET",
        "data-type" : "HTML",
        success: function(textoCargado, status){
          $(".noticias").hide();
          $(".contenido").html(textoCargado);
        }
      });
    });  
  });
  