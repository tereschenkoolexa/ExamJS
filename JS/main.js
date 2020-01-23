var result = [];

function Delete(index) {
  console.log(result)
  if (index > -1) {
    result.splice(index, 1);
  }
  console.log(result)
  $(".tableData").html("");
  for (var i = 0; i < result.length; i++) {
    $('.tableData').append(
      `
        <tr>
                <td>${result[i].id}</td>
                <td>${result[i].name}</td>
                <td>${result[i].humanType}</td>
                <td><button class="btn btn-dark" onclick="Delete(${result.indexOf(result[i])})" type="submit"><i class="far fa-minus-square"></i></button></td>
        </tr>
        `
    );
  }
}


fetch("https://poloniex.com/public?command=returnCurrencies")
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function (data) {
        result = Object.keys(data).map(function (key) { return data[key]; })
        console.log(result);
        for (var i = 0; i < result.length; i++) {
          $('.tableData').append(
            `
              <tr>
                      <td>${result[i].id}</td>
                      <td>${result[i].name}</td>
                      <td>${result[i].humanType}</td>
                      <td><button class="btn btn-dark" onclick="Delete(${result.indexOf(result[i])})" type="submit"><i class="far fa-minus-square"></i></button></td>
              </tr>
              `
          );
        }
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });
