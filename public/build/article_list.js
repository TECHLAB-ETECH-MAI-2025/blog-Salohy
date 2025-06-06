"use strict";
(self["webpackChunkblog_symfony"] = self["webpackChunkblog_symfony"] || []).push([["article_list"],{

/***/ "./assets/article_list.js":
/*!********************************!*\
  !*** ./assets/article_list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);










jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).ready(function () {
  var $searchInput = jquery__WEBPACK_IMPORTED_MODULE_9___default()('#search-article');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_9___default()('#search-results');
  var searchTimeout;
  $searchInput.on('input', function () {
    var query = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).val().trim();
    clearTimeout(searchTimeout);
    if (query.length < 2) {
      $searchResults.removeClass('show').html('');
      return;
    }
    searchTimeout = setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_9___default().ajax({
        url: '/api/search',
        method: 'GET',
        data: {
          q: query
        },
        dataType: 'json',
        success: function success(response) {
          var html = '';
          if (response.articles.length > 0) {
            html += '<h6 class="dropdown-header">Articles</h6>';
            response.articles.forEach(function (article) {
              html += "\n                                <div class=\"dropdown-item search-item\" data-type=\"article\" data-id=\"".concat(article.id, "\">\n                                    <strong>").concat(article.title, "</strong><br>\n                                    <small>").concat(article.categories.join(', '), "</small>\n                                </div>\n                            ");
            });
          }
          if (response.categories.length > 0) {
            html += '<h6 class="dropdown-header mt-2">Categories</h6>';
            response.categories.forEach(function (category) {
              html += "\n                                <div class=\"dropdown-item search-item\" data-type=\"category\" data-id=\"".concat(category.id, "\">\n                                    <strong>").concat(category.title, "</strong><br>\n                                    <small>").concat(category.description, "</small>\n                                </div>\n                            ");
            });
          }
          if (!html) {
            html = '<div class="dropdown-item text-muted">No results found</div>';
          }
          $searchResults.html(html).addClass('show').css('display', 'block');
        }
      });
    }, 300);
  });

  // Clic sur un élément
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('click', '.search-item', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).data('id');
    var type = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).data('type');
    if (type === 'article') {
      window.location.href = "/article/".concat(id);
    } else if (type === 'category') {
      window.location.href = "/category/".concat(id);
    }
  });

  // Cacher le dropdown quand on clique ailleurs
  jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('click', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_9___default()(e.target).closest('.search-container').length) {
      $searchResults.removeClass('show').hide();
    }
  });
});
// Système de notation
jquery__WEBPACK_IMPORTED_MODULE_9___default()(document).on('click', '.rating-star', function () {
  var articleId = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).data('article-id');
  var rating = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this).data('rating');
  jquery__WEBPACK_IMPORTED_MODULE_9___default().ajax({
    url: "/article/".concat(articleId, "/rate"),
    method: 'POST',
    data: {
      rating: rating
    },
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    success: function success(data) {
      jquery__WEBPACK_IMPORTED_MODULE_9___default()('.rating-message').text(data.message).fadeIn().delay(1500).fadeOut();
      if (data.average) {
        jquery__WEBPACK_IMPORTED_MODULE_9___default()('.average-rating').text("Average: ".concat(data.average, "/5"));
      }
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_arra-55ee79","vendors-node_modules_jquery_dist_jquery_js-node_modules_core-js_internals_object-create_js-no-4cf300","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-45e052"], () => (__webpack_exec__("./assets/article_list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBRTtNQUNyQmxCLDZDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzhDLElBQUksQ0FBQzVCLElBQUksQ0FBQzZCLE9BQU8sQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDO01BQ3RFLElBQUloQyxJQUFJLENBQUNpQyxPQUFPLEVBQUU7UUFDZG5ELDZDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQzhDLElBQUksYUFBQXBCLE1BQUEsQ0FBYVIsSUFBSSxDQUFDaUMsT0FBTyxPQUFJLENBQUM7TUFDM0Q7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctc3ltZm9ueS8uL2Fzc2V0cy9hcnRpY2xlX2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0ICRzZWFyY2hJbnB1dCA9ICQoJyNzZWFyY2gtYXJ0aWNsZScpO1xyXG4gICAgY29uc3QgJHNlYXJjaFJlc3VsdHMgPSAkKCcjc2VhcmNoLXJlc3VsdHMnKTtcclxuICAgIGxldCBzZWFyY2hUaW1lb3V0O1xyXG5cclxuICAgICRzZWFyY2hJbnB1dC5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKHRoaXMpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dCk7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICRzZWFyY2hSZXN1bHRzLnJlbW92ZUNsYXNzKCdzaG93JykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvc2VhcmNoJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHE6IHF1ZXJ5IH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFydGljbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPGg2IGNsYXNzPVwiZHJvcGRvd24taGVhZGVyXCI+QXJ0aWNsZXM8L2g2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24taXRlbSBzZWFyY2gtaXRlbVwiIGRhdGEtdHlwZT1cImFydGljbGVcIiBkYXRhLWlkPVwiJHthcnRpY2xlLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7YXJ0aWNsZS50aXRsZX08L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke2FydGljbGUuY2F0ZWdvcmllcy5qb2luKCcsICcpfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSAnPGg2IGNsYXNzPVwiZHJvcGRvd24taGVhZGVyIG10LTJcIj5DYXRlZ29yaWVzPC9oNj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5jYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gc2VhcmNoLWl0ZW1cIiBkYXRhLXR5cGU9XCJjYXRlZ29yeVwiIGRhdGEtaWQ9XCIke2NhdGVnb3J5LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7Y2F0ZWdvcnkudGl0bGV9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtjYXRlZ29yeS5kZXNjcmlwdGlvbn08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd24taXRlbSB0ZXh0LW11dGVkXCI+Tm8gcmVzdWx0cyBmb3VuZDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2VhcmNoUmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChodG1sKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3Nob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGljIHN1ciB1biDDqWzDqW1lbnRcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2VhcmNoLWl0ZW0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2FydGljbGUnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9hcnRpY2xlLyR7aWR9YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjYXRlZ29yeScpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2NhdGVnb3J5LyR7aWR9YDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWNoZXIgbGUgZHJvcGRvd24gcXVhbmQgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnNlYXJjaC1jb250YWluZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJHNlYXJjaFJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4vLyBTeXN0w6htZSBkZSBub3RhdGlvblxyXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJhdGluZy1zdGFyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYXJ0aWNsZUlkID0gJCh0aGlzKS5kYXRhKCdhcnRpY2xlLWlkJyk7XHJcbiAgICBjb25zdCByYXRpbmcgPSAkKHRoaXMpLmRhdGEoJ3JhdGluZycpO1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsOiBgL2FydGljbGUvJHthcnRpY2xlSWR9L3JhdGVgLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGRhdGE6IHsgcmF0aW5nOiByYXRpbmcgfSxcclxuICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICQoJy5yYXRpbmctbWVzc2FnZScpLnRleHQoZGF0YS5tZXNzYWdlKS5mYWRlSW4oKS5kZWxheSgxNTAwKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmF2ZXJhZ2UpIHtcclxuICAgICAgICAgICAgICAgICQoJy5hdmVyYWdlLXJhdGluZycpLnRleHQoYEF2ZXJhZ2U6ICR7ZGF0YS5hdmVyYWdlfS81YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkc2VhcmNoSW5wdXQiLCIkc2VhcmNoUmVzdWx0cyIsInNlYXJjaFRpbWVvdXQiLCJvbiIsInF1ZXJ5IiwidmFsIiwidHJpbSIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInNldFRpbWVvdXQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImFydGljbGVzIiwiZm9yRWFjaCIsImFydGljbGUiLCJjb25jYXQiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImpvaW4iLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiYWRkQ2xhc3MiLCJjc3MiLCJ0eXBlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJoaWRlIiwiYXJ0aWNsZUlkIiwicmF0aW5nIiwiaGVhZGVycyIsInRleHQiLCJtZXNzYWdlIiwiZmFkZUluIiwiZGVsYXkiLCJmYWRlT3V0IiwiYXZlcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=