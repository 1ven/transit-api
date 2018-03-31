<!-- - Integrate babel in order to use es6 -->
<!-- - Integrate Docker -->
  <!-- - Investigate ports issue -->
  <!-- - not use NODE_ENV in .env files -->
  <!-- - Investigate how to run docker compose for dev and prod envs
    - This will lead to having multiple docker-compose files -->
  <!-- - Investigate how to implement rebuild on file change in dev mode -->
  <!-- - Investigate, how to pass environment variables -->
  <!-- - Investigate OS replacement for env.sh -->
<!-- - Connect PG -->
  <!-- - Investigate, how to connect to prod/stage DB locally via Docker -->
  <!-- - Run migrations after bootstrapping PG -->
<!-- - Investigate how to pass arguments through make command -->
- Investigate, why node service sometimes is running before postgres when running container first time and therefore throwing ECONNREFUSED 172.18.0.2:5432 error. Use "wait for it" in docker entrypoint before migrations. https://docs.docker.com/compose/startup-order/
- Implement security recommendations from - https://expressjs.com/en/advanced/best-practice-security.html
  - Protect from XSS and other vulnerabilities
<!-- - Implement authentication -->
  <!-- - Investigate, what it is Basic auth, Digest auth, do we need it instead of local auth? -->
<!-- - Use boom errors instead of modelErrrors -->
<!-- - Implement sessions -->
  <!-- - Review koa-session library -->
<!-- - Implement password resetting -->
  - Implement sending email
<!-- - Implement validation interface in models. Keep all validation in models as well. Controllers should get all models validation messages and pass it to response for the cases when errors are coming from multiple models. -->
  - Do not throw Booms in models?
  - Investigate, where to put model utils. Should be in `business` dir.
    - Split model by dirs - `business`, `storage`, `service?`
<!-- - Integrate Swagger -->
<!-- - Add reexports to the model. Import directly non-default exporting elements -->
<!-- - Integrate swagger-ui using webpack. Implement `swagger-ui-static` app, using cra idea. Will accept path to swaggerfile via env. have only `build` task, which will build that app to `/static` dir. Koa will be serving that dir
  - take a look at koa2-swagger-ui -->
<!-- - Refactor core -->
- Investigate, how to create mock api, by swagger spec
- Define request bodies for swagger spec
- Use swagger routes spec as a source of the truth

<!-- - Define API response structure. Inherit from GitHub? -->
  <!-- - Define errors structure as well -->
<!-- - Implement model validations -->
<!-- - Implement koa error handling -->

- Implement run in Postman swagger ui integration
- Implement Batch request

- All responses should be in JSON format
  - Generic error should be in { message: '' } format.
  - Fields errrors should be in { fields: {} } format.

Bugs:
- Getting 500 error when don't providing content-type on sign in
- Getting 500 error when password is invalid



<!-- - User roles database design -->
<!-- - Availability database column -->
<!-- - Product image database design -->
<!-- - Coupon database best practices -->
<!-- - Orders database best practices -->
<!-- - Dynamic price database best practices -->
<!-- - Database enums best practices -->