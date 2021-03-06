// Generated by CoffeeScript 1.10.0
app.controller('bannerCrtl', [
  '$scope', '$location', '$timeout', function(scope, location, timeout) {
    $('.fancybox').fancybox();
    $('.fancybox2').fancybox();
    scope.verMenu = function(e) {
      $("#navMovil").toggle("slow");
    };
    scope.mostrarPopup = function() {
      $("#suscribete").fadeIn("slow");
    };
    scope.ocultarPopup = function() {
      $("#suscribete").fadeOut("slow");
    };
  }
]);

app.controller('desplegarCrtl', [
  '$scope', '$location', '$timeout', function(scope, location, timeout) {
    scope.desplegarTexto = function() {
      if ($("#texto").hasClass("cerrar") === false) {
        $("#texto").addClass("cerrar");
        $(".inner-energia .filtros").css("width", "100%");
        $(".inner-energia .filtros .mesa").css("width", "100%");
      } else {
        $("#texto").removeClass("cerrar");
        $(".inner-energia .filtros").css("width", "auto");
        $(".inner-energia .filtros .mesa").css("width", "auto");
      }
    };
  }
]);
