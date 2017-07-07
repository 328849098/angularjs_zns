/**
 * Created by guohanshuang on 2017/6/7.
 */
function ajax(url,fnSucc,fnFaild) {
    //1.创建ajax对象
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();   //非ie6兼容
    }else{
        var oAjax=new ActiveXObject('Mocrosoft.XMLHTTP');   //ie6
    }

    //2.连接到服务器
    //open(方法，文件名，异步传输)
    //同步   多件事一起   事情一件件来
    //异步   一件一件来   多个事情可以一起做   ajax都是异步的
    //oAjax.open('GET','a.txt?t='+new Date().getTime(),true);   //阻止缓存   ->  修改url的get数据
    oAjax.open('GET',url,true);

    //3.发送请求   ->  告诉服务器，要哪个文件
    oAjax.send();

    //4.接收返回值
    oAjax.onreadystatechange=function () {
        if(oAjax.readyState==4){      //浏览器和服务器，进行到哪一步了
            //0  未初始化  还没有调用open()方法
            //1  载入      已调用send()方法，正在发送请求
            //2  载入完成   send()方法完成，已收到全部响应内容
            //3  解析      正在解析响应内容
            //4  完成      响应内容解析完成，可以在客户端调用了
            if(oAjax.status==200){  //成功
                //alert('成功'+oAjax.responseText);
                fnSucc(oAjax.responseText);
            }else {                         //失败
                //alert('失败'+oAjax.status);
                if(fnFaild){
                    fnFaild(oAjax.status);
                }
            }
        }
    };
}