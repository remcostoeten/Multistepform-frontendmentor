const stepOne = document.getElementsByClassName('first-step');
const hideBack = document.getElementById('back');
if (stepOne.length === 1) {
	hideBack.classList.add('unread');
}
