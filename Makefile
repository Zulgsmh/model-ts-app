up:
	docker-compose up -d

down:
	docker-compose down

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

api-extractor:
	yarn api-extractor run

documenter:
	yarn api-documenter markdown -i temp -o docs