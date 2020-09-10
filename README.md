<h1 align="center">
  :nail_care: <strong>Watcher </strong> UI
</h1>

<h4 align="center">

[![Stars](https://img.shields.io/github/stars/DJRHails/watcher-ui.svg?style=plasticr)](https://github.com/DJRHails/watcher-ui/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/DJRHails/watcher-ui.svg?style=plasticr)](https://github.com/DJRHails/watcher-ui/commits/master)
[![GitHub issues](https://img.shields.io/github/issues-raw/DJRHails/watcher-ui?style=flat)](https://github.com/DJRHails/watcher-ui/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/DJRHails/watcher-ui)](https://github.com/DJRHails/watcher-ui/pulls)
</h4>

<h3 align="center">
  <a href="https://hails.info/">Built by Daniel Hails</a> |
  <a href="https://djrhails.github.io/watcher-ui/"> Storybook Docs </a> |
  <a href="https://github.com/DJRHails/watcher-ui/issues/new">Leave feedback</a>
</h3>

## :wrench: Technology

Watcher UI is a UI library designed for decentralised React webapps written in TypeScript.

It is styled and themed with [Styled Components] and [Styled System]. [Storybook] is used heavily to keep the components modular and document use-cases.
It also uses [Rimble] Icons with some custom additions.

### Inspiration
- [World Food Programme UI Kit] 
- [Rimble]
- [Aragon UI]
- [Chakra UI]

[Styled Components]:https://github.com/styled-components/styled-components
[Styled System]:https://https://styled-system.com/
[Reflexbox]:https://rebassjs.org/reflexbox/
[Storybook]:https://storybook.js.org/
[Rimble]:https://rimble.consensys.design/
[World Food Programme UI Kit]:https://github.com/wfp/ui/tree/next
[Aragon UI]:https://github.com/aragon/aragon-ui
[Chakra UI]: https://chakra-ui.com/

## :gear: Installation

```sh
# Go to your favourite directory and clone
git clone git@github.com:DJRHails/watcher-ui.git && cd watcher-ui

# Install all depedencies
yarn install

# 🎉 that’s it, you've installed repo locally. One last step!
```

### Running the code locally

##### `yarn storybook`

Runs Storybook in the development mode.<br />
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The stories will reload if you make edits.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## :wave: Contributing

Plob is used to speed up generating new components.

```bash
# Generate a reusable component
yarn generate component <name>
yarn generate component DogCard

# Generate a custom hook (WIP)
yarn generate hook <name>
yarn generate hook useAsync
```
