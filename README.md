This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TODO

- check out styled transition group again
- An alternative to `styled-system` is `@xstyled/system`. It may be more performant.
- When there is a [new release of eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/CHANGELOG.md) (> v2.18.2), enable `import/group-exports` as an error.
- `react-transition-group` fails in strict mode with a warning about `findDOMNode` usage.
- Delayed opacity animation on sidebar (half time).

## Justifications

- [use `type` for React props](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c) (and also [here](https://stackoverflow.com/a/52682220)).
- use arrow functions for [less lines and less nesting in the simple case](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/), plus it's consistent with how styled components are created. (Counterpoint available [here](https://stackoverflow.com/questions/49306148/why-is-arrow-syntax-preferred-over-standard-functions-for-pure-react-components).)

### Exceptions

- An exception to always using named exports gathered together at the end of the file is [this issue with exported TypeScript types](https://github.com/Microsoft/TypeScript/issues/21194).

## Notes

- [Visual Studio Code debugging](https://create-react-app.dev/docs/setting-up-your-editor/#visual-studio-code)
