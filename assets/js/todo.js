// check off specific todos by clicking item
$("li").click(function() {
  //if li is gray
  if($(this).css("color") === "gray"){
    //turn it back
    console.log("currently gray!")
  }
  //else
      //turn it gray
  $(this).css({
    color: "gray",
    textDecoration: "line-through"
  });
});
