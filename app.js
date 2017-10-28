function googleSucks(){
    var proxyURL = 'https://cors-anywhere.herokuapp.com/';
    var baseURL = 'https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyC3GVP9Gg8dyaCEctUcd5g1JcBdtRkH1c4&placeid=ChIJq61P2zfTD4gR4dBUMWk_fj0'
    var realURL = baseURL
    $.getJSON(realURL, function(response){
        console.log(response);
    })
};

googleSucks();