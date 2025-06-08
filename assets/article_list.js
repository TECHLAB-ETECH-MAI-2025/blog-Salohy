import $ from 'jquery';

$(document).ready(function () {
    const $searchInput = $('#search-article');
    const $searchResults = $('#search-results');
    let searchTimeout;

    $searchInput.on('input', function () {
        const query = $(this).val().trim();
        clearTimeout(searchTimeout);

        if (query.length < 2) {
            $searchResults.removeClass('show').empty();
            return;
        }

        searchTimeout = setTimeout(() => {
            $.get('/api/search', { q: query }, function (response) {
                let html = '';

                if (response.articles.length > 0) {
                    html += '<h6 class="dropdown-header">Articles</h6>';
                    response.articles.forEach(article => {
                        html += `
                            <div class="dropdown-item search-item" data-type="article" data-id="${article.id}">
                                <strong>${article.title}</strong><br>
                                <small>${article.categories.join(', ')}</small>
                            </div>`;
                    });
                }

                if (response.categories.length > 0) {
                    html += '<h6 class="dropdown-header mt-2">Categories</h6>';
                    response.categories.forEach(cat => {
                        html += `
                            <div class="dropdown-item search-item" data-type="category" data-id="${cat.id}">
                                <strong>${cat.title}</strong><br>
                                <small>${cat.description}</small>
                            </div>`;
                    });
                }

                if (!html) {
                    html = '<div class="dropdown-item text-muted">Aucun résultat trouvé</div>';
                }

                $searchResults.html(html).addClass('show').css('display', 'block');
            });
        }, 300);
    });

    $(document).on('click', '.search-item', function () {
        const id = $(this).data('id');
        const type = $(this).data('type');

        if (type === 'article') window.location.href = `/article/${id}`;
        if (type === 'category') window.location.href = `/category/${id}`;
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-container').length) {
            $searchResults.removeClass('show').hide();
        }
    });
})
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

