// http://developer.nytimes.com

function setup() {
  createCanvas(1200, 400);
  noLoop();
  noStroke();
  fill(0);
  var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&api-key=sample-key";
  loadJSON(url, drawDocs);
}

function draw() {
}

function drawDocs(data) {
  console.log(data)
  var docs = data.response.docs;
  for (var i=0; i<docs.length; i++) {
    text(docs[i].snippet, 100, 20*i);
  }
}
