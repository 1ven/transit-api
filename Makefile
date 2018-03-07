dev:
	./scripts/env.sh docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
prod:
	./scripts/env.sh docker-compose -f docker-compose.yml -f docker-compose.prod.yml up

# TODO: fix migration name argument
migrate_make:
	./scripts/env.sh yarn run migrate:make
migrate_latest:
	./scripts/env.sh yarn run migrate:latest