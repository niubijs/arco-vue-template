<script lang="jsx">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'Menu',
    setup() {
        return () => (
            <a-menu
                level-indent={34}
                selected-keys="1"
            >
                <a-menu-item key="1">Home</a-menu-item>
            </a-menu>
        )
    }
})
</script>