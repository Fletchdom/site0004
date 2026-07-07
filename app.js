const params = new URLSearchParams(location.search);
const page = document.body.dataset.page;

const fixedRows = [
  ["tk-001", "怪物", "Monster", "电影", 2023, 8.4, "剧情", "https://upload.wikimedia.org/wikipedia/en/6/60/Monster_2023_film_poster.jpg"],
  ["tk-002", "小偷家族", "Shoplifters", "电影", 2018, 8.7, "剧情", "https://upload.wikimedia.org/wikipedia/en/8/8a/Shoplifters_%28film%29.png"],
  ["tk-003", "驾驶我的车", "Drive My Car", "电影", 2021, 8.4, "剧情", "https://upload.wikimedia.org/wikipedia/en/6/6f/Drive_My_Car_%282021%29.png"],
  ["tk-004", "花束般的恋爱", "We Made a Beautiful Bouquet", "电影", 2021, 8.6, "爱情", "https://upload.wikimedia.org/wikipedia/en/4/4b/We_Made_a_Beautiful_Bouquet.jpg"],
  ["tk-005", "海街日记", "Our Little Sister", "电影", 2015, 8.8, "家庭", "https://upload.wikimedia.org/wikipedia/en/3/3f/Our_Little_Sister_%28film%29.jpg"],
  ["tk-006", "告白", "Confessions", "电影", 2010, 8.5, "悬疑", "https://upload.wikimedia.org/wikipedia/en/8/8d/Kokuhaku_%282010_film%29_poster.jpg"],
  ["tk-007", "你的名字。", "Your Name.", "动漫电影", 2016, 8.8, "爱情", "https://cdn.myanimelist.net/images/anime/5/87048l.jpg"],
  ["tk-008", "千与千寻", "Spirited Away", "动漫电影", 2001, 9.1, "奇幻", "https://cdn.myanimelist.net/images/anime/6/79597l.jpg"],
  ["tk-009", "声之形", "A Silent Voice", "动漫电影", 2016, 8.7, "青春", "https://cdn.myanimelist.net/images/anime/1122/96435l.jpg"],
  ["tk-010", "灌篮高手 THE FIRST SLAM DUNK", "The First Slam Dunk", "动漫电影", 2022, 8.9, "运动", "https://cdn.myanimelist.net/images/anime/1745/129284l.jpg"],
  ["tk-011", "铃芽之旅", "Suzume", "动漫电影", 2022, 8.3, "奇幻", "https://cdn.myanimelist.net/images/anime/1598/128450l.jpg"],
  ["tk-012", "弥留之国的爱丽丝", "Alice in Borderland", "日剧", 2020, 8.2, "悬疑", "https://static.tvmaze.com/uploads/images/original_untouched/589/1473249.jpg"],
  ["tk-013", "深夜食堂", "Midnight Diner", "日剧", 2009, 8.9, "生活", "https://static.tvmaze.com/uploads/images/original_untouched/248/620533.jpg"],
  ["tk-014", "First Love 初恋", "First Love", "日剧", 2022, 8.5, "爱情", "https://static.tvmaze.com/uploads/images/original_untouched/438/1096909.jpg"],
  ["tk-015", "忍者之家", "House of Ninjas", "日剧", 2024, 7.8, "动作", "https://static.tvmaze.com/uploads/images/original_untouched/514/1286816.jpg"],
  ["tk-016", "舞伎家的料理人", "The Makanai", "日剧", 2023, 8.1, "生活", "https://static.tvmaze.com/uploads/images/original_untouched/441/1103633.jpg"],
  ["tk-017", "孤独的美食家", "Solitary Gourmet", "日剧", 2012, 8.7, "美食", "https://static.tvmaze.com/uploads/images/original_untouched/491/1229441.jpg"],
  ["tk-018", "火烧御手洗家", "Burn the House Down", "日剧", 2023, 7.6, "悬疑", "https://static.tvmaze.com/uploads/images/original_untouched/470/1176681.jpg"],
  ["tk-019", "双层公寓", "Terrace House", "综艺纪录", 2015, 8.0, "真人秀", "https://static.tvmaze.com/uploads/images/original_untouched/34/85871.jpg"],
  ["tk-020", "东京美食手记", "Tokyo Food Journal", "综艺纪录", 2024, 8.1, "美食", "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80"],
  ["tk-021", "京都匠人纪行", "Kyoto Craft Notes", "综艺纪录", 2023, 8.2, "纪录片", "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80"],
  ["tk-022", "日本铁路慢旅", "Japan Railway Journey", "综艺纪录", 2022, 8.0, "旅行", "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"]
];

const extraTitles = [
  "新宿午夜放映", "银座恋爱排期", "涩谷青春剧场", "浅草艺能纪实", "上野博物馆影像", "日本桥旧街电影",
  "代官山书店来信", "目黑川春日短片", "品川站前重逢", "台场未来之夜", "横滨港口疑案", "镰仓海岸物语",
  "江之岛夏日电影", "京都雨季日剧", "奈良古寺纪录", "大阪城下喜剧", "神户蓝调长片", "福冈深夜食单",
  "札幌雪夜剧集", "小樽运河来信", "函馆夜景纪实", "金泽茶屋物语", "松本城下推理", "箱根温泉密语",
  "伊豆半岛来客", "富士山脚青春", "长野山谷日记", "山梨葡萄园纪录", "轻井泽冬日恋歌", "名古屋家庭剧",
  "熊本城下故事", "鹿儿岛火山纪行", "冲绳夏日旅程", "宫岛海潮之声", "广岛和平影像", "长崎坡道爱情",
  "鸟取沙丘旅人", "四国巡礼电影", "高松港口短剧", "琵琶湖边的她", "宇治抹茶之旅", "飞驒古街记忆",
  "青森列车日记", "仙台七夕剧集", "佐渡岛风声", "别府温泉纪录", "秋叶原动画夜", "池袋漫画周末",
  "三鹰动画手札", "隅田川烟火夜", "横须贺海风剧场", "湘南夏令电影", "神乐坂旧书店", "筑地清晨物语",
  "六本木人物纪录", "东京塔下约定", "清水寺雨声", "目白庭园纪事", "成田机场离别", "川越小江户喜剧",
  "高圆寺音乐夜", "吉祥寺咖啡馆", "二子玉川家庭周末", "下北泽独立电影", "丰洲市场清晨", "原宿街角动画",
  "丸之内办公室恋曲", "惠比寿晚餐剧场", "麻布十番旧案", "有乐町剧院灯牌", "月岛文字烧日记", "早稻田青春手册"
];

const photoIds = [
  "1493976040374-85c8e12f0c0e", "1503899036084-c55cdd92da26", "1526481280693-3bfa7568e0f3",
  "1542051841857-5f90071e7989", "1513407030348-c983a97b98d8", "1500530855697-b586d89ba3ee",
  "1536098561742-ca998e48cbcc", "1528360983277-13d401cdc186", "1518548419970-58e3b4079ab2",
  "1528164344705-47542687000d"
];

let items = [
  ...fixedRows.map(fromRow),
  ...extraTitles.map((title, index) => {
    const kinds = ["电影", "日剧", "动漫电影", "综艺纪录"];
    const genres = ["剧情", "爱情", "悬疑", "生活", "美食", "青春", "旅行", "纪录片", "犯罪", "家庭"];
    const kind = kinds[index % kinds.length];
    const genre = genres[(index + 3) % genres.length];
    return {
      id: `tk-${String(index + 23).padStart(3, "0")}`,
      title,
      originalTitle: `Tokyo Screening File ${index + 1}`,
      kind,
      year: 2000 + (index % 27),
      score: (7.1 + (index % 19) / 10).toFixed(1),
      genre,
      poster: `https://images.unsplash.com/photo-${photoIds[index % photoIds.length]}?auto=format&fit=crop&w=900&q=80`,
      hot: 11000 - index * 39,
      summary: `${title}收录于东京放映局日本影视片库，提供${kind}频道、${genre}题材、高清海报、年份评分、剧情简介和相似影片推荐，适合查找日本电影、日剧、动漫电影与综艺纪录片观看信息。`
    };
  })
];

function escapeAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function fallbackPoster(item) {
  const palettes = {
    "电影": ["#1b1110", "#e8b650", "#c74332"],
    "日剧": ["#10151d", "#67b58b", "#e8b650"],
    "动漫电影": ["#111327", "#8bb7ff", "#f29cc2"],
    "综艺纪录": ["#132018", "#95d78a", "#e8b650"]
  };
  const [bg, main, sub] = palettes[item.kind] || palettes["电影"];
  const title = String(item.title || "日本影视").slice(0, 12);
  const genre = String(item.genre || item.kind || "高清推荐").slice(0, 8);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="960" viewBox="0 0 640 960">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="#070504"/></linearGradient></defs>
    <rect width="640" height="960" fill="url(#g)"/>
    <rect x="42" y="42" width="556" height="876" rx="22" fill="none" stroke="${main}" stroke-width="6"/>
    <rect x="76" y="96" width="488" height="90" rx="10" fill="${main}" opacity=".16"/>
    <text x="88" y="150" fill="${main}" font-size="34" font-family="Arial, sans-serif" font-weight="700">TOKYO SCREEN</text>
    <text x="88" y="418" fill="#fff8e8" font-size="58" font-family="Microsoft YaHei, Arial, sans-serif" font-weight="800">${title}</text>
    <text x="88" y="494" fill="${main}" font-size="34" font-family="Microsoft YaHei, Arial, sans-serif">${genre} · ${item.year || 2026}</text>
    <circle cx="482" cy="690" r="82" fill="${sub}" opacity=".9"/>
    <circle cx="482" cy="690" r="34" fill="${bg}" opacity=".88"/>
    <text x="88" y="820" fill="#fff8e8" font-size="30" font-family="Arial, sans-serif" font-weight="700">${item.kind || "日本影视"}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function imageTag(item, className = "") {
  return `<img ${className ? `class="${className}"` : ""} src="./posters/${escapeAttr(item.id)}.svg" data-real="${escapeAttr(item.poster)}" alt="${escapeAttr(item.title)}" loading="eager">`;
}

function hydrateImages() {
  const imgs = [...document.images];
  imgs.forEach((img) => {
    if (!img.dataset.real) return;
    const real = new Image();
    let done = false;
    const timer = setTimeout(() => {
      done = true;
    }, 1800);
    real.onload = () => {
      if (done || real.naturalWidth === 0) return;
      clearTimeout(timer);
      img.src = img.dataset.real;
    };
    real.onerror = () => {
      done = true;
      clearTimeout(timer);
    };
    real.src = img.dataset.real;
  });
}

function fromRow(row) {
  const [id, title, originalTitle, kind, year, score, genre, poster] = row;
  return {
    id, title, originalTitle, kind, year, score: Number(score).toFixed(1), genre, poster,
    hot: 14500 - Number(id.slice(-3)) * 51,
    summary: `${title}是东京放映局收录的${kind}内容，整理${genre}题材、真实海报、评分年份、剧情资料和观影推荐，适合用于日本电影高清在线观看、日剧推荐、动漫电影片库和纪实综艺专题。`
  };
}

async function enrich() {
  items = items.slice(0, 94);
  render();
}

function unique(list) {
  const seen = new Set();
  return list.filter((item) => {
    const key = `${item.title}-${item.year}`;
    if (!item.poster || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function card(item) {
  return `<article class="poster-card">
    <a href="./movie.html?id=${encodeURIComponent(item.id)}">
      <div class="poster">${imageTag(item)}<span>${item.kind}</span></div>
      <div class="poster-info">
        <h3>${item.title}</h3>
        <p>${item.originalTitle}</p>
        <div class="meta"><b>${item.score}</b><em>${item.year}</em><em>${item.genre}</em></div>
      </div>
    </a>
  </article>`;
}

function row(item) {
  return `<a class="feature" href="./movie.html?id=${encodeURIComponent(item.id)}">
    ${imageTag(item)}
    <span><b>${item.title}</b><small>${item.kind} · ${item.genre} · ${item.year}</small></span>
    <em>${item.score}</em>
  </a>`;
}

function renderHome() {
  const hot = [...items].sort((a, b) => b.hot - a.hot);
  const first = hot[0];
  document.getElementById("mainScreen").innerHTML = `<a href="./movie.html?id=${first.id}">${imageTag(first)}<span><b>${first.title}</b><em>${first.kind} / ${first.score}</em></span></a>`;
  document.getElementById("showtimeList").innerHTML = hot.slice(1, 6).map(row).join("");
  document.getElementById("featureList").innerHTML = hot.filter((item) => item.kind !== "动漫电影").slice(0, 7).map(row).join("");
  document.getElementById("rankList").innerHTML = [...items].sort((a, b) => b.score - a.score).slice(0, 9).map((item) => `<li><a href="./movie.html?id=${item.id}"><span>${item.title}</span><b>${item.score}</b></a></li>`).join("");
  document.getElementById("homeGrid").innerHTML = hot.slice(0, 36).map(card).join("");
}

function getList() {
  const kind = params.get("kind") || "全部";
  const genre = params.get("genre");
  const sort = params.get("sort") || document.getElementById("sortSelect")?.value || "hot";
  let list = [...items];
  if (kind !== "全部") list = list.filter((item) => item.kind === kind);
  if (genre) list = list.filter((item) => item.genre === genre);
  list.sort((a, b) => sort === "score" ? b.score - a.score : sort === "year" ? b.year - a.year : b.hot - a.hot);
  return { list, kind };
}

function renderLibrary() {
  document.querySelectorAll("[data-kind]").forEach((button) => {
    button.onclick = () => {
      const kind = button.dataset.kind;
      location.href = kind === "全部" ? "./library.html" : `./library.html?kind=${encodeURIComponent(kind)}`;
    };
  });
  const select = document.getElementById("sortSelect");
  select.value = params.get("sort") || "hot";
  select.onchange = () => {
    params.set("sort", select.value);
    location.href = `./library.html?${params.toString()}`;
  };
  const { list, kind } = getList();
  document.getElementById("libraryTitle").textContent = kind === "全部" ? "全部内容" : `${kind}频道`;
  document.getElementById("resultCount").textContent = `${list.length} 条`;
  document.getElementById("libraryGrid").innerHTML = list.map(card).join("");
}

function renderDetail() {
  const item = items.find((entry) => entry.id === params.get("id")) || items[0];
  document.title = `${item.title}-${item.kind}高清在线观看资料-东京放映局`;
  document.querySelector("meta[name='description']").setAttribute("content", item.summary);
  document.getElementById("detailRoot").innerHTML = `
    <div class="detail-poster">${imageTag(item)}</div>
    <article class="detail-copy">
      <p class="overline">${item.kind} / ${item.genre}</p>
      <h1>${item.title}</h1>
      <p class="origin">${item.originalTitle}</p>
      <div class="detail-meta"><span>评分 ${item.score}</span><span>${item.year}</span><span>${item.kind}</span><span>${item.genre}</span></div>
      <p>${item.summary}</p>
      <a class="button gold" href="./library.html?kind=${encodeURIComponent(item.kind)}">查看同频道内容</a>
    </article>`;
  const related = items.filter((entry) => entry.id !== item.id && (entry.kind === item.kind || entry.genre === item.genre)).slice(0, 8);
  document.getElementById("relatedGrid").innerHTML = related.map(card).join("");
}

function render() {
  if (page === "home") renderHome();
  if (page === "library") renderLibrary();
  if (page === "detail") renderDetail();
  hydrateImages();
}

enrich();
