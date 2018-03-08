up-dev:
	./scripts/env.sh docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
up-prod:
	./scripts/env.sh docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# TODO: fix migration name argument
make_migration:
	./scripts/env.sh yarn run migrate:make
# TODO: investigate, do we need to provide env variables here
run_migrations:
	./scripts/env.sh yarn run migrate:latest