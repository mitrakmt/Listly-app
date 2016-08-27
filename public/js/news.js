var randomSectionSelector = function () {
  return Math.ceil(Math.random() * 11)
}

var getNews = function () {

  return new Promise(function(resolve, reject) {

    var sections = ["home", "opinion", "world", "national", "politics", "business", "technology", "science", "health", "sports", "travel", "insider"]
    var randomSection = sections[randomSectionSelector()];

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + randomSection + '.json';
    url += '?' + $.param({
      'api-key': "ba8b979781bc481d9d4fdb7508cfeae4"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(news) {

      if (news) {

          var storyToDisplay = {};

          // var filteredStories = news.posts.filter(function(story) {
          //   return story.language === 'english' && story.thread.country === 'US' && story.thread.performance_score >= 9 && story.thread.spam_score < 0.1 && story.thread.replies_count >= 5;
          // })

          var topStory = news.results[0];
          storyToDisplay.url = topStory.url;
          storyToDisplay.title = topStory.title;
          storyToDisplay.abstract = topStory.abstract;

          $(".news-title").append('<a href="' + storyToDisplay.url + '" target="_blank">' + storyToDisplay.title + '</a>');
          $(".news-text").append("<small>" + storyToDisplay.abstract + "</small>")
          $(".news-extras").append("<small>" + randomSection + "</small>")
          resolve(topStory);

    } else {
      reject(Error("Failed to grab news article"));
    }
    });
  });
};
