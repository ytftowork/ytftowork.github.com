/**
 * Created by 24192 on 2016/3/8.
 */
/**
 * Created by 24192 on 2016/3/8.
 */
$(document).ready(function(){
   jumpClick();
});
function jumpClick(){
    //跳转到站内公告
    $('.content-detail').click(function(){
        var selectObjName=$(this).find('h6').text();
        window.name=selectObjName;
        window.location="html/notice.html";
    });
    ////跳转到新闻动态
    //$('.content-2').click(function(){
    //    window.location="html/notice.html";
    //});
    ////跳转到校内专场
    //$('.content-3').click(function(){
    //    window.location="html/notice.html";
    //});
    ////跳转到校外专场
    //$('.content-4').click(function(){
    //    window.location="html/notice.html";
    //});
    ////跳转到校内大型
    //$('.content-5').click(function(){
    //    window.location="html/notice.html";
    //});
    // //跳转到校外大型
    //$('.content-6').click(function(){
    //    window.location="html/notice.html";
    //});
    // //跳转到单位需求
    //$('.content-7').click(function(){
    //    window.location="html/notice.html";
    //});
    ////跳转到公考选考
    //$('.content-8').click(function(){
    //    window.location="html/notice.html";
    //});
    ////跳转到项目就业
    //$('.content-9').click(function(){
    //    window.location="html/notice.html";
    //});
    ////跳转到网络招聘
    //$('.content-10').click(function(){
    //    window.location="html/notice.html";
    //});




}