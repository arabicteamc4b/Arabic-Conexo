/* ============================================================
   THEME — light/dark with persistence
   ============================================================ */
var LIGHT_THEME = {
  name: "light",
  bg: "#FDFDFD",
  primary: "#4A90E2",
  secondary: "#50E3C2",
  titleText: "#4A90E2",
  bodyText: "#333333",
  bodySub: "#777777",
  panelBg: "#FFFFFF",
  buttonBg: "#FFFFFF",
  buttonBorder: "#9A9A9A",
  buttonHover: "#D9E9FB",
  chipSelected: "#D9E9FB",
  chipBg: "#EAEAEA",
  overlay: "rgba(0,0,0,0.55)",
  thumb: "#C7D6F3",
  track: "#E6EAF3"
};
var DARK_THEME = {
  name: "dark",
  bg: "#0F1220",
  primary: "#77B6FF",
  secondary: "#5EE0C6",
  titleText: "#77B6FF",
  bodyText: "#EDEFF5",
  bodySub: "#9EA7B4",
  panelBg: "#121733",
  buttonBg: "#1A1F33",
  buttonBorder: "#3C4770",
  buttonHover: "#223055",
  chipSelected: "#223055",
  chipBg: "#262C44",
  overlay: "rgba(0,0,0,0.55)",
  thumb: "#44598A",
  track: "#273154"
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
    // Oral Health (Dentistry)
    { title: "Game 1", rtl: true, groups: [
      { label: "Oral anatomy (parts)", words: ["أسنان لبنية","ضرس","لثّة","فَك"], color:[255,210,210] },
      { label: "In-clinic procedures", words: ["سحب العصب","خَلَعَ","جراحة","أشعّة سينية"], color:[210,255,210] },
      { label: "Hygiene & cosmetic care", words: ["خَيْط تنظيف الأسنان","صَقَل","بَيَّض","طب تجميل الأسنان"], color:[210,210,255] },
      { label: "Oral disease (pathology)", words: ["تَسَوَّسَ","تجاويف","★التهاب اللثة","★خُراج"], color:[255,255,210] }
    ]},
    // Circulatory & Endocrine
    { title: "Game 2", rtl: true, groups: [
      { label: "Circulatory structures", words: ["شريان","أوعية دموية","وعاء","★وريد"], color:[255,210,210] },
      { label: "Thrombotic & cardiac events", words: ["تَجَلّط الدّم","جلطة دموية","نوبة قلبية","تصلّب الشرايين"], color:[210,255,210] },
      { label: "Endocrine/metabolic & bone", words: ["غدّة دّرقية","سكّريّ","هشاشة العظام","هش"], color:[210,210,255] },
      { label: "Immunity & disease course", words: ["مناعة","مزمن","تَفاقَمَ","مستعصية"], color:[255,255,210] }
    ]},
    // GI & Internal / Lab & Science
    { title: "Game 3", rtl: true, groups: [
      { label: "Internal organs", words: ["كبد","كُلية","دماغ","صدر"], color:[255,210,210] },
      { label: "GI & internal conditions", words: ["إسهال","إمساك","قرحة المعدة","أمراض باطنية"], color:[210,255,210] },
      { label: "Cancer & cellular", words: ["أمراض خبيثة","خَليّة","استأصل","مِجْهَري"], color:[210,210,255] },
      { label: "Scientific properties", words: ["تَرَسَّبَ","مُتَراكِم","متوازن","مِحْوَر"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 38 ---------------- */
  { name: "Chapter 38", puzzles: [
    // Emergency & First Aid
    { title: "Game 1", rtl: true, groups: [
      { label: "Emergency actions", words: ["أنقذ","استنفر","أبلغ","تحسب"], color:[255,210,210] },
      { label: "Hazards & disasters", words: ["خطر","انهار","أنقاض","عائقة"], color:[210,255,210] },
      { label: "Acute injuries", words: ["اختنق","نَزَفَ","نزيف","رَضّ"], color:[210,210,255] },
      { label: "First aid items", words: ["جبيرة","ضمادة","★ثلج","أطراف صناعية"], color:[255,255,210] }
    ]},
    // Hospital & ______ System
    { title: "Game 2", rtl: true, groups: [
      { label: "Hospital spaces", words: ["جناح","قبو","★ممر","★سرير"], color:[255,210,210] },
      { label: "People involved", words: ["ضحية","مُراجِع","كادر","نخبة"], color:[210,255,210] },
      { label: "Systems", words: ["تنفسي","هضمي","★عصبي","★دوري"], color:[210,210,255] },
      { label: "Clinical care settings", words: ["عناية","عناية مركزة","تأهيل طبي","أهَّل"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 39 ---------------- */
  { name: "Chapter 39", puzzles: [
    // Science & Medicine
    { title: "Game 1", rtl: true, groups: [
      { label: "Cells & tissues", words: ["خليّة","خلايا جذعية","نسيج","★عضو"], color:[255,210,210] },
      { label: "Medical procedures", words: ["حقن","تنقية دموية","حصّن","★عملية"], color:[210,255,210] },
      { label: "Serious events", words: ["طاعون","★وباء","خرج عن الطوق","★شائع"], color:[210,210,255] },
      { label: "Sound & devices", words: ["★صوت","★مكبّر صوت","ضجة","صدى"], color:[255,255,210] }
    ]},
    // Society & Knowledge
    { title: "Game 2", rtl: true, groups: [
      { label: "Study & advice", words: ["بحث","علمي","استشار","استشاري"], color:[255,210,210] },
      { label: "Praise & worth", words: ["أثنى","جدر","★استحق","توج"], color:[210,255,210] },
      { label: "Progress & productivity", words: ["طفرة","متميز","مثمر","أثر إيجابي"], color:[210,210,255] },
      { label: "Fear & emotion", words: ["روع","عاجز","★خوف","★رهبة"], color:[255,255,210] }
    ]}
  ]},

  /* ---------------- Chapter 40 (renamed from 5) ---------------- */
  { name: "Chapter 40", puzzles: [
    // War & Conflict
    { title: "Game 1", rtl: true, groups: [
      { label: "Combat actions", words: ["حاصر","حرر","أسر","زحف"], color:[255,210,210] },
      { label: "Weapons", words: ["قنبلة","قذيفة","★مسدس","★رشاش"], color:[210,255,210] },
      { label: "Soldiers & roles", words: ["محارب","★ضابط","★طيار","★جندي"], color:[210,210,255] },
      { label: "Death", words: ["قضى نحبه","انتحر","★مات","★توفى"], color:[255,255,210] }
    ]},
    // Health & Medicine
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

/* Scroll panels for chapters & games (with draggable scrollbar) */
var PANEL = { x: 20, y: 180, w: 380, h: 390 };
var scrollY = { chapters: 0, games: 0 };
var scrollMax = { chapters: 0, games: 0 };
var dragging = { chapters: false, games: false };
var dragOffsetY = 0;

/* Game derived vars (rebuilt per puzzle) */
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
var hintUses = 0;          // total uses this puzzle (cap 3)
var hintStep = 0;          // 0 => next hint shows 2, 1+ => next hints show 3
var hintPairs = [];        // indices revealed by last hint (to highlight)
var hintTriple = [];

/* Completed group fade-in */
var groupAlpha = [0,0,0,0,0];

/* Overlay buttons (win) */
var WIN_BTNS = {
  replay: {x: 90,  y: 540, w: 80, h: 34, label:"Replay"},
  back:   {x: 190, y: 540, w: 80, h: 34, label:"Back"},
  next:   {x: 290, y: 540, w: 80, h: 34, label:"Next"}
};

/* Theme toggle (top-right) */
var TOGGLE = { x: 280, y: 10, w: 130, h: 28, r: 6 };

/* ============================================================
   P5 CORE
   ============================================================ */
function setup(){
  createCanvas(420, 640);
  textFont("Arial");
}
function draw(){
  background(THEME.bg);

  if (STATE === "chapters") drawChapters();
  else if (STATE === "games") drawGames();
  else if (STATE === "play") drawGame();
  else if (STATE === "win") drawWinOverlay();

  drawThemeToggle();

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
  // Title & credits
  fill(THEME.titleText); textAlign(CENTER, CENTER); textSize(26);
  text("Word Grouping Game", width/2, 80);
  fill(THEME.bodySub); textSize(14);
  text("made by وائل and Team C4", width/2, 112);
  fill(THEME.bodyText); textSize(16);
  text("Choose a chapter:", width/2, 145);

  // Panel
  stroke(THEME.buttonBorder); fill(THEME.panelBg);
  rect(PANEL.x, PANEL.y, PANEL.w, PANEL.h, 12);

  var items = CHAPTERS;
  var btnW = PANEL.w - 20, btnH = 70, gap = 16;
  var contentHeight = items.length * (btnH + gap) - gap;
  scrollMax.chapters = Math.max(0, contentHeight - PANEL.h);
  scrollY.chapters = constrain(scrollY.chapters, 0, scrollMax.chapters);

  var localMouseY = mouseY - PANEL.y + scrollY.chapters;

  // clip
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
    textAlign(LEFT, BASELINE); textSize(18);
    text(items[i].name, xLeft+14, yTop+28);

    fill(THEME.bodySub); textSize(12);
    text(items[i].puzzles.length + " games", xLeft+14, yTop+48);
  }
  pop();
  releasePanelClip();

  // Scrollbar
  drawScrollbar("chapters", contentHeight);

  fill(THEME.bodySub); textSize(12); textAlign(CENTER, CENTER);
  text("Scroll • Drag bar • Click to select", width/2, PANEL.y + PANEL.h + 24);
}

/* ============================================================
   GAMES LIST
   ============================================================ */
function drawGames(){
  drawBack("← Chapters");

  fill(THEME.titleText); textAlign(CENTER, CENTER); textSize(20);
  text(CHAPTERS[currentChapter].name, width/2, 60);
  fill(THEME.bodyText); textSize(14);
  text("Choose a game:", width/2, 86);

  // Panel
  stroke(THEME.buttonBorder); fill(THEME.panelBg);
  rect(PANEL.x, PANEL.y, PANEL.w, PANEL.h, 12);

  var puzzles = CHAPTERS[currentChapter].puzzles;
  var btnW = PANEL.w - 20, btnH = 70, gap = 16;
  var contentHeight = puzzles.length * (btnH + gap) - gap;
  scrollMax.games = Math.max(0, contentHeight - PANEL.h);
  scrollY.games = constrain(scrollY.games, 0, scrollMax.games);

  // clip
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
    textAlign(LEFT, BASELINE); textSize(18);
    text("Game " + (i+1), xLeft+14, yTop+28);

    fill(THEME.bodySub); textSize(12);
    text(puzzles[i].title, xLeft+14, yTop+48);
  }
  pop();
  releasePanelClip();

  // Scrollbar
  drawScrollbar("games", contentHeight);

  fill(THEME.bodySub); textSize(12); textAlign(CENTER, CENTER);
  text("Scroll • Drag bar • Click to start", width/2, PANEL.y + PANEL.h + 24);
}

/* ============================================================
   PLAY SCREEN
   ============================================================ */
function drawGame(){
  drawBack("← Games");
  fill(THEME.bodyText); noStroke(); textAlign(CENTER, CENTER); textSize(18);
  text("Select 4 words that belong together", width/2, 54);

  // Guess + Best summary (top row under title)
  fill(THEME.bodySub); textSize(14);
  var best = getBest(bestKey);
  var bestText = (best===null) ? "" : (" • Best: " + best + " guesses");
  text("Guesses: " + guessCount + bestText, width/2, 74);

  var yOffset = 92;

  // Completed groups: compact colored rows
  for (var g=1; g<=4; g++){
    if (groupCounts[g]===4){
      var groupWords = words.filter(function(w){return wordGroups[w]===g;});
      var boxX=20, boxY=yOffset, boxW=380, boxH=60;

      // fade in
      groupAlpha[g] = Math.min(255, groupAlpha[g]+25);
      var c = groupColors[g];
      noStroke();
      fill(red(c), green(c), blue(c), groupAlpha[g]);
      rect(boxX, boxY, boxW, boxH, 10);

      // label at top-left
      fill(THEME.bodyText); textAlign(LEFT, TOP); textSize(13);
      text(groupLabels[g], boxX+10, boxY+6);

      // Arabic words at bottom center (single line)
      textAlign(CENTER, BASELINE); textSize(16);
      var lineY = boxY + boxH - 8;
      var s = groupWords.join("   ");
      text(s, boxX + boxW/2, lineY);

      yOffset += boxH + 10;
    }
  }

  // Ungrouped buttons grid
  var ungrouped = words.filter(function(w){return !wordGroups[w];});
  wordPositions = [];
  var cols=4, cellW=90, cellH=40, gapX=5, gapY=20;

  // For hint highlights
  var hintSet = new Set();
  if (hintStep===0 && hintPairs.length) { hintPairs.forEach(function(i){hintSet.add(i);}); }
  if (hintStep>0 && hintTriple.length) { hintTriple.forEach(function(i){hintSet.add(i);}); }

  for (var i=0;i<ungrouped.length;i++){
    var col = i % cols;
    var row = Math.floor(i/cols);
    var x = 20 + col*(cellW+gapX);
    var y = yOffset + row*(cellH+gapY);
    var idx = words.indexOf(ungrouped[i]);
    wordPositions.push({word: ungrouped[i], x:x, y:y, index:idx});
    drawWordButton(x, y, cellW, cellH, ungrouped[i], hintSet.has(idx));
  }

  // Controls under the grid
  var controlsY = height - 72;
  // Hint button (left)
  var hx=20, hy=controlsY, hw=120, hh=34;
  var canHint = hintUses < 3 && ungrouped.length>0;
  drawButton(hx, hy, hw, hh, "Hint ("+(3-hintUses)+")", canHint);

  // Guess count + Best center text
  fill(THEME.bodySub); noStroke(); textAlign(CENTER, CENTER); textSize(12);
  var bestBottom = getBest(bestKey);
  var bestBottomTxt = (bestBottom===null) ? "" : (" • Best: " + bestBottom);
  text("Guesses: "+guessCount + bestBottomTxt, width/2, hy+hh/2);

  // Reset selection button (right small)
  var rx=width-20-120, ry=controlsY, rw=120, rh=34;
  drawButton(rx, ry, rw, rh, "Clear Selection", selectedIdxs.length>0);

  // Instructions
  fill(THEME.bodySub); textAlign(LEFT, TOP); textSize(12);
  text("Click 4 correct words to auto group them. Wrong sets clear.", 16, height - 28);
}

/* ============================================================
   WIN OVERLAY
   ============================================================ */
function drawWinOverlay(){
  // cover screen
  noStroke();
  fill(color(THEME.overlay));
  rect(0,0,width,height);

  // main panel
  var px=20, py=60, pw=380, ph=500;
  fill(THEME.panelBg);
  stroke(THEME.buttonBorder);
  rect(px,py,pw,ph,14);

  // Title
  noStroke(); fill(THEME.titleText); textAlign(CENTER, CENTER); textSize(22);
  text("Puzzle Complete!", px+pw/2, py+26);

  // Stats
  fill(THEME.bodyText); textSize(14);
  var best = getBest(bestKey);
  var stats = "Guesses: " + guessCount + (best!==null?("   •   Best: "+best):"");
  text(stats, px+pw/2, py+54);

  // Categories snapshot
  var bx = px+12, by = py+78, bw = pw-24, bh=60;
  for (var g=1; g<=4; g++){
    var c = groupColors[g], y = by + (g-1)*(bh+10);
    noStroke(); fill(red(c),green(c),blue(c));
    rect(bx, y, bw, bh, 10);

    fill(THEME.bodyText); textAlign(LEFT, TOP); textSize(13);
    text(groupLabels[g], bx+10, y+6);

    textAlign(CENTER, BASELINE); textSize(16); fill(THEME.bodyText);
    var gw = words.filter(function(w){return correctGroups[w]===g;}); // show full set
    var s = gw.join("   ");
    text(s, bx + bw/2, y + bh - 8);
  }

  // Buttons
  drawButton(WIN_BTNS.replay.x, WIN_BTNS.replay.y, WIN_BTNS.replay.w, WIN_BTNS.replay.h, "Replay", true);
  drawButton(WIN_BTNS.back.x,   WIN_BTNS.back.y,   WIN_BTNS.back.w,   WIN_BTNS.back.h,   "Back",   true);

  var hasNext = (currentGame+1) < CHAPTERS[currentChapter].puzzles.length;
  drawButton(WIN_BTNS.next.x,   WIN_BTNS.next.y,   WIN_BTNS.next.w,   WIN_BTNS.next.h,   "Next",   hasNext);
}

/* ============================================================
   INPUT
   ============================================================ */
function mousePressed(){
  // Theme toggle
  if (hitThemeToggle()){ toggleTheme(); return; }

  if (STATE==="chapters"){
    // scrollbar drag
    if (hitScrollbar("chapters")){
      dragging.chapters = true;
      dragOffsetY = mouseY - scrollbarThumbRect("chapters").y;
      return;
    }
    // inside panel?
    if (!pointInRect(mouseX,mouseY,PANEL.x,PANEL.y,PANEL.w,PANEL.h)) return;

    var btnH=70,gap=16;
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

    var btnH=70,gap=16, puzzles=CHAPTERS[currentChapter].puzzles;
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

    // buttons at bottom (hint / clear)
    var hx=20, hy=height-72, hw=120, hh=34;
    var rx=width-20-120, ry=hy, rw=120, rh=34;

    // Hint button
    if (hitRect(hx,hy,hw,hh)){
      useHint();
      return;
    }
    // Clear selection
    if (hitRect(rx,ry,rw,rh)){
      selectedIdxs = [];
      return;
    }

    // word buttons
    for (var i=0;i<wordPositions.length;i++){
      var pos=wordPositions[i], w=90,h=40;
      if (hitRect(pos.x,pos.y,w,h)){
        var idx = pos.index;
        var s = selectedIdxs.indexOf(idx);
        if (s===-1) selectedIdxs.push(idx); else selectedIdxs.splice(s,1);
        if (selectedIdxs.length===4){
          // this is a guess
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
  if (STATE==="chapters" && dragging.chapters){
    dragScrollbar("chapters");
  }
  if (STATE==="games" && dragging.games){
    dragScrollbar("games");
  }
}
function mouseReleased(){
  dragging.chapters=false;
  dragging.games=false;
}
function mouseWheel(e){
  if (STATE==="chapters"){
    scrollY.chapters = constrain(scrollY.chapters + e.delta, 0, scrollMax.chapters);
  } else if (STATE==="games"){
    scrollY.games = constrain(scrollY.games + e.delta, 0, scrollMax.games);
  }
  return false;
}
function keyPressed(){
  if (key==='t'||key==='T'||key==='d'||key==='D') toggleTheme();
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
  hintUses = 0;
  hintStep = 0;
  hintPairs = [];
  hintTriple = [];

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

  for (var j=0;j<selectedIdxs.length;j++){
    var w = words[selectedIdxs[j]];
    wordGroups[w] = g0;
  }
  selectedIdxs = [];
  updateGroupCounts();

  // reset hint step after completing a group (so next starts with pair)
  hintStep = 0;
  hintPairs = [];
  hintTriple = [];

  // Check win
  var allAssigned = words.every(function(w){return !!wordGroups[w];});
  if (allAssigned){
    // save best if improved
    var prevBest = getBest(bestKey);
    if (prevBest===null || guessCount < prevBest){
      saveBest(bestKey, guessCount);
    }
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
   HINTS
   - cap 3 uses/puzzle
   - if hintStep==0: reveal 2 words from an uncompleted group
   - else: reveal 3 from an uncompleted group
   - when a group is completed, hintStep resets to 0
   ============================================================ */
function useHint(){
  if (hintUses >= 3) { showMessage("No more hints."); return; }

  // find an uncompleted group that still has unassigned words
  var targetGroup = -1;
  for (var g=1; g<=4; g++){
    if (groupCounts[g] < 4){
      // check if there are at least needed unassigned words in this group
      var candidates = words.filter(function(w){
        return correctGroups[w]===g && !wordGroups[w];
      });
      var need = (hintStep===0 ? 2 : 3);
      if (candidates.length >= need){
        targetGroup = g; break;
      }
    }
  }
  if (targetGroup===-1){
    showMessage("No suitable hint available.");
    return;
  }

  // pick indices from candidates
  var candidatesIdx = words
    .map(function(w,i){ return {w:w,i:i}; })
    .filter(function(obj){ return correctGroups[obj.w]===targetGroup && !wordGroups[obj.w]; })
    .map(function(obj){ return obj.i; });

  shuffle(candidatesIdx,true);
  var need = (hintStep===0 ? 2 : 3);
  var chosen = candidatesIdx.slice(0,need);

  if (hintStep===0){
    hintPairs = chosen;
    hintTriple = [];
    hintStep = 1; // next time show 3
  }else{
    hintTriple = chosen;
  }

  hintUses++;
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function drawBack(label){
  if (!label) label="← Back";
  // back on top-left; theme toggle top-right (no overlap)
  stroke(THEME.buttonBorder); fill(THEME.buttonBg);
  rect(10, 10, 120, 28, 6);
  noStroke(); fill(THEME.bodyText); textAlign(CENTER, CENTER); textSize(14);
  text(label, 70, 24);
}
function hitBack(){ return hitRect(10,10,120,28); }

function drawThemeToggle(){
  stroke(THEME.buttonBorder); fill(THEME.buttonBg);
  rect(TOGGLE.x, TOGGLE.y, TOGGLE.w, TOGGLE.h, TOGGLE.r);

  noStroke(); fill(THEME.bodyText); textAlign(LEFT, CENTER); textSize(13);

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
  rect(x,y,w,h,6);
  noStroke(); fill(enabled ? THEME.bodyText : THEME.bodySub);
  textAlign(CENTER, CENTER); textSize(13);
  text(label, x+w/2, y+h/2);
}
function hitRect(x,y,w,h){
  return mouseX>=x && mouseX<=x+w && mouseY>=y && mouseY<=y+h;
}

function drawWordButton(x,y,w,h,word,isHinted){
  var idx = words.indexOf(word);
  var selected = (selectedIdxs.indexOf(idx)!==-1);

  stroke(THEME.buttonBorder);
  if (selected) fill(THEME.chipSelected);
  else if (isHinted) fill(lerpColor(color(THEME.chipBg), color(THEME.secondary), 0.35));
  else fill(THEME.chipBg);
  rect(x,y,w,h,6);

  noStroke(); fill(THEME.bodyText);
  textSize(16);
  textAlign(CENTER,CENTER);
  text(word, x + w/2, y + h/2);
}

/* ============================================================
   SCROLLBAR HELPERS
   ============================================================ */
function drawScrollbar(which, contentHeight){
  var trackX = PANEL.x + PANEL.w - 8;
  var trackY = PANEL.y;
  var trackW = 4, trackH = PANEL.h;

  noStroke(); fill(THEME.track);
  rect(trackX, trackY, trackW, trackH, 2);

  var thumb = scrollbarThumbRect(which, contentHeight);
  fill(THEME.thumb);
  rect(thumb.x, thumb.y, thumb.w, thumb.h, 2);
}
function scrollbarThumbRect(which, contentHeight){
  var trackX = PANEL.x + PANEL.w - 8;
  var trackY = PANEL.y;
  var trackW = 4, trackH = PANEL.h;

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
  var thumb = scrollbarThumbRect(which);
  return hitRect(thumb.x, thumb.y, thumb.w, thumb.h);
}
function dragScrollbar(which){
  var contentHeight, itemsCount;
  if (which==="chapters"){
    itemsCount = CHAPTERS.length;
    contentHeight = itemsCount * (70+16) - 16;
  } else {
    itemsCount = CHAPTERS[currentChapter].puzzles.length;
    contentHeight = itemsCount * (70+16) - 16;
  }
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
   UTILS
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
