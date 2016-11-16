/**
 * Created by Administrator on 2016/11/7.
 */
define(["dojo/_base/declare"],function(declare){
    return declare("Person",null,{
        name:'zhangsan',
        constructor:function(name){
            this.name=name;
        },
        say:function(){
            return this.name;
        }
    })
});
