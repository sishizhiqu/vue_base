<template>
    <div>
        <h2>我爱你赵丽颖</h2>
        <button @click="count++">我爱了{{count}}次</button>
    </div>
</template>



<script>
/* 
 一个.vue文件，通常我们说是一个组件，但是本质不是，本质其实是定义组件的配置对象

*/
    export default {
        name: '',
        data(){
            return{
                count: 0
            }
        }
    }
</script>

<style scoped>
    h2{
        color: tomato;
    }
</style>