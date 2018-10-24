<template>
    <div>
        <h3>我是master的标题</h3>
        <tabs :class="[`is-${position}`]">
            <tab-pane label="用户管理" name="first" zyn="zhangzhang">item1</tab-pane>
        </tabs>
    </div>
</template>
<script>
import tabs from './tabs';
import tabPane from './tab-pane';

export default {
    data() {
        return {
            position: 'top'
        }
    },
    components: {
        tabs,
        'tab-pane': tabPane
    }
}
</script>

