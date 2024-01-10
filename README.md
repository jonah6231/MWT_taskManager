# A Todo CRUD App using MERN Stack and Docker

1. Clone the project:

```
git clone https://github.com/dung204/todo-app-with-docker.git
```

2. Build the frontend (the frontend uses Nginx to host static HTML, CSS, JS files):

```
cd frontend
npm run build
```

3. Initialize the website using `docker compose`:

```
docker compose up -d
```

or force building the image everytime:

```
docker compose up --build -d
```

4. Every changes in the frontend will also be updated in the container, due to the volume mapping in [`docker-compose.yml`](./docker-compose.yml) file:

```yaml
frontend:
  build: ./frontend
  hostname: frontend
  restart: on-failure
  depends_on:
    - backend
  ports:
    - 8080:80
  environment:
    VITE_API_URL: http://backend
  networks:
    - fullstack-app-network
  volumes:
    - ./frontend/build/:/usr/share/nginx/html/
```
