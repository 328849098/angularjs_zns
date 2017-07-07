/**
 * Created by guohanshuang on 2017/6/14.
 */
/*封装：
1.模块 module
2.controller
3.服务
4.route
*/
var app=angular.module('jianshu',['news_module']);

app.filter('showAsHtml',function ($sce) {    //防止注入式攻击
    return function (input) {
        return $sce.trustAsHtml(input);
    };
});
/*
app.controller('index_m',function ($scope,$http) {
    //初始化
    $scope.categoryNow=0;    //当前分类
    $scope.a='<h2>qqqqqqqqqqqq</h2>';

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


    $scope.nowPage=1;        //当前第几页

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
*/

app.controller('index_m',function ($scope,$http) {
    //index_m 特有的，写在这里
});

app.controller('article_m',function ($scope,$http) {
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