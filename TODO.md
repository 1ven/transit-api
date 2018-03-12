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
- Investigate, why node service sometimes is running before postgres when running container first time and therefore throwing ECONNREFUSED 172.18.0.2:5432 error. Use "wait for it". https://docs.docker.com/compose/startup-order/
- Implement security recommendations from - https://expressjs.com/en/advanced/best-practice-security.html
  - Protect from XSS and other vulnerabilities
<!-- - Implement authentication -->
  - Investigate, what it is Basic auth, Digest auth, do we need it instead of local auth?
<!-- - Use boom errors instead of modelErrrors -->
<!-- - Implement sessions -->
  <!-- - Review koa-session library -->
- Implement password resetting
- Integrate Swagger

- Define API response structure. Inherit from GitHub?
  <!-- - Define errors structure as well -->
<!-- - Implement model validations -->
<!-- - Implement koa error handling -->

Bugs:
- Getting 500 error when don't providing content-type on sign in