/**
 * Created by guohanshuang on 2017/6/14.
 */
var news_module=angular.module('news_module',[]);

news_module.controller('newsData',function ($scope,$http) {

    $scope.b='<h2>bbbbbbbbbbb</h2>';
    //=================== 获取所有文章列表 ===============
    //当前第几页
    $scope.nowPage=1;

    //文章列表
    getArticleList();
    function getArticleList() {
        $http.get('/ports/jianshu/articles/'+$scope.categoryNow+'/'+$scope.nowPage+'.do').success(function (res) {
            if(res.code==100){
                //成功
                //console.log(res.data[0]);
                $scope.menuList=res.data;
            }else{
                alert('失败：'+res.code);
            }
        }).error(function () {
            alert('获取文章列表失败');
        });
    }

});