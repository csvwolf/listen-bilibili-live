# Listen_Live_Bilibili
[![NPM](https://nodei.co/npm/bili_live.png)](https://nodei.co/npm/bili_live/)
[![Build Status](https://travis-ci.org/csvwolf/listen-bilibili-live.svg?branch=master)](https://travis-ci.org/csvwolf/listen-bilibili-live)
> Bilibili Live 监听，窥屏神器

根据配置文件监听指定房间状态，状态变更时将进行邮件通知。

## 安装
```sh
npm install -g bili-live
```

## 使用
`bili_live init` 根据交互初始化后 `bili_live add` 添加 room_ids，之后可以通过 `bili_live task create` 注册上 `crontab` 实现每分钟的自动监听。

推荐部署到服务器上。

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

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
