    var target_sub = "animecalendar"
var post_count = 5
async function update_image(){
    reddit.new(target_sub).limit(post_count).fetch(async (res)=>{
        console.log(res)
        while(true){
            var index = Math.floor(Math.random() * post_count)
            if(!res.data.children[index].data.is_self){
                console.log("Found a link post")
                console.log(res.data.children[index].data.is_video)
                if(res.data.children[index].data.is_video){
                    document.getElementById("title").innerHTML = res.data.children[index].data.title
                    if(res.data.children[index].data.domain == "v.redd.it"){
                        document.getElementById("video").src = res.data.children[index].data.media.reddit_video.dash_url
                        var url = res.data.children[index].data.media.reddit_video.dash_url;
                        var player = dashjs.MediaPlayer().create();
                        player.initialize(document.querySelector("#video"), url, true);
                    }
                    else {
                       document.getElementById("video").src = res.data.children[index].data.url
                    }
                    document.getElementById("video").style.display="inline-block"
                    document.getElementById("image").style.display="none"
                }
                else{
                    document.getElementById("title").innerHTML = res.data.children[index].data.title
                    document.getElementById("image").src = res.data.children[index].data.url
                    document.getElementById("image").style.display="inline-block"
                    document.getElementById("video").style.display="none"
                }
                break
            }
            else{
                log("Not a link post")
                index++
            }
        }
    })
}
update_image()
setInterval(update_image, 3600000)