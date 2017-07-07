/**
 * Created by guohanshuang on 2017/6/14.
 */
var article_module=angular.module('article_module',[]);
article_module.controller('articleData',function ($scope,$http) {

    $scope.c='<h2>ccccccc</h2>';
    //=================== 获取文章详情 ===============
    //文章内容
    //获取id-文章用      localhost:8085/ports/jianshu/html/article.html?id=4
    //alert(location.search);    //?id=4
    var id=location.search.substring(1).split('=')[1];    //4

    $http.get('/ports/jianshu/articleInfo/'+id+'.do').success(function (res) {
        if(res.code==100){
            $scope.articleInfo=res.data;
        }else{
            alert('失败：'+res.code);
        }
    }).error(function () {
        alert('获取文章内容失败');
    });

});