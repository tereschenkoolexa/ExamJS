var result =[];
fetch("https://poloniex.com/public?command=returnCurrencies")
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      
      response.json().then(function (data) {
        result = Object.keys(data).map(function (key) {return data[key];})
        console.log(result);
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

  for (var i = 0; i < data.articles.length; i++) {
    $('body').append(
        `
        <div class="card bg-dark text-white" style="float: left; margin-top: 10px; width: 100%;">
            <img class="card-img-top" src="${data.articles[i].urlToImage}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${data.articles[i].author}</h4>
                    <p class="card-text">${data.articles[i].title}</p>
                    <p class="card-text">${data.articles[i].description}</p>
                    <pre class="card-text">${data.articles[i].publishedAt}</pre>
                    <a href="#" class="btn btn-light stretched-link">See Profile</a>
                </div>
        </div>
        </div>
        `
    );}