# Toast

## Display a notification
See https://github.com/eolant/vuetify-toast-snackbar

### Inside a component

```js
// possible colors: success / error / info / warning
this.$toast.success('login page')
```

### Inside the store

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