# development topics

> This page covers some development topics that I want to understand about the [React](https://reactjs.org/) ecosystem - mostly to answer the question, "How does ____ work under the hood?"

> This project was created as a result from my wife asking me if there was a website out there where she can get and control the contents relating to COVID-19. And since I had some time due to the pandemic situation, I used it as a opportunity to dabble with the same tech from web baselines that I have supported as a backend/service developer. 

# Overview

I started this project using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) because,

> [create-react-app] sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

Before diving into code, I wanted to understand what I am getting with this CLI, mainly because of the "you are on your own" comment that was included with the `eject` script. Also, I wanted to see how using React/yarn compares to the Angular/npm setup we have at work for our UI/UX/web baseline around the following topics.

- Build script customization 
- IDE integration
- Package management
- Offline installation - i.e. in a private network without Internet connectivity

# create-react-app

From the documentations, `create-react-app` does a lot of the heavy lifting in creating and configuring a React application [[1]](https://reactjs.org/docs/create-a-new-react-app.html). I do not have any experience in the manual labor of creating a React application but will dig into the [Babel](https://babeljs.io/) and [webpack](https://webpack.js.org/) configurations that it uses under the hood as they apply to the topics above. The understanding that I have is 

1. The CLI abstracts much of the configuration away from the developer.
2. Developers can write shorter sugary code that meets some newer JavaScript spec, and Babel compiles the code that compliant JavaScript.
3. Webpack bundles every modules and their dependencies into static js/css/resource files.

# Build Scripts

This project uses [yarn](https://yarnpkg.com/). All workstations and servers are Linux-based and assuming all the appropriate tools are installed, yarn 'scripts' can become a flexible option. For this project, a `clean` and `dist` script were aded to follow Gradle convention. Likewise, a custom bash script was created in `.yarn/package.sh` to show that even more flexibility can be accomplished with some bash-fu to support builds and devops.

# IDE Integration

I believe that developers should not be forced to use a particular IDE. Most UI/UX developers I have worked with use VSCode. For this project, I ran into [WebStorm](https://www.jetbrains.com/webstorm/) and coming from an [IntelliJ](https://www.jetbrains.com/idea/) background, I love WebStorm! 

After developing the first 'milestone' of this prototype, I started looking to ways to avoid using relative path `import` statements because while poking around the web baseline at work, I noticed that we also use relative path imports and some source files are not easy on the eyes as there were multiple levels of parent/sub directories to navigate. The plugin [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) is a good solution; however, this was where I realized that the the solution could possibly cause an IDE conflict. 

- (solution 1) Using the `.env` and specifying the `NODE_PATH` [[2]](https://reactjs.org/docs/create-a-new-react-app.html). Unfortunately, this approach will be deprecated in a future major release of create-react-app.
 
```
Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.
``` 

- (solution 2) Including a `jsconfig.json` but this currently not supported by WebStorm [[3]](https://intellij-support.jetbrains.com/hc/en-us/community/posts/360002490579-Custom-import-paths-jsconfig-json).

- (solution 3) WebStorm (and PyCharm/IJ/RM/etc) understands `system.js` configurations so specifying that configuration in the project root directory [[4]](https://youtrack.jetbrains.com/issue/WEB-22717?_ga=2.172324448.2130574487.1587259633-1788218347.1586924153#focus=streamItem-27-1558931-0-0:).

Other things may come up with IDE integration to support multiple IDEs but for this one particular situation, having the `jsconfig.json` and the `system.js` checked into the baseline will be a good compromise to support VSCode and WebStorm.

# Package Management

> TODO

# Offline Installation

> A TODO item is to see how this handles a complete offline installation, from yarn install to having everything needed to run this application in a private network.

https://classic.yarnpkg.com/blog/2016/11/24/offline-mirror/

# Resources

1. https://reactjs.org/docs/create-a-new-react-app.html

2. https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d

3. https://intellij-support.jetbrains.com/hc/en-us/community/posts/360002490579-Custom-import-paths-jsconfig-json

4. https://youtrack.jetbrains.com/issue/WEB-22717?_ga=2.172324448.2130574487.1587259633-1788218347.1586924153#focus=streamItem-27-1558931-0-0: