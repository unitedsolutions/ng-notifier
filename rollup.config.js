export default {
  input: 'dist/ng-notifier.js',
  name: 'ngNotifier',
  output: {
    file: 'dist/ng-notifier.umd.js',
    format: 'umd'
  },
  sourceMap: false,
  globals: {
    'lodash': '_',
    'rxjs': 'Rx',
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core'
  },
  external: [
    'lodash',
    'rxjs',
    '@angular/core',
    '@angular/common'
  ]  
};
