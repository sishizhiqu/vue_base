(function (w) {
    //一个插件最终是一个对象
    let MyPlugin = {}
    //一个插件必须要有一个install方法
    MyPlugin.install = function (Vue, options) {
        //1. 添加全局方法或property
        Vue.myGlobalMethod = function () {
            //逻辑
            console.log('全局方法被调用');
        }

        //2. 添加全局资源,自定义指令
        Vue.directive('upper', {
            bind(el, binding, vnode, oldVnode) {
                el.textContent = binding.value.toUpperCase()
            }
        })

        // 3. 注入组件选项
        /* Vue.mixin({
            created: function () {
                // 逻辑...
            }
        }) */

        //4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('实例方法被调用');
        }
    }
    //将插件挂载window身上，暴露出去
    w.MyPlugin = MyPlugin
})(window)