# 1、搭建n8n入门第一个工作流

使用n8n搭建工作流:公众号文章自动采集和AI摘要生成并保存至本地，以此来作为n8n入门的第一个工作流应用                  
 
项目GitHub地址: https://github.com/NanGePlus/N8NWorkflowsTest                        
项目Gitee地址: https://gitee.com/NanGePlus/N8NWorkflowsTest                      
  
资料在项目内 workflows 文件夹中的 01_*** 文件夹，下载即可                     

## 1.1 常用技巧

1. 查阅官方文档                                                    
直接查看官方文档 https://docs.n8n.io/ 也可以使用官方提供的n8n Docs AI，直接与文档对话                            


2. 节点重命名       
对节点进行重命名方便查看和在后续节点中引用                      


3. 节点备注信息  
对节点进行更详细的备注                       


4. 标签   
对工作流各功能部分进行标签说明，对于复杂工作流读起来更容易                  


5. 节点的设置   
n8n 节点的设置（Settings）允许你灵活控制每个节点的运行策略、错误重试机制和错误处理方式              
* 运行策略  
在每个节点的 Settings（设置）标签页中，你可以配置如下运行策略：             
Always Output Data：即使节点未返回数据，也输出一个空项。注意在 IF 节点上使用可能导致无限循环                
Execute Once：节点只会用收到的第一个数据项执行一次，不会处理额外的数据项                                   
* 错误重试机制     
Retry On Fail：启用后，节点在执行失败时会自动重试，直到成功或达到最大重试次数。你可以设置最大重试次数和每次重试之间的等待时间（如 1000 毫秒等）        
* 错误处理机制，为每个节点单独设置错误处理策略                
Stop Workflow：节点出错时，整个工作流立即停止          
Continue：节点出错时，工作流继续执行下一个节点，使用上一次的有效数据            
Continue (using error output)：节点出错时，将错误信息传递给下一个节点，便于自定义错误处理逻辑               
* 全局错误处理（Error Workflow）                 
你可以在工作流设置中指定一个错误工作流（Error Workflow），当主工作流执行失败时自动触发。错误工作流需以 Error Trigger 节点开头，适合集中处理错误、发送通知等          

6. 表达式       
表达式允许通过执行 JavaScript 代码来动态填充节点参数                   
在 n8n 中，表达式（Expression） 是一种强大的功能，允许你通过 JavaScript 代码动态设置节点参数                  
表达式可以引用前面节点的数据、工作流信息或 n8n 环境变量，实现参数的自动化和灵活配置                   
所有表达式的语法都用 {{ ... }} 包裹，如{{ $now.format('yyyyMMdd_HHmmss') }}                         


## 1.2 核心节点

1. RSS节点的使用    
RSS（Really Simple Syndication，简易信息聚合）是一种用于分发和聚合网站内容的格式，允许用户在一个地方集中查看来自不同网站的最新内容，而无需分别访问每个网站           
n8n 中的 RSS 相关节点主要有两个：RSS Read 节点 和 RSS Feed Trigger 节点              
RSS Read 节点用于读取互联网上发布的 RSS 源数据，适合在工作流中主动拉取 RSS 数据，比如定时获取新闻、博客等内容               
RSS Feed Trigger 节点用于当有新的 RSS 条目发布时，自动触发 n8n 工作流，适合需要被动监听 RSS 源更新并自动处理的场景，比如有新文章时自动推送到社交媒体           
本期视频的工作流是通过RSS方式获取微信公众号文章内容，RSS源来自 http://www.jintiankansha.me/account/signup?invite_code=PJIFQVLQKJ                                       


2. AI Agent节点的使用         
AI Agent 节点是 n8n 中用于实现智能自动化的核心节点之一           
它代表了一个自主的 AI 系统，可以接收数据、做出决策，并通过调用外部工具和 API 来完成特定目标                 
本期视频的工作流使用AI Agent节点会搭配LLM节点，LLM节点的配置涉及到第三方服务的凭证创建，这里使用的大模型代理平台                     
这里使用的大模型代理平台:https://nangeai.top/                
关于大模型代理平台如何使用 大家参考这期视频 https://youtu.be/mTrgVllUl7Y             
本期视频工作流使用的Agent节点中的内容摘要生成prompt可参考 SummaryPrompt.md                    


3. 循环节点的使用                                
n8n 中的循环节点 Loop Over Items 节点主要作用是将输入数据分批处理，实现对每个数据项的逐个操作，常用于需要手动控制循环的场景             
所有数据处理完后，节点会将所有结果合并，通过 done 输出端输出          


4. Code节点的使用                
n8n 的 Code 节点 是一个强大的内置节点，允许在工作流中编写和运行自定义的 JavaScript 或 Python 代码，实现数据处理、逻辑控制和高级自动化功能           
Python 代码执行速度比 JavaScript 慢，适合轻量级处理，建议使用JavaScript               
节点支持两种运行模式：           
Run Once for All Items：对所有输入项一次性处理，适合需要整体处理数据的场景                
Run Once for Each Item：对每个输入项分别执行代码，适合逐条处理数据                 
Code节点编码AI助手，其Prompt可参考 N8NCodePrompt.md                     
本期视频工作流使用的Code节点代码可参考 code.js                                


5. 从磁盘读写文件节点的使用            
n8n 的 Read/Write Files from Disk 节点用于在本地服务器（即运行 n8n 的机器）上读取和写入文件              
这里会提供一种解决本地文件读取难的解决方案          

