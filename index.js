var target_sub = "animecalendar"
var post_count = 10
async function update_image(){
    reddit.new(target_sub).limit(post_count).fetch((res)=>{
        console.log(res)
        var index = 0
        while(true){
            if(res.data.children[index].kind == "t3"){
                document.getElementById("title").innerHTML = res.data.children[index].data.title
                document.getElementById("image").src = res.data.children[index].data.url
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