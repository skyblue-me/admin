####  这里是dev分支
####  文件目录结构
asset 资源目录
pages 页面
components 组件
style 样式
utils 公有的库或插件
router 路由文件
store 全局状态管理

####  预处理语言 
less
 npm install less less-loader
 默认less 需要在config webpack.config.js 把所有的sass改为less
####  ui框架
antd less
全局引入
在index.js中引入 import 'antd/dist/antd.css';
按需引入
####  基本配置
起别名
config webpack.config.js中 alias里设置 'style':path.join(__dirname,'../src/style'),

服务器代理
webpackDevServer.config.js里设置
...
####   公有的库
 axios 二次封装
 路由
 react-redux

