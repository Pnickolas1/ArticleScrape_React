$(document).ready(function() {

    $('#search').on('click', function() {
        var apiKey = '46ba128fd7fe4d9bb083047938f7d947';
        var searchTerm = $('#search-term').val();
        var startYear = $('#start-year').attr('value') + '0101';
        var endYear = $('#end-year').attr('value') + '0101';
        var records = $('#num-of-records').val();
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

        queryURL += '?' + $.param({
            'api-key': apiKey,
            'q': searchTerm,
            // 'begin_date': startYear,
            // 'end_date': endYear
        });

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            for (var i = 0; i < records + 1; i++) {
                var articleTitle = $('<h4>').append(response.response.docs[i].headline.main);
                var articles = $('<div>').addClass('col-sm-12').append(response.response.docs[i].web_url);
                $('#search-results').append(articleTitle);
                $('#search-results').append(articles);
            }
        });
    });
});