# github-vue-profile

# Temperatuur LCD Display by Robin Deleu

[![NPM Version](https://img.shields.io/npm/v/lcd-temperature-robind.svg)](https://www.npmjs.com/package/lcd-temperature-robind)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
![NPM Downloads](https://img.shields.io/npm/dw/lcd-temperature-robind)

This program use the official GITHUB API to diplay a github portfolio.

## Getting Started

### Prerequisites

You will need to instal the VUE-CLI and YARN.

Instal yarn:

```bash
choco install yarn
```

Instal VUE-CLI

```bash
yarn global add @vue/cli
#or
npm install -g @vue/cli
```

### Using the program

The program is ready to use. To use it propperly enter you're GITHUB generated code in the .env file.

#### Project setup

```bash
yarn install
```

#### Compiles and hot-reloads for development

```bash
yarn serve
```

#### Compiles and minifies for production

```bash
yarn build
```

#### Lints and fixes files

```bash
yarn lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Examples output

### Example one, default value's

The settings are:

```js
    login: {
      type: String,
      default: 'KingFluppe'
    },
    name: {
      type: String,
      default: 'Filip Van Saksen Coburg '
    },
    company: {
      type: String,
      default: 'Belgique'
    },
    avatar_url: {
      type: String,
      default: null
    },
    followers: {
      type: Number,
      default: 11492641
    },
    following: {
      type: Number,
      default: 1
    },
    public_repos: {
      type: Number,
      default: 0
    },
    loading: {
      type: [Boolean, String],
      default: false
    },
```

output:

![Default values](src/assets/defaultoutput.jpg"default values")

## Authors

* **Robin Deleu** - *Student VIVES University of Applied Sciences*

## License

This project is licensed under the MIT License see the [LICENSE.md](LICENSE.md) file for details
