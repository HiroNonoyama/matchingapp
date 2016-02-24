

$(function(){
	$(".content").draggable({
		revert: "invalid",
		drag: function(event, ui){
			$(".ui-draggable-dragging").css("background-color", "#CEF9DC")
		},
		stop: function(event, ui){
			$(".ui-draggable-dragging").css("background-color", "#EEEEEE")
		},
		opacity: 0.8,
	});
	$(".wrapper").droppable({
    accept: ".ui-draggable",
    tolerance: "intersect",
    drop: function(event, ui){
    	$(".ui-draggable-dragging").appendTo(this)
    }
	});
});