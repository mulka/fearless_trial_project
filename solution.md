# Project Purple Cow

This solution uses Node and Express to serve
an HTML page which then includes JavaScript and
CSS files.

If you have Node installed already, you can run
`npm install` to install the required packages and 
`node app.js` to run the app.

You can also use Docker to build and run this solution. For example:  
```
docker build --tag fearless_trial_project .
docker run -p 3000:3000 fearless_trial_project
```

With either method, open http://localhost:3000/ in Chrome to view the app.

The port the app runs on is configurable with the `PORT` environment variable.
For example:
```
PORT=8080 node app.js
```

### Potential future updates

- Improve styling of application. Fonts, hover effects, CTA icon, background, menu
- Show current count on page without having to click the button
- If adding more features, start using front-end JS/CSS frameworks
- Compress JS/CSS to save load time, bandwidth cost
