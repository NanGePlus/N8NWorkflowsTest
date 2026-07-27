# 零基础上手 n8n v2.x 实战：打造n8n驱动的自动化生产线

## 本系列视频定位

本系列内容将带领大家从零基础理解 n8n 的定位和核心能力，依次完成环境准备、Docker 安装与本地/云端自托管部署、与飞书等主流平台的对接，掌握自动化工作流的基本原理（包括节点、凭证、数据流转等），并通过 RSS 采集、AI 摘要、飞书多维表格数据处理、智能推送等实际案例实现业务自动化闭环。全流程配套操作详解、可直接落地的工作流模板和常见问题排查经验，助力你快速搭建和维护属于自己的 n8n 自动化平台，并持续获取最新实战最佳实践和能力拓展内容。

### 本系列仓库位置

以下仓库存储我在YouTube频道和B站频道关于零基础上手 n8n v2.x 实战相关分享所有源文件，均开源免费  
此仓库对应的GitHub地址: [https://github.com/NanGePlus/N8NWorkflowsTest](https://github.com/NanGePlus/N8NWorkflowsTest)  
此仓库对应的Gitee地址: [https://gitee.com/NanGePlus/N8NWorkflowsTest](https://gitee.com/NanGePlus/N8NWorkflowsTest)                         

### 我的个人信息

- YouTube频道(@南哥AGI研习社)：[https://www.youtube.com/channel/UChKJGiX5ddrIpJG-rBNVZ5g](https://www.youtube.com/channel/UChKJGiX5ddrIpJG-rBNVZ5g)
- B站频道(@南哥AGI研习社)：[https://space.bilibili.com/509246474](https://space.bilibili.com/509246474)
- GitHub地址：[https://github.com/NanGePlus](https://github.com/NanGePlus)
- Gitee地址：[https://gitee.com/NanGePlus](https://gitee.com/NanGePlus)
- 大模型代理平台: [https://nangeai.top/](https://nangeai.top/)

### 其他开源分享推荐

- **零基础上手 Skill：从 0 到交付的全链路闭环实战**
B站视频链接：[https://www.bilibili.com/video/BV1TNGZ6uEGQ/](https://www.bilibili.com/video/BV1TNGZ6uEGQ/)
YouTube视频链接：[https://www.youtube.com/playlist?list=PL8zBXedQ0ufmOXOUX0kOZMrYt1C4fjg2T](https://www.youtube.com/playlist?list=PL8zBXedQ0ufmOXOUX0kOZMrYt1C4fjg2T)
GitHub 地址：[https://github.com/NanGePlus/SkillTutorial](https://github.com/NanGePlus/SkillTutorial)  
Gitee 地址：[https://gitee.com/NanGePlus/SkillTutorial](https://gitee.com/NanGePlus/SkillTutorial)     
- **零基础上手 n8n v2.x 实战：打造 n8n 驱动的自动化生产线**  
B站视频链接：[https://www.bilibili.com/video/BV1Aq1NBYELp/](https://www.bilibili.com/video/BV1Aq1NBYELp/)  
YouTube 视频链接：[https://www.youtube.com/playlist?list=PL8zBXedQ0uflhkZBwlQNAp7H57CJFgfgV](https://www.youtube.com/playlist?list=PL8zBXedQ0uflhkZBwlQNAp7H57CJFgfgV)  
GitHub 地址：[https://github.com/NanGePlus/N8NWorkflowsTest](https://github.com/NanGePlus/N8NWorkflowsTest)  
Gitee 地址：[https://gitee.com/NanGePlus/N8NWorkflowsTest](https://gitee.com/NanGePlus/N8NWorkflowsTest)        
- **零基础上手 OpenClaw 实战：从零打造智能体驱动的商业自动化闭环**  
B站视频链接：[https://www.bilibili.com/video/BV1svQGBBERQ/](https://www.bilibili.com/video/BV1svQGBBERQ/)  
YouTube视频链接：[https://www.youtube.com/playlist?list=PL8zBXedQ0ufmtUvaHsSxNqZMwgb3hxsJB](https://www.youtube.com/playlist?list=PL8zBXedQ0ufmtUvaHsSxNqZMwgb3hxsJB)  
GitHub地址：[https://github.com/NanGePlus/OpenClawTutorial](https://github.com/NanGePlus/OpenClawTutorial)  
Gitee地址：[https://gitee.com/NanGePlus/OpenClawTutorial](https://gitee.com/NanGePlus/OpenClawTutorial)    
- **零基础上手 LangChain V1.x 实战： 学最主流 Agent 开发框架**  
B站视频链接：[https://www.bilibili.com/video/BV17c6mBbEHv/](https://www.bilibili.com/video/BV17c6mBbEHv/)  
YouTube 视频链接：[https://www.youtube.com/playlist?list=PL8zBXedQ0ufld2C7nB28fGw9U6nTbagp1](https://www.youtube.com/playlist?list=PL8zBXedQ0ufld2C7nB28fGw9U6nTbagp1)  
GitHub 地址：[https://github.com/NanGePlus/LangChain_V1_Test](https://github.com/NanGePlus/LangChain_V1_Test)  
Gitee 地址：[https://gitee.com/NanGePlus/LangChain_V1_Test](https://gitee.com/NanGePlus/LangChain_V1_Test)                
- **AI编程工作法：一套面向 Cursor、Claude Code、Codex 等 AI 编程助手的全流程协作工作法**  
B站视频链接：[https://www.bilibili.com/video/BV1zQNM6MEqf/](https://www.bilibili.com/video/BV1zQNM6MEqf/)  
YouTube 视频链接：[https://www.youtube.com/playlist?list=PLRsjhp02BBRE](https://www.youtube.com/playlist?list=PLRsjhp02BBRE)   
- **2026 AI 编程 Cursor：专为提升开发生产力而设计的一款 AI 提效工具**  
B站视频链接：[https://www.bilibili.com/video/BV1HEABzvEdo/](https://www.bilibili.com/video/BV1HEABzvEdo/)  
YouTube 视频链接：[https://www.youtube.com/playlist?list=PL8zBXedQ0ufkcPJWHVKFTFzS8yNCkfM5b](https://www.youtube.com/playlist?list=PL8zBXedQ0ufkcPJWHVKFTFzS8yNCkfM5b)    
- **更多开源项目**  
GitHub 地址：[https://github.com/NanGePlus](https://github.com/NanGePlus)  
Gitee 地址：[https://gitee.com/NanGePlus](https://gitee.com/NanGePlus)
       

---

## 本系列视频链接地址速查

一共包含三个部分：n8n安装部署升级篇、n8n工作流编排实战篇和n8n实战经验小Tips篇

### 1、n8n安装部署升级篇

**（1）【⚠️官方已废弃V1.x版本，请使用《n8n V2.x升级实测…》】n8n零基础入门一次搞定：Docker私有化部署平台 +服务零数据丢失安全升级 + 平台语言汉化 + 快速入门三件法宝**

- 资料在 resource 文件夹中的 01_*** 文件夹，下载即可                   
- YouTube频道对应视频: [https://youtu.be/Ldf15CPDY9Y](https://youtu.be/Ldf15CPDY9Y)                                
- B站频道对应视频: [https://www.bilibili.com/video/BV1Aq1NBYELp/](https://www.bilibili.com/video/BV1Aq1NBYELp/)

**（2）n8n V2.x升级实测：一份可复用的‘平滑迁移’检查清单 | 适用于原地升级与全新部署，确保过程平稳**

- 资料在 resource 文件夹中的 02_*** 文件夹，下载即可                     
- YouTube频道对应视频: [https://youtu.be/fhI6lBoLOBw](https://youtu.be/fhI6lBoLOBw)                                                 
- B站频道对应视频: [https://www.bilibili.com/video/BV1ErmLB4EAW/](https://www.bilibili.com/video/BV1ErmLB4EAW/)

**（3）我切断了向Zapier的“数据进贡” | 本地n8n全球直连方案，打造生产级私人自动化中枢，是数字自治的唯一门票。让本地部署的n8n服务，在外网通过域名安全访问**

- 资料在 resource 文件夹中的 03_*** 文件夹，下载即可                     
- YouTube频道对应视频: [https://youtu.be/F6LcNx7TpYU](https://youtu.be/F6LcNx7TpYU)                                                                   
- B站频道对应视频: [https://www.bilibili.com/video/BV1e5mQBDEbf/](https://www.bilibili.com/video/BV1e5mQBDEbf/)

### 2、n8n工作流编排实战篇

**（1）搭建n8n入门第一个工作流：微信公众号文章自动采集和AI摘要生成 常用技巧(标签、节点设置、表达式等)、RSS节点、Code节点、AIAgent节点、Loop节点等设置 解决本地文件读写难题**

- 资料在项目内 workflows 文件夹中的 01_*** 文件夹，下载即可                                                  
- YouTube频道对应视频: [https://youtu.be/9VInZHVK7Ww](https://youtu.be/9VInZHVK7Ww)                                
- B站频道对应视频: [https://www.bilibili.com/video/BV12F1VBfER8/](https://www.bilibili.com/video/BV12F1VBfER8/)

**（2）n8n配置飞书保姆级配置指南：HTTP Request节点 社区飞书节点 云空间 多维表格 群组即时消息 支持文本、图片、富文本、卡片、音视频、文件等**

- 资料在项目内 workflows 文件夹中的 02_*** 文件夹，下载即可                                                                  
- YouTube频道对应视频: [https://youtu.be/zhSKnqJa9to](https://youtu.be/zhSKnqJa9to)                                                          
- B站频道对应视频: [https://www.bilibili.com/video/BV1aD2TBsEkZ/](https://www.bilibili.com/video/BV1aD2TBsEkZ/)

**（3）n8n配置微信公众号保姆级配置指南：HTTP Request节点 社区公众号节点 Agent节点 豆包文生图，公众号标题、正文、封面图自动生成草稿上传**

- 资料在项目内 workflows 文件夹中的 03_*** 文件夹，下载即可                                                                  
- YouTube频道对应视频: [https://youtu.be/Ig3Os7NjN54](https://youtu.be/Ig3Os7NjN54)                                                                     
- B站频道对应视频: [https://www.bilibili.com/video/BV1PeCPBZENE/](https://www.bilibili.com/video/BV1PeCPBZENE/)

**（4）n8n配置外部事件触发保姆级配置指南：7x24小时无人值守工单AI分诊自动化工作流 Webhook、AI Agent、Send Email、飞书等节点**

- 资料在项目内 workflows 文件夹中的 04_*** 文件夹，下载即可                                                                   
- YouTube频道对应视频: [https://youtu.be/Fmu6NarOArM](https://youtu.be/Fmu6NarOArM)                                                                                     
- B站频道对应视频: [https://www.bilibili.com/video/BV1DHU5B5EMv/](https://www.bilibili.com/video/BV1DHU5B5EMv/)

**（5）从文案到成片只需5分钟？AI全自动短视频生产线，解放90%重复劳动｜文案→素材→成片一条龙【附保姆级指南】**

- 资料在项目内 workflows 文件夹中的 05_*** 文件夹，下载即可                                                                   
- YouTube频道对应视频: [https://youtu.be/h6DoC92uyYI](https://youtu.be/h6DoC92uyYI)                              
- B站频道对应视频: [https://www.bilibili.com/video/BV1LCSNBAEUs/](https://www.bilibili.com/video/BV1LCSNBAEUs/)

**（6）n8n + AI + X，如何吃掉一切重复工作？我用AI+飞书+n8n，把短视频生产和小红书自动发布变成"按时打卡"？7x24小时AI短视频自动化运营系统**

- 资料在项目内 workflows 文件夹中的 06_*** 文件夹，下载即可                                                                       
- YouTube频道对应视频: [https://youtu.be/Sj133Lm320E](https://youtu.be/Sj133Lm320E)                                                
- B站频道对应视频: [https://www.bilibili.com/video/BV1krmkB3ExN/](https://www.bilibili.com/video/BV1krmkB3ExN/)  
详细拆解演示视频:          
- YouTube频道对应视频: [https://youtu.be/9m__FWCkNqw](https://youtu.be/9m__FWCkNqw)                                                            
- B站频道对应视频: [https://www.bilibili.com/video/BV1dCq4BbECZ/](https://www.bilibili.com/video/BV1dCq4BbECZ/)

**（7）我用n8n+AI+飞书打造了一款AI选题神器！效率提升99.9%，告别主观决策。揭秘AI驱动的AI智能选题评审与决策支持平台搭建全过程**

- 资料在项目内 workflows 文件夹中的 07_*** 文件夹，下载即可                                                   
- YouTube频道对应视频: [https://youtu.be/0J_KXNXKLm0](https://youtu.be/0J_KXNXKLm0)                                                             
- B站频道对应视频: [https://www.bilibili.com/video/BV1uMkHB1Ego/](https://www.bilibili.com/video/BV1uMkHB1Ego/)  
详细拆解演示视频:           
- YouTube频道对应视频:[https://youtu.be/p-dpips0Kd0](https://youtu.be/p-dpips0Kd0)                                                              
- B站频道对应视频: [https://www.bilibili.com/video/BV1f4kHBaE1a/](https://www.bilibili.com/video/BV1f4kHBaE1a/)

**（8）还再手动刷公众号推文？我用n8n+飞书+Agent搭了个公众号推文智能情报台：24小时内公众号推文自动去重归档并推送至飞书群，采集清洗/摘要/选编/推送闭环**

- 资料在项目内 workflows 文件夹中的 08_*** 文件夹，下载即可      
- YouTube频道对应视频:[https://youtu.be/veHZIqsrwPU](https://youtu.be/veHZIqsrwPU)             
- B站频道对应视频:[https://www.bilibili.com/video/BV1ii9NBrE8b/](https://www.bilibili.com/video/BV1ii9NBrE8b/)

**（9-1）7x24小时在线的私人数字员工：飞书+n8n+AI=你的「效率特种兵」，同样的架构，换Prompt，搞定N个场景。拖拽搭建｜产品/运营/自由职业者的效率外挂**

- 资料在项目内 workflows 文件夹中的 09_*** 文件夹，下载即可   
- YouTube频道对应视频:[https://youtu.be/mu1E7UC0HXc](https://youtu.be/mu1E7UC0HXc)             
- B站频道对应视频:[https://www.bilibili.com/video/BV1eaokBDEv8/](https://www.bilibili.com/video/BV1eaokBDEv8/)

**（9-2）【一镜到底保姆级实战跟做】7x24小时在线的私人数字员工：飞书+n8n+AI=你的「效率特种兵」，同样的架构换Prompt，搞定N个场景。拖拽搭建｜会打字就能用**

- 资料在项目内 workflows 文件夹中的 09_*** 文件夹，下载即可   
- YouTube频道对应视频:[https://youtu.be/u1rVI1U4oJE](https://youtu.be/u1rVI1U4oJE)             
- B站频道对应视频:[https://www.bilibili.com/video/BV1oxokB9ErR/](https://www.bilibili.com/video/BV1oxokB9ErR/)

### 3、n8n实战经验小Tips篇

**（1）飞书服务使用前配置｜最小配置颗粒度拆解｜开源可抄作业**

- 资料在项目内 tips 文件夹中的 01_*** 文件夹，下载即可                                                   
- YouTube频道对应视频: [https://youtu.be/GKFtAamUMyQ](https://youtu.be/GKFtAamUMyQ)                                                  
- B站频道对应视频:[https://www.bilibili.com/video/BV1Q7qQBpEF8/](https://www.bilibili.com/video/BV1Q7qQBpEF8/)

**（2）飞书多维表格使用配置｜最小配置颗粒度拆解｜开源可抄作业**

- 资料在项目内 tips 文件夹中的 02_*** 文件夹，下载即可                                                      
- YouTube频道对应视频: [https://youtu.be/lJPWsznqYHI](https://youtu.be/lJPWsznqYHI)                                                                  
- B站频道对应视频:[https://www.bilibili.com/video/BV1vPqSBWE3X/](https://www.bilibili.com/video/BV1vPqSBWE3X/)

**（3）飞书多维表格附件上传和下载｜最小配置颗粒度拆解｜开源可抄作业**

- 资料在项目内 tips 文件夹中的 03_*** 文件夹，下载即可                                                         
- YouTube频道对应视频: [https://youtu.be/any_jD3hTZM](https://youtu.be/any_jD3hTZM)                                                                                      
- B站频道对应视频:[https://www.bilibili.com/video/BV1tXBMBYEpj/](https://www.bilibili.com/video/BV1tXBMBYEpj/)

**（4）飞书消息服务配置 支持文本、富文本、图片、消息卡片、音频、视频、文件等消息类型｜最小配置颗粒度拆解｜开源可抄作业**

- 资料在项目内 tips 文件夹中的 04_*** 文件夹，下载即可                                                         
- YouTube频道对应视频: [https://youtu.be/QYm8io-0UIQ](https://youtu.be/QYm8io-0UIQ)                                                                   
- B站频道对应视频:[https://www.bilibili.com/video/BV1cDBCBQEm8/](https://www.bilibili.com/video/BV1cDBCBQEm8/)

**（5）Sora2文生视频 附赠 Sora 创意输入结构化Agent、Sora 视频提示词生成Agent｜最小配置颗粒度拆解｜开源可抄作业**

- 资料在项目内 tips 文件夹中的 05_*** 文件夹，下载即可                                                          
- YouTube频道对应视频:[https://youtu.be/n-xjvjgvNZU](https://youtu.be/n-xjvjgvNZU)                                                                                   
- B站频道对应视频:[https://www.bilibili.com/video/BV1Z9wWznE4G/](https://www.bilibili.com/video/BV1Z9wWznE4G/)

---

## n8n 是什么

### 偏通俗点理解

**不要把 n8n 讲成“一个自动化工具”，更准确的说法是：它像一条可视化、可复用、可持续演进的自动化生产线。**

这里有一个观念，大家一定要扭转过来：**把工作流当成“资产”去建设，而不是把自动化当成“临时活”去凑。**

大家可以想一想，你做一条稳定的业务流程（比如每天汇总数据、同步客户信息、生成报表、发通知）时，你不会希望它每次都靠“手工点点点”或“复制粘贴”。你更希望它能被固化成一个流程：输入是什么、怎么处理、输出到哪里、失败怎么告警、哪些地方需要人工确认。

如果你只是临时写一段脚本“先跑起来”，它很容易变成不可维护的临时代码：换个字段就崩、换个接口就改半天、没人敢碰。但如果你把它放进 n8n：把凭证集中管理、把每一步变成节点、把异常处理与告警补齐、把数据结构明确下来，它就会变成一个可迭代的自动化能力。

n8n 特别适合做这种“常驻型自动化”。因为它不是一次性的脚本运行器，而是一个长期运行的服务：能定时/事件触发、能对接大量第三方、能读写数据库/文件/HTTP、能做条件分支与循环、能做错误分支与重试，也能把每次执行记录下来便于排查。也正因为如此，这里有个重要经验：**n8n 最好当成一项服务来部署，而不是当成桌面软件偶尔开一下。**

最好给它一台相对稳定的宿主环境，比如云主机，或者家里的常开机器。不建议和自己的主力工作电脑混用，因为它要长期运行、会占用一定资源，而且你希望它在你不在电脑前的时候也能跑定时任务。入门建议至少 2G～4G 内存。

大家要理解这背后的逻辑：这不是为了折腾技术架构，而是因为你在给自动化能力准备“生产环境”。**给 n8n 配机器，不是在装软件，而是在给你的自动化生产线安排厂房。**

如果你计划把 AI 能力引入到工作流里（例如：摘要、分类、结构化抽取、自动回复、内容生成），那就要考虑大模型调用的成本与稳定性。因为一旦自动化跑起来，它不是偶尔调用几次，而是可能每天稳定地触发、批量处理数据、持续产出结果。

所以，在高频使用的场景下，你需要提前想清楚：是按量计费更合适，还是包月套餐更合适；以及是否需要做缓存、去重与限流，避免“自动化把你跑破产”。

### 偏官方点理解

n8n 是一个 **工作流自动化平台（Workflow Automation Platform）**：你可以在自己的电脑或服务器上运行 n8n 服务，通过可视化的方式，把常见的 **应用与系统**（IM、表格、CRM、数据库、邮件、HTTP API、文件存储等）用“节点”连接起来，编排成可复用的自动化工作流。

你可以把它理解成：**事件/定时触发 → 按步骤执行节点（拉取/处理/判断/写入/通知）→ 形成可追踪的执行记录**。数据与凭证可按你的部署方式与治理策略来管理，而不是把所有自动化都交给某个黑盒托管平台。

---

## 适合的小伙伴

- 希望把重复劳动（同步数据、定时汇总、告警通知、跨系统搬运）做成**可维护、可复用的自动化流程**的开发者、运营与重度个人用户。  
- 需要把多个系统（表格/数据库/IM/邮件/CRM/网页/API）串起来，并且能接受自己维护一套**常在线的自动化服务**（自托管或托管版均可）。

