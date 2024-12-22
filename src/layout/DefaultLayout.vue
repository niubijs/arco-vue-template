<template>
    <!--    <a-layout>-->
    <!--        <a-layout-header>Header</a-layout-header>-->
    <!--        <a-layout-content>-->
    <!--            <RouterView/>-->
    <!--        </a-layout-content>-->
    <!--        <a-layout-footer>Footer</a-layout-footer>-->
    <!--    </a-layout>-->
    <a-layout class="flex justify-center h-full">
        <a-layout-header
            class="relative overflow-hidden min-h-16 flex items-center bg-white border border-gray-50 px-3"
        >
            <p>项目的名称或者是logo</p>
        </a-layout-header>
        <a-layout class="">
            <a-layout-sider>
                <Menu/>
            </a-layout-sider>
            <a-layout-content class="p-3">
                <RouterView/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>
import Menu from '@/components/menu/index.vue'

defineOptions({
    name: 'DefaultLayout'
})
</script>

<style scoped lang="scss">

</style>