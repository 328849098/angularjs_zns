/**
 * Created by guohanshuang on 2017/6/14.
 */
var category_module=angular.module('category_module',[]);

category_module.controller('categoryData',function ($scope,$http) {
    $scope.a='<h2>aaaaaaaaaaaaaa</h2>';
    //=================== 获取所有分类列表 ===============
    //初始化
    //当前分类
    $scope.categoryNow=0;

    //分类列表
    $http.get('/ports/jianshu/category.do').success(function (res) {
        if(res.code==100){
            //成功
            $scope.categoryList=res.data;

            $scope.categoryList.unshift({'categoryId':0,'name':'默认'});

            $scope.setCategoryNow=function (now) {
                //alert(now);     //
                $scope.categoryNow=now;

                getArticleList();    //文章列表


            }
        }else{
            alert('错了：'+res.code);
        }
    }).error(function () {
        alert('错了');
    });


});