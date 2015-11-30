# note-taker
A mobile-first app to take notes. Live version available at [therebelrobot.github.io/note-taker](http://therebelrobot.github.io/note-taker). 

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

This project runs unit tests using `mocha` and coverage reports using `istanbul`. To run tests and build coverage reports, run:

```bash
npm test
```
