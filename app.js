function myFunction(){
    $.ajax({
        url: 'https://api.yelp.com/v3/businesses/',
    dataType: 'JSON',
    beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer $token")
            },
    success: function(data){
        console.log(data)
    },
    error: function(jqXHR, textStatus, errorThrown)   {
                    console.log(textStatus);
                }

    });
};
myFunction();