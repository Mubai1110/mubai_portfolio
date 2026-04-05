# 慕白个人网站上线攻略

网站已经做好了，需要你完成以下几步来上线部署。全程大约 30 分钟。

---

## 第一步：注册 Cloudflare（免费，用于网站托管）

1. 打开 https://dash.cloudflare.com/sign-up
2. 用邮箱注册，设置密码
3. 注册完成后，把以下信息给我：
   - ✅ **Cloudflare 注册邮箱**

> Cloudflare 是全球最大的 CDN 服务商，国内可以直接访问，不需要翻墙。网站会托管在 Cloudflare Pages 上。

---

## 第二步：注册 GitHub（免费，用于代码托管和自动部署）

如果你已经有 GitHub 账号，跳过这步。

1. 打开 https://github.com/signup
2. 用邮箱注册
3. 把以下信息给我：
   - ✅ **GitHub 用户名**（比如 `MubaiXiao`）

---

## 第三步：注册 DeepSeek 开发平台（用于网站上的 AI 聊天机器人）

1. 打开 https://platform.deepseek.com
2. 用手机号注册
3. 注册后进入控制台，点左侧「API Keys」
4. 点「创建 API Key」，名称随便填（比如 `website-chat`）
5. **立刻复制保存生成的 Key**（只显示一次！）
6. 充值：左侧点「费用」→「充值」→ 充 ¥10 就够用很久
7. 把以下信息给我：
   - ✅ **DeepSeek API Key**（`sk-` 开头的一串字符）

> 这个 Key 是机密信息，只给我就行，不要发到群里或公开场合。

---

## 第四步：购买域名

推荐在 Cloudflare 直接买（省去 DNS 配置，最方便）：

1. 登录 Cloudflare 控制台 https://dash.cloudflare.com
2. 左侧菜单点「域注册」→「注册域」
3. 搜索你想要的域名，比如：
   - `mubaix.com`
   - `mubaixiao.com`
   - `xiaomubai.com`
   - 或任何你喜欢的名字
4. `.com` 大概 $10/年，`.top` 大概 $3/年
5. 选好后付款购买（支持信用卡）
6. 把以下信息给我：
   - ✅ **你买的域名**（比如 `mubaix.com`）

> 如果 Cloudflare 付款不方便，也可以在其他平台买：
> - 国内：阿里云万网 https://wanwang.aliyun.com （支持支付宝）
> - 国外：Namecheap https://www.namecheap.com
> 在其他平台买的话，后续需要把 DNS 指向 Cloudflare，我来帮你配。

---

## 汇总：需要给我的信息

| # | 信息 | 示例 |
|---|---|---|
| 1 | Cloudflare 注册邮箱 | `mubai@example.com` |
| 2 | GitHub 用户名 | `MubaiXiao` |
| 3 | DeepSeek API Key | `sk-xxxxxxxxxxxxxxxx` |
| 4 | 购买的域名 | `mubaix.com` |

拿到这 4 项后，我这边 10 分钟内搞定上线。

---

## FAQ

**Q: Cloudflare Pages 国内能打开吗？**
A: 可以。Cloudflare 在国内有节点，速度比 Vercel、GitHub Pages 都好。

**Q: DeepSeek ¥10 能聊多少次？**
A: 按 chatbot 场景估算，大概能支撑 5000-10000 次对话，够用非常久。

**Q: 域名需要备案吗？**
A: 不需要。只有用国内服务器才需要备案。Cloudflare 是海外服务器，不需要走备案流程。

**Q: 以后想改网站内容怎么办？**
A: 改 GitHub 仓库里的代码，Cloudflare 会自动重新部署，几分钟就生效。
