---
sidebar_position: 1
---

# Closure

## What?

**Closure** là gì? `bao đóng`:

Một closure là một hàm con có thể truy cập biến của hàm cha

- Closure có 3 scope chain
  - Có thể truy cập đến biến của chính nó (biến được định nghĩa trong dấu ngoặc nhọn của nó)
  - Có thể truy cập biến của hàm bên ngoài (hàm cha)
  - Có thể truy cập biến toàn cục (global)

### Pure function

Trước tiên chúng ta cần biết qua khái niệm **Pure function** `hàm thuần khiết`

Pure function chỉ phụ thuộc vào các **Agruments** `đối số` của chính nó. Dữ liệu nội bộ mà chúng ta có ở đây là một biểu
thức đóng hoàn toàn độc lập. Khi được gọi thì sẽ đẩy vào **Callstack**

<!-- ![Docusaurus logo](/img/purefunc.png) -->

### Impure function

Vậy điều gì sẽ xảy ra nếu nó tham chiếu đến dữ liệu bên ngoài phạm vi của nó như là từ **global environment** || **outer
function** khiến chúng ta có một **open expression** `biểu thức mở tham chiếu đến các biến khác`

Ví dụ:

```jsx title="Impure function - basic closure"
let b = '3'

function sum(a) {
  return a + b
}
sum(2)
// clg : 5
```

Chú ý:

`Chú ý là hàm bên trong này không thể gọi object arguments của hàm bên ngoài, mặc dù nó có thể sử dụng các tham số của hàm bên ngoài một cách bình thường. `

Ví dụ:

```jsx
function sum(a, b, c) {
  console.log('arguments trong sum ==> ', arguments[0])
  function b() {
    console.log('arguments trong b ==> ', arguments[0])
  }
  return b
}

var a = sum(1, 2, 3)
a()

// clg: arguments trong sum ==>  1
// clg: arguments trong b ==>  undefined
```

## Why?

Lập trình viên Javascript viết mã tốt hơn và linh hoạt hơn.

Tạo một **Closure** để lưu trữ chúng ở 1 nơi trong bộ nhớ để chúng ta có thể truy cập sau gọi là **Heap** - *lưu trữ vô thời hạn* và bị loại bỏ với trình dọn rác của Javascript.

**Closure** không chỉ là một function nó còn là 1 function được kết hợp với **outer state** || **lexical environment**

Đóng gói dữ liệu -> Tránh rủi ro lộ dữ liệu

## How?

### Tạo một Closure

- Tạo 1 **Closure** bằng cách define một **outer function** có 1 state
- Tạo một **Inner function** chứa data không bị rò rỉ
1. Closures có thể truy cập biến của hàm bên ngoài ngay cả hàm bên ngoài đã trả về:

```jsx
function celebrityName(firstName) {
  var nameIntro = 'This celebrity is '
  // Đây là hàm bên trong mà có thể truy cập đến biến của hàm bên ngoài,
  // truy cập được tham số của hàm ngoài.
  function lastName(theLastName) {
    return nameIntro + firstName + ' ' + theLastName
  }
  return lastName
}
var mjName = celebrityName('Michael') //celebrityName (bên ngoài) đã trả về.

// Closure (lastName) được goi ở đây sau khi hàm ngoài đã trả về.
// Closure vẫn có thể truy cập được biến và tham số của hàm bên ngoài.
mjName('Jackson') // This celebrity is Michael Jackson.

/// clg: "This celebrity is Michael Jackson"
```

2. Closures lưu tham chiếu đến biến của hàm bên ngoài: function celebrityID () { var celebrityID = 999; // Ta đang trả
   về một object với các hàm bên trong. // Tất cả các hàm bên trong có thể truy cập đến biến của hàm ngoài
   (celebrityID). return { getID: function () { // Hàm này sẽ trả về celebrityID đã được cập nhật. // Nó sẽ trả về giá
   trị hiện tại của celebrityID, sau khi setID thay đổi nó. return celebrityID; }, setID: function (theNewID) { // Hàm
   này sẽ thay đổi biến của hàm ngoài khi gọi. celebrityID = theNewID; } }

}

var mjID = celebrityID (); //Lúc này, celebrityID đã trả về mjID.getID(); // 999 mjID.setID(567); // Thay đổi biến của
hàm ngoài mjID.getID(); // 567: Tả về biến celebrityID đã được cập nhật.

3.  Closures đôi khi trở nên không như ý: // Ví dụ này sẽ được giải thích bên dưới. function celebrityIDCreator
    (theCelebrities) { var i; var uniqueID = 100; for (i = 0; i < theCelebrities.length; i++) { theCelebrities[i]["id"]
    = function () { return uniqueID + i; } } return theCelebrities; }

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0]; console.log(stalloneID.id()); // 103

===> fix function celebrityIDCreator (theCelebrities) { var i; var uniqueID = 100; for (i = 0; i <
theCelebrities.length; i++) { theCelebrities[i]["id"] = function (j) { return function () { return uniqueID + j; } () }
(i); // Chạy ngay khi hàm được gọ với tham số i }

    return theCelebrities;

}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0]; console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1]; console.log(cruiseID.id); // 101

https://anonystick.com/blog-developer/discuss-about-closures-in-javascript-2019051695927961
