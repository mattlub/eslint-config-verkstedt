# eslint-config-verkstedt
ESLint config

## Integration

- `npm install --save-dev @verkstedt/eslint-config-verkstedt`
- or `yarn add @verkstedt/eslint-config-verkstedt --dev`
- Use the following `.eslintrc` if it's not in the repo (it should be!)

```
{
  "extends": "@verkstedt/verkstedt"
}
```

## Troubleshooting

Issue: **vim can't find the local `eslint` binary, because it's located under `node_modules`.**

Solution: There's a [nice workaround](http://blog.pixelastic.com/2015/10/05/use-local-eslint-in-syntastic/) for that, or use [ale](https://github.com/w0rp/ale).
