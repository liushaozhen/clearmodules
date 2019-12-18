# clearmodules 

移除 node_modules 文件

> 项目越来越多，`node_module` 文件越来越多。所以有了它

## 使用方法

- 全局安装。 可用 `clearmodules -v` 查看是否安装成功
- 在想移除 `node_modules` 的目录打开命令行，执行命令 `clearmodules start`, mac系统需要加 `sudo` 给权限 clearmodules 会遍历此目录下所有文件，遇到 `node_modules` 就删除
- 支持 mac 和 window 两种系统。  window下使用需 提前全局安装 [rimraf](https://www.npmjs.com/package/rimraf)



