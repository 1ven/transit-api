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
<!-- - Define request bodies for swagger spec -->
<!-- - Swagger -->
  <!-- - Implement koa router based on swagger spec:
    - Handle:
      - paths
      - methods
      - parameters, like path, query, headers etc. should we validate it?
    - Implement function for getting swagger spec from JSDOC.
      - Should keep function reference at every method path.
      - Should keep swagger root spec including json ref to the definitions in the controllers root file.
    - Alternatively have js decorator functions instead of jsdoc anotations. -->
  - Investigate, how to create mock api, by swagger spec

<!-- - Define api errors structure -->
<!-- - All responses should be in JSON format -->
  <!-- - Generic error should be in { message: '' } format. -->
  <!-- - Fields errrors should be in { fields: {} } format. -->
<!-- - Fix boom errors message / data handling -->
<!-- - Merge boom and validation middlewares to error handling middlewares -->

<!-- - Implement sign up for the drivers and customers. -->
  <!-- - Implement creating a customer(2nd step) -->
  <!-- - Implement creating a driver(2nd step) -->
  <!-- - Investigate how to handle customer state in self response(is_onboarded, etc)
    - Keep role_entry prop in user respones
    - Keep `is_onboarded` in `role_entry` literally in either Driver or Customer model
    - Should not keep `is_onboarded` in db, that prop should be computable. -->
- Implement getting all drivers list.
- Define spec, API for payment management for drivers and customers

- Do not use `readById` for the cases, when we need just one prop
  - Like when we need role, create a separate function for select('role')
  - Like `readByEmail` for `makeResetToken`(but not for local sign in), should be `isUserExists` instead

- Model functions, which are responsible for fetching data for controllers, should reuse knex builders
if they need to use joins
  - `readById` and `readByEmail` should have common knex builder

- Consider creating a new dirs only when they will store the files of a different conception/purpose
  - For example, refactor user model to be:
  ```
    - user
      - authentication
      - entry
        - definitions
        - builders
        create.js
        readById.js
        readByEmail.js
  ```

- Ensure that database satisfies 3 types of data integrities

- Implement ability for the driver to rate the customer

<!-- - Define API response structure. Inherit from GitHub? -->
  <!-- - Define errors structure as well -->
<!-- - Implement model validations -->
<!-- - Implement koa error handling -->

- Implement run in Postman swagger ui integration
- Implement Batch request
- Use semver for every release

Bugs:
- Getting 500 error when don't providing content-type on sign in
- Getting 500 error when password is invalid

- Implement integration tests


<!-- - User roles database design -->
<!-- - Availability database column -->
<!-- - Product image database design -->
<!-- - Coupon database best practices -->
<!-- - Orders database best practices -->
<!-- - Dynamic price database best practices -->
<!-- - Database enums best practices -->


app design should be in green color with shadows
admin design should with gradients and borders wihout shadows in github style