$(document).ready(function() {
	$('.profile').removeClass('profile_hidden').addClass('slideInDown');

	events.getAnimation(animateShadow);
	events.clickOpenWindow('profile__btn');
	events.clickCloseWindow('about__more');
	events.clickOpenPageSkills();
	events.clickOpenPageWorks();
	/*getHeight();

	$(window).resize(function(){
		getHeight();
	});*/

	(function getHeight() {
	var heightHead = $('.header').height(),
			heightDocument = $(document).innerHeight();

	$('.wrapper').height(parseFloat(heightDocument));
	$('.skills').css('marginTop', heightHead + 5);
})();
});

var events = {
	clickOpenWindow: function(selector){
		$('.' + selector).click(function(){
			$(this).children().toggleClass('read-btn__caption_active');
			$('.about__more').toggleClass('about__more_active');
		}); 
	},
	clickCloseWindow: function(selector) {
		$('.' + selector).click(function(){
			$(this).removeClass(selector + '_active');
			$('.profile__btn').children().removeClass('read-btn__caption_active');
		});
	},
	clickOpenPageSkills: function() {
		$('.menu__link:nth-child(1)').click(function(){

			if($(this).next().hasClass('menu__link_active')) {
				$(this).next().removeClass('menu__link_active');
				$('.works').removeClass('works_active');
			}

			$('.skills').toggleClass('skills_active');
			$('.language__item').add('.more').removeClass('language__item_hidden more_hidden').toggleClass('fadeIn');
			$(this).toggleClass('menu__link_active');
		});
	},
	clickOpenPageWorks: function() {
		$('.menu__link:nth-child(2)').click(function(){

			if($(this).prev().hasClass('menu__link_active')) {
				$(this).prev().removeClass('menu__link_active');
				$('.skills').removeClass('skills_active');
			}

			$('.works').toggleClass('works_active');
			$(this).toggleClass('menu__link_active');
		});
	},
	getAnimation: function(func) {
		var timeId = func();

		$('.profile__photo').mouseover(function() {
			clearInterval(timeId);
		});
		$('.profile__photo').mouseout(function() {
			timeId = func();
		});
	}
};

function animateShadow(){
	var timeId = setInterval(function(){
		$('.profile__photo').toggleClass('profile__photo_shadow');
	},1000);
	return timeId;
};
