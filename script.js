// 测试题目配置
const questions = [
  {
    title: "你最常被哪种情绪包围？",
    options: [
      "温柔安静，渴望被理解",
      "热烈直接，害怕被忽视",
      "忐忑不安，总担心不够好",
      "洒脱趣味，偶尔失落孤单"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "别人对你的第一印象，最常听到的是？",
    options: [
      "治愈系、温柔有底气",
      "闪闪发光、特别有力量",
      "心思细腻、有些难靠近",
      "乐观活泼、很会生活"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "在感情关系里，你最在乎的是什么？",
    options: [
      "情感的深度和安全感",
      "对方的关注和回应",
      "合适的距离和尊重",
      "一起成长、保持新鲜感"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "当你累或情绪低落时，更希望怎样疗愈自己？",
    options: [
      "听治愈的歌/冥想安静一会",
      "找人倾诉、需要陪伴",
      "写日记、自我对话整理思绪",
      "旅行/运动、换个环境呼吸"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "你会被哪句话打动到？",
    options: [
      "你被温柔以待，一切都有回应。",
      "你值得被全世界喜欢。",
      "即使不完美，也值得爱。",
      "任何时刻，你都能重新来过。"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "当你遇到挑战时，你的第一反应是？",
    options: [
      "低落但会慢慢自愈",
      "不服输，主动寻求突破",
      "有点退缩，喜欢等一等",
      "换个思路，把它变成机会"
    ],
    typeBind: ["A", "B", "C", "D"]
  },
  {
    title: "你理想的未来一句镜头是？",
    options: [
      "暖阳午后，心安如初",
      "舞台闪耀，发光发热",
      "独自前行，步伐坚定",
      "世界很大，四处去爱"
    ],
    typeBind: ["A", "B", "E", "F"]
  },
  {
    title: "你最难释怀的事情往往和什么有关？",
    options: [
      "被误解或关系的冷漠",
      "努力却没被看见",
      "没达到自己的预期",
      "错过了某些美好、遗憾感"
    ],
    typeBind: ["A", "B", "E", "F"]
  },
  {
    title: "你觉得自己骨子里是？",
    options: [
      "很需要归属感和平静",
      "渴望被认可、很有冲劲",
      "对理想认真执着",
      "喜欢新鲜感和灵感冒险"
    ],
    typeBind: ["A", "B", "E", "F"]
  },
  {
    title: "你想让“水晶”带给你什么？",
    options: [
      "情绪安抚，让心安宁",
      "守护勇气，为我加持",
      "提升信心，疗愈旧伤",
      "启发灵感，吸引好运"
    ],
    typeBind: ["A", "B", "C", "D"]
  }
];

// 结果类型配置
const typeMap = {
  A: {
    typeName: "星河感应者",
    crystalName: "月光石",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/moonstone.jpg",
    desc: "你的温柔细腻，让世界多了一点柔和的色彩。你期待被理解、被温柔安放，也有超强的共情力。月光石帮助你疗愈情绪、安抚波动，指引你找到属于自己的光亮和平静。",
    reason: "月光石代表女性能量与情感疗愈，安抚心绪、增强直觉，为你带来温暖与安定。",
    guide: "月光石不只是水晶，更像你的温柔知己。让它陪你，每个需要安全感的夜晚悄悄发光。",
    cta: "选购你的月光石，让疗愈与好梦，每一天都在继续。",
    key: "你自有光芒，柔软却坚定，总有月光为你指引方向。",
    wechat: "crystal-moon"
  },
  B: {
    typeName: "光耀勇者",
    crystalName: "黄水晶",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/citrine.jpg",
    desc: "你的内心炽热，总想在人群中发光发亮。你渴望被世界看到，有不服输的勇气和进取心。黄水晶将好运和信心聚集于你，焕发属于你的闪耀光彩。",
    reason: "黄水晶是力量与好运的象征，激发意志，吸引机会，让每一次努力都不被辜负。",
    guide: "黄水晶象征成长和璀璨，让好运和底气常伴你左右，每个瞬间都能成为你的高光时刻。",
    cta: "带走你的命定黄水晶，拥抱属于你的人生高光时刻。",
    key: "世界因你的热烈而明亮，你的存在自带光环。",
    wechat: "crystal-citrine"
  },
  C: {
    typeName: "灵犀守护者",
    crystalName: "粉晶",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/rosequartz.jpg",
    desc: "你心思细腻，有柔软的外表和坚韧的内心。对自己有时会过于严苛，你渴望被接纳、被温柔对待。粉晶能疗愈过往、陪你学会自爱，也能吸引桃花与美好关系。",
    reason: "粉晶是爱与治愈的使者，自我疗愈，柔软内心，温暖守护你的情绪时刻。",
    guide: "粉晶为你解锁温柔力量。不止治愈，还帮你拥有被爱与自爱的幸福能量。",
    cta: "拥有你的贴身粉晶，守护你每个柔软和爱的瞬间。",
    key: "不完美的你，已经很好，值得最温柔的去爱。",
    wechat: "crystal-rose"
  },
  D: {
    typeName: "灵动旅者",
    crystalName: "紫水晶",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/amethyst.jpg",
    desc: "你拥有自由浪漫的灵魂，喜欢冒险与新鲜，灵感丰富但容易分心。紫水晶伴你清醒出发、平衡心境，让灵感的闪电总在你身边闪耀。",
    reason: "紫水晶象征灵性与平衡，让你的每个新奇旅程都有好运守护与智慧。",
    guide: "紫水晶是不可或缺的护符，灵气与好运交织，让你的每一步都走得自在笃定。",
    cta: "选你的幸运紫水晶，勇敢出发，遇见更好的自己。",
    key: "你的旅途漫长，愿一切灵感与好运与你同行。",
    wechat: "crystal-amethyst"
  },
  E: {
    typeName: "晨曦筑梦者",
    crystalName: "白水晶/水晶簇",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/clearquartz.jpg",
    desc: "你安静坚定，为理想默默努力，也会担心被否定。白水晶为你净化压力、放大底气，让每个清晨你都能以更清亮的状态出发。",
    reason: "白水晶纯净有力，助你理清思路，目标坚定，守护你的梦想与成长。",
    guide: "白水晶静谧纯粹，每天清晨都能让你净化情绪、专注成长。",
    cta: "拥有属于你的能量白水晶，每天都在净化和成长中醒来。",
    key: "每一个清晨，你如水晶般纯粹透亮，用梦想点亮世界。",
    wechat: "crystal-clear"
  },
  F: {
    typeName: "小幸运引力者",
    crystalName: "葡萄石/橄榄石",
    img: "https://cdn.jsdelivr.net/gh/naixx/image-bed/crystal/prehnite.jpg",
    desc: "你爱浪漫，擅长发现和创造生活的小确幸，对美好有独特吸引力。葡萄石/橄榄石为你捕捉幸福彩蛋，也弥补心里的小遗憾。",
    reason: "葡萄石/橄榄石吸引幸运和新缘分，让每个平凡日子都有闪光片段。",
    guide: "葡萄石/橄榄石是“幸运和新缘分”的代表，把它收入囊中，所有的小憾都会变得可爱。",
    cta: "属于你的幸运水晶→现在带回家，让美好自来。",
    key: "幸运不会迟到，每一刻的快乐都值得铭记。",
    wechat: "crystal-lucky"
  }
};

// 答案结果统计
let answers = [];
let cur = 0;

// DOM元素
const welcomeSection = document.getElementById('welcome-section');
const questionSection = document.getElementById('question-section');
const resultSection = document.getElementById('result-section');
const progressBar = document.getElementById('progress-bar');
const progressInner = document.getElementById('progress-inner');
const questionNumber = document.getElementById('question-number');
const questionTitle = document.getElementById('question-title');
const optionsBox = document.getElementById('options');
const crystalTypeEl = document.getElementById('crystal-type');
const typeDesc = document.getElementById('type-desc');
const crystalImgBox = document.getElementById('crystal-img-box');
const crystalInfo = document.getElementById('crystal-info');
const buyGuide = document.getElementById('buy-guide');
const ctaBottom = document.getElementById('cta-bottom');

const startBtn = document.getElementById('startBtn');
const wechatBtn = document.getElementById('wechatBtn');

startBtn.onclick = function() {
  welcomeSection.classList.add('hide');
  questionSection.classList.remove('hide');
  cur = 0;
  answers = [];
  renderQuestion();
};

function renderQuestion() {
  if (cur >= questions.length) {
    showResult();
    return;
  }
  // 渲染题目信息
  questionNumber.innerHTML = `问题 ${cur + 1} / ${questions.length}`;
  questionTitle.innerHTML = questions[cur].title;
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
  const percent = ((cur) / questions.length * 100).toFixed(2);
  progressInner.style.width = percent + '%';
}

/* 结果处理与渲染 */
function showResult() {
  questionSection.classList.add('hide');
  resultSection.classList.remove('hide');
  // 统计
  let count = {};
  for (const k of Object.keys(typeMap)) count[k]=0;
  answers.forEach(a => { if(count[a]!=null) count[a]++; });
  // 最多的type为user主type
  let mostType = "A";
  let maxCount = -1;
  Object.entries(count).forEach(([type, n]) => {
    if (n > maxCount) { maxCount = n; mostType = type;}
  });
  const info = typeMap[mostType];
  crystalTypeEl.innerHTML = `${info.typeName} <span style="color:#a27cd7;font-size:1.2em;">·</span> ${info.crystalName}`;
  typeDesc.innerHTML = `
    <span style="font-size:1.05em;font-weight:500">${info.key}</span><br>
    ${info.desc}
  `;
  crystalImgBox.innerHTML = `<img class="crystal-img" src="${info.img}" alt="${info.crystalName}"/>`;
  crystalInfo.innerHTML = 
      `<b>适合你的水晶：</b> <span style="color:#b869e2;">${info.crystalName}</span><br>
      <b>推荐理由：</b> ${info.reason}`;
  buyGuide.innerHTML = info.guide;
  ctaBottom.innerHTML = info.cta;

  // 绑定微信按钮
  wechatBtn.onclick = function(){
    if(window.navigator && window.navigator.clipboard){
      navigator.clipboard.writeText(info.wechat);
      alert('微信号已复制，快去微信添加 “' + info.wechat + '”~');
    }else{
      prompt('长按复制微信号，加好友聊聊你的水晶缘分吧：', info.wechat);
    }
  };
}

