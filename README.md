## Info

This project is simple showcase of infinite scroll using IntersectionObserver built in NextJS.
Data is coming from Pocketbase database.

## Running project

1. Option with Docker

```
docker-compose up
```

Open [http://localhost:80](http://localhost:80) with your browser to see the result.

2. Option to run manually

To run NextJS part of app:

```bash
npm install
```

```bash
npm run dev
# or
npm run build
npm run start
```

To run Pocketbase

Download pocketbase app for your system from [Pocketbase docs](https://pocketbase.io/docs/).
Place runnable app into root of this project.

```bash
./pocketbase serve
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
