
## Table of Contents
- [Quick API Example](#quick-api-example)
  * [quick start](#quick-start)

## Quick API Example

### [quick start](../../sample/api/quickStart)  <a href="../images/common-api-sample-0.gif"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEUAAAD////h4eFwcHD5+fnd3d38/PzS0tJ5eXnW1taRkZGwsLDa2trt7e29vb3o6OgnJyfGxsaDg4NTU1MZGRmenp4iIiI3NzdJSUliYmJZWVmoqKjz8/M9PT1CQkK2trYSEhIvLy9IkyraAAAE2ElEQVRogbWb6YKCIBSFMQlLK7OyZbKy93/JQc1CZTmAnN+j32Dcy90gkZsopYwyx4cbEdsHquSV3t7ko3p/efzFaVnkQcF5kT7PRKrTe7Vb2nwBGMwW5VEB/S7/mSbVzOC8POqhvR4puG4EzIoYo3Y6ZnzZRroZTLOHDbb95unWf8WlLbXTgfqBMzdso1S/z7TgxPoji6qzSPNba8DVwQfb6LhxWXHxNr/ZuOi7PTj1xza6qfa3Arz9m4dLyHltA14bnKOVMhy8mxHLlaJgR5+hVoyBZ9pWom5Tc56CA3AJ+ZuQJ+AgXL5mE/gehjv9nUfgIhR3srdFMIs24bhjex6suNqHBJNECb4F5ZLTVjglRXCgDf2TaFQCOAnNJaSUgeklPJhsJODgH7rRdQpemJ9KwaBep/sEfDU/lMzh19gIjLgsboeVVU4h02EERiK71gEkvnswH4ChwL0BM+84IRbBDFpG7/Jyv++dC2AsyPrFi4VPirH6gRkWzAqBauVj9fkXvMYeGETIS/fIu/yCV9gDo0zodXIEP+kHvAXD93EKRl2zuuIDfoF/P839NoC/kyj+gNFfS5Z0OmXu+20LztFESZrtbsENMlDRguFMaSkDc6O2/96rFgz7IQU4omVtCX63YDi0VIH5YW4bJq45GI+l1WD+e9VW4IyD8X2pA1sadczB+K5c6MD8e1tERmcOxg92A5h7ohp+V0Uo/m8awRalsYQA0SUO5pHRE3tXRiwSUwTMjRo6tEqCnhAoGDTqFbHw8iCYG7XZJ8XEIoaBwRE1vjUmFnaPg/mRZzg5YmJxqtmA+Uld68EWMbIdWH9ShwTzk1pt1AE/dSOqfHtg8E55EAQF6zxJMHOKDLWNQA6Eq9C77JhYVBcswFuTscRBfDW716Z3rWY/FrnWQAyUkuXcYCwKyeYNfRg3XaxBVxCo3oOCoxyN7LcEz2AM4KZyBheEaquA3rTiAq+z3zgYLIAQQyZhNl1R95mSNi6z6YpKGjCc6WnAiOkK2rMGDAe4SrB11Stu8+MFWjZSgUHTFbTrii/oZ5J3/GHT/emcd2DUoKRgl9pi02hswDn4rSXgwqm13hfYUOc1ATvWjy9VDwY7TmPw3bGY2bY3WzDFKlXD+YbErZxIPq63K5Rj20sEOxdQ+95AB6aQ2xTAQCKq1FIAYw2lDswc6mmiPk37D5gh+6Rvhvg1AxcDMOSwO/DOtTDfqZ8V+Lb4gHJXA859h4CqMRiw5SSi3kMx3w7yr41rto9Ck++CukTjpiY/VI2HmzdWnE8QWvUBZ0B6CbMg4nCC94yeSVf5cELEnL0vKDE+HsyB5HVQ7i5SgcNOZJSRGoxHnPY6RDrw/GNzvcZDbJNBskBb+zoeYZuOzrm07Ix6TiaAJcOCAdZ8nU4ey8YjZx++mY4KKgZCPaaqZTrIGPIR2FnddilFKIZ+8xlOok51ISeoxpzZTJv7qroyoh7s3s0xcZy6jLJ7TtZwPRL127XD+z5hO1epu6Whv67APFz3Sn9Jw3RBw9y6kutmKoqZr6RUWJdyuFp9SQwD81W/rIpJl9J8Ewa9dsSWB7Cxfo4L7MoTfNGqSg7G6bF3jF8xs7laxjbZTWlg+2uJX++yBLda7tLbY+DUTpfjIUtM14y8wR8x2svxBf+sMzKVqklCrQAAAABJRU5ErkJggg==" style="height:30px" alt=animation></a>

- [quickStart.js](../../../../doc/apiSamples)

```js
const {
    compile
} = require('docway');

compile({
    template: ({
        title
    }) => `## ${title}`,

    content: {
        title: 'test'
    }
}).then((doc) => {
    console.log(doc);
});

```

- run sample

```
$ node quickStart.js 
## test

```


