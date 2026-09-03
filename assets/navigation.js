(function(){
  const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(file==='index.html'){
    const intro=document.querySelector('.home-hero .hero-grid>div');
    if(intro){
      intro.innerHTML=`
        <div class="eyebrow">ISLETS · GAME PROFILE</div>
        <h1><span class="zh"><em>《Islets》</em></span><span class="en"><em>Islets</em></span></h1>
        <p class="hero-lead"><span class="zh">《Islets》是一款由 Kyle Thompson 开发的横版类银河战士恶魔城动作冒险游戏。玩家将驾驶飞艇探索破碎岛屿，击败首领、获得能力，并用磁力核心让岛屿重新连接。</span><span class="en">Islets is a hand-drawn Metroidvania action adventure by Kyle Thompson. Explore shattered islands by airship, defeat bosses, unlock abilities and reconnect the world with magnetic cores.</span></p>
        <div class="game-facts">
          <div><small><span class="zh">开发者</span><span class="en">Developer</span></small><b>Kyle Thompson</b></div>
          <div><small><span class="zh">发行商</span><span class="en">Publisher</span></small><b>Armor Games Studios</b></div>
          <div><small><span class="zh">类型</span><span class="en">Genre</span></small><b><span class="zh">类银河战士恶魔城</span><span class="en">Metroidvania</span></b></div>
          <div><small><span class="zh">发行日期</span><span class="en">Release date</span></small><b><span class="zh">2022 年 8 月 24 日</span><span class="en">August 24, 2022</span></b></div>
        </div>
        <div class="hero-buttons"><a class="button primary" href="walkthrough.html"><span class="zh">进入攻略目录</span><span class="en">Open guide directory</span> →</a><a class="button secondary" href="game-info.html"><span class="zh">完整游戏资料</span><span class="en">Full game profile</span></a></div>`;
    }
    const walkthroughHeading=document.querySelector('main .section .section-head h2');
    if(walkthroughHeading){
      walkthroughHeading.innerHTML='<span class="zh">游戏流程</span><span class="en">Game Walkthrough</span>';
    }
    const categoryGrid=document.querySelector('#guides .category-grid');
    if(categoryGrid){
      const categories=[
        ['01 · MAPS','maps.html','地图与区域','Maps & Areas','岛屿、出口与核心路线。','Islands, exits and core routes.'],
        ['02 · ABILITIES','abilities.html','能力图鉴','Abilities','流程能力、获取顺序与用途。','Story abilities, order and uses.'],
        ['03 · BOSSES','boss-list.html','首领列表','Boss List','位置、打法、形象与奖励。','Locations, tactics and rewards.'],
        ['04 · ENEMIES','monsters.html','怪物图鉴','Enemies','敌人特征与应对方式。','Enemy tells and counters.'],
        ['05 · UPGRADES','upgrade-list.html','60 个永久升级','60 Upgrades','进度清单与位置记录。','Checklist and location notes.'],
        ['06 · SHOPS','shops-npcs.html','商店','Shops','商品、服务与购买建议。','Stock, services and priorities.'],
        ['07 · NPCS','npcs.html','NPC 与角色','NPCs & Characters','角色位置、功能与相关事件。','Locations, roles and events.'],
        ['08 · SECRETS','hidden-walls.html','隐藏墙与密道','Hidden Walls','可破坏墙面、暗道与隐藏房间。','Breakable walls and secret rooms.'],
        ['09 · LETTERS','letters.html','神秘信件','Mysterious Letters','连续线索、地点与最终奖励。','Clues, locations and final reward.'],
        ['10 · TERMS','glossary.html','中英术语','Glossary','岛屿、能力与首领名称。','Islands, abilities and bosses.'],
        ['11 · INFO','game-info.html','游戏资料','Game Info','版本、平台与基础信息。','Platforms and game facts.'],
        ['12 · ABOUT','about.html','关于本站','About','内容说明、资料勘误与联系方式。','Editorial notes, corrections and contact.']
      ];
      categoryGrid.innerHTML=categories.map(x=>`<a class="category" href="${x[1]}"><b>${x[0]}</b><h3><span class="zh">${x[2]}</span><span class="en">${x[3]}</span></h3><p><span class="zh">${x[4]}</span><span class="en">${x[5]}</span></p></a>`).join('');
    }
  }
  const footer=document.querySelector("footer.site .wrap");
  if(footer&&!footer.querySelector(".about-footer-link")){
    const link=document.createElement("a");
    link.className="about-footer-link";
    link.href="about.html";
    link.innerHTML=`<span class="nav-zh">关于本站与联系</span><span class="nav-en">About & Contact</span>`;
    footer.appendChild(link);
  }
  const groups={
    'index.html':['index.html'],
    'walkthrough.html':['walkthrough.html','walkthrough-detail.html'],
    'maps.html':['maps.html','map-reading.html'],
    'boss-list.html':['boss-list.html','boss-detail.html'],
    'abilities.html':['abilities.html'],
    'upgrade-list.html':['upgrade-list.html','upgrade-detail.html','upgrades.html'],
    'beginner.html':['beginner.html','controls.html','combat-basics.html','faq.html','accessibility.html','stuck-and-backtracking.html']
  };
  const target=Object.keys(groups).find(key=>groups[key].includes(file));
  if(!target)return;
  document.querySelectorAll('.home-links a,.nav-links a').forEach(link=>{
    const href=(link.getAttribute('href')||'').split(/[?#]/)[0].toLowerCase();
    const active=href===target;
    link.classList.toggle('active',active);
    if(active)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
})();
