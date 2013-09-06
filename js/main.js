$(function() {
  // READ THIS :
  // Please replace the meta tag title and description and heading link in
  // the html file, so at least google can index it!
  var config = {
    url           : "http://60castlereagh.tenantportal.com.au",
    building_name : "60 Castlereagh",
    portal_name   : "@60 Castlereagh",
    social_title  : "Help shape the @60 Castlereagh Tenant Portal with this short survey"
  }, source, template, video_config = {
    poster : 'http://www.jplayer.org/video/poster/Big_Buck_Bunny_Trailer_480x270.png',
    mp4    : 'http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
    ogv    : 'http://www.jplayer.org/video/ogv/Big_Buck_Bunny_Trailer.ogv',
    webmv  : 'http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm'
  };

  // m4v: "http://equiem.github.io/survey-splash/jplayer/videosources/video.mp4",
  // ogv: "http://equiem.github.io/survey-splash/jplayer/videosources/video.ogv",
  // webmv: "http://equiem.github.io/survey-splash/jplayer/videosources/video.webm",
  // m4v: "videosources/video2.mp4",
  // ogv: "videosources/video.ogv",
  // webmv: "videosources/video.webm",

  // --------------------------------------------------
  // social media href replacement
  // --------------------------------------------------
  var e_building = encodeURIComponent(config.building_name),
      e_url      = encodeURIComponent(config.url),
      e_title    = encodeURIComponent(config.social_title);

  $("#fb").attr("href", 'http://www.facebook.com/sharer.php?s=100&p[title]=' + e_building + '&p[url]=' + e_url + '&p[summary]=' + e_title);
  $("#li").attr("href", 'https://twitter.com/share?url=' + e_url+ '&text=' + e_title);
  $("#tw").attr("href", 'http://www.linkedin.com/shareArticle?mini=true&url=' + e_url+ '&title=' + e_title);
  $("#mg").attr("href", 'mailto:?body=' + e_url+ '&subject=' + e_title);

  // --------------------------------------------------
  // Handlebars text replacement
  // --------------------------------------------------
  // section: slide heading
  source   = $("#slidesection-template").html();
  template = Handlebars.compile(source);
  $("#slidesection").prepend(template(config));

  // section: what is
  source   = $("#whatis-template").html();
  template = Handlebars.compile(source);
  $("#whatis").html(template(config));

  // section: help
  source   = $("#help-template").html();
  template = Handlebars.compile(source);
  $("#help").html(template(config));

  // section: chances
  source   = $("#chances-template").html();
  template = Handlebars.compile(source);
  $("#chances > .cont").prepend(template(config));

  // --------------------------------------------------
  // Actions
  // --------------------------------------------------
  $("#fb, #li, #tw").click(function(e) {
    e.preventDefault();
    window.open($(this).attr("href"), 'Share on social network', 'width=626,height=436');
  });

  $('#carousel').carouFredSel({
    auto: false,
    responsive: true,
    pagination: "#slideshownav"
  });

  $("#jquery_jplayer_1").jPlayer({
    ready: function () {
      $(this).jPlayer("setMedia", {
        m4v: video_config.mp4,
        ogv: video_config.ogv,
        webmv: video_config.webmv,
        poster: video_config.poster
      });
    },
    swfPath: "Jplayer.swf",
    supplied: "webmv, ogv, m4v",
    size: {
      width: "640px",
      height: "360px",
      cssClass: "jp-video-360p"
    },
    smoothPlayBar: true,
    keyEnabled: true
  });

  $("#playmobile").click(function(e) {
    e.preventDefault();
    $("#jquery_jplayer_1").jPlayer("play");
  });

  $(".fcb").fancybox();
  $("a#fancyBoxLink").fancybox({
      'href' : '#jp_container_1',
  });
});
