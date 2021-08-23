# REVERSED SPIDER SOLITAIRE FINAL PROJECT

This project is prepared as a capstone project for Trendyol Front End Bootcamp which is organised with the partnership of Kodluyoruz. The one suit spider solitaire game is developed by react. \

You can via following link. [PLAY!](https://github.com/facebook/create-react-app)

## OVERVIEW

![game overview](./src/Assets/image/overview.png)
The game is one suit spider solitaire but the logic is vice versa which means the card series should be from A to K.

- Cards should be in series
- Single or cards in series can be moved
- Completing a serie A to K gives one point
- To be able to beat the game eight series should be completed
- There are five card stacks at the left bottom corner
- Each of them adds one open card to each row regardless the values of cards
- Local storage is used to store best timings

## PACKAGE DETAILS

- The project is based on ReactJS
- Cypress / Jest is used for testing
- It is deployed to Heroku where automatic deployment is active (CI/CD)
- React Router for routing
- Css module for styling

## INSTALLATION

```
git clone https://github.com/canberkonem/reversed-spider-solitaire.git
```

```
npm install

npm run start
```

## SCORE

The project is taking advantage of local storage to register game data.

Best ten completing time of the project is on display at records page.

## APP PERFORMANCE

The lighthouse test result is below.

## E2E TEST

Execute following code to perform e2e tests made by using Cypress

```
npx cypress open
```

### The testing conditions

- M1 2020 MACBOOK AIR
- 100 mbps connection

![game overview](./src/Assets/image/lighthouse.png)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

for Trendyol Front End Bootcamp which is organised with the partnership of Kodluyoruz
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
