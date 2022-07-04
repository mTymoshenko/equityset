export const registerBaseComponents = (vm) => {
  try {
    // Require base component context
    const requireComponent = require.context(
      "@/components/base",
      true,
      /Base[\w-]+\.vue$/
    );

    requireComponent.keys().forEach((filePath) => {
      const componentConfig = requireComponent(filePath);
      const componentName = filePath.split("/").pop().split(".")[0];
      // Register component globally
      vm.component(componentName, componentConfig.default || componentConfig);
    });
  } catch (err) {
    console.log("Base component registration failed");
    console.error(err);
  }
};
