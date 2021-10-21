<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->
hacktoberfest 2021


















# read-dir-and-stat

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/read-dir-and-stat.svg)](https://www.npmjs.com/package/read-dir-and-stat) [![Downloads](https://img.shields.io/npm/dt/read-dir-and-stat.svg)](https://www.npmjs.com/package/read-dir-and-stat) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Reads the directory files and adds the stat info.

















## :cloud: Installation

```sh
# Using npm
npm install --save read-dir-and-stat

# Using yarn
yarn add read-dir-and-stat
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











## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:





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


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `fs-file-tree`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
