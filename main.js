jQuery('h1').click(function(){
    alert("This is a heading tag")
  });

  jQuery('p').click(function(){
    alert("This is a paragraph")
  });

  jQuery('img').click(function(){
    alert("This is an image")
  });

  $(document).ready(function() {
    $("p").click(function() {
      $("img").show();
    });
  });

  $("ul#list li:first").css("color","red");// selecting  the first item on the list //
  $("ul#list li:last").css("color","red");// selecting the last item on the list//
  $("ul#list li:even").css("background-color", "yellow"); //changing the background color for even nubmers//
  $("ul#list li:odd").css("background-color","#cccccc");// changing background color  for odd numbers//