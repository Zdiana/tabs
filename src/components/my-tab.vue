<template>
    <div>
        <h3>我是master的标题</h3>
        <tabs :class="[`is-${position}`]">
            <tab-pane label="用户管理" name="first" zyn="zhangzhang">item1</tab-pane>
            <!-- <tab-pane>item1</tab-pane>
            <tab-pane>item1</tab-pane>
            <tab-pane>item1</tab-pane> -->
        </tabs>
        <!-- <div style="margin-top: 30px;">
            <tab-pane name="name1" :active="false">
                tab组件1
            </tab-pane>
            <tab-pane name="name2" :active="true">
                <div>
                    内容1
                </div>
                <div>
                    内容2
                </div>
            </tab-pane>
            <tab-pane name="name3" :active="false">
                tab组件2
            </tab-pane>
            
        </div>
        <div>上面的标识语</div> -->
        <hrs></hrs>
    </div>
</template>
<script>
import tabs from './tabs';
import tabPane from './tab-pane';
import hrender from './render-he';

export default {
    data() {
        return {
            position: 'top'
        }
    },
    components: {
        tabs,
        'tab-pane': tabPane,
        hrs: hrender
    },
    mounted() {
        console.log('===============tabpane', tabpane);
        console.log('===============hrs', hrs)
    }
}
</script>

