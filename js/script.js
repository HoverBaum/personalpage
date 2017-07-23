//Get blogposts

//URL to get blogposts from. This will either be a PHP script getting posts
//from the actual blog or a local file.
const blogUrl = (location.hostname === '127.0.0.1' || location.hostname === 'localhost') ? 'php/blog.json' : 'php/getBlogPosts.php'

//MAximum number of blogposts to display.
const maxBlogPosts = 6

get(blogUrl, (rss) => {
    rss = JSON.parse(rss)
    console.log(rss)

    const postsHtml = rss.entry
        .slice(0, maxBlogPosts)
        .reduce((html, post) => {
            return html + `
                <section class="portfolio">
                    <h2 class="portfolio__title"><a href="${post.id}">${post.title}</a></h2>
                    ${generatePostSummary(post, rss.id)}
                    <p>
                        <a href="${post.id}">&hellip; weiter</a>
                    </p>
                </section>
            `
        }, '')
    const wrapper = document.querySelector('#blogPostsWrapper')
    wrapper.innerHTML = postsHtml
})

function generatePostSummary(post, baseUrl) {
    let summary = post.summary
    summary = summary.replace(/src="\//g, `src="${baseUrl}`)
    return summary
}


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
