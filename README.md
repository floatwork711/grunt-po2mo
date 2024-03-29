# grunt-po2mo

[![npm](https://flat.badgen.net/npm/license/makensis)](https://www.npmjs.org/package/@fltwk/grunt-po2mo)
[![npm](https://flat.badgen.net/npm/v/makensis)](https://www.npmjs.org/package/@fltwk/grunt-po2mo)
[![CircleCI](https://flat.badgen.net/circleci/github/floatwork711/grunt-po2mo)](https://circleci.com/gh/floatwork711/grunt-po2mo)
[![David](https://flat.badgen.net/david/dev/floatwork711/grunt-po2mo)](https://david-dm.org/floatwork711/grunt-po2mo?type=dev)

# grunt-po2mo

Compiles .po files into binary .mo files with `msgfmt`

## Installation

```sh
npm install @fltwk/grunt-po2mo --save-dev
```

## Usage

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-po2mo');
```

In your project's Gruntfile, add a section named `po2mo` to the data object passed into `grunt.initConfig()`.

```
grunt.initConfig({
  po2mo: {
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
})
```

### Options

#### options.deleteSrc

Type: `Boolean`
Default value: `false`

Will delete the source .po file.

### Examples

```
grunt.initConfig({
  po2mo: {
    files: {
      src: 'languages/fr.po',
      dest: 'languages/fr.mo',
    },
  },
})
```

```
grunt.initConfig({
  po2mo: {
    files: {
      options: {
        deleteSrc: true
      },
      src: 'languages/fr.po',
      dest: 'languages/fr.mo',
    },
  },
})
```
