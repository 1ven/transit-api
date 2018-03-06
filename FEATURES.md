- user
  - sign up
  - sign in
    * Sessions. Use `http_only` for `session_id` with 1d lifetime.
    * JWT. Use only `auth_token` with 1d lifetime and keep it in `http_only` cookies.
    * ~~JWT. As more safer solution, set 5m lifetime of `access_token` and use additionally `refresh_token` in `http_only` cookies as well in order to unauthenticate the user if hacker was got new tokens via refresh mechanism.~~
  - recover password
  - roles management