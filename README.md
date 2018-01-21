## MIME HTTP Type

```sh
$ npm install mimehttp
```
### Example
```js
const mime = require('mimehttp');

mime.file('/path/index.html');
// print: text/html; charset=UTF-8

mime.type['html'];
// print: text/html; charset=UTF-8
```

--------------------------------------------------------
**mimehttp** is licensed under the MIT license. See the included `LICENSE` file for more details.
