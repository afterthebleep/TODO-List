// check off specific todos by clicking item
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
//hover todo to delete
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); // stops bubbling up to other elements
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    //get new todo from input
    let todoText = $(this).val()
    //empties the input
    $(this).val("")
    //creat new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>")

  }
})

$(".fa-pencil").click(function() {
  $("input[type='text']").fadeToggle();
})
