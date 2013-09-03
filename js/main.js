(function() {
  $('#carousel').carouFredSel({
    auto: {
      play : true,
      duration: 1000
    },
    responsive: true,
    pagination: "#slideshownav"
  });

  $(".fcb").fancybox();
})();
