<template>
  <div class="editor-container">
    <textarea type="textarea" :placeholder="placeholder" value="text" v-model="editText"></textarea>
    <ul class="tools flex-row">
      <li class="tool" v-show="enableTool('camera')"><i class="iconfont icon-ios7cameraoutline"></i></li>
      <li class="tool" v-show="enableTool('album')"><i class="iconfont icon-pic"></i></li>
      <li class="tool" v-show="enableTool('emotion')"><i class="iconfont icon-emotion"></i></li>
      <li class="tool" v-show="enableTool('at')"><i class="iconfont icon-iosatoutline"></i></li>
      <li class="tool" v-show="enableTool('location')"><i class="iconfont icon-location"></i></li>
    </ul>
  </div>
</template>

<style lang="less">
  .editor-container{
    > textarea {
      width: 100%;
      height: 150px;
      font-size: 15px;
      border: none;
      color: #444;
      margin: 0;
      padding: 5px;
      resize: none;
      box-sizing: border-box;
      background-color: #fff;
    }
    .tools{
      width: 100%;
      height: 40px;
      background-color: #f9f9f9;
      border-bottom: 1px solid #dadada;
      border-top: 1px solid #dadada;
      list-style: none;
      margin: 0;
      padding: 0;
      margin-top: -5px;
      .tool {
        width: 50px;
        height: 100%;
        text-align: center;
        line-height: 40px;
        .iconfont {
          color: #666;
        }
      }
    }
  }
</style>

<script>
export default {
  props: {
    enableTools: {
      type: String,
      default: 'camera,album,emotion,at,location'
    },
    text: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editText: ''
    }
  },
  watch: {
    editText(text) {
      this.$emit('text:change', text)
    }
  },
  methods: {
    enableTool(name) {
      const tools = this.enableTools.split(',')
      return ~tools.indexOf(name)
    }
  }
}
</script>
