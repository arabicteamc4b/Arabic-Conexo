/* ============================================================
   THEME — light/dark with persistence
   ============================================================ */
var LIGHT_THEME = {
  name: "light",
  bg: "#FDFDFD",
  primary: "#145DA0",
  secondary: "#50E3C2",
  titleText: "#145DA0",
  bodyText: "#222",
  bodySub: "#6E7B8B",
  panelBg: "#FFFFFF",
  buttonBg: "#FFFFFF",
  buttonBorder: "#9AA7C0",
  buttonHover: "#E7F0FF",
  chipSelected: "#DCEBFF",
  chipBg: "#EEF1F6",
  overlay: "rgba(0,0,0,0.55)",
  thumb: "#C7D6F3",
  track: "#E0E6F3"
};
var DARK_THEME = {
  name: "dark",
  bg: "#0D1321",
  primary: "#7DB2FF",
  secondary: "#58E0C7",
  titleText: "#A8C8FF",
  bodyText: "#EDEFF5",
  bodySub: "#A6B2C6",
  panelBg: "#121a2f",
  buttonBg: "#16213E",
  buttonBorder: "#304266",
  buttonHover: "#213458",
  chipSelected: "#223764",
  chipBg: "#1b2848",
  overlay: "rgba(0,0,0,0.55)",
  thumb: "#4E6AA5",
  track: "#2B3B63"
};
var THEME=(function(){try{return localStorage.getItem("wg_theme")==="dark"?DARK_THEME:LIGHT_THEME;}catch(e){return LIGHT_THEME;}})();
function setTheme(t){THEME=t;try{localStorage.setItem("wg_theme",t.name);}catch(e){}}
function toggleTheme(){setTheme(THEME.name==="dark"?LIGHT_THEME:DARK_THEME);}

/* ============================================================
   GAME DATA — Chapters 36..40
   English labels; Arabic answers; rtl=true where needed
   ============================================================ */
var CHAPTERS = [
  /* ---------------- Chapter 36 ---------------- */
  { name: "Chapter 36", puzzles: [
    { title: "Game 1", rtl: true, groups: [
      { label: "Symptoms & minor ailments", words: ["سُعال","توعك","عَرْض","ورم"], color:[255,210,210] },
      { label: "Injuries", words: ["جرح","حرق","كَدْمة","التوى"], color:[210,255,210] },
      { label: "Anatomy & body material", words: ["حلق","مفصل","جيب أنفيّ","مخاط"], color:[210,210,255] },
      { label: "Treatment items & meds", words: ["مرهم","كمادة","مُضادّ حيوي","خافض للحرارة"], color:[255,255,210] }
    ]},
    { title: "Game 2", rtl: true, groups: [
      { label: "Prevention & immunity", words: ["لَقاح","طعَّم","مناعة","تحسباً من"], color:[255,210,210] },
      { label: "Exposure & progression", words: ["تعرّض","التهب","انتكس","مُضاعفة"], color:[210,255,210] },
      { label: "Bites, stings & toxins", words: ["حشرة سامّة","لدغات الثعابين","لسعات العقارب","سم"], color:[210,210,255] },
      { label: "First response & care", words: ["مسعف","شَخَّصَ","ضمَّد","استدعى"], color:[255,255,210] }
    ]},
    { title: "Game 3", rtl: true, groups: [
      { label: "Education & awareness", words: ["ثقَّف","وعَّى","نَبَّه","معنيّة"], color:[255,210,210] },
      { label: "Medicines & mechanisms", words: ["عَقّار","طب بديل","مُركّب","حفَّز"], color:[210,255,210] },
      { label: "Patient status", words: ["ربو","إعاقة","مُصاب","حرِجة"], color:[210,210,255] },
      { label: "Serious events", words: ["إصابة طارئة","أودى بحياة","حنَط","تبعة"], color:[255,255,210] }
    ]},
    { title: "Game 4", rtl: true, groups: [
      { label: "Food & natural prep", words: ["دواجن","عشب طبي","غلى","نقع"], color:[255,210,210] },
      { label: "Media & communication", words: ["طبع","قرص مدمج","شائع","مُبسّط"], color:[210,255,210] },
      { label: "Decisions & interactions", words: ["استجابَ","صادَقَ","استهدف","نفعَ"], color:[210,210,255] },
      { label: "Processes & states", words: ["سال","عَبرَ","اعتاد","استجم"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 37 ---------------- */
  { name: "Chapter 37", puzzles: [
    { title: "Game 1", rtl: true, groups: [
      { label: "Oral anatomy (parts)", words: ["أسنان لبنية","ضرس","لثّة","فَك"], color:[255,210,210] },
      { label: "In-clinic procedures", words: ["سحب العصب","خَلَعَ","جراحة","أشعّة سينية"], color:[210,255,210] },
      { label: "Hygiene & cosmetic care", words: ["خَيْط تنظيف الأسنان","صَقَل","بَيَّض","طب تجميل الأسنان"], color:[210,210,255] },
      { label: "Oral disease (pathology)", words: ["تَسَوَّسَ","تجاويف","★التهاب اللثة","★خُراج"], color:[255,255,210] }
    ]},
    { title: "Game 2", rtl: true, groups: [
      { label: "Circulatory structures", words: ["شريان","أوعية دموية","وعاء","★وريد"], color:[255,210,210] },
      { label: "Thrombotic & cardiac events", words: ["تَجَلّط الدّم","جلطة دموية","نوبة قلبية","تصلّب الشرايين"], color:[210,255,210] },
      { label: "Endocrine/metabolic & bone", words: ["غدّة دّرقية","سكّريّ","هشاشة العظام","هش"], color:[210,210,255] },
      { label: "Immunity & disease course", words: ["مناعة","مزمن","تَفاقَمَ","مستعصية"], color:[255,255,210] }
    ]},
    { title: "Game 3", rtl: true, groups: [
      { label: "Internal organs", words: ["كبد","كُلية","دماغ","صدر"], color:[255,210,210] },
      { label: "GI & internal conditions", words: ["إسهال","إمساك","قرحة المعدة","أمراض باطنية"], color:[210,255,210] },
      { label: "Cancer & cellular", words: ["أمراض خبيثة","خَليّة","استأصل","مِجْهَري"], color:[210,210,255] },
      { label: "Scientific properties", words: ["تَرَسَّبَ","مُتَراكِم","متوازن","مِحْوَر"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 38 ---------------- */
  { name: "Chapter 38", puzzles: [
    { title: "Game 1", rtl: true, groups: [
      { label: "Emergency actions", words: ["أنقذ","استنفر","أبلغ","تحسب"], color:[255,210,210] },
      { label: "Hazards & disasters", words: ["خطر","انهار","أنقاض","عائقة"], color:[210,255,210] },
      { label: "Acute injuries", words: ["اختنق","نَزَفَ","نزيف","رَضّ"], color:[210,210,255] },
      { label: "First aid items", words: ["جبيرة","ضمادة","★ثلج","أطراف صناعية"], color:[255,255,210] }
    ]},
    { title: "Game 2", rtl: true, groups: [
      { label: "Hospital spaces", words: ["جناح","قبو","★ممر","★سرير"], color:[255,210,210] },
      { label: "People involved", words: ["ضحية","مُراجِع","كادر","نخبة"], color:[210,255,210] },
      { label: "Systems", words: ["تنفسي","هضمي","★عصبي","★دوري"], color:[210,210,255] },
      { label: "Clinical care settings", words: ["عناية","عناية مركزة","تأهيل طبي","أهَّل"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 39 ---------------- */
  { name: "Chapter 39", puzzles: [
    { title: "Game 1", rtl: true, groups: [
      { label: "Cells & tissues", words: ["خليّة","خلايا جذعية","نسيج","★عضو"], color:[255,210,210] },
      { label: "Medical procedures", words: ["حقن","تنقية دموية","حصّن","★عملية"], color:[210,255,210] },
      { label: "Serious events", words: ["طاعون","★وباء","خرج عن الطوق","★شائع"], color:[210,210,255] },
      { label: "Sound & devices", words: ["★صوت","★مكبّر صوت","ضجة","صدى"], color:[255,255,210] }
    ]},
    { title: "Game 2", rtl: true, groups: [
      { label: "Study & advice", words: ["بحث","علمي","استشار","استشاري"], color:[255,210,210] },
      { label: "Praise & worth", words: ["أثنى","جدر","★استحق","توج"], color:[210,255,210] },
      { label: "Progress & productivity", words: ["طفرة","متميز","مثمر","أثر إيجابي"], color:[210,210,255] },
      { label: "Fear & emotion", words: ["روع","عاجز","★خوف","★رهبة"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 40 ---------------- */
  { name: "Chapter 40", puzzles: [
    { title: "Game 1", rtl: true, groups: [
      { label: "Combat actions", words: ["حاصر","حرر","أسر","زحف"], color:[255,210,210] },
      { label: "Weapons", words: ["قنبلة","قذيفة","★مسدس","★رشاش"], color:[210,255,210] },
      { label: "Soldiers & roles", words: ["محارب","★ضابط","★طيار","★جندي"], color:[210,210,255] },
      { label: "Death", words: ["قضى نحبه","انتحر","★مات","★توفى"], color:[255,255,210] }
    ]},
    { title: "Game 2", rtl: true, groups: [
      { label: "Sickness & symptoms", words: ["غثيان","قيء","قاء","مغص"], color:[255,210,210] },
      { label: "Loss of strength", words: ["فقد الوعي","إغماء","إعياء","عُقْدة نفسية"], color:[210,255,210] },
      { label: "Medical tools", words: ["قناع","قفاز","ملقاط","★مشرط"], color:[210,210,255] },
      { label: "Bodily fluids", words: ["بول","سائل","★مخاط","★دم"], color:[255,255,210] }
    ]}
  ]}
];

/* ============================================================
   ENGINE STATE
   ============================================================ */
var STATE = "chapters"; // "chapters" | "games" | "play" | "win"
var currentChapter = 0;
var currentGame = 0;
var rtl = false;

/* Scroll panels */
var PANEL = { x: 20, y: 180, w: 380, h: 390 };
var scrollY = { chapters: 0, games: 0 };
var scrollMax = { chapters: 0, games: 0 };
var dragging = { chapters: false, games: false };
var dragOffsetY = 0;

/* Game derived vars */
var words = [];
var correctGroups = {};
var groupLabels = {};
var groupColors = [];
var wordGroups = {};
var groupCounts = [0,0,0,0,0];
var selectedIdxs = [];
var wordPositions = [];

/* Messages */
var messageText = "";
var messageTimer = 0;

/* Guess counter, best score, hint system */
var guessCount = 0;
var bestKey = "";

/* Hints (2 available at a time; per-category flow 2 then +1) */
var hintsAvailable = 2;        // visible uses (reset when a hinted group is solved)
var hintTargetGroup = 0;       // current target group for hints (0 = none)
var hintedIndices = [];        // indices revealed for current target (length 0,2, or 3)

/* Completed group fade-in */
var groupAlpha = [0,0,0,0,0];

/* Overlay buttons (win) */
var WIN_BTNS = {
  replay: {x: 0, y: 540, w: 100, h: 36, label:"Replay"},
  back:   {x: 0, y: 540, w: 100, h: 36, label:"Back"},
  next:   {x: 0, y: 540, w: 100, h: 36, label:"Next"}
};

/* Theme toggle (top-right, pinned) */
var TOGGLE = { x: 0, y: 10, w: 160, h: 30, r: 8 };

/* Flashcard (bottom) — click to reveal; arrows on sides */
var flashIndex = 1;            // 1..4 maps to groups
var FLASH = { w: 560, h: 96 };
var flashRevealed = false;     // show placeholder until clicked

/* ============================================================
   P5 CORE
   ============================================================ */
function setup(){
  createCanvas(960, 720); // desktop-friendly
  textFont("Arial");
  positionTopRightToggle();
}
function draw(){
  background(THEME.bg);

  if (STATE === "chapters") drawChapters();
  else if (STATE === "games") drawGames();
  else if (STATE === "play") drawGame();
  else if (STATE === "win") drawWinOverlay();

  drawThemeToggle();
  drawWatermark();

  if (messageTimer > 0){
    fill("#FF3B30"); noStroke(); textAlign(CENTER, CENTER); textSize(16);
    text(messageText, width/2, height-18);
    messageTimer--;
  }
}

/* ============================================================
   CHAPTER LIST
   ============================================================ */
function drawChapters(){
  fill(THEME.titleText); textAlign(CENTER, CENTER); textSize(36);
  text("Word Grouping Game", width/2, 90);
  fill(THEME.bodySub); textSize(16);
  text("made by وائل and Team C4", width/2, 122);
  fill(THEME.bodyText); textSize(18);
  text("Choose a chapter:", width/2, 156);

  PANEL.x = (width-800)/2;
  PANEL.w = 800;
  PANEL.h = 420;
  PANEL.y = 200;

  stroke(THEME.buttonBorder); fill(THEME.panelBg);
  rect(PANEL.x, PANEL.y, PANEL.w, PANEL.h, 12);

  var items = CHAPTERS;
  var btnW = PANEL.w - 20, btnH = 80, gap = 18;
  var contentHeight = items.length * (btnH + gap) - gap;
  scrollMax.chapters = Math.max(0, contentHeight - PANEL.h);
  scrollY.chapters = constrain(scrollY.chapters, 0, scrollMax.chapters);

  applyPanelClip();
  push();
  translate(0, -scrollY.chapters);

  for (var i=0;i<items.length;i++){
    var xLeft = PANEL.x + 10;
    var yTop  = PANEL.y + 10 + i*(btnH + gap);

    var hovered = pointInRect(mouseX, mouseY, xLeft, yTop - scrollY.chapters, btnW, btnH) &&
                  pointInRect(mouseX, mouseY, PANEL.x, PANEL.y, PANEL.w, PANEL.h);

    stroke(THEME.buttonBorder);
    fill(hovered ? THEME.buttonHover : THEME.buttonBg);
    rect(xLeft, yTop, btnW, btnH, 12);

    noStroke(); fill(THEME.primary);
    textAlign(LEFT, BASELINE); textSize(22);
    text(items[i].name, xLeft+18, yTop+34);

    fill(THEME.bodySub); textSize(14);
    text(items[i].puzzles.length + " games", xLeft+18, yTop+58);
  }
  pop();
  releasePanelClip();

  drawScrollbar("chapters", contentHeight);

  fill(THEME.bodySub); textSize(14); textAlign(CENTER, CENTER);
  text("Scroll • Drag bar • Click to select", width/2, PANEL.y + PANEL.h + 28);
}

/* ============================================================
   GAMES LIST
   ============================================================ */
function drawGames(){
  drawBack("← Chapters");

  fill(THEME.titleText); textAlign(CENTER, CENTER); textSize(28);
  text(CHAPTERS[currentChapter].name, width/2, 100);
  fill(THEME.bodyText); textSize(18);
  text("Choose a game:", width/2, 132);

  PANEL.x = (width-800)/2;
  PANEL.w = 800;
  PANEL.h = 420;
  PANEL.y = 180;

  stroke(THEME.buttonBorder); fill(THEME.panelBg);
  rect(PANEL.x, PANEL.y, PANEL.w, PANEL.h, 12);

  var puzzles = CHAPTERS[currentChapter].puzzles;
  var btnW = PANEL.w - 20, btnH = 80, gap = 18;
  var contentHeight = puzzles.length * (btnH + gap) - gap;
  scrollMax.games = Math.max(0, contentHeight - PANEL.h);
  scrollY.games = constrain(scrollY.games, 0, scrollMax.games);

  applyPanelClip();
  push();
  translate(0, -scrollY.games);

  for (var i=0;i<puzzles.length;i++){
    var xLeft = PANEL.x + 10;
    var yTop  = PANEL.y + 10 + i*(btnH + gap);

    var hovered = pointInRect(mouseX, mouseY, xLeft, yTop - scrollY.games, btnW, btnH) &&
                  pointInRect(mouseX, mouseY, PANEL.x, PANEL.y, PANEL.w, PANEL.h);

    stroke(THEME.buttonBorder);
    fill(hovered ? THEME.buttonHover : THEME.buttonBg);
    rect(xLeft, yTop, btnW, btnH, 12);

    noStroke(); fill(THEME.primary);
    textAlign(LEFT, BASELINE); textSize(22);
    text("Game " + (i+1), xLeft+18, yTop+34);

    fill(THEME.bodySub); textSize(14);
    text(puzzles[i].title, xLeft+18, yTop+58);
  }
  pop();
  releasePanelClip();

  drawScrollbar("games", contentHeight);

  fill(THEME.bodySub); textSize(14); textAlign(CENTER, CENTER);
  text("Scroll • Drag bar • Click to start", width/2, PANEL.y + PANEL.h + 28);
}

/* ============================================================
   PLAY SCREEN
   ============================================================ */
function drawGame(){
  drawBack("← Games");
  fill(THEME.bodyText); noStroke(); textAlign(CENTER, CENTER); textSize(22);
  text("Select 4 words that belong together", width/2, 88);

  // Guess + Hint counters
  fill(THEME.bodySub); textSize(16);
  var best = getBest(bestKey);
  var bestText = (best===null) ? "" : ("  •  Best: " + best);
  text("Guesses: " + guessCount + "  •  Hints: " + hintsAvailable + bestText, width/2, 114);

  // Completed groups
  var yOffset = 140;
  for (var g=1; g<=4; g++){
    if (groupCounts[g]===4){
      var groupWords = words.filter(function(w){return wordGroups[w]===g;});
      var boxX=(width-800)/2, boxW=800, boxH=64, boxY=yOffset;

      groupAlpha[g] = Math.min(255, groupAlpha[g]+25);
      var c = groupColors[g];
      noStroke();
      fill(red(c), green(c), blue(c), groupAlpha[g]);
      rect(boxX, boxY, boxW, boxH, 12);

      fill(THEME.bodyText); textAlign(LEFT, TOP); textSize(16);
      text(groupLabels[g], boxX+12, boxY+8);

      textAlign(CENTER, BASELINE); textSize(20);
      var s = groupWords.join("   ");
      text(s, boxX + boxW/2, boxY + boxH - 10);

      yOffset += boxH + 12;
    }
  }

  // Ungrouped grid — centered
  var ungrouped = words.filter(function(w){return !wordGroups[w];});
  wordPositions = [];

  var cols=4, cellW=180, cellH=60, gapX=18, gapY=22;
  var gridWidth = cols*cellW + (cols-1)*gapX;
  var startX = (width - gridWidth)/2;

  var hintedSet = new Set(hintedIndices);

  for (var i=0;i<ungrouped.length;i++){
    var col = i % cols;
    var row = Math.floor(i/cols);
    var x = startX + col*(cellW+gapX);
    var y = yOffset + row*(cellH+gapY);
    var idx = words.indexOf(ungrouped[i]);
    wordPositions.push({word: ungrouped[i], x:x, y:y, index:idx});
    drawWordButton(x, y, cellW, cellH, ungrouped[i], hintedSet.has(idx));
  }

  // Controls under the grid
  var controlsY = height - 140;
  var hx = startX, hy=controlsY, hw=180, hh=40;
  var canHint = canUseHint();
  drawButton(hx, hy, hw, hh, "Hint ("+hintsAvailable+")", canHint);

  var rx = startX + gridWidth - 180, ry=controlsY, rw=180, rh=40;
  drawButton(rx, ry, rw, rh, "Clear Selection", selectedIdxs.length>0);

  // Flashcard (raised; click-to-reveal; arrows on sides)
  drawFlashcard();

  // Instructions
  fill(THEME.bodySub); textAlign(CENTER, TOP); textSize(14);
  text("Use ◀ ▶ to see a category  •  Click the card to reveal  •  Click 4 matching words", width/2, height - 20);
}

/* ============================================================
   FLASHCARD (category reveal)
   ============================================================ */
function drawFlashcard(){
  var cardW = FLASH.w, cardH = FLASH.h;
  var cx = width/2 - cardW/2;
  var cy = height - 250; // raised so it doesn’t cover buttons
  var g = flashIndex;
  var c = groupColors[g];

  // card background — always shows the group color
  noStroke(); fill(c);
  rect(cx, cy, cardW, cardH, 12);

  // label or placeholder
  noStroke(); fill(THEME.bodyText);
  textAlign(CENTER, CENTER); textSize(24);
  if (flashRevealed){
    text(groupLabels[g], cx + cardW/2, cy + cardH/2);
  } else {
    text("Click to reveal a category", cx + cardW/2, cy + cardH/2);
  }

  // side arrows
  var ay = cy + cardH/2 - 17;
  drawButton(cx - 120, ay, 110, 34, "◀ Prev", true);
  drawButton(cx + cardW + 10, ay, 110, 34, "Next ▶", true);
}

/* ============================================================
   WIN OVERLAY
   ============================================================ */
function drawWinOverlay(){
  noStroke();
  fill(color(THEME.overlay));
  rect(0,0,width,height);

  var pw = 800, ph = 520;
  var px = (width - pw)/2;
  var py = (height - ph)/2;
  fill(THEME.panelBg);
  stroke(THEME.buttonBorder);
  rect(px,py,pw,ph,14);

  noStroke(); fill(THEME.titleText); textAlign(CENTER, CENTER); textSize(30);
  text("Puzzle Complete!", px+pw/2, py+36);

  fill(THEME.bodyText); textSize(18);
  var best = getBest(bestKey);
  var stats = "Guesses: " + guessCount + (best!==null?("   •   Best: "+best):"");
  text(stats, px+pw/2, py+70);

  var bx = px+16, by = py+96, bw = pw-32, bh=72;
  for (var g=1; g<=4; g++){
    var c = groupColors[g], y = by + (g-1)*(bh+12);
    noStroke(); fill(c);
    rect(bx, y, bw, bh, 12);

    fill(THEME.bodyText); textAlign(LEFT, TOP); textSize(16);
    text(groupLabels[g], bx+12, y+10);

    textAlign(CENTER, BASELINE); textSize(22);
    var gw = words.filter(function(w){return correctGroups[w]===g;});
    var s = gw.join("    ");
    text(s, bx + bw/2, y + bh - 10);
  }

  // Buttons centered horizontally
  var totalW = WIN_BTNS.replay.w + 20 + WIN_BTNS.back.w + 20 + WIN_BTNS.next.w;
  var startX = px + (pw - totalW)/2;
  var byBtn = py + ph - 60;
  WIN_BTNS.replay.x = startX;        WIN_BTNS.replay.y = byBtn;
  WIN_BTNS.back.x   = startX + WIN_BTNS.replay.w + 20; WIN_BTNS.back.y = byBtn;
  WIN_BTNS.next.x   = WIN_BTNS.back.x + WIN_BTNS.back.w + 20; WIN_BTNS.next.y = byBtn;

  drawButton(WIN_BTNS.replay.x, WIN_BTNS.replay.y, WIN_BTNS.replay.w, WIN_BTNS.replay.h, "Replay", true);
  drawButton(WIN_BTNS.back.x,   WIN_BTNS.back.y,   WIN_BTNS.back.w,   WIN_BTNS.back.h,   "Back",   true);

  var hasNext = (currentGame+1) < CHAPTERS[currentChapter].puzzles.length;
  drawButton(WIN_BTNS.next.x,   WIN_BTNS.next.y,   WIN_BTNS.next.w,   WIN_BTNS.next.h,   "Next",   hasNext);
}

/* ============================================================
   INPUT (only one mousePressed)
   ============================================================ */
function mousePressed(){
  if (hitThemeToggle()){ toggleTheme(); positionTopRightToggle(); return; }

  if (STATE==="chapters"){
    if (hitScrollbar("chapters")){
      dragging.chapters = true;
      dragOffsetY = mouseY - scrollbarThumbRect("chapters").y;
      return;
    }
    if (!pointInRect(mouseX,mouseY,PANEL.x,PANEL.y,PANEL.w,PANEL.h)) return;

    var btnH=80,gap=18;
    var localY = mouseY - PANEL.y + scrollY.chapters - 10;
    var idx = Math.floor(localY / (btnH + gap));
    var itemTop = idx*(btnH + gap);
    var within = localY >= itemTop && localY <= itemTop+btnH;
    if (idx>=0 && idx<CHAPTERS.length && within){
      currentChapter = idx;
      scrollY.games=0;
      STATE="games";
      return;
    }
  }
  else if (STATE==="games"){
    if (hitBack()){ STATE="chapters"; return; }

    if (hitScrollbar("games")){
      dragging.games = true;
      dragOffsetY = mouseY - scrollbarThumbRect("games").y;
      return;
    }
    if (!pointInRect(mouseX,mouseY,PANEL.x,PANEL.y,PANEL.w,PANEL.h)) return;

    var btnH=80,gap=18, puzzles=CHAPTERS[currentChapter].puzzles;
    var localY = mouseY - PANEL.y + scrollY.games - 10;
    var idx = Math.floor(localY / (btnH + gap));
    var itemTop = idx*(btnH + gap);
    var within = localY >= itemTop && localY <= itemTop+btnH;
    if (idx>=0 && idx<puzzles.length && within){
      startGame(idx);
      return;
    }
  }
  else if (STATE==="play"){
    if (hitBack()){ STATE="games"; return; }

    // Controls (hint / clear)
    var cols=4, cellW=180, gapX=18;
    var gridWidth = cols*cellW + (cols-1)*gapX;
    var startX = (width - gridWidth)/2;
    var hx = startX, hy = height - 140, hw = 180, hh = 40;
    var rx = startX + gridWidth - 180, ry=hy, rw=180, rh=40;

    if (hitRect(hx,hy,hw,hh) && canUseHint()){
      useHint();
      return;
    }
    if (hitRect(rx,ry,rw,rh)){
      selectedIdxs = [];
      return;
    }

    // Flashcard arrows + click-to-reveal
    var cardW = FLASH.w, cardH = FLASH.h;
    var cx = width/2 - cardW/2;
    var cy = height - 250;

    // left arrow
    if (hitRect(cx - 120, cy + cardH/2 - 17, 110, 34)){
      flashIndex = ((flashIndex + 2) % 4) + 1; // backward 1..4
      flashRevealed = false;                   // reset placeholder
      return;
    }
    // right arrow
    if (hitRect(cx + cardW + 10, cy + cardH/2 - 17, 110, 34)){
      flashIndex = (flashIndex % 4) + 1;       // forward 1..4
      flashRevealed = false;
      return;
    }
    // click card to reveal
    if (hitRect(cx, cy, cardW, cardH)){
      flashRevealed = true;
      return;
    }

    // word buttons
    for (var i=0;i<wordPositions.length;i++){
      var pos=wordPositions[i], w=180,h=60;
      if (hitRect(pos.x,pos.y,w,h)){
        var idx = pos.index;
        var s = selectedIdxs.indexOf(idx);
        if (s===-1) selectedIdxs.push(idx); else selectedIdxs.splice(s,1);
        if (selectedIdxs.length===4){
          guessCount++;
          checkAutoAssignGroup();
        }
        return;
      }
    }
  }
  else if (STATE==="win"){
    if (hitRect(WIN_BTNS.replay.x,WIN_BTNS.replay.y,WIN_BTNS.replay.w,WIN_BTNS.replay.h)){
      startGame(currentGame);
      return;
    }
    if (hitRect(WIN_BTNS.back.x,WIN_BTNS.back.y,WIN_BTNS.back.w,WIN_BTNS.back.h)){
      STATE="games";
      return;
    }
    var hasNext = (currentGame+1) < CHAPTERS[currentChapter].puzzles.length;
    if (hasNext && hitRect(WIN_BTNS.next.x,WIN_BTNS.next.y,WIN_BTNS.next.w,WIN_BTNS.next.h)){
      startGame(currentGame+1);
      return;
    }
  }
}
function mouseDragged(){
  if (STATE==="chapters" && dragging.chapters) dragScrollbar("chapters");
  if (STATE==="games" && dragging.games)       dragScrollbar("games");
}
function mouseReleased(){ dragging.chapters=false; dragging.games=false; }
function mouseWheel(e){
  if (STATE==="chapters") scrollY.chapters = constrain(scrollY.chapters + e.delta, 0, scrollMax.chapters);
  else if (STATE==="games") scrollY.games = constrain(scrollY.games + e.delta, 0, scrollMax.games);
  return false;
}
function keyPressed(){
  if (key==='t'||key==='T'||key==='d'||key==='D'){ toggleTheme(); positionTopRightToggle(); }
}

/* ============================================================
   FLOW
   ============================================================ */
function startGame(gameIdx){
  currentGame = gameIdx;
  var p = CHAPTERS[currentChapter].puzzles[gameIdx];

  rtl = !!p.rtl;

  words=[]; correctGroups={}; groupLabels={}; groupColors=[];
  for (var g=0;g<p.groups.length;g++){
    var id=g+1, grp=p.groups[g];
    groupLabels[id] = grp.label;
    var rgb = grp.color || [230,230,230];
    groupColors[id] = color(rgb[0],rgb[1],rgb[2]);
    for (var w=0;w<grp.words.length;w++){
      var word = grp.words[w];
      words.push(word);
      correctGroups[word]=id;
    }
    groupAlpha[id]=0;
  }
  wordGroups={};
  selectedIdxs=[];
  groupCounts=[0,0,0,0,0];
  shuffle(words, true);
  updateGroupCounts();

  // Guess + best keys + hints
  guessCount = 0;
  bestKey = "best_"+currentChapter+"_"+currentGame;

  // Hints reset: 2 available, no target
  hintsAvailable = 2;
  hintTargetGroup = 0;
  hintedIndices = [];

  // flashcard reset
  flashIndex = 1;
  flashRevealed = false;

  STATE="play";
}

/* ============================================================
   GAME LOGIC
   ============================================================ */
function checkAutoAssignGroup(){
  if (selectedIdxs.length !== 4) return;

  var g0 = correctGroups[words[selectedIdxs[0]]];
  var ok = true;
  for (var i=1;i<selectedIdxs.length;i++){
    if (correctGroups[words[selectedIdxs[i]]] !== g0){ ok=false; break; }
  }

  if (!ok){
    showMessage("Those don't belong together.");
    selectedIdxs = [];
    return;
  }

  if (groupCounts[g0]===4){
    showMessage("That group is already complete!");
    selectedIdxs = [];
    return;
  }

  for (var j=0; j<selectedIdxs.length; j++){
    var w = words[selectedIdxs[j]];
    wordGroups[w] = g0;
  }
  selectedIdxs = [];
  updateGroupCounts();

  // If we just solved the hint target group, reset hint system
  if (hintTargetGroup===g0){
    hintTargetGroup = 0;
    hintedIndices = [];
    hintsAvailable = 2; // replenish for the next category
  }

  // Check win
  var allAssigned = words.every(function(w){return !!wordGroups[w];});
  if (allAssigned){
    var prevBest = getBest(bestKey);
    if (prevBest===null || guessCount < prevBest) saveBest(bestKey, guessCount);
    STATE="win";
  }
}

function updateGroupCounts(){
  for (var g=1; g<=4; g++) groupCounts[g]=0;
  for (var w in wordGroups){
    var g = wordGroups[w];
    if (g>=1 && g<=4) groupCounts[g]++;
  }
}

/* ============================================================
   HINTS (2 available per category: show 2, then +1; reset on solve)
   ============================================================ */
function canUseHint(){
  if (hintsAvailable <= 0) return false;
  if (hintTargetGroup!==0 && hintedIndices.length>=3) return false;

  if (hintTargetGroup===0){
    return findUnsolvedGroupWithN(2) !== -1;
  } else {
    // need one more in the same target
    if (hintedIndices.length!==2) return false;
    var target = hintTargetGroup;
    var addPool = words
      .map(function(w,i){return {w:w,i:i};})
      .filter(function(o){ return correctGroups[o.w]===target && !wordGroups[o.w] && hintedIndices.indexOf(o.i)===-1;});
    return addPool.length >= 1;
  }
}

function useHint(){
  if (!canUseHint()) { showMessage("No suitable hint available."); return; }

  if (hintTargetGroup===0){
    // pick a target with >=2 unassigned
    var g = findUnsolvedGroupWithN(2);
    if (g===-1){ showMessage("No suitable hint available."); return; }
    hintTargetGroup = g;

    var pool = words
      .map(function(w,i){return {w:w,i:i};})
      .filter(function(o){ return correctGroups[o.w]===g && !wordGroups[o.w];});
    shuffle(pool,true);
    hintedIndices = [pool[0].i, pool[1].i];
    hintsAvailable--; // used 1
  } else {
    // same target; add exactly one to make 3
    var target = hintTargetGroup;
    var addPool = words
      .map(function(w,i){return {w:w,i:i};})
      .filter(function(o){ return correctGroups[o.w]===target && !wordGroups[o.w] && hintedIndices.indexOf(o.i)===-1;});
    shuffle(addPool,true);
    if (addPool.length>0 && hintedIndices.length===2){
      hintedIndices.push(addPool[0].i);
      hintsAvailable--; // second use
    } else {
      showMessage("No more hints for this set.");
    }
  }
}

function findUnsolvedGroupWithN(n){
  for (var g=1; g<=4; g++){
    if (groupCounts[g] < 4){
      var free = words.filter(function(w){return correctGroups[w]===g && !wordGroups[w];});
      if (free.length >= n) return g;
    }
  }
  return -1;
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function drawBack(label){
  if (!label) label="← Back";
  stroke(THEME.buttonBorder); fill(THEME.buttonBg);
  rect(16, 16, 130, 34, 8);
  noStroke(); fill(THEME.bodyText); textAlign(CENTER, CENTER); textSize(16);
  text(label, 16+65, 16+17);
}
function hitBack(){ return hitRect(16,16,130,34); }

function positionTopRightToggle(){
  TOGGLE.w = 160; TOGGLE.h = 30; TOGGLE.r = 8;
  TOGGLE.x = width - TOGGLE.w - 16;
  TOGGLE.y = 16;
}

function drawThemeToggle(){
  stroke(THEME.buttonBorder); fill(THEME.buttonBg);
  rect(TOGGLE.x, TOGGLE.y, TOGGLE.w, TOGGLE.h, TOGGLE.r);

  noStroke(); fill(THEME.bodyText); textAlign(LEFT, CENTER); textSize(14);

  push(); translate(TOGGLE.x+10, TOGGLE.y+TOGGLE.h/2);
  if (THEME.name==="dark"){ fill("#FFD580"); circle(0,0,12); fill(THEME.buttonBg); circle(3,-2,10); }
  else { fill("#FFC857"); circle(0,0,12); }
  pop();

  var label = THEME.name==="dark" ? "Dark mode" : "Light mode";
  text(label, TOGGLE.x+28, TOGGLE.y+TOGGLE.h/2);
}
function hitThemeToggle(){ return hitRect(TOGGLE.x,TOGGLE.y,TOGGLE.w,TOGGLE.h); }

function drawButton(x,y,w,h,label,enabled){
  stroke(THEME.buttonBorder);
  fill(enabled ? THEME.buttonBg : THEME.chipBg);
  rect(x,y,w,h,8);
  noStroke(); fill(enabled ? THEME.bodyText : THEME.bodySub);
  textAlign(CENTER, CENTER); textSize(16);
  text(label, x+w/2, y+h/2);
}
function hitRect(x,y,w,h){
  return mouseX>=x && mouseX<=x+w && mouseY>=y && mouseY<=y+h;
}

function drawWordButton(x,y,w,h,word,isHinted){
  var idx = words.indexOf(word);
  var selected = (selectedIdxs.indexOf(idx)!==-1);

  stroke(THEME.buttonBorder);
  fill(selected ? THEME.chipSelected : THEME.chipBg);
  rect(x,y,w,h,12);

  // rounded hint wedge at the top-right corner
  if (isHinted){
    noStroke();
    fill(THEME.secondary);
    var cx = x + w - 12;
    var cy = y + 12;
    arc(cx, cy, 24, 24, -HALF_PI, 0, PIE);
  }

  noStroke(); fill(THEME.bodyText);
  textSize(22);
  textAlign(CENTER,CENTER);
  text(word, x + w/2, y + h/2);
}

/* ============================================================
   SCROLLBAR HELPERS
   ============================================================ */
function drawScrollbar(which, contentHeight){
  var trackX = PANEL.x + PANEL.w - 10;
  var trackY = PANEL.y;
  var trackW = 6, trackH = PANEL.h;

  noStroke(); fill(THEME.track);
  rect(trackX, trackY, trackW, trackH, 3);

  var thumb = scrollbarThumbRect(which, contentHeight);
  fill(THEME.thumb);
  rect(thumb.x, thumb.y, thumb.w, thumb.h, 3);
}
function scrollbarThumbRect(which, contentHeight){
  var trackX = PANEL.x + PANEL.w - 10;
  var trackY = PANEL.y;
  var trackW = 6, trackH = PANEL.h;

  var maxScroll = scrollMax[which];
  if (maxScroll <= 0){
    return {x:trackX, y:trackY, w:trackW, h:trackH};
  }
  var ratio = PANEL.h / contentHeight;
  var h = Math.max(30, trackH * ratio);
  var y = trackY + (trackH - h) * (scrollY[which] / maxScroll);
  return {x:trackX, y:y, w:trackW, h:h};
}
function hitScrollbar(which){
  var contentHeight = (which==="chapters")
    ? CHAPTERS.length * (80+18) - 18
    : CHAPTERS[currentChapter].puzzles.length * (80+18) - 18;
  var thumb = scrollbarThumbRect(which, contentHeight);
  return hitRect(thumb.x, thumb.y, thumb.w, thumb.h);
}
function dragScrollbar(which){
  var contentHeight = (which==="chapters")
    ? CHAPTERS.length * (80+18) - 18
    : CHAPTERS[currentChapter].puzzles.length * (80+18) - 18;

  var trackY = PANEL.y, trackH = PANEL.h;
  var thumb = scrollbarThumbRect(which, contentHeight);
  var newY = mouseY - dragOffsetY;
  newY = constrain(newY, trackY, trackY + trackH - thumb.h);

  var maxScroll = scrollMax[which];
  if (maxScroll<=0){ scrollY[which]=0; return; }
  var t = (newY - trackY) / (trackH - thumb.h);
  scrollY[which] = constrain(t * maxScroll, 0, maxScroll);
}

/* ============================================================
   MISC UTILS
   ============================================================ */
function showMessage(t){ messageText=t; messageTimer=180; }
function applyPanelClip(){
  var ctx = drawingContext; ctx.save(); ctx.beginPath();
  ctx.rect(PANEL.x, PANEL.y, PANEL.w, PANEL.h); ctx.clip();
}
function releasePanelClip(){ drawingContext.restore(); }
function pointInRect(px,py,rx,ry,rw,rh){ return px>=rx && px<=rx+rw && py>=ry && py<=ry+rh; }
function getBest(key){
  try{ var v=localStorage.getItem(key); if(v===null) return null; var n=parseInt(v,10); return isNaN(n)?null:n; }catch(e){return null;}
}
function saveBest(key, n){
  try{
    var cur=getBest(key);
    if (cur===null || n<cur) localStorage.setItem(key, String(n));
  }catch(e){}
}

/* ============================================================
   WATERMARK
   ============================================================ */
function drawWatermark(){
  fill(THEME.bodySub);
  noStroke();
  textAlign(RIGHT, BOTTOM);
  textSize(12);
  text("made by وائل + Team C4", width - 10, height - 8);
}
