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
    $.getJSON(
        "",//请求后台url
        function(data){

        }
    );
}
//滚动加载
function scrollLoad(){
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight-100) {
            //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
            alert("滑到底了");
        }
    });
}
//加载新闻条目
function loadNotice(){
    var num=11;
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