$(function(){$(window).on("message",function(n){$("[data-content='spa']").each(function(){var t=$(this).attr("data-base-url");n.originalEvent.origin===t&&$(this).parent().css("height",n.originalEvent.data+"px")})})});