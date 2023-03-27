# serpapi-nodejs-proxy-server

## Getting Started

Make sure you have the lastest version of Node and npm.

1. Clone this repository.
2. Rename `example.env` to `.env` or create `.env` and copy/paste text from `example.env`
3. Create a free [SerpApi](https://serpapi.com/users/sign_up) account, if you haven't already.
4. Copy your [API key](https://serpapi.com/manage-api-key) and paste it into your `.env` file
5. Run `npm install` to install all dependencies.
6. (Optional) If using VSCode, install the [REST Client extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). This is helpful for testing routes.
7. Set the Access-Control-Allow-Origin-Header to the name of the domain you will be querying the proxy server from by editing line 15 of `server.js`:

```
app.use(cors({ origin: "http://yourdomain.com" }));
```

8. Start the server by running `npm start`
