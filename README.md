# TO — DO

[![Build Status][netlify-badge]][netlify-url]
[![figma][figma-badge]][figma-url]

> to do app with a little extras

## Development Guide
```bash
# install project dependencies
$ yarn

# development server
$ yarn dev # starts dev server on port 3000

# build static site
$ yarn build # outputs to ./build directory

# build static site + deploy to firebase (although i'm not using it)
$ yarn deploy # you have to set up auth & realtime database & hosting on firebase + some build system for it
```



## Tech Stack

this app is heavily built on [react hooks](https://reactjs.org/docs/hooks-intro.html)

#### Front-End Packages

| name | license | description |
|:-----|:-------:|:------------|
| [`react`](https://reactjs.org/) | [`MIT`](https://api.github.com/repos/facebook/react/license) | declarative, component-based, functional approach to user interfaces |
| [`styled-components`](https://styled-components.com/) | [`MIT`](https://api.github.com/repos/styled-components/styled-components/license) | `css-in-js` library, composable styling |
| [`react-firebase-hooks`](https://github.com/csfrequency/react-firebase-hooks) | [`MIT`](https://api.github.com/repos/csfrequency/react-firebase-hooks/license) | react hooks for firebase |
| [`date-fns`](https://date-fns.org/) | [`MIT`](https://api.github.com/repos/date-fns/date-fns/license) | modern javascript date utility library |
| [`react-alert`](https://github.com/schiehll/react-alert) | [`MIT`](https://api.github.com/repos/schiehll/react-alert/license) | alerts for react |
| [`react-content-loader`](https://github.com/danilowoz/react-content-loader) | [`MIT`](https://api.github.com/repos/danilowoz/react-content-loader/license) | component to easily create placeholder loadings |



#### System Dependencies
| name   | min. version |
|:-------|-------------:|
| `bash` |      `3.0.0` |
| `node` |      `8.0.0` |
| `yarn` |      `1.0.0` |


---

copyright content:
1. [illustrations](https://dribbble.com/shots/5056311-Build-Generate-Quotes)
2. [sound alerts](https://github.com/azer/alert) (but probably belongs to apple anyway)

---

<sub>this app is based on the scope provided by [chama-frontend-assignment](https://github.com/chamatheapp/chama-frontend-assignment)</sub>

[netlify-badge]: https://api.netlify.com/api/v1/badges/0540ff3b-836b-47eb-ac89-536d85c12baa/deploy-status
[netlify-url]: https://app.netlify.com/sites/vitordino-todo/deploys

[figma-badge]: https://img.shields.io/badge/Ω-figma-444648.svg?colorA=242628
[figma-url]: https://www.figma.com/file/AaQv1jHwjaqR7rnAUR5B7U/to-do
