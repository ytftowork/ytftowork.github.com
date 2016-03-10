/**
 * Created by 24192 on 2016/3/8.
 */
$(document).ready(function(){
    $('#myModal').modal('hide');//隐藏模态框
    iconBackClick();
    setInterval(headContentToCenter, 10);//调整头部水平居中
    var headerText=window.name;
    loadHeaderText(headerText);
    loadNotice();//加载信息片段
    scrollLoad();//notice.js中，滑动加载判断
    jumpToDetail(headerText);
});

//跳转到详情页
function jumpToDetail(headerText){
    $('.content').on('click',function(){
        var title=$(this).find('.header-h').text();
        var id=$(this).find('.header-h').attr('id');
        id = id.split('-');
        //window.name=id[1];
        var url= "detail.html?id="+id[1];
        url+= "&headerText=" +headerText;
        url+= "&title=" +title;
        window.location.href=url;


        //页面间传值
        //url= "../html/selectMac.html?selectDate="+$("#selectDate").val();
        //url+= "&selectTime=" +$("#selectTime").val();
        //url+= "&selectRoom=" +$("#selectRoom").val();
        //window.location.href=url;
    });
}
