import '/css/app.css'
import anime from 'animejs/lib/anime.es.js';

window.addEventListener('load', function () {

	if (window.location.hash == '') {
		return false;
	}

	var el = document.querySelector(window.location.hash);

	if (el !== null) {

		el.scrollIntoView({ behavior: 'smooth' });

	}

}, false);



anime({
  targets: '.title-menu',
  keyframes: [
    {translateY: 0},
    {translateX: 250},
    {translateX: 0},
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
