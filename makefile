build:
	docker build -t botyougp .

run:
	docker run -d -p 3000:3000 --name botyougp --rm botyougp