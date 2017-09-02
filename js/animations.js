$(document).ready(function() {
  var count = 140
  $("#tweet-controls").hide();

  $( ".tweet-compose" ).on( "click", function() {
  $(".tweet-compose").css("height","5.0em");
  $("#tweet-controls").show();

});
$(".tweet-compose").on("keydown", function() { var count = 140-$(this).val().length;
  $('#char-count').text(count)
   if(count <= 10){
     $('#char-count').css("color" , "red");
   }
      if(count > 10){
        $("#char-count").css("color", "#999");
      }
        if(count < 0){
          $("#tweet-submit").attr('disabled', "disabled");
        }
          if(count >= 0 ){
            $("#tweet-submit").removeAttr("disabled");
          }
});


$("#tweet-submit").on("click", function() {
      var tweetText = $("textarea.tweet-compose").val();
      $("textarea.tweet-compose").val("");
      var date = new Date();
      var newTweet = $(".tweet:first-of-type").clone();
      newTweet.find("p.tweet-text").text(tweetText);
      newTweet.find("img.avatar").attr("src", "img/alagoon.jpg");
      newTweet.find(".username").text("@none");
      newTweet.find(".fullname").text("Your Name Here");
      newTweet.find(".time").text(date);
      newTweet.find(".num-retweets, .num-favorites").text("0");
      newTweet.fadeIn();
      $("#stream").prepend(newTweet);
      $("#char-count").text("140");
      $("#char-count").css("color", "#999");
});

$('#stream').on('mouseenter','.tweet', function(){
$(this).find('.tweet-actions').css('display','block');
});
// Tweet Actions, hide on mouseleave
$('#stream').on('mouseleave','.tweet', function(){
$(this).find('.tweet-actions').css('display','none');
});

$('#stream').on('click','.tweet', function(){
   $(this).find('.stats').fadeIn();
 });





});
