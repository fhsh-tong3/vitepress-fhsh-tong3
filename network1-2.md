# Network 1-2
## TCP/IP 模型

### 連結層（Data Link Layer）
```
負責將資料幀從一個網路設備傳輸到相鄰的網路設備，提供實體尋址和資料幀的基本傳輸
```
### 網路層（Internet Layer）
```
處理主機之間的資料包傳輸，為資料包提供邏輯尋址和路由選擇。主要協定包括 IP（Internet Protocol）
```

### 傳輸層（Transport Layer）
```
提供端到端的通訊服務，包括資料的分段、重組和錯誤檢測。主要協定包括 TCP（Transmission Control Protocol）和 UDP（User Datagram Protocol
```
### 應用層（Application Layer）
```
提供網路服務和應用程式之間的接口，包括 HTTP、FTP、SMTP 等協定
```
## TCP/IP 模型與 OSI 模型的比較
| OSI | TCP/IP |
| :-- | :-- |
|應用層（Application Layer）|應用層（Application Layer）|
|展示層（Presentation Layer）||
|會議層（Session Layer）||
|傳輸層（Transport Layer）|傳輸層（Transport Layer）|
|網路層（Network Layer）|網路層（Network Layer）|
|資料連結層（Data Link Layer）|資料連結層（Data Link Layer）|
|實體層（Physical Layer）||