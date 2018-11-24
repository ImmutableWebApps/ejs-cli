# Immutable Web App EJS CLI

This module wraps [EJS](https://ejs.co/) in a CLI for the purposes of rendering the `index.html` of an [Immutable Web App](https://immutablewebapps.org) from an `index.ejs` template and a configuration JSON file.

## Getting Started

```bash
# install module globally
npm i -g @immutablewebapps/ejs-cli
```
## Usage

`iwa-ejs` reads an EJS template from `stdin` and outputs an HTML file to `stdout`.

```bash
# render from local template
cat index.ejs | iwa-ejs --d config.json > index.html

# or remote template
curl http://assets.example.com/v1.2.3/index.ejs | iwa-ejs --d config.json > index.html
```

### Alternatively, use [npx](https://www.npmjs.com/package/npx)

```bash
cat index.ejs | npx @immutablewebapps/ejs-cli --d src/json.json > index.html
```

## Disclaimer

This project was primarily created to demonstrate how to setup an Immutable Web App with [ng-immutable-example](https://github.com/ImmutableWebApps/ng-immutable-example) and [react-immutable-example](https://github.com/ImmutableWebApps/react-immutable-example).
