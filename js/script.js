//Get blogposts

//URL to get blogposts from. This will either be a PHP script getting posts
//from the actual blog or a local file.
const blogUrl = (location.hostname === '127.0.0.1' || location.hostname === 'localhost') ? 'php/blog.json' : 'php/getBlogPosts.php'

get(blogUrl, (posts) => {
    posts = JSON.parse(posts)
    console.log(posts)

    
})


//Wrap a http-get-request in an easier to use function
function get(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText)
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}
