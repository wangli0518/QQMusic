<!-- v-model: 双向的数据绑定,经常用于input框;(将内容添加到input框中)-->
<!-- v-once 只绑定一次,后期数据不会发生改变-->
<!-- v-text: 只能识别文本,不能识别标签-->
<!-- v-html: 可以识别数据中的标签-->
<!-- v-text 和 v-html DOM中不能有其他标签,否则会被覆盖掉;-->
<!-- $set : 可以data中的属性新增响应式属性  vm.$set(vm.a,"add","昌平")-->
let vm1=new Vue({
        el:'#app1',
        data:{
            a:"回龙观"
        },
        methods:{
            fn(){//不能用箭头函数
                 //this-->vm        }
        }


<!-- v-for 循环(循环谁,就把这个指令放进行间属性中-->
        <li v-for="a in fruit">{{a}}</li>

<!--需要传参的话,给一个 $event 进行占位-->
<!-- (v-on:keyup-->@keyup)-->
<input type="text" @keyup="fn($event,1)" v-model="val">

<!-- v-bind:动态绑定数据   (v-bind:--->:)  -->
var a=123;
<img :src="a" alt="">
<!-- v-if: 如果条件true,那么显示;操作的是DOM节点,不是样式-->
<!-- v-else-if:-->
<!-- else:-->
<!--<div v-if="Math.random()>0.5">111</div>-->

<!--v-show 显示隐藏-->
<div v-show="flag">你很帅</div>

<!--v-for="(a,index) in ary" 循环-->
<!--v-bind:class-->
 <!-- :class 动态绑定样式  可以写对象,如果属性名对应的属性值是true,当前样式起作用-->
<!--v-bind:style-->



    vm.$set : 设置数据响应式的
    vm.$data : 获取所有的响应式数据
    vm.$el : 挂载的元素
    vm.$watch : 监听
    vm.$options :获取vue的所有的属性
    vm.$refs : 获取DOM元素的方法；
    vm.$nextTick : 异步的方法；
    vm.$mount : 挂载DOM元素；
    $emit : 触发自定义事件；
    $on两个参数： 1： 自定义事件名字  2. 自定义事件绑定的方法
