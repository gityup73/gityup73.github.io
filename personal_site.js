$(document).ready(function(){

$('.mobilemenu').on('click', function(){
	var menushow = $('#main').css('left');
	console.log(menushow);
	if (menushow === '0px') {
		that = 'closed';
	} else { that = 'opened'};
	switch (that){
		case 'closed':
            $('#main').css('left', '250px');
            $('#sidebar').css('width', '250px');
            that = 'opened';
            break;
        case 'opened':
            $('#main').css('left', '0px');
            $('#sidebar').css('width', '0px');
            that = 'closed';
            break;
    }
});

$('.navlink').on('click', function(){
	var divname = $(this).attr("href");
	$(divname).show("slow").siblings("div").hide("slow");
});

$('.bio-button').on('click', function(){
    $parent_box = $(this).closest('.question');
	$parent_box.siblings().find('.answer').slideUp();
	$parent_box.find('.answer').slideToggle(1000, 'swing');
});

});