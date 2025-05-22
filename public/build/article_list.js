"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["article_list"],{

/***/ "./assets/article_list.js":
/*!********************************!*\
  !*** ./assets/article_list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.symbol.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.symbol.description.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.concat.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.array.join.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.object.to-string.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/es.string.trim.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.dom-collections.for-each.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'core-js/modules/web.timers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);










jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  var $searchInput = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search-article');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#search-results');
  var searchTimeout;
  $searchInput.on('input', function () {
    var query = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).val().trim();
    clearTimeout(searchTimeout);
    if (query.length < 2) {
      $searchResults.removeClass('show').html('');
      return;
    }
    searchTimeout = setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default().ajax({
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
              html += "\n                                <div class=\"dropdown-item search-item\" data-type=\"article\" data-id=\"".concat(article.id, "\" style=\"cursor:pointer;\">\n                                    <strong>").concat(article.title, "</strong><br>\n                                    <small>").concat(article.categories.join(', '), "</small>\n                                </div>\n                            ");
            });
          }
          if (response.categories.length > 0) {
            html += '<h6 class="dropdown-header mt-2">Categories</h6>';
            response.categories.forEach(function (category) {
              html += "\n                                <div class=\"dropdown-item search-item\" data-type=\"category\" data-id=\"".concat(category.id, "\" style=\"cursor:pointer;\">\n                                    <strong>").concat(category.title, "</strong><br>\n                                    <small>").concat(category.description, "</small>\n                                </div>\n                            ");
            });
          }
          if (html === '') {
            html = '<div class="dropdown-item text-muted">No results found</div>';
          }
          $searchResults.html(html).addClass('show').css('display', 'block');
        }
      });
    }, 300);
  });

  // Navigation selon le type (article ou category)
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', '.search-item', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('id');
    var type = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).data('type');
    if (id && type) {
      if (type === 'article') {
        window.location.href = "/article/".concat(id);
      } else if (type === 'category') {
        window.location.href = "/category/".concat(id);
      }
    }
  });

  // Fermer la recherche si on clique ailleurs
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).on('click', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.target).closest('.search-container').length) {
      $searchResults.removeClass('show').hide();
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/article_list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFO01BQ1osSUFBSUEsSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUNwQkMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksZUFBQVosTUFBQSxDQUFlQyxFQUFFLENBQUU7TUFDM0MsQ0FBQyxNQUFNLElBQUlRLElBQUksS0FBSyxVQUFVLEVBQUU7UUFDNUJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLGdCQUFBWixNQUFBLENBQWdCQyxFQUFFLENBQUU7TUFDNUM7SUFDSjtFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBM0IsNkNBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVWlDLENBQUMsRUFBRTtJQUNqQyxJQUFJLENBQUN2Qyw2Q0FBQyxDQUFDdUMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM5QixNQUFNLEVBQUU7TUFDbERQLGNBQWMsQ0FBQ1EsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEIsSUFBSSxDQUFDLENBQUM7SUFDN0M7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXJ0aWNsZV9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCAkc2VhcmNoSW5wdXQgPSAkKCcjc2VhcmNoLWFydGljbGUnKTtcclxuICAgIGNvbnN0ICRzZWFyY2hSZXN1bHRzID0gJCgnI3NlYXJjaC1yZXN1bHRzJyk7XHJcbiAgICBsZXQgc2VhcmNoVGltZW91dDtcclxuXHJcbiAgICAkc2VhcmNoSW5wdXQub24oJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJCh0aGlzKS52YWwoKS50cmltKCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHNlYXJjaFRpbWVvdXQpO1xyXG5cclxuICAgICAgICBpZiAocXVlcnkubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAkc2VhcmNoUmVzdWx0cy5yZW1vdmVDbGFzcygnc2hvdycpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL3NlYXJjaCcsIFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgcTogcXVlcnkgfSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYXJ0aWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9ICc8aDYgY2xhc3M9XCJkcm9wZG93bi1oZWFkZXJcIj5BcnRpY2xlczwvaDY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuYXJ0aWNsZXMuZm9yRWFjaChhcnRpY2xlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHNlYXJjaC1pdGVtXCIgZGF0YS10eXBlPVwiYXJ0aWNsZVwiIGRhdGEtaWQ9XCIke2FydGljbGUuaWR9XCIgc3R5bGU9XCJjdXJzb3I6cG9pbnRlcjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ke2FydGljbGUudGl0bGV9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHthcnRpY2xlLmNhdGVnb3JpZXMuam9pbignLCAnKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gJzxoNiBjbGFzcz1cImRyb3Bkb3duLWhlYWRlciBtdC0yXCI+Q2F0ZWdvcmllczwvaDY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHNlYXJjaC1pdGVtXCIgZGF0YS10eXBlPVwiY2F0ZWdvcnlcIiBkYXRhLWlkPVwiJHtjYXRlZ29yeS5pZH1cIiBzdHlsZT1cImN1cnNvcjpwb2ludGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7Y2F0ZWdvcnkudGl0bGV9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHtjYXRlZ29yeS5kZXNjcmlwdGlvbn08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiZHJvcGRvd24taXRlbSB0ZXh0LW11dGVkXCI+Tm8gcmVzdWx0cyBmb3VuZDwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2VhcmNoUmVzdWx0cy5odG1sKGh0bWwpLmFkZENsYXNzKCdzaG93JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBOYXZpZ2F0aW9uIHNlbG9uIGxlIHR5cGUgKGFydGljbGUgb3UgY2F0ZWdvcnkpXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlYXJjaC1pdGVtJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3R5cGUnKTtcclxuICAgICAgICBpZiAoaWQgJiYgdHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2FydGljbGUnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZS8ke2lkfWA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NhdGVnb3J5Jykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2NhdGVnb3J5LyR7aWR9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZlcm1lciBsYSByZWNoZXJjaGUgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnNlYXJjaC1jb250YWluZXInKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJHNlYXJjaFJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCIkc2VhcmNoSW5wdXQiLCIkc2VhcmNoUmVzdWx0cyIsInNlYXJjaFRpbWVvdXQiLCJvbiIsInF1ZXJ5IiwidmFsIiwidHJpbSIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInNldFRpbWVvdXQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInEiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImFydGljbGVzIiwiZm9yRWFjaCIsImFydGljbGUiLCJjb25jYXQiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcmllcyIsImpvaW4iLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiYWRkQ2xhc3MiLCJjc3MiLCJ0eXBlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJoaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==