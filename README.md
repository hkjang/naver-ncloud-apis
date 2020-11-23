# Public Google sheets parser

It is a simple parser that helps you use public Google sheets document as if they were a database.

The document to be used must be a Google Sheets document in the 'public' state and have a header in the first row. (e.g. [Google sheets for example](https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps/edit#gid=1839148703))

There is a limitation that only the data of the first sheet can be imported, but it seems that it can be fully utilized for simple purposes, so I made it.

It does not work in browsers where the [fetch API](https://caniuse.com/fetch) is not available.

**No API key required.** This means that the server does not need to use the private key to use the SDK.

You can also use it via free API. Please see [this documentation](https://api.fureweb.com).
If you have a public spreadsheet document, and the first row is a header and you have more than one row of data, you can call it free of charge through this API and use the result as a JSON response.

### Demo page
[Click here](http://fureweb.com/naver-ncloud-apis.html)

### Usage example
- Node.js
```js
const PublicGoogleSheetsParser = require('naver-ncloud-apis')

const spreadsheetId = '10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps'
const parser = new PublicGoogleSheetsParser(spreadsheetId)
parser.parse().then((items) => {
  // items should be [{ a: 1, b: 2, c: 3}, { a: 4, b: 5, c: 6 }, ...]
  console.log(items)
})
```

- browser
```html
<script src="https://cdn.jsdelivr.net/npm/naver-ncloud-apis@1.0.9/src/index.min.js"></script>

<script>
const spreadsheetId = '10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps'
const parser = new PublicGoogleSheetsParser(spreadsheetId)
parser.parse().then((items) => {
  // items should be [{ a: 1, b: 2, c: 3}, { a: 4, b: 5, c: 6 }, ...]
  console.log(items)
})
</script>
```

- free API ([documentation](https://api.fureweb.com))

```sh
curl -X GET "https://api.fureweb.com/spreadsheets/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps" -H "accept: */*"

# response (application/json)
{"data":[{"a":1,"b":2,"c":3},{"a":4,"b":5,"c":6},{"a":7,"b":8,"c":9}]}
```
**That's it!**

