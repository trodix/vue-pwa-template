# Translation

> The local selected is saved into the localStorage

Add `$t('foo.bar')`

```html
<v-text-field
    v-model="password"
    type="password"
    :rules="rules.passwordRules"
    :label="$t('login.password')"
    required
    hint="Au moins 8 caractères"
    >{{ $t('login.password') }}</v-text-field>
```

Inside the local file `/src/locales/fr.json`

```json
{
    "foo": {
        "bar": "my value here"
    }
}
```
