---
sidebar_position: 2
---

# Memory Leak trong Reactjs

Chắc hẳn đôi khi chúng ta đã bắt gặp một cảnh báo như sau khi code React

![Docusaurus logo](/img/memory-leak-1.png)

Giải thích theo ý hiểu của mình đó là bạn chưa hủy các thao tác cập nhật (Cập nhật state, ...) khi component đã bị Unmounted

Hãy xem ví dụ sau để hiểu rõ hơn về nó

https://codesandbox.io/s/side-effect-cleanup-broken-9eofz?file=/src/index.js

Như chúng ta thấy khi Employee đã bị Unmounted nhưng side-effect fetch Employee vẫn được thực hiện ``setList`` điều đó dẫn đến hiện tượng này

![Docusaurus logo](/img/memory-leak-2.png)

Để giải quyết vấn đề này chúng ta phải cleanup side-effect. Đồng nghĩa với việc check khi component bị Unmounted sẽ không có side-effect nào xảy ra nữa.
Theo như bài viết tôi trích dẫn thì tác giả sử dụng ``AbortController`` để cancel các hành động của DOM trước khi nó hoàn tất

![Docusaurus logo](/img/memory-leak-3.png)

Hoặc chúng ta có thể tạo một biến để check xem component đã bị Unmounted hay chưa

![Docusaurus logo](/img/memory-leak-4.png)

Như vậy vấn đề đã được xử lý

Cám ơn các bạn...