/**
 * Created by 24192 on 2016/3/9.
 */
/**
 * Created by 24192 on 2016/3/8.
 */
$(document).ready(function(){
    //setTimeout(function(){
    //    headContentToCenter();
    //},1000);
    headContentToCenter();//调整头部水平居中
    loadNotice();//加载信息片段
});
function headContentToCenter(){
    var width=$(window).width()/2;
    var headHWidth=$('.headHContent').width()/2;
    var spanL=$('.icon-back').width();
    var offset=width-headHWidth-24;
    $('.headHContent').css(
        'margin-left',offset
    );
}
function loadNotice(){
    var num=20;
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