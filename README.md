# NextJS + PayloadCMS Demo

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Clone repository:

```bash
git clone https://github.com/TopHatCroat/nextjs-payloadcms-demo.git
```

2. Install turbo and install packages:

```bash
yarn global add turbo
yarn install
```

3. Start a local MongoDB database using Docker:

```bash
docker run -d -p 27017:27017 mongo
```

4. Generate a `.env` file for the backend:

```bash
cp apps/backend/.env.template apps/backend/.env
```

5. Generate seed data for the backend:

```bash
turbo seed
```

6. Run the development servers for both the frontend and backend

```bash
turbo dev
```

7. Access the UIs:
   * Open [http://localhost:3000](http://localhost:3001) with your browser to see the admin UI
   * Open [http://localhost:3100](http://localhost:3000) with your browser to see the UI


## 🚀 Deployment

// TODO

## Contributing

Contributions are always welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes, and commit
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## Acknowledgements

Thanks to [next-enterprise](https://github.com/Blazity/next-enterprise) for providing the base for the frontend.
Thanks to [PayloadCMS](https://payloadcms.com) for providing the backend headless CMS for this project.
