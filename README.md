<!--
 * @Author: yanxiaodi 929213769@qq.com
 * @Date: 2023-02-24 23:57:20
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @LastEditTime: 2023-03-14 12:18:10
 * @Description: 
-->
# Website

该网站是使用现代静态网站生成器 [Docusaurus 2](https://docusaurus.io/) 构建的。

### 安装

```
$ yarn
```

### Local Development

```
$ yarn start
```

> 此命令启动本地开发服务器并打开浏览器窗口
> 
> 大多数更改都会实时反映出来，而无需重新启动服务器

### Build

```
$ yarn build
```

此命令将静态内容生成到 `build` 目录中，并且可以使用任何静态内容托管服务提供服务

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub 页面进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式


### 目录结构

```bash
/blog/
    # 包含博客的 Markdown 文件
    # 如果你后续禁用了博客插件，你可以删除这个目录，或者你也可以在设置 path 选项之后修改它的名称

/docs/
    # 包含文档的 Markdown 文件
    # 你可以在 sidebars.js 中自定义文档的侧边栏顺序
    # 如果你后续禁用了文档插件，你可以删除这个目录，或者你也可以在设置 path 选项之后修改它的名称。

/src/
    # 如页面或自定义 React 组件一类的非文档文件
    # 严格来说，你不一定要把非文档类文件放在这里
    # 不过把它们放在一个集中的目录，可以让代码检查或者处理更为简便
    
    /src/pages
        # 所有放在此目录中的 JSX/TSX/MDX 文件都会被转换成网站页面

/static/
    # 静态目录。 此处的所有内容都会被复制进 build 文件夹

/docusaurus.config.js
    # 站点配置文件。 这等效于 Docusaurus 1 中的 siteConfig.js 文件

/package.json
    # Docusaurus 网站是一个 React 应用。 你可以安装并使用任何 npm 包

/sidebars.js
    # 由文档使用，用于指定侧边栏中的文档顺序
```


### TODO

- [ ] 评论功能
  * [giscus](https://giscus.app/zh-CN) - [参考项目](https://zxuqian.cn/resources/)

- [ ] [前端性能监控](https://cloud.tencent.com/document/product/1464/58553)
  * 参考 [xiaohai.wiki](https://xiaohai.wiki/blog) 项目源码 - `docusaurus.config.js`

- [x] 云服务器 部署
  * [GitHub Actions自动化部署前端项目指南](https://juejin.cn/post/7031036097735950367)




### 依赖内容

[UIkit - CSS框架](https://getuikit.com/)
