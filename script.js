
    function getRandomImage() {  
        
        var randomImage = new Array();  
          
        
        randomImage[0] = "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg";  
        randomImage[1] = "https://static.toiimg.com/thumb/msid-88111890,width-1280,height-720,resizemode-4/.jpg";  
        randomImage[2] = "https://assets-news.housing.com/news/wp-content/uploads/2021/03/18171837/Raigad-Fort-A-landmark-of-the-Maratha-empire-with-a-rich-history-FB-1200x700-compressed.jpg";  
        randomImage[3] = "https://static.toiimg.com/thumb/msid-88111890,width-1280,height-720,resizemode-4/.jpg";  
        randomImage[4] = "https://wi.wallpapertip.com/wsimgs/156-1565522_puppies-desktop-wallpaper-desktop-background-puppies.jpg";  
        randomImage[5] = "https://images.unsplash.com/photo-1501265976582-c1e1b0bbaf63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
        
        
        var number = Math.floor(Math.random()*randomImage.length);  
        return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';   
    } 