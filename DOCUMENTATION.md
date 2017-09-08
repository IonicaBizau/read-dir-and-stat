## Documentation

You can see below the API reference of this module.

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

