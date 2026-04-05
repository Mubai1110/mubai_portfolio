# 部署步骤

代码已经写好，按以下步骤上线。

## 1. GitHub 创建仓库

1. 登录 https://github.com/Mubai1110
2. 点右上角 `+` → `New repository`
3. Repository name: `mubai-portfolio`
4. 选 Public
5. **不要**勾选 README / .gitignore
6. 点 Create repository
7. 创建完告诉我，我来推代码

## 2. Cloudflare Pages 部署

1. 登录 https://dash.cloudflare.com（mubaixiao1110@gmail.com）
2. 左侧菜单点「Workers 和 Pages」→「创建」→ 选「Pages」
3. 点「连接到 Git」→ 授权 GitHub → 选 `mubai-portfolio` 仓库
4. 构建设置：
   - 构建命令：留空
   - 构建输出目录：留空（根目录）
5. 点「保存并部署」

## 3. 添加环境变量（聊天机器人用）

1. 部署完成后，进入项目设置
2. 左侧「设置」→「环境变量」
3. 添加变量：
   - 变量名：`DEEPSEEK_API_KEY`
   - 值：`sk-488c791c364f4490bdde033634294600`
   - 选择「加密」
4. 保存后重新部署一次

## 4. 绑定域名 mubaixiao.com

1. 项目设置 →「自定义域」
2. 输入 `mubaixiao.com`
3. Cloudflare 会自动配置 DNS（因为域名就是在 Cloudflare 买的）
4. 等几分钟 SSL 证书生效

完成后访问 https://mubaixiao.com 即可。
