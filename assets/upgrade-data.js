(function(){
  window.UPGRADE_ISLANDS=[
    {id:'northstable',zh:'诺斯特布尔',en:'NorthStable Island'},
    {id:'inverness',zh:'因弗尼斯',en:'Inverness Island'},
    {id:'wolfpine',zh:'沃夫派因',en:'Wolfpine Island'},
    {id:'eastwright',zh:'伊斯莱特',en:'Eastwright Island'},
    {id:'cinder',zh:'辛德岛',en:'Cinder Island'}
  ];
  /* Site checklist slots: the game itself does not number the 60 pickups. */
  window.UPGRADE_DATA=Array.from({length:60},(_,i)=>({
    id:`upgrade-${String(i+1).padStart(2,'0')}`,
    number:i+1,
    titleZh:`收集记录 ${String(i+1).padStart(2,'0')}`,
    titleEn:`Collection Slot ${String(i+1).padStart(2,'0')}`
  }));
})();

