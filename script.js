// 25道题目配置
const questions = [
  {
    title: "你最近频繁出现的一种情绪是？",
    options: [
      "内心柔软但容易感伤",
      "干劲十足、想追逐目标",
      "小自卑，时常怀疑自己",
      "总是想到远方和新奇"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "面对朋友不理解你的时候，你最真实的想法？",
    options: [
      "渴望被温柔读懂",
      "想证明自己的闪耀",
      "默默伤心一会",
      "不多想，转移注意力"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "你觉得“幸运”对你意味着？",
    options: [
      "拥有和谐、温暖的关系",
      "被认可、抓住机会",
      "内心安稳，减少焦虑",
      "日常有惊喜，有美好巧合"
    ],
    typeBind: ["E", "B", "C", "F"]
  },
  {
    title: "夜深时你会？",
    options: [
      "细细回味日子的温柔",
      "默默规划明天目标",
      "忍不住内耗自省",
      "做做白日梦，幻想冒险"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "一份朋友的评价戳中了你：",
    options: [
      "“你总有小太阳的温暖”",
      "“你真的很有野心和冲劲”",
      "“你太容易自责了”",
      "“你大胆有趣，羡慕你的自由”"
    ],
    typeBind: ["F", "B", "C", "D"]
  },
  {
    title: "你愿意为哪一个承诺停留？",
    options: [
      "永恒守护",
      "一起变强",
      "向内自愈",
      "去世界冒险"
    ],
    typeBind: ["G", "B", "C", "D"]
  },
  {
    title: "最向往下列哪一个画面？",
    options: [
      "温馨的家和轻柔午后",
      "舞台掌声和万众瞩目",
      "独自走夜路却内心无惧",
      "海边篝火和银河"
    ],
    typeBind: ["A", "B", "E", "D"]
  },
  {
    title: "恋爱/关系里你最在意？",
    options: [
      "情感回应，温柔共振",
      "对方欣赏你的动力",
      "有空间保持独立",
      "不断制造浪漫和惊喜"
    ],
    typeBind: ["A", "B", "C", "F"]
  },
  {
    title: "最近的你，更想拥有？",
    options: [
      "情绪安定的日常",
      "新机遇和远方",
      "自信和安全感",
      "灵感与好运"
    ],
    typeBind: ["A", "B", "C", "F"]
  },
  {
    title: "你觉得自己哪个瞬间最有魅力？",
    options: [
      "温柔聆听他人的时刻",
      "苦练后闪耀的一刻",
      "顿悟中的坚定",
      "探索世界全情投入时"
    ],
    typeBind: ["A", "B", "E", "D"]
  },
  {
    title: "如果可以选择能量守护，你最希望哪一项？",
    options: [
      "情绪疗愈",
      "幸运加持",
      "释怀过往",
      "吸引好缘分"
    ],
    typeBind: ["A", "B", "C", "F"]
  },
  {
    title: "谁会是你人生里的“empower”人？",
    options: [
      "给我安全感的人",
      "激励我成长的人",
      "懂我内心的知己",
      "带我疯玩的人"
    ],
    typeBind: ["G", "B", "C", "D"]
  },
  {
    title: "你最容易因哪种话语流泪？",
    options: [
      "“我懂你所有的温柔和伤”",
      "“有你才会美好”",
      "“你没关系的，慢慢来”",
      "“去吧，世界值得你勇敢追”"
    ],
    typeBind: ["A", "J", "C", "D"]
  },
  {
    title: "在人群中你习惯？",
    options: [
      "观察，静静守护大家",
      "站在台前，做主角",
      "和小圈子聊天",
      "穿梭其中，广交朋友"
    ],
    typeBind: ["A", "B", "I", "D"]
  },
  {
    title: "你最会被哪种类型的水晶图片触动？",
    options: [
      "润泽细腻、乳白幽蓝的光彩",
      "鲜亮透明、明黄灿烂的色调",
      "温粉色泽、柔和光晕",
      "梦幻紫色、神秘渐变"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "如果有一首主题曲，你更接近？",
    options: [
      "轻盈疗愈",
      "动感正能量",
      "情感深刻",
      "梦幻奇遇"
    ],
    typeBind: ["A", "H", "C", "D"]
  },
  {
    title: "哪类困扰你最想被化解？",
    options: [
      "情绪波动",
      "目标摇摆",
      "过往阴影",
      "偏财/幸运停滞"
    ],
    typeBind: ["A", "B", "C", "F"]
  },
  {
    title: "对于未来你最大的愿望是？",
    options: [
      "安稳温柔",
      "持续闪耀",
      "得到疗愈",
      "闪烁惊喜"
    ],
    typeBind: ["E", "B", "C", "F"]
  },
  {
    title: "哪个词让你怦然心动？",
    options: [
      "守护",
      "勇气",
      "自愈",
      "灵感"
    ],
    typeBind: ["G", "B", "C", "D"]
  },
  {
    title: "你真实的能量频率像？",
    options: [
      "静水深流",
      "骄阳正好",
      "晨光微曦",
      "星辰大海"
    ],
    typeBind: ["A", "B", "E", "D"]
  },
  {
    title: "“水晶”在你心中是？",
    options: [
      "情绪调频器",
      "幸运放大器",
      "痛楚疗愈者",
      "灵感魔法棒"
    ],
    typeBind: ["A", "B", "C", "J"]
  },
  {
    title: "你经常因为哪件事而焦虑?",
    options: [
      "情感缺失",
      "没有梦想",
      "过去的事",
      "缺少贵人/机遇"
    ],
    typeBind: ["G", "B", "C", "F"]
  },
  {
    title: "你觉得最治愈的是哪种自然场景？",
    options: [
      "月夜/晨雾",
      "向阳草地",
      "清流山泉",
      "紫霞星空"
    ],
    typeBind: ["A", "B", "E", "D"]
  },
  {
    title: "和自己独处时你？",
    options: [
      "喜欢自省，泡脚/沐浴冥想",
      "制定新计划",
      "反复回忆过往",
      "反复设想新未来"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "你希望你的水晶「能实现」什么小魔法？",
    options: [
      "让心变得温柔且有安全感",
      "让我抓住属于我的机遇",
      "让我能释怀、不纠结",
      "让我吸引到小幸运和贵人"
    ],
    typeBind: ["A", "B", "C", "F"]
  }
];

// 结果类型配置
const typeMap = {
  A: {
    typeName: "星河感应者",
    crystalName: "月光石 Moonstone",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/moonstone.jpg",
    desc: "柔软敏感，渴望理解与温暖安放；偶尔低落时更希望有人听见你。月光石能安抚情绪、唤醒直觉，让温柔的能量守在你身边。",
    reason: "月光石能量温柔细腻，平衡情绪，让你在柔软中也能稳定前行。",
    guide: "睡前握住月光石，或者佩戴贴身，感受它带来的静谧与暖意。",
    cta: "你自有光芒，柔软却坚定，总有月光为你指引方向。",
    key: "你自有光芒，柔软却坚定，总有月光为你指引方向。",
    wechat: "crystal-moon"
  },
  B: {
    typeName: "光耀勇者",
    crystalName: "黄水晶 Citrine",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/citrine.jpg",
    desc: "渴望自我实现，需要外界认同；面对挑战时会用热情驱动自己。黄水晶吸引好运，提升目标力与执行力，让你成为自己的高光担当。",
    reason: "黄水晶象征幸运与力量，助你抓住机遇、迈出坚定步伐。",
    guide: "把黄水晶放在办公桌/书桌旁，增强决心与自信，吸引好的转机。",
    cta: "世界因你的热烈而明亮，你的存在自带光环。",
    key: "世界因你的热烈而明亮，你的存在自带光环。",
    wechat: "crystal-citrine"
  },
  C: {
    typeName: "灵犀守护者",
    crystalName: "粉晶 Rose Quartz",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/rosequartz.jpg",
    desc: "高敏共情，内心希望被接纳疼爱；容易自我否定，需要温柔的陪伴。粉晶为爱疗愈，守护你的每一次柔软。",
    reason: "粉晶能量温暖，帮助你学会接纳自己，让爱与安全感自然流动。",
    guide: "将粉晶放在枕边或随身，遇到不安时摸一摸，感受它传来的安心。",
    cta: "不完美的你，已经很好，值得最温柔的去爱。",
    key: "不完美的你，已经很好，值得最温柔的去爱。",
    wechat: "crystal-rose"
  },
  D: {
    typeName: "灵动旅者",
    crystalName: "紫水晶 Amethyst",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/amethyst.jpg",
    desc: "自由浪漫，多灵感，爱探索；偶尔分心、迷茫。紫水晶带来清醒灵性，助力每次勇敢转变。",
    reason: "紫水晶代表灵性与平衡，帮助你在冒险中保持清醒和好运。",
    guide: "把紫水晶放在随身包或工作桌，增强直觉与灵感，让你敢于前行。",
    cta: "你的旅途漫长，愿一切灵感与好运与你同行。",
    key: "你的旅途漫长，愿一切灵感与好运与你同行。",
    wechat: "crystal-amethyst"
  },
  E: {
    typeName: "晨曦筑梦者",
    crystalName: "白水晶/水晶簇 Clear Quartz",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/clearquartz.jpg",
    desc: "理想主义，愿意成长；易焦虑、压力重。白水晶助你净化杂念，保持理想与清晰。",
    reason: "白水晶能量纯净，帮助你清理迷雾、明确方向，专注追梦。",
    guide: "在书桌、床头摆一块白水晶，让清晰与信念在你周围流动。",
    cta: "每一个清晨，你如水晶般纯粹透亮。",
    key: "每一个清晨，你如水晶般纯粹透亮。",
    wechat: "crystal-clear"
  },
  F: {
    typeName: "小幸运引力者",
    crystalName: "葡萄石 Prehnite",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/prehnite.jpg",
    desc: "小浪漫，有生活仪式感；怕错过，偶有遗憾。葡萄石吸引小幸运，让你“如愿以偿”。",
    reason: "葡萄石是幸运和缘分的磁石，帮助你遇见美好与贵人。",
    guide: "随身放一块葡萄石，提醒自己：好运就在转角。",
    cta: "幸运不会迟到，每一刻的快乐都值得铭记。",
    key: "幸运不会迟到，每一刻的快乐都值得铭记。",
    wechat: "crystal-lucky"
  },
  G: {
    typeName: "守护石心者",
    crystalName: "黑曜石 Obsidian",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/obsidian.jpg",
    desc: "外表大大咧咧，内心却很需要安全感；容易受负面能量影响。黑曜石强力护体，帮你建立结界、屏蔽干扰。",
    reason: "黑曜石是最有力的防护石，能帮你守住边界，让能量清澈稳定。",
    guide: "把黑曜石放在门口或随身，感受它为你筑起的保护墙。",
    cta: "你每一步都自带结界，安全而勇敢。",
    key: "你每一步都自带结界，安全而勇敢。",
    wechat: "crystal-obsidian"
  },
  H: {
    typeName: "智慧觉醒者",
    crystalName: "青金石 Lapis Lazuli",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/lapis.jpg",
    desc: "理性思考，追求认知提升；偶尔感到迷茫、不易专注。青金石有助智慧提升、考试/面试加运。",
    reason: "青金石带来清晰思维与好判断力，帮你在关键时刻更自信。",
    guide: "把青金石放在学习/办公空间，让你的脑海更清明、决策更有力。",
    cta: "你的思维，是星辰大海的钥匙。",
    key: "你的思维，是星辰大海的钥匙。",
    wechat: "crystal-lapis"
  },
  I: {
    typeName: "勇敢自信者",
    crystalName: "虎眼石 Tiger Eye",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/tigereye.jpg",
    desc: "有理想，偶尔社交胆怯；希望更果断、表达更自信。虎眼石助你勇敢发声，行动更坚定。",
    reason: "虎眼石寓意勇气与决断，帮助你把焦虑变成行动力。",
    guide: "把虎眼石放在钥匙扣或口袋里，随时提醒自己：你有力量。",
    cta: "只要你愿意，世界都等着你开口。",
    key: "只要你愿意，世界都等着你开口。",
    wechat: "crystal-tigereye"
  },
  J: {
    typeName: "梦想旅人",
    crystalName: "草莓晶 Strawberry Quartz",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/strawberryquartz.jpg",
    desc: "对甜蜜和美好有强烈向往；希望吸引爱情缘分、桃花贵人。草莓晶是吸引正缘、友情贵人、桃花之石。",
    reason: "草莓晶带来温柔魅力与甜蜜能量，让你更容易遇见对的人。",
    guide: "把草莓晶当随身小幸运，让你在遇见对的那一刻，笑得更自信。",
    cta: "你的甜美，总有懂得的人看得见。",
    key: "你的甜美，总有懂得的人看得见。",
    wechat: "crystal-strawberry"
  }
};

// 答案结果统计
let answers = [];
let cur = 0;

// DOM元素
const welcomeSection = document.getElementById('welcome-section');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');
const progressInner = document.getElementById('progress-inner');
const questionNumber = document.getElementById('question-number');
const questionTitle = document.getElementById('question-title');
const optionsBox = document.getElementById('options');
const crystalTypeEl = document.getElementById('crystal-type');
const secondaryTypeEl = document.getElementById('secondary-type');
const typeDesc = document.getElementById('type-desc');
const crystalImgBox = document.getElementById('crystal-img-box');
const crystalInfo = document.getElementById('crystal-info');
const buyGuide = document.getElementById('buy-guide');
const ctaBottom = document.getElementById('cta-bottom');

const startBtn = document.getElementById('startBtn');
const wechatBtn = document.getElementById('wechatBtn');
const restartBtn = document.getElementById('restartBtn');

startBtn.onclick = () => startTest();
restartBtn.onclick = () => startTest();

function startTest() {
  welcomeSection.classList.add('hide');
  resultSection.classList.add('hide');
  questionSection.classList.remove('hide');
  cur = 0;
  answers = [];
  renderQuestion();
}

function renderQuestion() {
  if (cur >= questions.length) {
    showResult();
    return;
  }
  questionNumber.innerText = `问题 ${cur + 1} / ${questions.length}`;
  questionTitle.innerText = questions[cur].title;
  optionsBox.innerHTML = '';
  questions[cur].options.forEach((op, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-card';
    btn.innerText = op;
    btn.onclick = () => {
      answers.push(questions[cur].typeBind[idx]);
      cur++;
      updateProgress();
      renderQuestion();
    };
    optionsBox.appendChild(btn);
  });
  updateProgress();
}

function updateProgress() {
  const percent = ((cur) / questions.length) * 100;
  progressInner.style.width = `${percent.toFixed(2)}%`;
}

function showResult() {
  questionSection.classList.add('hide');
  resultSection.classList.remove('hide');

  const count = Object.keys(typeMap).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
  answers.forEach(a => { if (count[a] != null) count[a]++; });

  const sorted = Object.entries(count)
    .sort(([, a], [, b]) => b - a)
    .filter(([, v]) => v > 0);

  const mainType = sorted[0] ? sorted[0][0] : 'A';
  const mainInfo = typeMap[mainType];

  crystalTypeEl.innerHTML = `${mainInfo.typeName} <span style="color:#a27cd7;font-size:1.2em;">·</span> ${mainInfo.crystalName}`;

  const runnerUp = (sorted[1] && sorted[1][1] === sorted[0][1]) ? sorted[1][0] : null;
  if (runnerUp) {
    const subInfo = typeMap[runnerUp];
    secondaryTypeEl.innerHTML = `你也可能是：<strong>${subInfo.typeName}</strong> · ${subInfo.crystalName}`;
  } else {
    secondaryTypeEl.innerHTML = '';
  }

  typeDesc.innerHTML = `<span style="font-size:1.05em;font-weight:500">${mainInfo.key}</span><br>${mainInfo.desc}`;
  crystalImgBox.innerHTML = `<img class="crystal-img" src="${mainInfo.img}" alt="${mainInfo.crystalName}"/>`;
  crystalInfo.innerHTML = `<b>适合你的水晶：</b> <span style="color:#b869e2;">${mainInfo.crystalName}</span><br><b>推荐理由：</b> ${mainInfo.reason}`;
  buyGuide.innerHTML = mainInfo.guide;
  ctaBottom.innerHTML = mainInfo.cta;


