# The Movie Zone
(I bet everyone makes that pun..)

An App for displaying "Now Showing Movies", build with Vue, Vuex.

With Help from Vue-cli, Bootstrap.

### My Pre-Dev Assumptions

I'm going to try to test as much as I can, and TDD (which is a bit out of my comfort zone) as much as possible within the time constraints (I only had 24 hrs 🕐⚡ free at the weekend).

I'm envisage the app to be made up of a main user view with filters, and a Movie List component and a rating slider.

I'm going hit the API to get Movies and Genres and then dedupe the Genres.


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
