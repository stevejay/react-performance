This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Change 2

## TODO

- check out styled transition group again.
- [Useful `.stylelintrc` rule adjustments](https://github.com/fknussel/atlaskit/blob/764f04f5064afb03f28fe42917ce7d8ba8c1c994/.stylelintrc).
- [Every Layout as React styled-components](https://danscan.github.io/react-every-layout/?path=/story/welcome--base-css).
- Maybe add [storybook docs](https://gist.github.com/shilman/bc9cbedb2a7efb5ec6710337cbd20c0c).

## Justifications

- [use `type` for React props](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c) (and also [here](https://stackoverflow.com/a/52682220)).
- use arrow functions for [less lines and less nesting in the simple case](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/), plus it's consistent with how styled components are created. (Counterpoint available [here](https://stackoverflow.com/questions/49306148/why-is-arrow-syntax-preferred-over-standard-functions-for-pure-react-components).)

### Exceptions

- An exception to always using named exports gathered together at the end of the file is required for [this issue with exported TypeScript types](https://github.com/Microsoft/TypeScript/issues/21194).

## Notes

- [Visual Studio Code debugging](https://create-react-app.dev/docs/setting-up-your-editor/#visual-studio-code)
