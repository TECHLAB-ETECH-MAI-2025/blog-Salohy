import $ from 'jquery';

$(document).ready(function () {
    const $searchInput = $('input[name="q"]');
    const $searchResults = $('<div class="dropdown-menu show" style="position:absolute;top:100%;left:0;width:100%;z-index:1050;"></div>').insertAfter($searchInput).hide();
    let timeout;

    $searchInput.on('input', function () {
        clearTimeout(timeout);
        const query = $(this).val().trim();

        if (query.length < 2) {
            $searchResults.hide();
            return;
        }

        timeout = setTimeout(() => {
            $.get('/api/search', { q: query }, function (data) {
                let html = '';

                if (data.articles.length > 0) {
                    html += '<h6 class="dropdown-header">Articles</h6>';
                    data.articles.forEach(article => {
                        html += `<a class="dropdown-item" href="/articles/${article.id}">${article.title}</a>`;
                    });
                }

                if (data.categories.length > 0) {
                    html += '<h6 class="dropdown-header">Categories</h6>';
                    data.categories.forEach(cat => {
                        html += `<a class="dropdown-item" href="/category/${cat.id}">${cat.title}</a>`;
                    });
                }

                $searchResults.html(html).show();
            });
        }, 300);
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-container').length) {
            $searchResults.hide();
        }
    });
});
$(document).on('click', '.rating-star', function () {
    const articleId = $('#rating-stars').data('article-id');
    const rating = $(this).data('rating');

    $.post(`/article/${articleId}/rate`, { rating: rating }, function (data) {
        $('.rating-message').text(data.message).fadeIn().delay(1500).fadeOut();
        if (data.average) {
            $('.average-rating').text(`(${data.average.toFixed(1)}/5)`);
            $('.rating-star').each(function () {
                const starValue = $(this).data('rating');
                $(this).toggleClass('fas', starValue <= data.average);
                $(this).toggleClass('far', starValue > data.average);
            });
        }
    });
});

