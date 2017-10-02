# eslint-config-verkstedt
ESLint config

## Integration

- `npm install --save-dev eslint babel-eslint eslint-config-verkstedt eslint-plugin-react`
- Use the following `.eslintrc` if it's not in the repo (it should!)

```
{
  "extends": "verkstedt"
}
```

## Troubleshooting

Issue: **vim can't find the local `eslint` binary, because it's located under `node_modules`.**

Solution: There's a [nice workaround](http://blog.pixelastic.com/2015/10/05/use-local-eslint-in-syntastic/) for that, or use [ale](https://github.com/w0rp/ale).
