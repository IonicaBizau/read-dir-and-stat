"use strict";

const fs = require("fs")
    , path = require("path")
    , sameTime = require("same-time")
    , bindy = require("bindy")
    ;

/**
 * readDirAndStat
 * Reads the files/directories and adds the stat information.
 *
 * @name readDirAndStat
 * @function
 * @param {String} inputPath The directory path.
 * @param {Function} cb The callback function.
 */
function readDirAndStat (inputPath, cb) {

    if (typeof inputPath === "function") {
        cb = inputPath;
        inputPath = process.cwd();
    }

    fs.readdir(inputPath, (err, res) => {
        if (err) { return cb(err); }
        sameTime(bindy(res, (c, done) => {
            let fullPath = path.join(inputPath, c);
            fs.stat(fullPath, (err, stat) => {
                if (err) { return done(err); }
                done(null, {
                    path: fullPath
                  , stat: stat
                });
            });
        }), cb);
    });
}

/**
 * sync
 * The sync version.
 *
 * @name sync
 * @function
 * @param {String} inputPath The directory path.
 * @returns {Array} An array of objects containing:
 *
 *  - `path` (String): The full file/directory path
 *  - `stat` (Object): The stat result.
 */
readDirAndStat.sync = function (inputPath) {
    inputPath = inputPath || process.cwd();
    return fs.readdirSync(inputPath).map(c => {
        let fullPath = path.join(inputPath, c);
        return {
            path: fullPath
          , stat: fs.statSync(fullPath)
        };
    });
};

module.exports = readDirAndStat;
