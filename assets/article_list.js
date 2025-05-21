import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';

$(document).ready(function () {
    const $searchInput = $('#search-article');
    const $searchResults = $('#search-results');
    let searchTimeout;

    $searchInput.on('input', function () {
        const query = $(this).val().trim();
        clearTimeout(searchTimeout);

        if (query.length < 2) {
            $searchResults.removeClass('show').html('');
            return;
        }

        searchTimeout = setTimeout(() => {
            $.ajax({
                url: '/api/articles/search',
                method: 'GET',
                data: { q: query },
                dataType: 'json',
                success: function (response) {
                    if (response.results && response.results.length > 0) {
                        let html = '';

                        response.results.forEach(article => {
                            html += `
                                <div class="dropdown-item search-item" data-id="${article.id}" style="cursor: pointer;">
                                    <strong>${article.title}</strong><br>
                                    <small>${article.categories.join(', ')}</small>
                                </div>
                            `;
                        });

                        $searchResults
                            .html(html)
                            .addClass('show')
                            .css('display', 'block'); // Forcer l'affichage
                    } else {
                        $searchResults
                            .html('<div class="dropdown-item text-muted">No results found</div>')
                            .addClass('show')
                            .css('display', 'block');
                    }
                }
            });
        }, 300);
    });

    // Clic sur un résultat
    $(document).on('click', '.search-item', function () {
        const articleId = $(this).data('id');
        if (articleId) {
            window.location.href = `/article/${articleId}`;
        }
    });

    // Cacher résultats si clic hors
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-container').length) {
            $searchResults.removeClass('show').hide();
        }
    });
});
