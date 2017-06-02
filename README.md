# Listen_Live_Bilibili
> Bilibili Live 监听，窥屏神器

[![NPM](https://nodei.co/npm/bili_live.png)](https://nodei.co/npm/bili_live/)
[![Build Status](https://travis-ci.org/csvwolf/listen-bilibili-live.svg?branch=master)](https://travis-ci.org/csvwolf/listen-bilibili-live)

![bili_live](https://cloud.githubusercontent.com/assets/8280645/26720153/b0a99a4e-47b9-11e7-857c-55f1130550d1.png)

根据配置文件监听指定房间状态，状态变更时将进行邮件通知。

## 安装

前置环境：

- **Node.js: v7.6.0+（需要支持 async await）**
- 系统：支持 crontab 的系统（Linux / macOS）

旧版本需要 `--harmony` 支持，这一部分的支持之后可能（看心情）添加，目前需要人工操作。

```sh
npm install -g bili_live
```

## 使用

1. `bili_live init` 根据交互初始化邮件信息
2. `bili_live add` 添加 room_ids
3. `bili_live task create` 注册上 `crontab` 实现每分钟的自动监听。（`remove` 可以删除注册）

**推荐部署到服务器上。**

> Tips: 如何获得直播间 room_id

> <https://live.bilibili.com/635497> Room_id 就是最后的 635497，要一次添加多个用空格分割即可。

通过 `bili_live list [mail|rooms]` 可以查看目前的配置。

## 升级

重新运行安装操作即可，但是在升级前，你需要先使用 `bili_live backup .` 进行备份，在升级完成后使用 `bili_live recover .` 恢复。

## More Help

```sh
$ bili_live --help

  Usage: bili_live [options] [command]


  Commands:

    init                 init the live config
    add [roomids...]     add roomids to listen(space to split)
    remove [roomids...]  remove roomids(space to split)
    list [config]        list config
    run                  just run the listener once
    task <command>       add task to crontab for minute monitor
    backup <dist>        backup config to <dist> dir
    recover <src>        recover config from <src>

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
