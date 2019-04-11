$("#button1").click(function() {
    $(".logo").show();
});
$("#button1").click(function() {
    $("#button1").hide();
});

var yextCompanies = [
    
  
    "http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19751.png",
    "https://cdn-images-1.medium.com/max/1200/1*ZSkIF6pdvpoJyPQqzOU6mQ.png",
    "https://i2.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Yahoo-Icon.png?resize=300%2C300","https://siliconangle.com/wp-content/blogs.dir/1/files/2013/05/waze_big1.png",
    "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png",
];
$("#button1").click(function() {
    yextCompanies.forEach(function(photo){
        $(".todo").append("<img src=" + photo + ">");
  
});
});
