---
sidebar_position: 3
---

# Tìm hiểu về ES6

ECMAScript là phiên bản chuẩn hóa của JavaScript còn Javascript là ngôn ngữ lập trình. ECMAScript được tạo ra bởi Ecma
Intermational để chuẩn hóa javascript.

Nhiều trình duyệt còn chưa support đầy đủ các tính năng của ES6 nên nếu code thuần thì nhiều khả năng sẽ bị lỗi. Có thêm
Babel giúp viết được code ES6 mà khi complie ra sẽ biến thành code ES5 để nhiều trình duyệt có thể hiểu được.

## What?

**ES6** là viết tắt của **ECMAScirpt 6**. ES6 là một tập hợp kỹ thuật nâng cao của Javascript và nó là một chuẩn mực để
làm theo và cũng là chuẩn mực để cho những framework hay thư viện phát triển.

## Why?

Là tiêu chuẩn giúp cho các lập trình viên code js một cách chuẩn mực mà tối ưu nhất.

## How?

### So sánh giữa ES5 và ES6

#### 1. Cú pháp ES6 mới

#### 1.1 Let

- Khai báo một biến ở phạm vi block-scoped ( trong {})
- Biến khai báo bởi let thì không có trong global object (window)
- Khai báo biến trùng tên (Redeclaration: khai báo lại) trong cùng phạm vi thì sẽ báo lỗi (has already been declared)
- Khi sử dụng một biến mà trước khi khai báo bằng từ khóa let (hoisting)thì sẽ báo lỗi (Cannot access 'tên biến' before
  initialization). Nếu là var thì biến đó sẽ có giá trị là undefinded
- let với vòng lặp (JavaScript let and callback function in a for loop)

```jsx title="closure basis"
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
// result: 5 5 5 5 5
```

Có thể sửa thành:

```jsx title="IIFE "
for (var i = 0; i < 5; i++) {
  ;(function (j) {
    setTimeout(function () {
      console.log(j)
    }, 1000)
  })(i)
}
///result: 0 1 2 3 4
```

```jsx title="basic function"
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
// result: 0 1 2 3 4
```

#### _1.2 Const_

- Khai báo một lần, không thể thay đổi giá trị
- Block scope
- Cú pháp const `CONSTANT_NAME` = `value`; **_bắt buộc phải có value_**
- const and Object

```jsx
const person = {age: 20}
person.age = 30 // OK console.log(person.age); // 30

// person = {age: 40} // TypeError
```

- const mang ý nghĩa là **constant** , không phải **immutablity**. Nếu muốn Object là **immutablilty** thì ta sử dụng

```jsx
const person = Object.freeze({age: 20})
person.age = 30 // TypeError
// Object.freeze chỉ là shallow (nông cạn) nghĩa là nó
// có thể đóng băng các thuộc tính của đối tượng, không phải các đối tượng
// được tham chiếu bởi các thuộc tính.
```

```jsx
const company = Object.freeze({
  name: 'ABC corp',
  address: {
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    zipcode: 95134,
  },
})
company.address.city = 'USA' // OK
```

- const với Array

```jsx
const colors = ['red']
colors.push('green')
console.log(colors) // ["red", "green"]

colors.pop()
colors.pop()
console.log(colors) // []

colors = [] // TypeError
```

- const với vòng lặp

  - Với `for..of `

  ```jsx
  let scores = [75, 80, 95]
  for (let score of scores) {
    console.log(++score)
  }
  // Nếu ko muốn thay đổi biến giá trị của biến
  let scores = [75, 80, 95]
  for (const score of scores) {
    console.log(++score) //error
  }
  ```

  - Với for is not working

  ```jsx
  for (const i = 0; i < scores.length; i++) {
    // TypeError
    console.log(scores[i])
  }
  ```

  #### 1.3 Template literals (kí tự chuỗi)

- Có thể viết được xuống dòng (Nhận phím enter, Nếu thanh thành dấu ' hoặc " sẽ báo lỗi cú pháp)

```jsx
let p = `This text can span multiple lines`
```

- Biểu thức nội suy chuỗi Với `template literals`, một biểu thức có thể được nhúng trong một placeholder. Một
  placeholder được biểu thị bằng `$ {}`, với bất kỳ thứ gì trong dấu ngoặc nhọn được coi là JavaScript và mọi thứ nằm
  ngoài dấu ngoặc được coi là một chuỗi:

```jsx
let firstName = 'John',
  lastName = 'Doe'
let greeting = `Hi ${firstName}, ${lastName}`
console.log(greeting) // Hi John, Doe
```

```jsx
let price = 8.99,
  tax = 0.1
let netPrice = `Net Price:${(price * (1 + tax)).toFixed(2)}`
console.log(netPrice) // netPrice:$9.89
```

- `Tagged templates` thực hiện chuyển đổi trên khuôn mẫu và trả về chuỗi kết quả.

```jsx
function tag(literals, ...substitutions) {
  console.log(literals)
  return literals
}
let greeting = tag`Hi`
console.log(greeting[0])

function format(literals, ...substitutions) {
  let result = ''
  console.log('===>', literals, '\n' + '====>', substitutions, '\n', substitutions.length)
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i]
    result += substitutions[i]
  }
  // add the last literal
  result += literals[literals.length - 1]
  return result
}
let quantity = 9,
  priceEach = 8.99,
  a = 10
result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)},  ${a}`
console.log(result) // 9 items cost $80.91.
```

#### 1.4 Object literal syntax extensions in ES6 (Cú pháp Object trong ES6)

- Khởi tạo nhau thuộc tính của Đối tượng (Object)

Ví dụ 1:

```jsx
function createMachine(name, status) {
  return {
    name, // name:
    name status // status: status
  };
}

  //VD2:
  let name = 'Computer',
  status = 'On';

  let machine = {
    name,
    status };
```

- Computed property name (Tên thuộc tính được tính toán)

```jsx
let prefix = 'machine'
let machine = {
  [prefix + ' name']: 'server',
  [prefix + ' hours']: 10000,
}
console.log(machine['machine name']) // server
console.log(machine['machine hours']) // 10000
```

- Concise method syntax (Cú pháp phương thức ngắn gọn)

  - ES6 làm cho cú pháp tạo một phương thức của đối tượng ngắn gọn hơn bằng cách loại bỏ dấu hai chấm (:) và từ khóa
    hàm. VD:

    ```jsx
    let server = {
      name: 'Server',
      restart: function () {},
      restart() {
        console.log('The' + this.name + ' is restarting...')
      },
    }
    ```

  - Ngay cả tên hàm có dấu cách vẫn được tính là hợp lệ

  ```jsx
  (object_name['property name']();)
  let server = {
    name: 'Server',
    restart() {
      console.log('The ' + this.name + ' is restarting...')
    },
    'starting up'() {
      console.log('The ' + this.name + ' is starting up!')
    },
  }

  server['starting up']()
  ```

#### 1.5 JavaScript Default Parameters (Tham số mặc định của javascript)

- Parameters là tham số, Arguments là đối số
- Cú pháp:
  ```jsx
  function fn(param1=default1, param2=default2,..) { }
  ```
- VD

  ```jsx
  function say(message = 'Hi') {
    console.log(message)
  }

  say() // 'Hi'
  say('Hello') // 'Hello'
  say(falsy || 'Hi')
  ```

#### 1.6 The Ultimate Guide to JavaScript Rest Parameters (Hướng dẫn cơ bản về các tham số còn lại của JavaScript)

- Rest(...)

  ```jsx
  function fn(a, b, ...args) {
    //...
  }
  ```

- JavaScript rest parameters and arrow function

  - Arrow function thì không có arguments object. Nếu bạn muốn truyền một số đối số cho arrow function, bạn phải sử dụng
    rest parameters.

  ```jsx
  const combine = (a, ...args) => {
    return args.reduce(function (prev, curr) {
      return prev + ' ' + curr
    })
  }
  let message = combine('JavaScript', 'Rest', 'Parameters') // =>
  console.log(message) // JavaScript Rest Parameters
  ```

- JavaScript rest parameter in a dynamic function
  ```jsx
  var showNumbers = new Function('...numbers', 'console.log(numbers)')
  showNumbers(1, 2, 3) //[1, 2, 3]
  ```

#### 1.7 JavaScript spread operator (Toán tử mở rộng)

```jsx
const odd = [1, 3, 5]
const combined = [2, 4, 6, ...odd]
console.log(combined)
```

- JavaScript `spread operator `and `apply()` method

```jsx
function compare(a, b) {
  return a - b
}

var result = compare.apply(null, [1, 2])
console.log(result) // -1

let result = compare(...[1, 2])
console.log(result) // -1
```

- A better way to use the Array’s push() method example ()

```jsx
var rivers = ['Nile', 'Ganges', 'Yangte'];
var moreRivers = ['Danube', 'Amazon'];

Array.prototype.push.apply(rivers, moreRivers);
console.log(rivers);

==> rivers.push(...moreRivers);
```

- JavaScript spread operator and strings
  ```jsx
  let chars = ['A', ...'BC', 'D']
  console.log(chars) // ["A", "B", "C", "D"]
  ```

#### 1.8 Destructuring

`Destructuring` là một cú pháp cho phép bạn gán các thuộc tính của một Object hoặc một Array. Điều này có thể làm giảm
đáng kể các dòng mã cần thiết để thao tác dữ liệu trong các cấu trúc này. Có hai loại `Destructuring`:

- Destructuring Objects
- Destructuring Arrays.

```jsx
var a, b
;[a, b] = [1, 2]
console.log(a, b) //1 2

//or

const [a, b] = [1, 2]
console.log(a, b) //1 2

const {a, b} = {a: 1, b: 2}
console.log(a, b) // 1, 2

// add c

const {a, b, c} = {a: 1, b: 2, c: () => 3}
console.log(a, b, c) // 1, 2, () => 3

// add ...c

const {a, b, ...c} = {a: 1, b: 2, c: () => 3, d: 4}
console.log(a, b, c) // 1, 2, {d: 4, c: f} với f = () => 3
```

- Gán giá trị mặc định

```jsx
let a, b
;[a = 1, b = 2] = [10]
console.log(a) // 10
console.log(b) // 2
```

- Nếu ko trả về đúng kiểu sẽ báo lỗi

```jsx
function getItems() {
    return null;
}
let [x = 1, y = 2] = getItems();
===> Uncaught TypeError: getItems is not a function or its return value is not iterable

 -> CÁch khắc phục
    function getItems() {
    return null;
    }
    let [a = 10, b = 20] = getItems() || [];
    console.log(a); // 10
    console.log(b); // 20
```

- Destructuring cũng có tác dụng với các mảng lồng nhau

```jsx
function getProfile() {
  return ['John', 'Doe', ['Red', 'Green', 'Blue']]
}
let [firstName, lastName, [color1, color2, color3]] = getProfile()

console.log(color1, color2, color3) // Red Green Blue
```

- Ứng dụng thực tế

  - Hoán đổi giá trị

  ```jsx
  let a = 10,
    b = 20

  ;[a, b] = [b, a]

  console.log(a) // 20
  console.log(b) // 10
  ```

  - `Function` trả về nhiều giá trị

  ```jsx
  function stat(a, b) {
    return [a + b, (a + b) / 2, a - b]
  }
  let [sum, average, difference] = stat(20, 10)
  console.log(sum, average, difference) // 30, 15, 10
  ```

#### 1.9 For...of

- Cú pháp

  ```jsx
  let scores = [80, 90, 70]
  for (const score of scores) {
    console.log(score)
  }
  ```

Để truy cập chỉ mục của các phần tử mảng bên trong vòng lặp, bạn có thể sử dụng câu lệnh `for ... lop` với phương thức
entries() của mảng. Phương thức `array.entries()` trả về một cặp `[index, element]` trong mỗi lần lặp.

```jsx
let colors = ['Red', 'Green', 'Blue']
// nguyên tắc vẫn sử dụng destructuring
for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index}`)
}
```

- In-place object destructuring with `for…of` (Biến đổi gán các thuộc tính Object với `for...of`)

```jsx
const ratings = [
  {
    user: 'John',
    score: 3,
  },
  {user: 'Jane', score: 4},
  {user: 'David', score: 5},
  {user: 'Peter', score: 2},
]
let sum = 0
for (const {score} of ratings) {
  sum += score
}

console.log(`Total scores: ${sum}`) // 14
```

- `Iterating over strings` (Lặp với chuỗi)

```jsx
let str = 'abc'
for (let c of str) {
  console.log(c)
}
```

#### 1.10 Octal and Binary Literals (Bát phân và nhị phân)

ES6 cho phép bạn chỉ định chữ số bát phân bằng cách sử dụng tiền tố 0o theo sau là một chuỗi các chữ số bát phân từ 0
đến 7.

- Bát phân

  ```jsx
  let c = 0o51; console.log(c); // 41

  Error:
  let d = 0o58;
  console.log(d); // SyntaxError
  ```

- Nhị Phân ES6 đã thêm hỗ trợ cho các ký tự nhị phân bằng cách sử dụng tiền tố 0b theo sau là một chuỗi các số nhị phân
  (0 và 1).
  ```jsx
  let f = 0b111
  console.log(f) // 7
  ```

### Tài liệu tham khảo

https://www.javascripttutorial.net/es6/

https://viblo.asia/p/ecmascript-es6-la-gi-overview-es6-gAm5y9RA5db
