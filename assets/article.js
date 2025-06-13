import $ from 'jquery';

$(document).ready(function() {
	// Système de commentaires en AJAX
	const $commentForm = $('#comment-form');
	const $commentsList = $('#comments-list');
	const $commentsCount = $('#comments-count');

	$commentForm.on('submit', function(e) {
		e.preventDefault();

		const $submitBtn = $commentForm.find('button[type="submit"]');
		const originalBtnText = $submitBtn.html();

		// Désactiver le bouton et afficher un indicateur de chargement
		$submitBtn.html('Envoi en cours...').prop('disabled', true);

		$.ajax({
			url: $commentForm.attr('action'),
			method: 'POST',
			data: $commentForm.serialize(),
			dataType: 'json',
			success: function(response) {
				if (response.success) {
					
					$commentsList.prepend(response.commentHtml);
					$commentsCount.text(response.commentsCount);
					$commentForm[0].reset();

				
					showAlert('success', 'Votre commentaire a été publié avec succès !');
				} else {
					showAlert('danger', response.error || `Une erreur est survenue lors de l'envoi du commentaire`);
				}

			},
			error: function() {
				showAlert('danger', 'Une erreur est survenue lors de l\'envoi du commentaire.');
			},
			complete: function() {
				// Réactiver le bouton
				$submitBtn.html(originalBtnText).prop('disabled', false);
			}
		});
	});


	const $likeButton = $('.like-button');
	const articleId = $likeButton.data('article-id');

	$likeButton.on('click', function() {
		$.ajax({
			url: `/article/${articleId}/like`,
			method: 'POST',
			dataType: 'json',
			success: function(response) {
				if (response.success) {
					// Mettre à jour l'état du bouton
					$likeButton.toggleClass('liked', response.liked);

					// Mettre à jour le compteur de likes
					$('#likes-count').text(response.likesCount);
				}
			}
		});
	});


	function showAlert(type, message) {
		const $alert = $(`
			${message}

		`);

		$('#alerts-container').append($alert);

		
		setTimeout(() => {
			$alert.alert('close');
		}, 5000);
	}
});