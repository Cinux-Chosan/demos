import("B/utils").then((utils) => {
  utils.default("我是 appA，但你当前看到的这段文本是通过 webpack 模块联邦从 appB 暴露的方法中创建的");
});
