"use strict";

import fs from "fs/promises";
import path from "path";

/**
 * readDirAndStat
 * Reads the files/directories and adds the stat information.
 * @name readDirAndStat
 * @function
 * @param {string} inputPath The directory path.
 * @returns {Promise} The promise with the result.
 */
export default async function readDirAndStat (inputPath) {

    if (!inputPath) {
        inputPath = process.cwd();
    }

    const res = await fs.readdir(inputPath);
    return Promise.all(res.map(c => {
        let fullPath = path.join(inputPath, c);
        return fs.stat(fullPath).then(stat => {
            return { path: fullPath, stat: stat };
        });
    }));
}