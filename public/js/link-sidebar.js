function addUrlIcon() {
    flag = false;
    url = document.getElementById("urlSubmission").value.toLowerCase();
    var $element = $('#fast-link');
    var numberOfChildren = $element.children().length;

  {
  if (url.indexOf(".com") === -1) {
      return;
      // Sorry this is not a valid URL
    } else if (numberOfChildren >= 5) {
      return;
      // Sorry you can't add any more quick links
    }
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
    name: "gmail.com",
    icon: "fa-envelope"
  },
  {
    name: "esea.com",
    icon: "fa-steam"
  },
  {
    name: "steam.com",
    icon: "fa-steam"
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
  },
  {
    name: "foursquare.com",
    icon: "fa-foursquare"
  },
  {
    name: "500px.com",
    icon: "fa-500px"
  },
  {
    name: "bitbucket.org",
    icon: "fa-bitbucket"
  },
  {
    name: "stripe.com",
    icon: "fa-cc-stripe"
  },
  {
    name: "gitlab.com",
    icon: "fa-gitlab"
  },
  {
    name: "getpocket.com",
    icon: "fa-get-pocket"
  },
  {
    name: "mixcloud.com",
    icon: "fa-mixcloud"
  },
  {
    name: "paypal.com",
    icon: "fa-paypal"
  },
  {
    name: "chase.com",
    icon: "fa-credit-card"
  },
  {
    name: "bankofamerica.com",
    icon: "fa-credit-card"
  },
  {
    name: "citigroup.com",
    icon: "fa-credit-card"
  },
  {
    name: "wellsfargo.com",
    icon: "fa-credit-card"
  },
  {
    name: "usbank.com",
    icon: "fa-credit-card"
  },
  {
    name: "bnymellon.com",
    icon: "fa-credit-card"
  },
  {
    name: "pnc.com",
    icon: "fa-credit-card"
  },
  {
    name: "capitalone.com",
    icon: "fa-credit-card"
  },
  {
    name: "hsbc.com",
    icon: "fa-credit-card"
  },
  {
    name: "tdbank.com",
    icon: "fa-credit-card"
  },
  {
    name: "apple.com",
    icon: "fa-apple "
  },
  {
    name: "drupal.com",
    icon: "fa-drupal"
  },
  {
    name: "qq.com",
    icon: "fa-qq"
  },
  {
    name: "yahoo.com",
    icon: "fa-yahoo"
  },
  {
    name: "xing.com",
    icon: "fa-xing"
  },
  {
    name: "yelp.com",
    icon: "fa-yelp"
  },
  {
    name: "espn.com",
    icon: "fa-futbol-o"
  },
  {
    name: "premierleague.com",
    icon: "fa-soccer-ball-o"
  },
  {
    name: "nfl.com",
    icon: ""
  },
  {
    name: "nhl.com",
    icon: "fa-circle"
  },
  {
    name: "nba.com",
    icon: "fa-futbol-o"
  },
  {
    name: "nordstroms.com",
    icon: "fa-shopping-bag"
  },
  {
    name: "buzzfeed.com",
    icon: "share-alt-square"
  },
  {
    name: "classpass.com",
    icon: "fa-blind"
  },
  {
    name: "dribbble.com",
    icon: "fa-dribbble"
  },
  {
    name: "codepie.tv",
    icon: "fa-codiepie"
  },
  {
    name: "discover.com",
    icon: "fa-cc-discover"
  },
  {
    name: "codepen.io",
    icon: "fa-codepen"
  },
  {
    name: "digg.com",
    icon: "fa-digg"
  },
  {
    name: "css3.info",
    icon: "fa-css3"
  },
  {
    name: "jsfiddle.net",
    icon: "fa-jsfiddle"
  },
  {
    name: "scribd.com",
    icon: "fa-scribd "
  },
  {
    name: "slack.com",
    icon: "fa-slack "
  },
  {
    name: "tripadvisor.com",
    icon: "fa-tripadvisor"
  },
  {
    name: "vine.co",
    icon: "fa-vine"
  },
  {
    name: "stumbleupon.com",
    icon: "fa-stumbleupon"
  },
  {
    name: "stackexchange.com",
    icon: "fa-stack-exchange"
  },
  {
    name: "skype.com",
    icon: "fa-skype"
  },
  {
    name: "leanpub.com",
    icon: "fa-leanpub"
  },
  {
    name: "git-scm.com",
    icon: "fa-git-square"
  },
  {
    name: "houzz.com",
    icon: "fa-houzz "
  },
  {
    name: "opencart.com",
    icon: "fa-opencart"
  },
  {
    name: "vimeo.com",
    icon: "fa-vimeo"
  },
  {
    name: "renren.com",
    icon: "fa-renren"
  },
  {
    name: "medium.com",
    icon: "fa-medium"
  }
]
