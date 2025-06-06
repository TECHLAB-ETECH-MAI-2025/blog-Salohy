import 'bootstrap';
import './styles/app.scss';

// Initialisation des tooltips Bootstrap
document.addEventListener('DOMContentLoaded', () => {
	const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
});
