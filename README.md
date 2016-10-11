
# read-dir-and-stat

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/read-dir-and-stat.svg)](https://www.npmjs.com/package/read-dir-and-stat) [![Downloads](https://img.shields.io/npm/dt/read-dir-and-stat.svg)](https://www.npmjs.com/package/read-dir-and-stat) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Reads the directory files and adds the stat info.

## :cloud: Installation

```sh
$ npm i --save read-dir-and-stat
```


## :clipboard: Example



```js
const readDirAndStat = require("read-dir-and-stat");

readDirAndStat((err, res) => {
    console.log(res);
});

console.log(readDirAndStat.sync());
// =>
// [ { path: '.../read-dir-and-stat/.git',
//     stat:
//      { dev: 16777220,
//        mode: 16877,
//        nlink: 13,
//        uid: 501,
//        gid: 20,
//        rdev: 0,
//        blksize: 4096,
//        ino: 5647152,
//        size: 442,
//        blocks: 0,
//        atime: 2016-07-04T08:37:44.000Z,
//        mtime: 2016-07-04T08:37:44.000Z,
//        ctime: 2016-07-04T08:37:44.000Z,
//        birthtime: 2016-07-04T08:37:44.000Z } },
//   { path: '.../read-dir-and-stat/example',
//     stat:
//      {...} },
//   { path: '.../read-dir-and-stat/lib',
//     stat:
//      {...} },
//   { path: '.../read-dir-and-stat/node_modules',
//     stat:
//      {...} },
//   { path: '.../read-dir-and-stat/package.json',
//     stat:
//      {...} } ]
```

## :memo: Documentation


### `readDirAndStat(inputPath, cb)`
Reads the files/directories and adds the stat information.

#### Params
- **String** `inputPath`: The directory path.
- **Function** `cb`: The callback function.

### `sync(inputPath)`
The sync version.

#### Params
- **String** `inputPath`: The directory path.

#### Return
- **Array** An array of objects containing:
 - `path` (String): The full file/directory path
 - `stat` (Object): The stat result.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`fs-file-tree`](https://github.com/IonicaBizau/fs-file-tree#readme)—Get a directory file tree as an object.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
