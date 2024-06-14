# 项目介绍

Xcada是一个常用C++算法学习系统，包括前台系统以及后台管理系统，基于Monaco Editor、GCC、MyBatis Plus实现。前台系统包括：用户登录、注册、算法列表、算法详情、题目列表、题目详细等模块。后台管理系统包括：统计分析、用户管理、算法管理、题目管理、网站管理等模块。

## 源码说明

后端源码说明如下：

```bash
├── src.main.java.com.supercat    # 源代码
│   ├── config                    # 配置类，例如mybatis-plus分页插件配置
│   ├── controller                # 控制类，该目录下的源码主要实现请求的接收、处理和响应
│   ├── dto                       # 数据封装类,该目录用于对接口的接受参数封装或者返回数据的封装
│   ├── entity                    # 实体类，用于存放与数据库对应的实体
│   ├── mapper                    # 接口类，负责数据库操作，包含执行SQL语句的接口方法
│   ├── service                   # 服务类，负责业务逻辑，包含处理业务需求的服务方法
│   │   ├── impl                  # 实现类，实现Service接口，提供具体业务逻辑实现
│   ├── utils                     # 工具类，例如CodeGenerator为代码生成器
│   ├── resources                 # 资源目录，用于存放配置文件、静态资源和模板文件
│   │   ├── application.yml       # 配置文件，用于配置数据库、阿里云OSS、邮件服务等
```

管理员前端源码说明如下：

```bash
├── build                      # 构建相关
├── mock                       # 项目mock模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局layout
│   ├── router                 # 路由
│   ├── store                  # 全局store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json文件包含了应用程序的所有依赖项和脚本
```

用户前端源码说明如下：

```bash
├── nuxt                       # Nuxt在开发中使用.nuxt/目录来生成Vue应用程序
├── .output                    # 构建应用程序用于生产时，Nuxt会创建.output/目录
├── api                        # 所有请求
├── assets                     # 样式文件
├── components                 # 全局公用组件
├── layout                     # 全局layout
├── pages                      # 所有页面
├── public                     # 用于存放网站的静态资源，例如svg icons等
├── utils                      # 用于在应用程序中注册API和服务器处理程序
├── utils                      # 全局公用方法
├── App.vue                    # 入口页面
├── .gitignore                 # .gitignore文件指定了Git应该忽略的故意未跟踪的文件
├── nuxt.config.ts             # Nuxt通过一个单独的nuxt.config文件进行简单配置
└── package.json               # package.json文件包含了应用程序的所有依赖项和脚本
```

## 安装

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-element-admin.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 建议不要用 cnpm 安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npmmirror.com

# 本地开发 启动项目
npm run dev
```

