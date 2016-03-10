/**
 * Created by 24192 on 2016/3/9.
 */
$(document).ready(function(){

    setInterval(headContentToCenter, 10);//调整头部水平居中

    getTextDetail();
});
function getTextDetail(){
    var args = GetUrlParms();
//如果要查找参数key:
    if(args["id"]!=undefined&&args["headerText"]!=undefined&&args["title"]!=undefined);
    {
        //如果要查找参数key:
        var id=args["id"];//点击的新闻条目id
        var headerText=args["headerText"];
        var title=args["title"];
    }

    $('.headHContent').text(headerText);
    $('.icon-back').click(function(){
        window.name=headerText;
        history.back();
    });
    //getDataDetail(headerText,id);
    console.log("id="+id+",headerText="+headerText+",title="+title);
}

//headerText=新闻动态,id=新闻动态下的新闻id
function getDataDetail(headerText,id){
    $.ajax({
        type:"POST",
        url:"../index.php",
        data:{
            headerText:headerText,
            id:id
        },
        dataType:"html",
        success:function(data){
            $('.content').append(data);
        }
    });
}

