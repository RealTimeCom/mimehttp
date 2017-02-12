## Extension Mime Type

**typemime - HTTP MIME Type**
```sh
$ npm install typemime
```
### Example
```js
const mime = require('typemime');

mime.file('/path/index.html');
// print: text/html; charset=UTF-8

mime.type['html'];
// print: text/html; charset=UTF-8
```

--------------------------------------------------------
**typemime** is licensed under the MIT license. See the included `LICENSE` file for more details.
