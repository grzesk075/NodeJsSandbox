# NodeJsSandbox
Node.js training code.

Folder ES8 contains modern Javascript tutorial.

Folder tutorials contains some better or worse  Node.js tutorials.

Step by step notices from the learnig process.

## 1. Environment setup
Install Node.js with NPM from [Node.js page](https://nodejs.org).

Extend PATH in .profile (for current user installation)
> PATH="$HOME/bin:$HOME/.local/bin:$HOME/nodejs/default/bin:$PATH"

REPL environment is available with `node` command (type .help for help).
> node

To run the JS file on V8 engine type
> node main.js

## 2. Node Package Manager
To install globally (-g) available executable programs and libraries (packages) for application express generator type
> npm install express-generator -g

You can create sample app and run it with
> express my-express-app

> cd my-express-app

> npm install

> npm start

Commands for: listing local packages, listing global packages, uninstall globally, initializing package.json, getting dependencies, testing, starting and stopping main file - are below (consecjutive).
> npm ls

> npm ls -g

> npm npm uninstall express-generator -g

> npm init

> npm install

> npm test

> npm start

> npm stop

Scripts named test, start and stop must be defined in package.json file.

It's also possible to publish your package to the world and to make it searchable by `npm search` or more convinient way on [several pages like this one](http://npmsearch.com/). The license has to be public.

You can also deploy your web application on cloud (e.g. Azure) or on Docker, or create desktop application with e.g. Electron framework.

The top IDEs for development of Node.js based web applications are:
* WebStorm from JetBrains (paid),
* Visual Studio Code from Microsoft (free),
* Eclipse with nodeclipse plugin (free),
* Cloud9 from Amazon (in cloud free for non-commercial use).

## 3. Typescript
Typescript must be installed globally, because the tsc program must be available. It's responsible for compiling typescript to javascript. This process of source to source compilation is called transpilling. The following command installs typescript globally, including code and executables.
> npm install -g typescript

> tsc -v

Tsc is available next to the npm program and displays its version with above command.
To compile ts to js use below command.

> tsc myfile.ts

To use require function in typescript, it's necassary to import @types/node module.
The command as follows imports it and extends package.json file.

> npm i @types/node
