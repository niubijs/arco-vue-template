<template>
    <a-layout class="flex justify-center h-full">
        <a-layout-header
            class="relative overflow-hidden min-h-16 bg-[var(--color-bg-2)] px-3 border-b-[var(--color-border)]"
            style="border-bottom-style: solid"
        >
            <div class="flex justify-between items-center w-full h-full">
                <div class="logo">项目的名称或者是logo</div>
                <div class="right-side">
                    <ul class="flex">
                        <li class="px-5">
                            <a-tooltip content="hshshs">
                                <a-button
                                    class="nav-btn"
                                    type="outline"
                                    :shape="'circle'"
                                >
                                    <template #icon>
                                        <IconExclamationPolygonFill/>
                                    </template>
                                </a-button>
                            </a-tooltip>
                        </li>

                        <li>
                            <a-dropdown>
                                <a-avatar
                                    :size="32"
                                    :style="{ marginRight: '8px', cursor: 'pointer' }"
                                >
                                    <img alt="avatar"
                                         src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"/>
                                </a-avatar>
                                <template #content>
                                    <a-doption>
                                        <a-space @click="(e)=>{console.log(e)}">
                                            <IconLocation/>
                                            <span>demo</span>
                                        </a-space>
                                    </a-doption>
                                    <a-doption>
                                        <a-space @click="handleLogout">
                                            <IconExport/>
                                            <span>退出登录</span>
                                        </a-space>
                                    </a-doption>
                                </template>
                            </a-dropdown>
                        </li>
                    </ul>
                </div>
            </div>
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
import {IconExclamationPolygonFill, IconExport, IconLocation} from '@arco-design/web-vue/es/icon'
import {clearToken} from "@/utils/auth.js";
import {useRouter} from "vue-router";

defineOptions({
    name: 'DefaultLayout'
})
const router = useRouter()

const handleLogout = () => {
    clearToken()
    router.push({
        name: 'login'
    })
}
</script>

<style scoped lang="scss">
.nav-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
}
</style>