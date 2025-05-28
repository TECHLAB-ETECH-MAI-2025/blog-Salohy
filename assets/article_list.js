import $ from 'jquery';

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
                url: '/api/search',
                method: 'GET',
                data: { q: query },
                dataType: 'json',
                success: function (response) {
                    let html = '';

                    if (response.articles.length > 0) {
                        html += '<h6 class="dropdown-header">Articles</h6>';
                        response.articles.forEach(article => {
                            html += `
                                <div class="dropdown-item search-item" data-type="article" data-id="${article.id}">
                                    <strong>${article.title}</strong><br>
                                    <small>${article.categories.join(', ')}</small>
                                </div>
                            `;
                        });
                    }

                    if (response.categories.length > 0) {
                        html += '<h6 class="dropdown-header mt-2">Categories</h6>';
                        response.categories.forEach(category => {
                            html += `
                                <div class="dropdown-item search-item" data-type="category" data-id="${category.id}">
                                    <strong>${category.title}</strong><br>
                                    <small>${category.description}</small>
                                </div>
                            `;
                        });
                    }

                    if (!html) {
                        html = '<div class="dropdown-item text-muted">No results found</div>';
                    }

                    $searchResults
                        .html(html)
                        .addClass('show')
                        .css('display', 'block');
                }
            });
        }, 300);
    });

    // Clic sur un élément
    $(document).on('click', '.search-item', function () {
        const id = $(this).data('id');
        const type = $(this).data('type');

        if (type === 'article') {
            window.location.href = `/article/${id}`;
        } else if (type === 'category') {
            window.location.href = `/category/${id}`;
        }
    });

    // Cacher le dropdown quand on clique ailleurs
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-container').length) {
            $searchResults.removeClass('show').hide();
        }
    });
});
