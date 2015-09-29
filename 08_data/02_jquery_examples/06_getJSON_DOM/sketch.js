$(document).ready(function(){

  // search for articles with term happy
  var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=happy&api-key=sample-key";
  $.getJSON(url, function(data) {
   
    var articles = data.response.docs;
   
    // iterate through all articles found
    for (var i=0; i<articles.length; i++) {
      //console.log(articles[i])
      
      // grab some pieces of the article
      var headline = articles[i].headline.main;
      var snippet = articles[i].snippet;

      // make an html string with the content
      var content = "<h1>"+headline+"</h1>";
      content += "<p>"+snippet+"</p>";

      // add it into the div with id container
      $( "#container" ).append( content );
    }
  });        
});