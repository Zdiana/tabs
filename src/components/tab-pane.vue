<template>
<!-- <template>
    ARIA是Accessible Rich Internet Application的简称，指无障碍富互联网应用。
    可以使一些有功能障碍（如听力，视力）的人群，使用你的网站。
</template> -->
<!-- <template>

  aria-hidden 字符串。可选值为true和false, true表示元素隐藏(不可见)，false表示元素可见。
  eg: <div aria-hidden="false">23%</div>

  aria-labelledby	字符串。空格分隔的id们	
  eg: <div aria-labelledby="title" role="alertdialog"><h3 id="title">标题</h3></div>
  aria-labelledby一般用在区域元素上，对于的id一般为对应的标题或是标签元素的id.关系型属性。
</template> -->
  <div
    class="el-tab-pane"
    v-if="(!lazy || loaded) || active"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElTabPane',

    componentName: 'ElTabPane',

    props: {
      label: String,
      labelContent: Function,
      name: String,
      closable: Boolean,
      disabled: Boolean,
      lazy: Boolean,
      zynzyn: String
    },

    data() {
      return {
        index: null,
        loaded: false
      };
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      active() {
        const active = this.$parent.currentName === (this.name || this.index);
        if (active) {
          this.loaded = true;
        }
        return active;
      },
      paneName() {
        return this.name || this.index;
      }
    },

    watch: {
      label() {
        this.$parent.$forceUpdate();
      }
    }
  };
</script>
