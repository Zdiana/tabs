<template>
    <div>
        <h3>Test tab</h3>
        <tabs>
            <tab-pane>item1</tab-pane>
        </tabs>
    </div>
</template>
<script>
import tabs from './tabs';
import tabPane from './tab-pane';

export default {
    data() {
        return {

        }
    },
    components: {
        tabs,
        'tab-pane': tabPane
    }
}
</script>

