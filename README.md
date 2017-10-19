# Trioxis User Interface

Beautifully crafted user interface components of Trioxis

## Development

All components are tested, you can run tests with

```shell
yarn test --watch
```

Components can be evaluated visually using React Storybook

```shell
yarn run storybook
```

The package can be built with (useful for `yarn link`)

```shell
# once off
yarn prepare
# or, to watch
yarn watch "yarn prepare" ./src
```

### `yarn link` to co-develop another project

This package is published from `./lib` to maintain a flat file structure. See [this post for details](http://davidwells.io/blog/publishing-flat-npm-packages-for-easier-import-paths-smaller-consumer-bundle-sizes/).

We must, therefore, cd to `./lib` and then link from there.

```shell
yarn prepare &&\
cd ./lib &&\
yarn link &&\
cd -
```

Then in another project

```shell
yarn link @trioxis/ui
```

### Publishing

The package will be built into the `./lib` directory and published from there. Simply use:

```
yarn dist
```