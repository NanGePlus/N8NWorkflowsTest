/**
 * 将Markdown文本转换为纯文本
 * @param {string} markdown - 输入的Markdown格式文本
 * @returns {string} - 转换后的纯文本字符串
 */
function markdownToText(markdown) {
    // 如果输入的markdown为空或undefined，则返回空字符串
    if (!markdown) return '';

    // 将输入的markdown字符串赋值给text变量，作为后续处理的副本
    let text = markdown;

    // 处理转义字符（移至开头，以确保在其他替换前解析转义）
    // 使用正则表达式全局处理转义字符，将反斜杠及其后的特殊字符替换为原字符
    text = text.replace(/\\([\\`*_{}\[\]()#+\-.!])/g, '$1');

    // 移除代码块
    // 使用正则表达式全局替换代码块（由三个反引号包围的内容），替换为空字符串
    text = text.replace(/```[\s\S]*?```/g, '');
    // 使用正则表达式全局替换行内代码（由单个反引号包围的内容），保留内部文本
    text = text.replace(/`([^`]+)`/g, '$1');

    // 移除标题符号
    // 使用正则表达式匹配并移除行首的1到6个#符号及其后的空格（多行模式）
    text = text.replace(/^#{1,6}\s+/gm, '');

    // 移除粗体和斜体
    // 使用正则表达式全局替换粗体标记（两个*或_包围的内容），保留内部文本
    text = text.replace(/[*_]{2}([^*_]+)[*_]{2}/g, '$1'); // 粗体
    // 使用正则表达式全局替换斜体标记（单个*或_包围的内容），保留内部文本
    text = text.replace(/[*_]([^*_]+)[*_]/g, '$1'); // 斜体

    // 处理链接
    // 使用正则表达式全局替换链接标记[文本](URL)，保留文本部分
    text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // [文本](链接)
    // 使用正则表达式全局替换引用链接标记[文本][引用]，保留文本部分
    text = text.replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1'); // [文本][引用]

    // 移除图片标记（优化：始终移除图片标记，不保留alt文本，以避免孤立短词）
    // 使用正则表达式全局替换图片标记![alt](URL)，替换为空字符串
    text = text.replace(/!\[([^\]]*?)\]\([^)]+\)/g, '');

    // 处理列表
    // 使用正则表达式多行模式移除无序列表标记（行首的-、*或+及其空格）
    text = text.replace(/^[\s]*[\-*+]\s+/gm, ''); // 无序列表
    // 使用正则表达式多行模式移除有序列表标记（行首的数字.及其空格）
    text = text.replace(/^[\s]*\d+\.\s+/gm, ''); // 有序列表

    // 处理引用
    // 使用正则表达式多行模式移除引用标记（行首的>及其空格）
    text = text.replace(/^\s*>\s+/gm, '');

    // 处理水平分割线
    // 使用正则表达式多行模式将水平分割线（三个或更多-、*或_）替换为换行符
    text = text.replace(/^\s*[-*_]{3,}\s*$/gm, '\n');

    // 移除HTML标签
    // 使用正则表达式全局移除所有HTML标签
    text = text.replace(/<[^>]+>/g, '');

    // 清理多余的空行（优化：先按行trim，然后归一化空行）
    // 按行分割，每行trim去除首尾空白
    text = text.split('\n').map(line => line.trim()).join('\n');
    // 使用正则表达式将三个或更多连续换行替换为两个换行（保留段落分隔）
    text = text.replace(/\n{3,}/g, '\n\n');
    // 使用正则表达式全局移除字符串首尾的空白字符
    text = text.replace(/^\s+|\s+$/g, '');

    // 返回处理后的纯文本字符串
    return text;
}

// 获取输入数据
// 从n8n输入中获取第一个项的JSON数据，并赋值给input变量
const input = $input.first().json;

// 格式化 pubDate
// 从input中提取pubDate字段的值
const pubDate = input.pubDate;
// 将pubDate字符串转换为Date对象
const date = new Date(pubDate);
// 格式化日期为“YYYY.MM.DD HH:MM:SS”字符串，使用padStart确保两位数
const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

// 转换 Markdown 为纯文本
// 调用markdownToText函数处理input.data字段的Markdown内容，得到纯文本
const plainText = markdownToText(input.data);

// 返回 n8n 规范的输出
// 返回一个数组，包含一个对象，符合n8n的输出规范
return [{  // 输出对象的title字段，使用input.title
    title: input.title,  // 输出对象的link字段，使用input.link
    link: input.link,  // 输出对象的pubDate字段，使用格式化后的日期
    pubDate: formattedDate,  // 输出对象的pubAuthor字段，使用input.pubAuthor
    pubAuthor: input.pubAuthor,  // 输出对象的content字段，使用转换后的纯文本
    content: plainText
}];