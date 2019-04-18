function RedditFeed(RedditService, $q) {
    const ctrl = this;
  // List of reddit posts to display  
  ctrl.feed = [];

/**
 * Call https://www.reddit.com/r/aww.json
 * and set ctrl.feed to be the results
 */
ctrl.fetchAwwSubreddit = () => {
  return $q(function(resolve, reject) {
    // Call service, then set our data
    RedditService.fetchAwwSubreddit()
    .then ( (response) => {
      console.log(response);
        // do something with this data
        // attach to template one by one

        // Get children from data
        let children = response.data.data.children;

        // Same as 
        //  <ng-repeat="child in children">

        // Organize in to objects for each one
          children.forEach( function(child, index) {
            let childObj = {
              title: child.data.title,
              img: child.data.thumbnail,
              permalink: child.data.permalink
            }

            // Add to feed array
            ctrl.feed.push(childObj);

            if ( index === (children.length -1) ){
              // Run .then() from inside caller
              resolve();
            }


          })

        // Resolve the promise

        //   service.RedditService()
        //  .then( data.data.children, (i) => {

        //   title =(data.data.children[i].data.title);
        //   img =(data.data.children[i].data.thumbnail);
        //   permalink = (data.data.children[i].data.permalink);
        //   box = (data.data.children[i]); 
   
   
        //   let posts = $( '#post1, #post2, #post3, #post4, #post5, #post6, #post7, #post8, #post9, #post10');
    
   
        //   console.log(title, img, permalink);
        //  });   
     });
    });
}

  ctrl.fetchAwwSubreddit()
  .then( () => {
    alert('completed');
  })
}
  
  angular.module('RedditApp').component('redditFeed', {
    template: `
    <div ng-repeat="item in $ctrl.feed">

      <div id="box">
      <a href="https://www.reddit.com/{{item.permalink}">
      <img src="{{item.img}}"></img></a>

       <h4>{{item.title}}</h4>
       <a href="https://www.reddit.com/{{item.permalink}}">
       <div id="link-container">Link: {{item.permalink}}</div></a></div>

    </div>`, // or use templateUrl
    controller: RedditFeed,
});