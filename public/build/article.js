"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["article"],{

/***/ "./assets/article.js":
/*!***************************!*\
  !*** ./assets/article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.find.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.object.to-string.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.timers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



// assets/article.js

jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  // Système de commentaires en AJAX
  var $commentForm = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#comment-form');
  var $commentsList = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#comments-list');
  var $commentsCount = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#comments-count');
  $commentForm.on('submit', function (e) {
    e.preventDefault();
    var $submitBtn = $commentForm.find('button[type="submit"]');
    var originalBtnText = $submitBtn.html();

    // Désactiver le bouton et afficher un indicateur de chargement
    $submitBtn.html('Envoi en cours...').prop('disabled', true);
    jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax({
      url: $commentForm.attr('action'),
      method: 'POST',
      data: $commentForm.serialize(),
      dataType: 'json',
      success: function success(response) {
        if (response.success) {
          // Ajouter le nouveau commentaire à la liste
          $commentsList.prepend(response.commentHtml);

          // Mettre à jour le compteur de commentaires
          $commentsCount.text(response.commentsCount);

          // Réinitialiser le formulaire
          $commentForm[0].reset();

          // Afficher un message de succès
          showAlert('success', 'Votre commentaire a été publié avec succès !');
        } else {
          showAlert('danger', response.error || "Une erreur est survenue lors de l'envoi du commentaire");
        }
      },
      error: function error() {
        showAlert('danger', 'Une erreur est survenue lors de l\'envoi du commentaire.');
      },
      complete: function complete() {
        // Réactiver le bouton
        $submitBtn.html(originalBtnText).prop('disabled', false);
      }
    });
  });

  // Système de "j'aime" en AJAX
  var $likeButton = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.like-button');
  var articleId = $likeButton.data('article-id');
  $likeButton.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax({
      url: "/article/".concat(articleId, "/like"),
      method: 'POST',
      dataType: 'json',
      success: function success(response) {
        if (response.success) {
          // Mettre à jour l'état du bouton
          $likeButton.toggleClass('liked', response.liked);

          // Mettre à jour le compteur de likes
          jquery__WEBPACK_IMPORTED_MODULE_1___default()('#likes-count').text(response.likesCount);
        }
      }
    });
  });

  // Fonction pour afficher des alertes
  function showAlert(type, message) {
    var $alert = jquery__WEBPACK_IMPORTED_MODULE_1___default()("\n\t\t\t\t\t".concat(message, "\n\n\t\t\t\t"));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#alerts-container').append($alert);

    // Faire disparaître l'alerte après 5 secondes
    setTimeout(function () {
      $alert.alert('close');
    }, 5000);
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/article.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQzs7RUFFRjtFQUNBLFNBQVNSLFNBQVNBLENBQUNTLElBQUksRUFBRUMsT0FBTyxFQUFFO0lBQ2pDLElBQU1DLE1BQU0sR0FBR3ZDLDZDQUFDLGdCQUFBaUMsTUFBQSxDQUNiSyxPQUFPLGlCQUVULENBQUM7SUFFRnRDLDZDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3dDLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDOztJQUVyQztJQUNBRSxVQUFVLENBQUMsWUFBTTtNQUNoQkYsTUFBTSxDQUFDRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDVDtBQUNELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcnRpY2xlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9hcnRpY2xlLmpzXHJcblx0XHRpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBTeXN0w6htZSBkZSBjb21tZW50YWlyZXMgZW4gQUpBWFxyXG5cdFx0XHRjb25zdCAkY29tbWVudEZvcm0gPSAkKCcjY29tbWVudC1mb3JtJyk7XHJcblx0XHRcdGNvbnN0ICRjb21tZW50c0xpc3QgPSAkKCcjY29tbWVudHMtbGlzdCcpO1xyXG5cdFx0XHRjb25zdCAkY29tbWVudHNDb3VudCA9ICQoJyNjb21tZW50cy1jb3VudCcpO1xyXG5cclxuXHRcdFx0JGNvbW1lbnRGb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRjb25zdCAkc3VibWl0QnRuID0gJGNvbW1lbnRGb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XHJcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxCdG5UZXh0ID0gJHN1Ym1pdEJ0bi5odG1sKCk7XHJcblxyXG5cdFx0XHRcdC8vIETDqXNhY3RpdmVyIGxlIGJvdXRvbiBldCBhZmZpY2hlciB1biBpbmRpY2F0ZXVyIGRlIGNoYXJnZW1lbnRcclxuXHRcdFx0XHQkc3VibWl0QnRuLmh0bWwoJ0Vudm9pIGVuIGNvdXJzLi4uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdHVybDogJGNvbW1lbnRGb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhOiAkY29tbWVudEZvcm0uc2VyaWFsaXplKCksXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBBam91dGVyIGxlIG5vdXZlYXUgY29tbWVudGFpcmUgw6AgbGEgbGlzdGVcclxuXHRcdFx0XHRcdFx0XHQkY29tbWVudHNMaXN0LnByZXBlbmQocmVzcG9uc2UuY29tbWVudEh0bWwpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBNZXR0cmUgw6Agam91ciBsZSBjb21wdGV1ciBkZSBjb21tZW50YWlyZXNcclxuXHRcdFx0XHRcdFx0XHQkY29tbWVudHNDb3VudC50ZXh0KHJlc3BvbnNlLmNvbW1lbnRzQ291bnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBSw6lpbml0aWFsaXNlciBsZSBmb3JtdWxhaXJlXHJcblx0XHRcdFx0XHRcdFx0JGNvbW1lbnRGb3JtWzBdLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIEFmZmljaGVyIHVuIG1lc3NhZ2UgZGUgc3VjY8Ooc1xyXG5cdFx0XHRcdFx0XHRcdHNob3dBbGVydCgnc3VjY2VzcycsICdWb3RyZSBjb21tZW50YWlyZSBhIMOpdMOpIHB1Ymxpw6kgYXZlYyBzdWNjw6hzICEnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBbGVydCgnZGFuZ2VyJywgcmVzcG9uc2UuZXJyb3IgfHwgYFVuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGxvcnMgZGUgbCdlbnZvaSBkdSBjb21tZW50YWlyZWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0c2hvd0FsZXJ0KCdkYW5nZXInLCAnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsXFwnZW52b2kgZHUgY29tbWVudGFpcmUuJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBSw6lhY3RpdmVyIGxlIGJvdXRvblxyXG5cdFx0XHRcdFx0XHQkc3VibWl0QnRuLmh0bWwob3JpZ2luYWxCdG5UZXh0KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBTeXN0w6htZSBkZSBcImonYWltZVwiIGVuIEFKQVhcclxuXHRcdFx0Y29uc3QgJGxpa2VCdXR0b24gPSAkKCcubGlrZS1idXR0b24nKTtcclxuXHRcdFx0Y29uc3QgYXJ0aWNsZUlkID0gJGxpa2VCdXR0b24uZGF0YSgnYXJ0aWNsZS1pZCcpO1xyXG5cclxuXHRcdFx0JGxpa2VCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdHVybDogYC9hcnRpY2xlLyR7YXJ0aWNsZUlkfS9saWtlYCxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gTWV0dHJlIMOgIGpvdXIgbCfDqXRhdCBkdSBib3V0b25cclxuXHRcdFx0XHRcdFx0XHQkbGlrZUJ1dHRvbi50b2dnbGVDbGFzcygnbGlrZWQnLCByZXNwb25zZS5saWtlZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbXB0ZXVyIGRlIGxpa2VzXHJcblx0XHRcdFx0XHRcdFx0JCgnI2xpa2VzLWNvdW50JykudGV4dChyZXNwb25zZS5saWtlc0NvdW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgZGVzIGFsZXJ0ZXNcclxuXHRcdFx0ZnVuY3Rpb24gc2hvd0FsZXJ0KHR5cGUsIG1lc3NhZ2UpIHtcclxuXHRcdFx0XHRjb25zdCAkYWxlcnQgPSAkKGBcclxuXHRcdFx0XHRcdCR7bWVzc2FnZX1cclxuXHJcblx0XHRcdFx0YCk7XHJcblxyXG5cdFx0XHRcdCQoJyNhbGVydHMtY29udGFpbmVyJykuYXBwZW5kKCRhbGVydCk7XHJcblxyXG5cdFx0XHRcdC8vIEZhaXJlIGRpc3BhcmHDrnRyZSBsJ2FsZXJ0ZSBhcHLDqHMgNSBzZWNvbmRlc1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0JGFsZXJ0LmFsZXJ0KCdjbG9zZScpO1xyXG5cdFx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkY29tbWVudEZvcm0iLCIkY29tbWVudHNMaXN0IiwiJGNvbW1lbnRzQ291bnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiRzdWJtaXRCdG4iLCJmaW5kIiwib3JpZ2luYWxCdG5UZXh0IiwiaHRtbCIsInByb3AiLCJhamF4IiwidXJsIiwiYXR0ciIsIm1ldGhvZCIsImRhdGEiLCJzZXJpYWxpemUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInByZXBlbmQiLCJjb21tZW50SHRtbCIsInRleHQiLCJjb21tZW50c0NvdW50IiwicmVzZXQiLCJzaG93QWxlcnQiLCJlcnJvciIsImNvbXBsZXRlIiwiJGxpa2VCdXR0b24iLCJhcnRpY2xlSWQiLCJjb25jYXQiLCJ0b2dnbGVDbGFzcyIsImxpa2VkIiwibGlrZXNDb3VudCIsInR5cGUiLCJtZXNzYWdlIiwiJGFsZXJ0IiwiYXBwZW5kIiwic2V0VGltZW91dCIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==