<template>
  <div>
    <button>我是测试按钮</button>
  </div>
</template>
<script setup name="create-button">
//上面的name="create-button"是组件名必须填写，他决定了在其他项目中引入此组件的名称
</script>
<style scoped>
button {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>