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
          $commentsList.prepend(response.commentHtml);
          $commentsCount.text(response.commentsCount);
          $commentForm[0].reset();
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
  function showAlert(type, message) {
    var $alert = jquery__WEBPACK_IMPORTED_MODULE_1___default()("\n\t\t\t\t\t".concat(message, "\n\n\t\t\t\t"));
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#alerts-container').append($alert);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixTQUFTUixTQUFTQSxDQUFDUyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUNqQyxJQUFNQyxNQUFNLEdBQUd2Qyw2Q0FBQyxnQkFBQWlDLE1BQUEsQ0FDYkssT0FBTyxpQkFFVCxDQUFDO0lBRUZ0Qyw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN3QyxNQUFNLENBQUNELE1BQU0sQ0FBQztJQUdyQ0UsVUFBVSxDQUFDLFlBQU07TUFDaEJGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1Q7QUFDRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXJ0aWNsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhc3NldHMvYXJ0aWNsZS5qc1xyXG5cdFx0aW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gU3lzdMOobWUgZGUgY29tbWVudGFpcmVzIGVuIEFKQVhcclxuXHRcdFx0Y29uc3QgJGNvbW1lbnRGb3JtID0gJCgnI2NvbW1lbnQtZm9ybScpO1xyXG5cdFx0XHRjb25zdCAkY29tbWVudHNMaXN0ID0gJCgnI2NvbW1lbnRzLWxpc3QnKTtcclxuXHRcdFx0Y29uc3QgJGNvbW1lbnRzQ291bnQgPSAkKCcjY29tbWVudHMtY291bnQnKTtcclxuXHJcblx0XHRcdCRjb21tZW50Rm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgJHN1Ym1pdEJ0biA9ICRjb21tZW50Rm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xyXG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsQnRuVGV4dCA9ICRzdWJtaXRCdG4uaHRtbCgpO1xyXG5cclxuXHRcdFx0XHQvLyBEw6lzYWN0aXZlciBsZSBib3V0b24gZXQgYWZmaWNoZXIgdW4gaW5kaWNhdGV1ciBkZSBjaGFyZ2VtZW50XHJcblx0XHRcdFx0JHN1Ym1pdEJ0bi5odG1sKCdFbnZvaSBlbiBjb3Vycy4uLicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR1cmw6ICRjb21tZW50Rm9ybS5hdHRyKCdhY3Rpb24nKSxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YTogJGNvbW1lbnRGb3JtLnNlcmlhbGl6ZSgpLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0JGNvbW1lbnRzTGlzdC5wcmVwZW5kKHJlc3BvbnNlLmNvbW1lbnRIdG1sKTtcclxuXHRcdFx0XHRcdFx0XHQkY29tbWVudHNDb3VudC50ZXh0KHJlc3BvbnNlLmNvbW1lbnRzQ291bnQpO1xyXG5cdFx0XHRcdFx0XHRcdCRjb21tZW50Rm9ybVswXS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2hvd0FsZXJ0KCdzdWNjZXNzJywgJ1ZvdHJlIGNvbW1lbnRhaXJlIGEgw6l0w6kgcHVibGnDqSBhdmVjIHN1Y2PDqHMgIScpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0KCdkYW5nZXInLCByZXNwb25zZS5lcnJvciB8fCBgVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsJ2Vudm9pIGR1IGNvbW1lbnRhaXJlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRzaG93QWxlcnQoJ2RhbmdlcicsICdVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBsb3JzIGRlIGxcXCdlbnZvaSBkdSBjb21tZW50YWlyZS4nKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdC8vIFLDqWFjdGl2ZXIgbGUgYm91dG9uXHJcblx0XHRcdFx0XHRcdCRzdWJtaXRCdG4uaHRtbChvcmlnaW5hbEJ0blRleHQpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHJcblx0XHRcdGNvbnN0ICRsaWtlQnV0dG9uID0gJCgnLmxpa2UtYnV0dG9uJyk7XHJcblx0XHRcdGNvbnN0IGFydGljbGVJZCA9ICRsaWtlQnV0dG9uLmRhdGEoJ2FydGljbGUtaWQnKTtcclxuXHJcblx0XHRcdCRsaWtlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR1cmw6IGAvYXJ0aWNsZS8ke2FydGljbGVJZH0vbGlrZWAsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIE1ldHRyZSDDoCBqb3VyIGwnw6l0YXQgZHUgYm91dG9uXHJcblx0XHRcdFx0XHRcdFx0JGxpa2VCdXR0b24udG9nZ2xlQ2xhc3MoJ2xpa2VkJywgcmVzcG9uc2UubGlrZWQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBNZXR0cmUgw6Agam91ciBsZSBjb21wdGV1ciBkZSBsaWtlc1xyXG5cdFx0XHRcdFx0XHRcdCQoJyNsaWtlcy1jb3VudCcpLnRleHQocmVzcG9uc2UubGlrZXNDb3VudCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNob3dBbGVydCh0eXBlLCBtZXNzYWdlKSB7XHJcblx0XHRcdFx0Y29uc3QgJGFsZXJ0ID0gJChgXHJcblx0XHRcdFx0XHQke21lc3NhZ2V9XHJcblxyXG5cdFx0XHRcdGApO1xyXG5cclxuXHRcdFx0XHQkKCcjYWxlcnRzLWNvbnRhaW5lcicpLmFwcGVuZCgkYWxlcnQpO1xyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCRhbGVydC5hbGVydCgnY2xvc2UnKTtcclxuXHRcdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGNvbW1lbnRGb3JtIiwiJGNvbW1lbnRzTGlzdCIsIiRjb21tZW50c0NvdW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkc3VibWl0QnRuIiwiZmluZCIsIm9yaWdpbmFsQnRuVGV4dCIsImh0bWwiLCJwcm9wIiwiYWpheCIsInVybCIsImF0dHIiLCJtZXRob2QiLCJkYXRhIiwic2VyaWFsaXplIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwcmVwZW5kIiwiY29tbWVudEh0bWwiLCJ0ZXh0IiwiY29tbWVudHNDb3VudCIsInJlc2V0Iiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJjb21wbGV0ZSIsIiRsaWtlQnV0dG9uIiwiYXJ0aWNsZUlkIiwiY29uY2F0IiwidG9nZ2xlQ2xhc3MiLCJsaWtlZCIsImxpa2VzQ291bnQiLCJ0eXBlIiwibWVzc2FnZSIsIiRhbGVydCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=