import createButton from "./index.vue";
createButton.install = (app) => {
  app.component(createButton.name, createButton);
  return app;
};

export default createButton;
