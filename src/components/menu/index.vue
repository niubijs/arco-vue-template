<!--<script lang="jsx">-->
<!--import {defineComponent} from "vue";-->

<!--export default defineComponent({-->
<!--    name: 'Menu',-->
<!--    setup() {-->
<!--        return () => (-->
<!--            <a-menu-->
<!--                level-indent={34}-->
<!--                selected-keys="1"-->
<!--                show-collapse-button={true}-->
<!--                class="w-full h-full"-->
<!--            >-->
<!--                <a-menu-item key="1">{{h(compile(`<${element?.meta?.icon}/>`))}}</a-menu-item>-->
<!--            </a-menu>-->
<!--        )-->
<!--    }-->
<!--})-->
<!--</script>-->

<template>
    <a-menu
        class="w-full h-full"
        :auto-open-selected="true"
    >
        <a-menu-item>
            <template #icon>
                <IconMenuFold/>
            </template>
            Home
        </a-menu-item>
        <a-sub-menu key="0">
            <template #icon>
                <IconApps></IconApps>
            </template>
            <template #title>Navigation 1</template>
            <a-menu-item key="0_0">Menu 1</a-menu-item>
            <a-menu-item key="0_1">Menu 2</a-menu-item>
            <a-menu-item key="0_2" disabled>
                Menu 3
            </a-menu-item>
        </a-sub-menu>

    </a-menu>
</template>

<script setup>
import {IconApps, IconMenuFold} from '@arco-design/web-vue/es/icon';

defineOptions({
    name: 'Menu'
})
</script>