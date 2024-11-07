# 2024年1月31日筆記
主要教學內容：如何安裝git , node.js & npm , homebrew , vitepress...
## homebrew
```
step1在終端機輸入 : /bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”

step2 : 輸入電腦密碼

step3 : 出現「Next Steps:…………….」就是安裝完畢，就可以用[brew]測試

step4 : 若輸入brew後出現「zsh: command not fount: brew」則分別輸入
        *export PATH=/opt/homebrew/bin:$PATH*
        *export PATH=/opt/homebrew/sbin:$PATH*

step5 : 輸完以上兩小指令後在輸入 -> brew install cask

*補充 : 未來升級homebrew可使用：brew update 或 brew upgrade
```
## git
Homebrew Install homebrew if you don't already have it, then:

```$ brew install git```

Install MacPorts if you don't already have it, then:

```$ sudo port install git```

If you would like to install git-gui and gitk, git's commit GUI and interactive history browser, you can do so using homebrew

```$ brew install git-gui```

如何測試是否在本機成功下載git?(在終端機中輸入以下文字)

```$ git --version```

## node.js & npm
step1 ```到node.js官方網站中下載 20.11.0 LTS版本```

step2 安裝成功後到終端幾使用which查看是否安裝成功

```$ which npm```

```$ which node```

step3 接著在終端機中輸入

```$ npm```
```$ npm init```

```$ node```

以上做完就大功告成

## vitepress
step1 
```npm i -D vitepress``` 
等它跑完

step2 
```建資料夾 docs```

step3 ```npx vitepress init```
```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◆  Theme:
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
 Use TypeScript for config and theme files?
│  ○ Yes / ● No
Add VitePress npm scripts to package.json?
│  ● Yes / ○ No
│
└  Done! Now run npm run docs:dev and start writing.

```
## .gitignore
```
*.DS_Store*
node_modules
docs/.vitepress/dist
docs/.vitepress/cache
#package-lock.json(可留不留)
```
```
.gitignore 不會更新在git我們版本控制中；之後決定不更新也只也有後面的不更新（建議前面就加入版本控制中）

commit(把東西拿給管理員) add(把要放的東西跟管理員說)

sync changes 把東西上傳到github
```

## 補充
#### html->HyperText Markup Language
#### Markdown 格式
#### Html 語言
#### Vue & vitepress 框架
#### ＊下載vitepress裝之前要先裝好 node.js , homebrew , git , npm


## link
- 官方資料 [vitepress_link](https://vitepress.qzxdp.cn/guide/deploy.html "") , [vercel_link](https://vercel.com/newtongs-projects-231c8361 "") , [node.js](https://nodejs.org/en?source=post_page-----3d7101d998f4-------------------------------- "")

- 語法教學 [markdown](https://hackmd.io/@eMP9zQQ0Qt6I8Uqp2Vqy6w/SyiOheL5N/%2FBVqowKshRH246Q7UDyodFA?type=book
"")

- 知識補充
[Git和Github差別](https://tw.alphacamp.co/blog/git-github-version-control-guide "") 


- 下載教程
[Git-安裝教學](https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8 "") ,
[Homebrew](https://h9856.gameqb.net/mac-homebrew/"") , 
[npm & node.js](https://medium.com/@1chooo/%E5%A6%82%E4%BD%95%E5%9C%A8-mac-%E5%AE%89%E8%A3%9D-node-js-npm-3d7101d998f4 "")

