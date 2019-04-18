function RedditFeed(RedditService) {
    const ctrl = this;
  // List of reddit posts to display  
ctrl.feed = [];

/**
 * Call https://www.reddit.com/r/aww.json
 * and set ctrl.feed to be the results
 */
ctrl.fetchAwwSubreddit = () => {
    // Call service, then set our data
    RedditService.fetchAwwSubreddit()
    .then ( (data) => {
        // do something with this data
        // attach to template one by one
        return $q(function(resolve, reject) {
          service.RedditService()
         .then( data.data.children, (i) => {

          title =(data.data.children[i].data.title);
          img =(data.data.children[i].data.thumbnail);
          permalink = (data.data.children[i].data.permalink);
          box = (data.data.children[i]); 
   
   
          let posts = $( '#post1, #post2, #post3, #post4, #post5, #post6, #post7, #post8, #post9, #post10');
    
   
          console.log(title, img, permalink);
         });   
     });



    

    });
}
}
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
    <div ng-repeat="title in $ctrl.feed">

      <div id="box">
      <a href="https://www.reddit.com/{{permalink}">
      <img src="{{img}}"></img></a>

       <h4>{{title}}</h4>
       <a href="https://www.reddit.com/{{permalink}}">
       <div id="link-container">Link: {{permalink}}</div></a></div>

    </div>`, // or use templateUrl
    controller: RedditFeed,
});