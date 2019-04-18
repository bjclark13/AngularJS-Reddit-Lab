function RedditService (http) {
    const service = this;

/**
 * Call https://www.reddit.com/r/aww.json
 * and set ctrl.feed to be the results
 */
service.fetchAwwSubreddit = () => {
    
// $http stuff goes here - this is where you put the actual call to the api and then return that back to the component/redditFeed.js file
return http.get("https://www.reddit.com/r/aww/.json");
}
}

angular.module('RedditApp')
.service('RedditService', ['$http', RedditService])