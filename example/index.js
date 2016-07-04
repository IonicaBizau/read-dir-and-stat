"use strict";

const readDirAndStat = require("../lib");

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
