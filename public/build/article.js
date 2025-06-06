"use strict";
(self["webpackChunkblog_symfony"] = self["webpackChunkblog_symfony"] || []).push([["article"],{

/***/ "./assets/article.js":
/*!***************************!*\
  !*** ./assets/article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);



// assets/article.js

jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
  // Système de commentaires en AJAX
  var $commentForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#comment-form');
  var $commentsList = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#comments-list');
  var $commentsCount = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#comments-count');
  $commentForm.on('submit', function (e) {
    e.preventDefault();
    var $submitBtn = $commentForm.find('button[type="submit"]');
    var originalBtnText = $submitBtn.html();

    // Désactiver le bouton et afficher un indicateur de chargement
    $submitBtn.html('Envoi en cours...').prop('disabled', true);
    jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
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
  var $likeButton = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.like-button');
  var articleId = $likeButton.data('article-id');
  $likeButton.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
      url: "/article/".concat(articleId, "/like"),
      method: 'POST',
      dataType: 'json',
      success: function success(response) {
        if (response.success) {
          // Mettre à jour l'état du bouton
          $likeButton.toggleClass('liked', response.liked);

          // Mettre à jour le compteur de likes
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#likes-count').text(response.likesCount);
        }
      }
    });
  });
  function showAlert(type, message) {
    var $alert = jquery__WEBPACK_IMPORTED_MODULE_3___default()("\n\t\t\t\t\t".concat(message, "\n\n\t\t\t\t"));
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#alerts-container').append($alert);
    setTimeout(function () {
      $alert.alert('close');
    }, 5000);
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] === undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-55ee79","vendors-node_modules_jquery_dist_jquery_js-node_modules_core-js_internals_object-create_js-no-4cf300"], () => (__webpack_exec__("./assets/article.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aWNsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5QjtBQUV2QkEsNkNBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFXO0VBQzVCO0VBQ0EsSUFBTUMsWUFBWSxHQUFHSCw2Q0FBQyxDQUFDLGVBQWUsQ0FBQztFQUN2QyxJQUFNSSxhQUFhLEdBQUdKLDZDQUFDLENBQUMsZ0JBQWdCLENBQUM7RUFDekMsSUFBTUssY0FBYyxHQUFHTCw2Q0FBQyxDQUFDLGlCQUFpQixDQUFDO0VBRTNDRyxZQUFZLENBQUNHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO0lBQ3JDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRWxCLElBQU1DLFVBQVUsR0FBR04sWUFBWSxDQUFDTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDN0QsSUFBTUMsZUFBZSxHQUFHRixVQUFVLENBQUNHLElBQUksQ0FBQyxDQUFDOztJQUV6QztJQUNBSCxVQUFVLENBQUNHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztJQUUzRGIsa0RBQU0sQ0FBQztNQUNOZSxHQUFHLEVBQUVaLFlBQVksQ0FBQ2EsSUFBSSxDQUFDLFFBQVEsQ0FBQztNQUNoQ0MsTUFBTSxFQUFFLE1BQU07TUFDZEMsSUFBSSxFQUFFZixZQUFZLENBQUNnQixTQUFTLENBQUMsQ0FBQztNQUM5QkMsUUFBUSxFQUFFLE1BQU07TUFDaEJDLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFXQyxRQUFRLEVBQUU7UUFDM0IsSUFBSUEsUUFBUSxDQUFDRCxPQUFPLEVBQUU7VUFFckJqQixhQUFhLENBQUNtQixPQUFPLENBQUNELFFBQVEsQ0FBQ0UsV0FBVyxDQUFDO1VBQzNDbkIsY0FBYyxDQUFDb0IsSUFBSSxDQUFDSCxRQUFRLENBQUNJLGFBQWEsQ0FBQztVQUMzQ3ZCLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO1VBR3ZCQyxTQUFTLENBQUMsU0FBUyxFQUFFLDhDQUE4QyxDQUFDO1FBQ3JFLENBQUMsTUFBTTtVQUNlQSxTQUFTLENBQUMsUUFBUSxFQUFFTixRQUFRLENBQUNPLEtBQUssNERBQTRELENBQUM7UUFDbkc7TUFFbkIsQ0FBQztNQUNEQSxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBQSxFQUFhO1FBQ2pCRCxTQUFTLENBQUMsUUFBUSxFQUFFLDBEQUEwRCxDQUFDO01BQ2hGLENBQUM7TUFDREUsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUEsRUFBYTtRQUNwQjtRQUNBckIsVUFBVSxDQUFDRyxJQUFJLENBQUNELGVBQWUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztNQUN6RDtJQUNELENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztFQUdGLElBQU1rQixXQUFXLEdBQUcvQiw2Q0FBQyxDQUFDLGNBQWMsQ0FBQztFQUNyQyxJQUFNZ0MsU0FBUyxHQUFHRCxXQUFXLENBQUNiLElBQUksQ0FBQyxZQUFZLENBQUM7RUFFaERhLFdBQVcsQ0FBQ3pCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUNsQ04sa0RBQU0sQ0FBQztNQUNOZSxHQUFHLGNBQUFrQixNQUFBLENBQWNELFNBQVMsVUFBTztNQUNqQ2YsTUFBTSxFQUFFLE1BQU07TUFDZEcsUUFBUSxFQUFFLE1BQU07TUFDaEJDLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFXQyxRQUFRLEVBQUU7UUFDM0IsSUFBSUEsUUFBUSxDQUFDRCxPQUFPLEVBQUU7VUFDckI7VUFDQVUsV0FBVyxDQUFDRyxXQUFXLENBQUMsT0FBTyxFQUFFWixRQUFRLENBQUNhLEtBQUssQ0FBQzs7VUFFaEQ7VUFDQW5DLDZDQUFDLENBQUMsY0FBYyxDQUFDLENBQUN5QixJQUFJLENBQUNILFFBQVEsQ0FBQ2MsVUFBVSxDQUFDO1FBQzVDO01BQ0Q7SUFDRCxDQUFDLENBQUM7RUFDSCxDQUFDLENBQUM7RUFHRixTQUFTUixTQUFTQSxDQUFDUyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtJQUNqQyxJQUFNQyxNQUFNLEdBQUd2Qyw2Q0FBQyxnQkFBQWlDLE1BQUEsQ0FDYkssT0FBTyxpQkFFVCxDQUFDO0lBRUZ0Qyw2Q0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUN3QyxNQUFNLENBQUNELE1BQU0sQ0FBQztJQUdyQ0UsVUFBVSxDQUFDLFlBQU07TUFDaEJGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1Q7QUFDRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNsRlM7QUFDYixzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDOUQsYUFBYSxtQkFBTyxDQUFDLHFGQUE0QjtBQUNqRCxxQkFBcUIsZ0lBQWdEOztBQUVyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFlBQVkscUhBQTRDO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjs7QUFFbkU7QUFDQTtBQUNBLElBQUksbURBQW1EO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3ltZm9ueS8uL2Fzc2V0cy9hcnRpY2xlLmpzIiwid2VicGFjazovL2Jsb2ctc3ltZm9ueS8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vYmxvZy1zeW1mb255Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFzc2V0cy9hcnRpY2xlLmpzXHJcblx0XHRpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQvLyBTeXN0w6htZSBkZSBjb21tZW50YWlyZXMgZW4gQUpBWFxyXG5cdFx0XHRjb25zdCAkY29tbWVudEZvcm0gPSAkKCcjY29tbWVudC1mb3JtJyk7XHJcblx0XHRcdGNvbnN0ICRjb21tZW50c0xpc3QgPSAkKCcjY29tbWVudHMtbGlzdCcpO1xyXG5cdFx0XHRjb25zdCAkY29tbWVudHNDb3VudCA9ICQoJyNjb21tZW50cy1jb3VudCcpO1xyXG5cclxuXHRcdFx0JGNvbW1lbnRGb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRjb25zdCAkc3VibWl0QnRuID0gJGNvbW1lbnRGb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XHJcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxCdG5UZXh0ID0gJHN1Ym1pdEJ0bi5odG1sKCk7XHJcblxyXG5cdFx0XHRcdC8vIETDqXNhY3RpdmVyIGxlIGJvdXRvbiBldCBhZmZpY2hlciB1biBpbmRpY2F0ZXVyIGRlIGNoYXJnZW1lbnRcclxuXHRcdFx0XHQkc3VibWl0QnRuLmh0bWwoJ0Vudm9pIGVuIGNvdXJzLi4uJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdHVybDogJGNvbW1lbnRGb3JtLmF0dHIoJ2FjdGlvbicpLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdFx0XHRkYXRhOiAkY29tbWVudEZvcm0uc2VyaWFsaXplKCksXHJcblx0XHRcdFx0XHRkYXRhVHlwZTogJ2pzb24nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQkY29tbWVudHNMaXN0LnByZXBlbmQocmVzcG9uc2UuY29tbWVudEh0bWwpO1xyXG5cdFx0XHRcdFx0XHRcdCRjb21tZW50c0NvdW50LnRleHQocmVzcG9uc2UuY29tbWVudHNDb3VudCk7XHJcblx0XHRcdFx0XHRcdFx0JGNvbW1lbnRGb3JtWzBdLnJlc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRzaG93QWxlcnQoJ3N1Y2Nlc3MnLCAnVm90cmUgY29tbWVudGFpcmUgYSDDqXTDqSBwdWJsacOpIGF2ZWMgc3VjY8OocyAhJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QWxlcnQoJ2RhbmdlcicsIHJlc3BvbnNlLmVycm9yIHx8IGBVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZSBsb3JzIGRlIGwnZW52b2kgZHUgY29tbWVudGFpcmVgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHNob3dBbGVydCgnZGFuZ2VyJywgJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGxvcnMgZGUgbFxcJ2Vudm9pIGR1IGNvbW1lbnRhaXJlLicpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUsOpYWN0aXZlciBsZSBib3V0b25cclxuXHRcdFx0XHRcdFx0JHN1Ym1pdEJ0bi5odG1sKG9yaWdpbmFsQnRuVGV4dCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcclxuXHRcdFx0Y29uc3QgJGxpa2VCdXR0b24gPSAkKCcubGlrZS1idXR0b24nKTtcclxuXHRcdFx0Y29uc3QgYXJ0aWNsZUlkID0gJGxpa2VCdXR0b24uZGF0YSgnYXJ0aWNsZS1pZCcpO1xyXG5cclxuXHRcdFx0JGxpa2VCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdHVybDogYC9hcnRpY2xlLyR7YXJ0aWNsZUlkfS9saWtlYCxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gTWV0dHJlIMOgIGpvdXIgbCfDqXRhdCBkdSBib3V0b25cclxuXHRcdFx0XHRcdFx0XHQkbGlrZUJ1dHRvbi50b2dnbGVDbGFzcygnbGlrZWQnLCByZXNwb25zZS5saWtlZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbXB0ZXVyIGRlIGxpa2VzXHJcblx0XHRcdFx0XHRcdFx0JCgnI2xpa2VzLWNvdW50JykudGV4dChyZXNwb25zZS5saWtlc0NvdW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc2hvd0FsZXJ0KHR5cGUsIG1lc3NhZ2UpIHtcclxuXHRcdFx0XHRjb25zdCAkYWxlcnQgPSAkKGBcclxuXHRcdFx0XHRcdCR7bWVzc2FnZX1cclxuXHJcblx0XHRcdFx0YCk7XHJcblxyXG5cdFx0XHRcdCQoJyNhbGVydHMtY29udGFpbmVyJykuYXBwZW5kKCRhbGVydCk7XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0JGFsZXJ0LmFsZXJ0KCdjbG9zZScpO1xyXG5cdFx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTsiLCIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eShBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maW5kO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbnZhciBGSU5EID0gJ2ZpbmQnO1xudmFyIFNLSVBTX0hPTEVTID0gdHJ1ZTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZmluZCAtLSB0ZXN0aW5nXG5pZiAoRklORCBpbiBbXSkgQXJyYXkoMSlbRklORF0oZnVuY3Rpb24gKCkgeyBTS0lQU19IT0xFUyA9IGZhbHNlOyB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFNLSVBTX0hPTEVTIH0sIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkQpO1xuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiJGNvbW1lbnRGb3JtIiwiJGNvbW1lbnRzTGlzdCIsIiRjb21tZW50c0NvdW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkc3VibWl0QnRuIiwiZmluZCIsIm9yaWdpbmFsQnRuVGV4dCIsImh0bWwiLCJwcm9wIiwiYWpheCIsInVybCIsImF0dHIiLCJtZXRob2QiLCJkYXRhIiwic2VyaWFsaXplIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwcmVwZW5kIiwiY29tbWVudEh0bWwiLCJ0ZXh0IiwiY29tbWVudHNDb3VudCIsInJlc2V0Iiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJjb21wbGV0ZSIsIiRsaWtlQnV0dG9uIiwiYXJ0aWNsZUlkIiwiY29uY2F0IiwidG9nZ2xlQ2xhc3MiLCJsaWtlZCIsImxpa2VzQ291bnQiLCJ0eXBlIiwibWVzc2FnZSIsIiRhbGVydCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=