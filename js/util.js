/**
 * Created by 24192 on 2016/3/9.
 */
//显示头部
function loadHeaderText(headerText){
    $('.headHContent').text(headerText);
}
//调整头部水平居中
function headContentToCenter(){
    var width=$(window).width()/2;
    var headHWidth=$('.headHContent').width()/2;
    var spanL=$('.icon-back').width();
    var offset=width-headHWidth-24;
    $('.headHContent').css(
        'margin-left',offset
    );
}
//点击返回箭头返回
function iconBackClick(){
    $('.icon-back').click(function(){
        history.back(-1);
    });
}
//从后台得到数据
function getData(headerText){
    var title="";
    var titleTime="";
    $.ajax({
        type:"POST",
        url:"",//请求数据地址
        data:{
            headerText:headerText//传递功能块标题给后台
        },
        dataType:"json",
        success:function(data){
            title=data.title;
            titleTime=data.titleTime;
            return data;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求错误1："+XMLHttpRequest.status);
            console.log("请求错误2："+XMLHttpRequest.readyState);
            console.log("请求错误3："+textStatus);
        }
    });
}
//滚动加载
function scrollLoad(){
    $(window).scroll(function() {
        //到达顶部
        //if ($(document).scrollTop()<=0){
        //    alert("滚动条已经到达顶部为0");
        //}
        //到达底部
        if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
            //alert("滚动条已经到达底部为" + $(document).scrollTop());
            $('#myModal').modal('show');
            $('.btn-confirm').on('click',function(){
                $('#myModal').modal('hide');
            });
        }
    });

    //$(window).scroll(function () {
    //    var scrollTop = $(this).scrollTop();
    //    var scrollHeight = $(document).height();
    //    var windowHeight = $(this).height();
    //    if (scrollTop + windowHeight == scrollHeight-100) {
    //        //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
    //        alert("滑到底了");
    //    }
    //});
}
//加载新闻条目
function loadNotice(){
    var num=21;
    var textH="关于供需见面会申请失败的通知,华中农业大学";
    var textH1="习近平：民有所想所求 就要为他们服务";
    var timeP="2016-03-09";
    for(var i=0;i<num;i++){
        var obj=$("<div class='content'></div>");
        obj.attr('id','content'+i);
        $('body').append(obj);
    }
    for(var i=0;i<num;i++){
        var obj=$("<div class='content-h'></div>");
        obj.attr('id','contentH-'+i);
        $('#content'+i).append(obj);
    }
    for(var i=0;i<num;i++){
        var obj=$("<h4 class='header-h'></h4>");
        obj.attr('id','headerH-'+i);
        if(i%2!=0){
            obj.text(textH);
        }else{
            obj.text(textH1);
        }
        $('#contentH-'+i).append(obj);
    }

    for(var i=0;i<num;i++){
        var obj=$("<div class='content-p'></div>");
        obj.attr('id','contentP-'+i);
        $('#content'+i).append(obj);
    }
    for(var i=0;i<num;i++){
        var obj=$("<p class='time-p'></p>");
        obj.attr('id','timeP-'+i);
        obj.text(timeP);
        $('#contentP-'+i).append(obj);
    }
}
//url传参解析
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