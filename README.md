# The Movie Zone
(I bet everyone makes that pun..)

An App for displaying "Now Showing Movies", build with Vue, Vuex.

With Help from Vue-cli, Bootstrap.

### My Pre-Dev Assumptions

I'm going to try to test as much as I can, and TDD (which is a bit out of my comfort zone) as much as possible within the time constraints (I only had 24 hrs 🕐⚡ free at the weekend).

I'm envisaging the app to be made up of a main user view with filters, and a Movie List component and a rating slider.

I'm going hit the API to get Movies and Genres and then dedupe the Genres.

### Retrospective Mea Culpa

The requirements are fullfilled, but at that velocity TDD went out of the window around the 10 hours mark. I like to say that all success is ultimately a by-product of a greater failure, but this is my failure as I was overambitious within the time I had available. I refactored around hour 16 which made a lot of my original tests fail, and I did not have the time to rewrite them in line with the refactor. The UX is missing some basic requirements e.g: loading indicators, filter transitions, a better filtering layout for mobile and a fine style pass to make it a bit less ugly.

## Project setup
```
npm install
```
## Add your API KEY
create an env.local file containing
```
VUE_APP_API_KEY=<<YOUR_API_KEY_HERE>>
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```
## Run Test Watcher
```
npm run test:unit:watch
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
