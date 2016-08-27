function addUrlIcon() {
    flag = false;
    url = document.getElementById("urlSubmission").value;
    var $element = $('#fast-link');
    var numberOfChildren = $element.children().length;

    if (url.indexOf(".com") === -1) {
      return;
      // Sorry this is not a valid URL
    } else if (numberOfChildren >= 5) {
      return;
      // Sorry you can't add any more quick links
    }

    // no preseading url address
    if (url.indexOf("http") === -1 && url.indexOf("www") === -1) {
      shortenedUrl = url.slice(0, (url.indexOf(".com") + 4));
    // just www
    } else if (url.indexOf("http") === -1) {
      shortenedUrl = url.slice(4, (url.indexOf(".com") + 4));
    // just https
    } else if (url.indexOf("https") !== -1 && url.indexOf("www") === -1) {
      shortenedUrl = url.slice(8, (url.indexOf(".com") + 4));
    // https with www
    } else if (url.indexOf("https") !== -1) {
      shortenedUrl = url.slice(12, (url.indexOf(".com") + 4));
    // just http
    } else if (url.indexOf("http") !== -1 && url.indexOf("www") === -1) {
      shortenedUrl = url.slice(7, (url.indexOf(".com") + 4));
    // http with www
    } else {
      shortenedUrl = url.slice(11, (url.indexOf(".com") + 4));
    }

    _.each(linkIcons, function (website) {
      if (website.name === shortenedUrl) {
        $('#fast-link').append('<a href="http://' + url + '" target="_blank" class="list-group-item active"><i class="fa ' + website.icon + '  fa-2x"></i></a>');
        flag = true;
        // <p class="quick-link-text">' + website.name + '</p>
      }
    });

    if (flag === false) {
      // Use generalized icon
      $('#fast-link').append('<a href="http://' + url + '" target="_blank" class="list-group-item active"><i class="fa fa-gg-circle fa-2x"></i></a>');
    };

    flag = false;
    $('#urlSubmission').val('');
    url = "";
    shortenedUrl = "";

}

var linkIcons = [
  {
    name: "facebook.com",
    icon: "fa-facebook-square"
  },
  {
    name: "github.com",
    icon: "fa-github"
  },
  {
    name: "google.com",
    icon: "fa-google"
  },
  {
    name: "news.ycombinator.com",
    icon: "fa-hacker-news"
  },
  {
    name: "messenger.com",
    icon: "fa-comment"
  },
  {
    name: "instagram.com",
    icon: "fa-instagram"
  },
  {
    name: "linkedin.com",
    icon: "fa-linkedin-square"
  },
  {
    name: "reddit.com",
    icon: "fa-reddit"
  },
  {
    name: "producthunt.com",
    icon: "fa-product-hunt"
  },
  {
    name: "tumbler.com",
    icon: "fa-tumblr-square"
  },
  {
    name: "spotify.com",
    icon: "fa-spotify"
  },
  {
    name: "twitch.com",
    icon: "fa-twitch"
  },
  {
    name: "trello.com",
    icon: "fa-trello"
  },
  {
    name: "pinterest.com",
    icon: "fa-pinterest "
  },
  {
    name: "angellist.com",
    icon: "fa-angellist "
  },
  {
    name: "youtube.com",
    icon: "fa-youtube"
  },
  {
    name: "twitter.com",
    icon: "fa-twitter-square "
  },
  {
    name: "amazon.com",
    icon: "fa-amazon"
  },
  {
    name: "dropbox.com",
    icon: "fa-dropbox"
  },
  {
    name: "stackoverflow.com",
    icon: "fa-stack-overflow"
  },
  {
    name: "soundcloud.com",
    icon: "fa-soundcloud"
  }

]
