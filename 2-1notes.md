# 2024年2月1日筆記
主要教學內容 : vercel , 如何把github連結本地端

## 在github中找到網址
step1
```
 找到你要的專案
```
step2 
``` 
點選最上排的<>Code
```
step3
``` 
點選綠色的<>Code
```
step4
```
把https 選項下的網址複製下來就可以了～
```

## 把存在github上的資料下載到本地端
>終端機

step1
```
$git clone <網址> 

#下載到本地端
```
step2
```
$ ls 
<檔案名稱>
```
---
>vscode終端機 (要開新終端機)

step1
```
$git remote
<跑出網址名稱>
```
step2
```
$git remote get-url <跑出網址名稱>
<網址>

#得到該網址
```
step3
```
$git remote remove <跑出網址名稱>

#刪掉原網址
```
step4
```
$git remote remove <網址名稱>

#刪掉原網址
```
step5
```
$git remote  add origin https://github.com/fhsh-tong3/VitePress_project1.git

#加入本端機和github連結
```
step6
```
git push --set-upstream origin main

＃主要是用於將本地的修改推送到遠端的數據庫，同時設置本地分支與遠端分支的連接，使它們建立追蹤關係
```
＊補充：如何確認網址是否還存在
```
$git remote

#確認是否有沒有把原網址刪掉
```