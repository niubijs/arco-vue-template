<template>
    <div class="content">
        <a-result class="result" status="404" :subtitle="'404 not found'"></a-result>
        <div class="operation-row">
            <a-button key="back" type="primary" @click="backHome">返回首页</a-button>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router";

defineOptions({
    name: 'NotFoundPage'
})

const router = useRouter()
const backHome = () => {
    router.push('/')
}
</script>

<style scoped lang="scss">
.content {
    // padding-top: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -95px;
    margin-top: -121px;
    text-align: center;
}
</style>