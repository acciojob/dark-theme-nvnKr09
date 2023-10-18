//your code here
function toggleTheme() {
	const maintheme = document.getElementById('app');
	const btntheme = document.getElementById('swap');
	maintheme.classList.toggle('night');
	btntheme.classList.toggle('button_night');
	// document.getElementById('app').className='night';
	// document.getElementById('swap').className='button_night';
}
