# Evaluate a News Article with Natural Language Processing

This is the fourth project for Udacity's Front End Developer nanodegree.



## Note:

**IMPORTANT!!!**
**_The app uses the meaningcloud' Sentiment Analysis API. For the app to work you need an api key from [meaningcloud](https://www.meaningcloud.com)._**

Before proceeding with the installation you need to create a `.env` file in the project directory with your api key inside of it.

```
  API_KEY = YOUR_KEY
```

---

1. Open a terminal instance inside the project directory and run `npm install`.

2. run `npm run build:prod` to build the project.

3. run `npm start` in the terminal.

4. Open a navigator and visit `localhost:3000`.

# Dependencies

The project requires the following packages to run:

- Express v4.x
- Webpack@4.35.3
- webpack-cli@3.3.5
- babel v7.x
- node-fetch
- sass
- dotenv

# Testing

Both the [jest](https://jestjs.io) framework and the [transform-runtime](https://www.npmjs.com/package/@babel/plugin-transform-runtime) plugin are required to run the tests.

Run `npm test` inside the project directory.

# Webpack

This project uses webpack@4 to compile its JavaScript modules.

It has two config files: one for production and one for development.

To run in development just run the npm script `build:dev`.

In dev mode, it uses the webpack dev server with a proxy to forward any request to the local express server that runs at port 3000

