const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const popupClose = document.getElementById('popup-close');

document.querySelectorAll('.gallery-image').forEach(image => {
	image.addEventListener('click', () => {
		popupImage.src = image.src;
		popup.classList.add('show');
		document.body.classList.add('no-scroll');
	});
});

function closePopup() {
	popup.classList.remove('show');
	popup.classList.add('closing');
	document.body.classList.remove('no-scroll');

	setTimeout(() => {
		popup.classList.remove('closing');
		popupImage.src = '';
	}, 300);
}

popupClose.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
	if (e.target.id === 'popup') {
		closePopup();
	}
});

function triggerFun() {
	const result = confirm("Are you sure?");
	if (result) {
		document.body.innerHTML = `
          <h1 style="
            font-size: 48px;
            color: red;
            text-align: center;
            margin-top: 200px;
            font-family: monospace;
            animation: flicker 0.5s infinite alternate;
          ">
            💥 SYSTEM FAILURE 💥
          </h1>
        `;
		setTimeout(() => location.reload(), 3000);
	}
}
