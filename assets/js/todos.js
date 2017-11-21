// Check Off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

// Click on X to delete todo
$("ul").on("click", "span", function(e){
	// "this" refers to the span
	$(this).parent().slideUp(500, function(){
		// "this" refers to the parent
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type ='text'").keypress(function(){
    if (event.which === 13){
        let todoText = $(this).val();
        // create new li and add to ul
        $(this).val("");
        $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + " </li>");
    }
});

$(".fa-plus").click(function(){
	$("input").slideToggle(500);
});