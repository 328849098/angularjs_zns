/**
 * Created by guohanshuang on 2017/6/14.
 */
angular.module('articeMod',['ngRoute']).controller('articeController',function ($scope,$routeParams) {
    //$scope.arr=['新闻1','新闻2','新闻3','新闻4','新闻5'];
    //console.log($routeParams);  //Object {type: "news"}       "sport" "game"
    switch($routeParams.type){
        case 'sport':
            $scope.arr=['sport1','sport2','sport3','sport4','sport5'];
            break;
        case 'game':
            $scope.arr=['game1','game2','game3','game4','game5'];
            break;
        case 'news':
            $scope.arr=['news1','news2','news3','news4','news5'];
            break;
    }


});