# vue-pwa-template

## Project setup
```
npm install
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

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Memo

### Display a notification
See https://github.com/eolant/vuetify-toast-snackbar

### Inside a component

```js
// possible colors: success / error / info / warning
this.$toast.success('login page')
```

### Insite the store

myComponent.vue
```js
this.$store.dispatch('mymodule/myaction', { myProp, vm: this })
```

myModule.js
```js
async login({ commit, state }, payload) {
    payload.vm.$toast.error(err.message);
}
```
