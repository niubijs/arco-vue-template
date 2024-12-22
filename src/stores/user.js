import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const user = ref({
        login: false
    });

    const isLogin = () => {
        return !!user.value.login;
    }

    return {
        user,
        isLogin
    }
});
