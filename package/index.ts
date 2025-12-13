import createButton from "./components/button/index.vue"; //导入写好的组件
const components = [createButton]; //所有的组件都放这个数组里
const install = (app) => {
  for (const item of components) {
    app.component(item.name, item); //批量注册组件
  }
  return app;
};
export default { install }; //如果有方法函数也可以在这里导出
