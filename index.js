
// jquery document ready

$(document).ready(function() {
    
        //read data from json file
        $.getJSON("data.json", function(data) {
            console.log(data);
            
            var length = data.length;
            var i = 0;

            //loop through data
            for (i = 0; i < length; i++) {
                var imageName = (i % 6 ) + 1;
                var image = "images/avatars/" + imageName + ".jpg";
                var name = data[i];
                var div = '<div class="col p-p">' + '<img src="' +image + '" alt=""><span>' + name + '</span></div>';
                $("#p-section").append(div);
            }
        });
});