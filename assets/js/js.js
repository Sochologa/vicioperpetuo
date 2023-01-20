var xyz = 'fabohax.xyz.com/xyz.html';
xyz.split('.html')[0];
window.history.replaceState( null, null, link );


let parallax_sections = document.querySelectorAll('.js-parallax-section');
for (let parallax_section of parallax_sections) {
	let _from = parallax_section.getAttribute("data-from") || '0px';
	let _to = parallax_section.getAttribute("data-to") || '100px';
	let instance = basicScroll.create({
		elem: parallax_section,
		from: 'top-middle',
		to: 'bottom-middle',
		direct: true,
		props: {
			'--ty': {
				from: _from,
				to: _to,
			}
		}
	})
	instance.start();
}


// DEBUG
var debug_button = document.querySelector('.js-debug-button');
debug_button.onclick = function() {
	debug_button.classList.toggle('is-active');
	document.body.classList.toggle('is-debug');
}