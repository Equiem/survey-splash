(function() {
  // $('#carousel').carouFredSel({
  //   auto: {
  //     play : false,
  //     duration: 1000
  //   },
  //   pagination: "#slideshownav"
  // });

  $(".fcb").fancybox();

  $(window).resize(function() {
    console.log($(window).width());
  });
})();
