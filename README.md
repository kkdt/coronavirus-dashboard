# template: chrome reactjs extension

> When added as an Google Chrome Browser Extension, a new tab on the browser will show the the base ReactJS application (see screenshot below).

![alt text](doc/template.png "Base reactjs application as a Chrome extension")

# Overview

This is a **TEMPLATE** project for creating a Google Chrome Browser extension using ReactJS. Modifications to the standard `create-react-app` include the following.

* icons

* additional yarn scripts

* `manifest.json` to follow <a href="https://developer.chrome.com/extensions/manifest">Google Manifest</a>

# Quick Start

1. `yarn build`, Builds the app for production to the `build` folder, optimizing the build for the best performance.

2. Add the <a href="https://developer.chrome.com/extensions/getstarted">Google Chrome Extension</a> by pointing to the `build` folder from Step 1.

# Developing in Vagrant

If you do have have the necessary development tools, you have the option to build and development in a Vagrant environment.

1. Execute: `vagrant up`

2. Execute: `vagrant ssh`

3. Navigate to `/vagrant` and you should be in this project directory within the guest server

4. Build and add the extension folder

# Yarn Commands

1. `yarn clean`: Remove any built artifacts.

2. `yarn build`: Builds the extension for production to the `build` folder, optimizing the build for the best performance.

3. `yarn dist`: Package the extension into a tar.gz file to the `dist` folder.

4. `yarn test`: Launches the test runner in the interactive watch mode, see [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

5. `yarn eject`: This is a one-way operation - once you `eject`, you can not go back! (see notes below)

> If you are not satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you are on your own. You do not have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you could not customize it when you are ready for it.

# References

1. A tutorial from <a href="https://levelup.gitconnected.com/how-to-use-react-js-to-create-chrome-extension-in-5-minutes-2ddb11899815">Hu Chen</a>

2. https://github.com/facebook/create-react-app

3. <a href="https://www.iconfinder.com/iconsets/social-media-and-payment">Icons</a> provided by <a href="https://www.iconfinder.com/">IconFinder</a>
