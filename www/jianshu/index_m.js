/**
 * Created by guohanshuang on 2017/6/14.
 */
var app=angular.module('index_m',['news_module','category_module']);

app.filter('showAsHtml',function ($sce) {
    return function (input) {
        return $sce.trustAsHtml(input);
    };
});

app.controller('index_m',function ($scope,$http) {
    //index_m 特有的，写在这里
});