import koaSwagger from "koa2-swagger-ui";

export default spec =>
  koaSwagger({
    title: "API Documentation",
    routePrefix: "/doc",
    hideTopbar: true,
    swaggerOptions: {
      spec,
      plugins: [
        () => ({
          statePlugins: {
            spec: {
              wrapSelectors: {
                allowTryItOutFor: () => () => false
              }
            }
          }
        })
      ]
    }
  });
