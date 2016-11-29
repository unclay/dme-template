# <%= name %>

> <%= description %>

# 使用方法

``` bash
# 安装
npm install

# 启动开发环境 localhost:4000
npm run dev

# 自定义开发环境的地址和端口
npm run dev -- --host 0.0.0.0 --port 4000

# 单元测试，自动测试test目录所有*.spec.js文件(mocha + chai)
npm run test

# 打包成静态文件目录，默认dist目录
npm run build
```

# 例子

## 注意
例子里面的js只允许使用浏览器端支持的js，所以不可以使用es6

## 全局事件

+ getScript 可以获取组件文件入口内容