var api = new XMLHttpRequest();
var baseUrl = "https://poloniex.com/public?command=returnCurrencies";
api.open('GET', baseUrl, true);
api.send();

class Crypto{
    constructor(id, name, humanType, depositAddress)
    {
        this.id = id;
        this.name = name;
        this.humanType = humanType;
        this.depositAddress = depositAddress;
    }
}

api.onload = function () {
    if (api.status == 200) {
        var data = JSON.parse(api.responseText);
        console.log(data);

    } else {
        alert(`Error: ${api.status} code!`);
    }
}