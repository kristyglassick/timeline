

function init() {
	// 1. call a resize on load to update width/height/position of elements
	handleResize();

	// 2. setup the scrollama instance
	// 3. bind scrollama event handlers (this can be chained like below)
	scroller
		.setup({
			container: '#scroll', // our outermost scrollytelling element
			graphic: '.scroll__graphic', // the graphic
			text: '.scroll__text', // the step container
			step: '.scroll__text .step', // the step elements
			offset: 0.5, // set the trigger to be 1/2 way down screen
			debug: true, // display the trigger offset for testing
		})
		.onStepEnter(handleStepEnter)
		.onContainerEnter(handleContainerEnter)
		.onContainerExit(handleContainerExit);

	// setup resize event
	window.addEventListener('resize', handleResize);
}

// using d3 for convenience, and storing a selected elements
var $container = d3.select('#scroll');
var $graphic = container.select('.scroll__graphic');
var $chart = graphic.select('.chart');
var $text = container.select('.scroll__text');
var $step = text.selectAll('.step');

// initialize the scrollama
var scroller = scrollama();

// resize function to set dimensions on load and on page resize
function handleResize() { ... }

// scrollama event handlers
function handleStepEnter(response) { ... }

function handleContainerEnter(response) { ... }

function handleContainerExit(response) { ... }

function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $('#stick-here').offset().top;
    if (window_top > top) {
        $('#stickThis').addClass('stick');
        $('#stick-here').height($('#stickThis').outerHeight());
    } else {
        $('#stickThis').removeClass('stick');
        $('#stick-here').height(0);
    }
}
$(function() {
    $(window).scroll(sticktothetop);
    sticktothetop();
});
