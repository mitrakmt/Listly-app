
var getNews = function () {

  return new Promise(function(resolve, reject) {

    var newsUrl = 'https://webhose.io/search?token=6edaf299-4120-490a-a343-cd2bcf0bc611&format=json&q=performance_score%3A%3E8&ts=1472179211545';

      $.getJSON(newsUrl, function (news) {
        if (news) {

          var storyToDisplay = {};

          var filteredStories = news.posts.filter(function(story) {
            return story.language === 'english' && story.thread.country === 'US' && story.thread.performance_score >= 9 && story.thread.spam_score < 0.1 && story.thread.replies_count >= 5;
          })

          var topStory = filteredStories[0];
          storyToDisplay.author = topStory.author;
          storyToDisplay.url = topStory.url;
          storyToDisplay.title = topStory.title;
          storyToDisplay.text = topStory.text;
          storyToDisplay.image = topStory.thread.main_image;
          storyToDisplay.replies = topStory.thread.replies_count;

          $(".news-title").append('<a href="' + storyToDisplay.url + '" target="_blank">' + storyToDisplay.title + '</a>');
          $(".news-text").append("<small>" + storyToDisplay.text + "</small>")
          $(".news-extras").append('<small>Replies: ' + storyToDisplay.replies + '</small>')
          resolve(news);
        } else {
          reject(Error("Failed to grab stock quite information"));
        }
      }, "jsonp");
  });
};
