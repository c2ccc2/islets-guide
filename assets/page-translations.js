(function () {
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pages = {
    'npcs.html': {
      title: ['Islets NPC 与角色图鉴｜GAME NOTE', 'Islets NPC & Character Guide | GAME NOTE'],
      description: ['Islets NPC 与角色位置、功能、商店服务和相关事件。', 'Islets NPC locations, services, shops and related events.'],
      strings: {
        '首页':'Home','主线':'Walkthrough','地图':'Maps','首领':'Bosses','能力':'Abilities','收集':'Collect','新手':'Beginner',
        'NPC 与角色':'NPCs & Characters','按所在区域查找角色，确认其功能、可购买内容以及相关事件。':'Find characters by area and check their services, purchases and related events.',
        '天空之城':'Sky City','商店角色':'Shopkeepers','提供永久强化、补给或其他服务。每次开启新岛屿航线后建议回来查看库存。':'They provide permanent upgrades, supplies and other services. Recheck their stock whenever a new island route opens.',
        '查看商店说明 →':'Open the shop guide →','邮箱与信件相关角色':'Mail and letter contacts','主线推进和特殊条件满足后，邮箱可能出现新内容；神秘信件任务也从这里开始。':'New mail appears after story milestones and special conditions. The mysterious-letter trail also begins here.',
        '查看神秘信件 →':'Open the letter quest →','岛屿探索':'Island exploration','旅途中的居民':'Island residents','部分角色会提供路线提示、对话或支线线索。遇到后应完成所有对话，再推进当前区域。':'Some residents provide route hints, conversations or side-quest clues. Exhaust their dialogue before leaving the area.',
        '后续补充':'In progress','角色详细图鉴':'Detailed character files','本页将继续补充角色正式名称、准确位置、对话条件和事件奖励。':'This directory will be expanded with official names, exact locations, dialogue conditions and event rewards.','ISLETS 攻略站':'ISLETS GUIDE'
      }
    },
    'hidden-walls.html': {
      title: ['Islets 隐藏墙与密道攻略｜GAME NOTE', 'Islets Hidden Walls & Passages | GAME NOTE'],
      description: ['Islets 隐藏墙、可破坏墙面、密道和隐藏房间查找指南。', 'A guide to hidden walls, breakable surfaces, passages and secret rooms in Islets.'],
      strings: {
        '首页':'Home','主线':'Walkthrough','地图':'Maps','首领':'Bosses','能力':'Abilities','收集':'Collect','新手':'Beginner',
        '隐藏墙与密道':'Hidden Walls & Passages','隐藏房间通常放置永久升级、金币或任务线索。先观察墙面与地图轮廓，再尝试攻击、下砸或使用后期能力。':'Secret rooms often contain permanent upgrades, currency or quest clues. Inspect wall textures and map outlines, then test attacks, Slam or later abilities.',
        '01 · 墙面异常':'01 · ODD WALLS','观察裂纹和边缘':'Check cracks and edges','颜色、纹理或轮廓与周围不同的墙面，通常可以攻击或穿过。':'A wall with different color, texture or outline may be breakable or passable.',
        '02 · 地图留白':'02 · MAP GAPS','寻找不自然的空区':'Look for unnatural voids','已探索房间旁存在规则空白时，检查朝向空白区域的墙壁、地板和顶部。':'When a neat empty space borders a visited room, inspect the wall, floor and ceiling facing it.',
        '03 · 能力回访':'03 · ABILITY REVISIT','记录暂时打不开的路':'Record blocked routes','下砸、攀墙、二段跳等能力会开启旧区域里的隐藏路线。':'Slam, wall climbing and double jump reveal routes in previously explored areas.',
        '神秘信件墓碑通道':'Mysterious-letter gravestone passage','在大墓碑处使用下砸打开地面，进入信件任务隐藏房。':'Use Slam at the large gravestone to open the floor and enter the letter-quest chamber.','查看任务路线 →':'Open the quest route →',
        '按岛屿查找隐藏房':'Find secrets by island','后续将按照诺斯特布尔、因弗尼斯、沃夫派因、伊斯莱特和辛德岛分别整理。':'Exact locations will be organized under NorthStable, Inverness, Wolfpine, Eastwright and Cinder Island.','打开区域地图 →':'Open area maps →','ISLETS 攻略站':'ISLETS GUIDE'
      }
    },
    'sky-city-map.html': {
      title: ['天空之城地图｜Islets 攻略站', 'Sky City Map | Islets Guide'],
      strings: {
        '首页':'Home','地图':'Maps','商店与角色':'Shops & Characters','天空之城示意图':'Sky City Map','天空之城是商店、邮箱、飞艇和各项服务的永久枢纽。完成首领或开启新航线后，建议回到这里检查邮件与商店。':'Sky City is the permanent hub for shops, mail, the airship and other services. Return after bosses and new routes to check mail and updated stock.',
        '天空之城区域示意图｜红色方框为关键互动位置，骷髅标记为首领房或战斗区域。':'Sky City overview | The red square marks a key interaction; skulls indicate boss or combat rooms.','返回地图总览':'Back to maps','查看商店与角色':'Shops & characters','查看神秘信件':'Mysterious letters'
      }
    }
  };
  const page = pages[file];
  if (!page) return;
  const originals = new WeakMap();
  const nodes = [];

  function collect() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) { return node.parentElement && !/^(SCRIPT|STYLE)$/.test(node.parentElement.tagName) && node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      originals.set(node, node.nodeValue);
      nodes.push(node);
    }
  }
  function render(lang) {
    const english = lang === 'en';
    nodes.forEach(node => {
      const original = originals.get(node);
      const clean = original.trim();
      const translated = page.strings[clean];
      node.nodeValue = english && translated ? original.replace(clean, translated) : original;
    });
    document.title = english ? page.title[1] : page.title[0];
    const description = document.querySelector('meta[name="description"]');
    if (description && page.description) description.content = english ? page.description[1] : page.description[0];
  }
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.home-nav');
    if (nav && !document.querySelector('[data-lang-current]')) {
      const actions = document.createElement('div');
      actions.className = 'home-actions';
      actions.innerHTML = '<a class="home-search" href="index.html#search" aria-label="Search">⌕</a><button class="home-lang" data-lang-current>中文</button>';
      nav.appendChild(actions);
      actions.querySelector('button').addEventListener('click', window.IsletsLanguage.toggle);
    }
    collect();
    render(window.IsletsLanguage.get());
    window.addEventListener('islets:languagechange', event => render(event.detail.language));
  });
})();
