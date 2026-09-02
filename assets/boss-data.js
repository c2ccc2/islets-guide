(function(){
  const generic={
    groundZh:['先观察一轮完整攻击，不要在 Boss 起手时贪刀。','优先站在场地中部，确认落点后再用翻滚或二段跳穿过攻击。','远程箭适合补伤害；近战只打明显的收招空档。'],
    groundEn:['Watch one full attack cycle before committing.','Favor the middle of the arena and dodge only after the landing point is clear.','Use arrows for safe damage; take short melee windows after long recoveries.'],
    airZh:['保持飞艇持续移动，尽量不要被逼到画面边缘。','先躲密集弹幕，再在敌人完成冲刺或转向时反击。','血量不足时以生存为先，稳定输出比追击更重要。'],
    airEn:['Keep the airship moving and avoid being pinned to the edge.','Clear the projectile pattern first, then counter after a dash or turn.','When low on health, prioritize survival over chasing damage.']
  };
  const boss=(id,zh,en,type,locationZh,locationEn,rewardZh,rewardEn,achievement,image='',tipsZh=null,tipsEn=null)=>({id,zh,en,type,locationZh,locationEn,rewardZh,rewardEn,achievement,image,tipsZh:tipsZh||(type==='airship'?generic.airZh:generic.groundZh),tipsEn:tipsEn||(type==='airship'?generic.airEn:generic.groundEn)});
  window.BOSS_DATA=[
    boss('grave-crawler','墓地爬行者','Grave Crawler','ground','诺斯特布尔（首座岛屿）','NorthStable Island (first island)','二段跳；推进首座岛屿流程','Double Jump and first-island progression','Root of Evil','assets/images/boss-grave-crawler.png',['第一阶段会跳跃压向艾可，并召唤小怪；先清掉小怪，避免场面失控。','生命过半后会在中央召唤地刺。地刺不能靠翻滚穿过，要用跳跃越过。','保持中距离用弓箭磨血，等跳砸落地后的硬直再近身攻击。'],['Phase one uses crushing jumps and summoned minions; remove the minions first.','Below half health it summons spikes from the center. Jump over them instead of rolling through.','Use arrows at mid-range and take melee hits after a landing recovery.']),
    boss('sky-pirates','空中海盗','Sky Pirates','airship','天空之城空域；飞艇升级前可挑战','Sky City airspace, before airship upgrades','开放前往因弗尼斯的航线','Access to Inverness Island','Something’s fishy…','assets/images/boss-sky-pirates.jpg'),
    boss('tomb-1000-spirits','千魂之墓','Tomb of 1000 Spirits','ground','墓穴遗迹','Tomb Ruins','下砸能力','Slam ability','Tour Trouble'),
    boss('buried-beast','埋葬之兽','Buried Beast','ground','灵魂港','Spirits Landing','开放一枚岛屿核心','Access to an islet core','9 Lives and 8 Knives'),
    boss('clockmaker','钟表匠','ClockMaker','ground','钟表工坊','ClockWorks','开放一枚岛屿核心','Access to an islet core','Ticking Timebomb','assets/images/boss-clockmaker.png'),
    boss('grapplebot','抓抓机器人','GrappleBot','airship','天空之城西南空域','Southwest of Sky City','开放前往伊斯莱特的航线','Access to Eastwright Island','Coming to Grips','assets/images/boss-grapplebot.png'),
    boss('mecharat','机械鼠','MechaRat','airship','天空之城西北空域','Northwest of Sky City','开放前往沃夫派因的航线','Access to Wolfpine Island','A Sky Tail','assets/images/boss-mecharat.jpg'),
    boss('forgotten-grave','被遗忘的墓','Forgotten Grave','ground','雨原','Rainy Plains','开放一枚岛屿核心','Access to an islet core','Grave Danger'),
    boss('runaway-plant','失控植物','Runaway Plant','ground','空中花园','Hanging Gardens','位移箭','Shift Arrows','Tulip Tussle','assets/images/boss-runaway-plant.jpg'),
    boss('swamp-frog','沼泽蛙','Swamp Frog','ground','雨原','Rainy Plains','云朵箭','Cloud Arrows','A Swampy Situation'),
    boss('stone-witch','石女巫','Stone Witch','ground','被遗忘的腐地','Forgotten Rots','一个飞艇螺旋桨部件','An airship propeller','Stone Cold Witch'),
    boss('defender-unit','守护者单位','Defender Unit','airship','天空之城东南空域','Southeast of Sky City','开放前往辛德岛的航线','Access to Cinder Island','Exterminator'),
    boss('rogue-bot','流氓机器人','Rogue Bot','ground','深坑','The Pits','蓄力攻击','Charge Attack','Robot Rampage'),
    boss('bone-golem','骨之魔像','BoneGolem','ground','骨之魔像领域','BoneGolem’s Domain','破坏一道终局封印','Destroys one endgame seal','Boney Battle'),
    boss('filthpest','污秽虫','FilthPest','ground','污秽虫领域','FilthPest’s Domain','破坏一道终局封印','Destroys one endgame seal','Burning Bridges'),
    boss('gutghoul','内脏食尸鬼','GutGhoul','final','终局区域；完成两道封印后进入','Final area, after clearing both seals','完成主线并获得最终 Boss 成就','Main-story completion and final-boss achievement','Behind the Mask','', ['这是多阶段终局战，先用前几次尝试确认每个阶段的安全位置。','保留箭矢与生命资源给后半段，不要为了追击进入画面边缘。','连续失败时可调整无障碍选项；这不会影响理解 Boss 的攻击节奏。'],['This is a multi-stage finale; use early attempts to learn each phase’s safe positions.','Save arrows and health resources for later phases, and avoid chasing toward the edge.','If needed, adjust accessibility options while learning the attack rhythm.'])
  ];
})();



