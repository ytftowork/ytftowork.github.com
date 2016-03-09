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
        var id=args["id"];
        var headerText=args["headerText"];
        var title=args["title"];
    }

    $('.headHContent').text(headerText);
    $('.icon-back').click(function(){
        window.name=headerText;
        history.back();
    });
    console.log("id="+id+",headerText="+headerText+",title="+title);
}


function GetUrlParms()
{
    var args=new Object();

    var query=location.search.substring(1);//获取查询串
    query=decodeURI(query);

    var pairs=query.split("&");//在逗号处断开
    for(var i=0;i<pairs.length;i++)

    {
        var pos=pairs[i].indexOf("=");//查找name=value

        if(pos==-1)   continue;//如果没有找到就跳过

        var argname=pairs[i].substring(0,pos);//提取name

        var value=pairs[i].substring(pos+1);//提取value

        args[argname]=unescape(value);//存为属性

    }

    return args;
}