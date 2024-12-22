<template>
    <div class="container h-screen m-auto flex items-center">
        <a-form :model="form" @submit="handleSubmit">
            <a-form-item label="用户名">
                <a-input v-model="form.username"/>
            </a-form-item>
            <a-form-item label="密码">
                <a-input-password v-model="form.password"/>
            </a-form-item>

            <a-form-item>
                <a-button html-type="submit">Submit</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup>
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {setToken} from "@/utils/auth.js";

const router = useRouter()

const form = reactive({
    username: '',
    password: ''
})

const handleSubmit = (data) => {
    const {redirect, ...othersQuery} = router.currentRoute.value.query;

    console.log(data.values, router.currentRoute.value.query)
    setToken('test login')
    router.push({
        name: 'workspace',
        query: {
            ...othersQuery
        }
    })
}

</script>

<style lang="scss" scoped>

</style>
