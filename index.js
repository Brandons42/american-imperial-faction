if (window.location.href.includes('?fcc')) {
	var modal = document.getElementById('modal');
	modal.style.display = 'flex';

	var close = document.getElementById('close');
	close.onclick = function () {
		modal.style.display = 'none';
	};

	var script = document.getElementById('fcc-tests');
	script.setAttribute(
		'src',
		'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
	);
}
