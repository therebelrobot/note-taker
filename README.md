# note-taker
A mobile-first app to take notes. Live version available at [therebelrobot.github.io/note-taker](http://therebelrobot.github.io/note-taker). 

Built in part as a test of the new v1 of [Vue.js](http://vuejs.org/)

### Architecture

This application is built using `browserify` and CommonJS for dependency resolution. All files have been built and placed in the root of the project, however if you want to view the source files, those can be found in `/src` in their respective folders.

#### Libraries

##### Included

- `lodash` - *For cross-browser friendly collection management*
- `marked` - *For rendering markdown to HTML*
- `moment` - *For user-friendly timestamps*
- `store2` - *For localstorage access*
- `vue` - *For DOM/event/data-binding*
- `vue-router` - *For URL routing/handling*

##### Build / Test

- `browser-sync` - *For development reloading*
- `browserify` - *For dependency resolution*
- `chai` - *For testing / BDD language parser*
- `del` - *For directory cleaning on build*
- `glob` - *For finding spec test files*
- `gulp` - *For build / automation*
- `gulp-autoprefixer` - *For cross-browser CSS prefixing*
- `gulp-copy` - *For copying static files in gulp*
- `gulp-if` - *For gulp logic*
- `gulp-less` - *For LESS >> CSS compiling*
- `gulp-load-plugins` - *For loading gulp plugins easily*
- `gulp-plumber` - *For error handling in gulp*
- `gulp-rename` - *For file renaming in gulp*
- `gulp-size` - *For returning files sizes after compilation in gulp*
- `gulp-sourcemaps` - *For building sourcemaps for compiled files in gulp*
- `gulp-util` - *For various utilities in gulp*
- `istanbul` - *For code coverage testing*
- `mocha` - *For testing*
- `partialify` - *For require-injecting html into view components*
- `run-sequence` - *For running sequences in gulp*
- `standard` - *For code style*
- `vinyl-source-stream` - *For handling browserify streams in gulp*

### Build

This application uses `gulp`, `browserify`, and `less` for compiling, and `vue.js` for runtime logic. `node` and `npm ` are required to build. To build, run:

```bash
npm run build
```

### Develop

The included `gulpfile.js` file also serves as a development server with `browser-sync` for auto-refresh. To develop, run:

```bash
npm start
```

### Tests

*Note: tests for this project are still under construction, however the structure for them are in place. Each view is injected with all dependencies, which can in turn be mocked as necessary for testing various functionality.*

This project runs unit tests using `mocha` and coverage reports using `istanbul`. To run tests and build coverage reports, run:

```bash
npm test
```
