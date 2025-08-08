const ships = [];

const modUtils = {
  cheatMode: true, // debug mode
  defaultVocab: [
    { text: "You", icon: "\u004e", key: "O" },
    { text: "Me", icon: "\u004f", key: "E" },
    { text: "Yes", icon: "\u004c", key: "Y" },
    { text: "No", icon: "\u004d", key: "N" },
    { icon: "I", text: "Attack", key: "A" },
    { text: "Follow", icon: "\u0050", key: "F" },
    { text: "WTF", icon: "ಠ_ಠ", key: "W" },
    { text: "Defend", icon: "\u0025", key: "D" },
    { text: "Wait", icon: "\u0048", key: "T" },
    { text: "Kill", icon: "\u005b", key: "K" },
    { text: "Bruh", icon: "˙ ͜ʟ˙", key: "M" },
    { text: "Hmm", icon: "\u004b", key: "Q" },
    { text: "Good Game", icon: "GG", key: "G" },
    { text: "No Prob", icon: "\u0047", key: "P" },
    { text: "Thanks", icon: "\u0041", key: "X" },
    { text: "Sorry", icon: "\u00a1", key: "S" },
  ],
  music: [
    "procedurality.mp3",
    "argon.mp3",
    "crystals.mp3",
    "red_mist.mp3",
    "civilisation.mp3",
    "warp_drive.mp3"
  ],
  def_clr: "hsla(210, 50%, 87%, 1)",
  prefixes: ["", "K", "M", "B", "t", "q", "Q", "s", "S", "o", "n", "d", "U", "D", "T", "Qt", "Qd"],
  gemCapacity: [
    undefined, // maintain, total capacity, maximum physical capacity (set below physical limit to delete excess gems)
    [20, 20, 20],
    [80, 80, 80],
    [180, 180, 180],
    [320, 320, 320],
    [500, 500, 500],
    [720, 720, 720],
    [980, 980, 980],
    [1000, 10000, 1248]
  ],
  shields: {},
  jobs: [],
  abilityTPS: 60,

  ability: class {
    constructor(name, shortcut, duration, cooldown, effect, allowedShips = false, hidden = false) {
      this.name = name;
      this.shortcut = shortcut;
      this.duration = duration;
      this.cooldown = cooldown*60;
      this.effect = effect;
      this.allowedShips = allowedShips;
      this.hidden = hidden;
    }
  },

  abilities: {
    list: [],

    tick(ship) {
      modUtils.abilities.abilityactivation(ship);
      if (!ship.custom.tier || ship.custom.tier != Math.floor(ship.type/100)) {
        ship.custom.tier = Math.floor(ship.type/100);

        for (let i = 0; i < modUtils.abilities.list.length; i++) {
          modUtils.sendUI(ship, {
            id: "abilityinfo" + i,
            visible: false,
          });
          modUtils.sendUI(ship, {
            id: "ability" + i,
            visible: false,
          });
        }
        
        modUtils.abilities.abilityinfo(ship);
      }
    },

    abilityinfo(ship) {
      const def_clr = modUtils.def_clr;
      const a = modUtils.abilities.list.length;
      let displayI = 0;
      for (let i = 0; i < a; i++) {
        const ab = modUtils.abilities.list[i];
        if (ab.allowedShips && !ab.allowedShips.includes(ship.type)) {
            continue;
        }

        modUtils.sendUI(ship, {
          id: "abilityinfo" + i,
          position: [2.5, 37 + (displayI - 1) * 6 + (ab.hidden ? 10000 : 0), 15, 10],
          visible: true,
          components: [
            {type: "text", position: [5, 5, 20, 30], value: ab.shortcut, color: def_clr},
            {type: "text", position: [30, 5, 65, 25], value: ab.name, color: def_clr},
            {type: "box", position: [5, 35, 90, 1], fill: "hsla(0, 0%, 100%, 1)", stroke: "hsla(0, 0%, 41%, 1)", width: 2},
          ],
        });

        displayI += ab.hidden ? 0 : 1;
      }
    },

    abilityactivation(ship) {
      const a = modUtils.abilities.list.length;
      if (!ship.custom.value) {
        ship.custom.value = true;
        ship.custom.a = [];
        for (let i = 0; i < a; i++) {
          ship.custom.a.push({fill: "hsla(120, 100%, 50%, 1)", ready: 1, clickable: true});
        }
      }

      const reloadtimes = modUtils.abilities.list.map((ab) => 6 / (ab.cooldown || 1));
      let displayI = 0;
      for (let i = 0; i < a; i++) {
        const ab = modUtils.abilities.list[i];
        if (ab.allowedShips && !ab.allowedShips.includes(ship.type)) {
            continue;
        }

        modUtils.sendUI(ship, {
          id: "ability" + i,
          position: [2.5, 37 + (displayI - 1) * 6 + (ab.hidden ? 10000 : 0), 15, 10],
          clickable: ship.custom.a[i].clickable,
          shortcut: ab.shortcut,
          visible: true,
          components: [
            {type: "box", position: [5, 5, 20, 30], fill: "hsla(0, 0%, 0%, 0)", stroke: ship.custom.a[i].fill, width: 3},
            {type: "box", position: [25, 31.5, 70 * ship.custom.a[i].ready, 4], fill: ship.custom.a[i].fill, stroke: ship.custom.a[i].fill, width: 2},
          ],
        });

        if (ship.custom.a[i].ready < 1) {
          ship.custom.a[i].ready += reloadtimes[i];
        } else {
          if (ship.custom.a[i].ready > 1) ship.custom.a[i].ready = 1;
          ship.custom.a[i].clickable = true;
          ship.custom.a[i].fill = "hsla(120, 100%, 50%, 1)";
        }

        displayI += ab.hidden ? 0 : 1;
      }
    },

    abilityeffect(ship, index) {
      const ab = modUtils.abilities.list[index];
      if (ship.custom.a && ship.custom.a[index].ready >= 1 && ab && typeof ab.effect === "function") {
        ship.custom.a[index].fill = "hsla(0, 100%, 50%, 1)";
        ship.custom.a[index].ready = 0;
        ship.custom.a[index].clickable = false;
        ab.effect(ship);
      }
    },
  },

  setTimeout(f, time) {
    modUtils.jobs.push({ f: f, time: game.step + time });
  },

  sendUI(ship, UI) {
    if (UI.visible || UI.visible === null) {
      ship.setUIComponent(UI);
    } else {
      ship.setUIComponent({
        id: UI.id,
        position: [0, 0, 0, 0],
        visible: false,
      });
    }
  },

  shipLevel(ship) {
    return Number(ship.type) > 790 ? 8 : Math.floor(Number(ship.type) / 100);
  },

  countDigits(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  },

  toEngineering(num) {
    if (num < 1e3) return num;
    const TriIndex = Math.trunc((modUtils.countDigits(num) - 1) / 3);
    return (num / 10 ** (TriIndex * 3)).toFixed(2) + modUtils.prefixes[TriIndex];
  },

  shipshield(ship) {
    let shield = modUtils.shields[ship.type];
    let shipShield = Math.floor(shield[0] + (shield[1] - shield[0]) * (Math.floor(ship.stats / 10**7) / Math.floor(ship.type / 100)));

    if (!isNaN(ship.shield) && ship.shield >= 1000) modUtils.sendUI(ship, {
      id: "shieldBar",
      position: [3.3,10.5,17.4,3],
      visible: true,
      components: [
        {type:"box",position:[0,0,100,100],fill:"hsla(170, 32%, 28%, 1)",stroke:"hsla(170, 32%, 28%, 1)",width:2},
        {type:"box",position:[0,0,100 * Math.min(ship.shield, shipShield) / shipShield,100],fill:"hsla(192, 97%, 74%, 1)",stroke:"hsla(192, 97%, 74%, 1)",width:2},
        {type: "text",position:[80,0,20,100],value: modUtils.toEngineering(ship.shield),color:"hsla(0, 0%, 0%, 1)"}
      ]
    });
    else modUtils.sendUI(ship, {id:"shieldBar",visible:false});
  },

  shipgem(ship) {
    const gemStorage = modUtils.gemCapacity[modUtils.shipLevel(ship)];
    const customCap = gemStorage[1] - gemStorage[2];

    if (!ship.custom.gems) ship.custom.gems = 0;

    let cap = gemStorage[0];

    if (ship.crystals > cap && ship.custom.gems < customCap) {
      let moveToCustom = Math.min(customCap - ship.custom.gems, ship.crystals - cap);
      ship.custom.gems += moveToCustom;
      ship.set({ crystals: Math.min(gemStorage[2], ship.crystals - moveToCustom) });

    } else if (ship.crystals < cap) {
      let moveToMain = Math.min(ship.custom.gems, cap - ship.crystals);
      ship.custom.gems -= moveToMain;
      ship.set({ crystals: ship.crystals + moveToMain });
    }

    const totalGems = ship.crystals + ship.custom.gems;
    if (!isNaN(totalGems) && totalGems > gemStorage[0]) {
      modUtils.sendUI(ship, {
        id: "gemBar",
        position: [3.3, 18.5, 17.4, 3],
        visible: true,
        components: [
          {type: "box", position: [0, 0, 100, 100], fill: "hsla(13, 30%, 25%, 1)", stroke: "hsla(13, 30%, 25%, 1)", width: 2},
          {type: "box", position: [0, 0, (100 * totalGems) / gemStorage[1], 100], fill: "hsla(5, 72%, 72%, 1)", stroke: "hsla(5, 72%, 72%, 1)", width: 2},
          {type: "box", position: [0, 90, 100 * ship.crystals], fill: "hsla(5, 50%, 50%, 1)", stroke: "hsla(5, 50%, 50%, 1)", width: 2},
          {type: "text", position: [80, 0, 20, 100], value: modUtils.toEngineering(totalGems), color: "hsla(0, 0%, 0%, 1)"},
        ],
      });
    } else {
      modUtils.sendUI(ship, { id: "gemBar", visible: false });
    }
  },

  handleUIPress(event) {
    const ship = event.ship;
    if (ship != null) {
      switch (event.name) {
        case "ui_component_clicked": {
          const component = event.id;
          if (component.includes("ability") && ship.alive) {
            const a = component.replace("ability", "");
            modUtils.abilities.abilityeffect(ship, a);
          }
          break;
        }
      }
    }
  },

  handleJobs (t) {
    for (let i = modUtils.jobs.length - 1; i >= 0; i--) {
      const job = modUtils.jobs[i];
      if (t >= job.time) {
        try {
          job.f();
        } catch (err) {
          echo(err);
        }
        modUtils.jobs.splice(i, 1);
      }
    }
  },

  tick(game) {
    const t = game.step;
    modUtils.handleJobs(t);

    if (t % 3 === 1) {
      for (const ship of game.ships) {
        modUtils.shipshield(ship);
      }
    }

    if (t % 10 === 5) {
      for (const ship of game.ships) {
        modUtils.abilities.tick(ship);
      }
    }

    if (t % 30 === 0) {
      for (const ship of game.ships) {
        modUtils.shipgem(ship);
      }
    }
  },

  initShields(ships) {
    this.shields = Object.entries(ships).reduce((acc, [, shipStr]) => {
      try {
        const ship = JSON.parse(shipStr);
        acc[ship.level * 100 + ship.model] = ship.specs.shield.capacity;
      } catch {
        // ignore invalid JSON
      }
      return acc;
    }, {});
  },
};

modUtils.initShields(ships);
if (modUtils.cheatMode) {
  modUtils.abilities.list.push(
    new modUtils.ability("Restock", "B", 3, 1, function (ship) {
      ship.set({ generator: 99999 });
      ship.set({ shield: 99999 });
  
      let gemStorage = modUtils.gemCapacity[modUtils.shipLevel(ship)];
      if (gemStorage[0] == gemStorage[2]) ship.set({crystals: gemStorage[0]});
      else ship.crystals = gemStorage[1];
  
      for (let i = 0; i < ship.custom.a.length; i++) {
        ship.custom.a[i].ready = 1;
      }
  
      modUtils.sendUI(ship, {
        id: "ability",
        position: [42, 18, 32, 30],
        visible: true,
        components: [{type: "text", position: [2, 5, 80, 33], value: "Refilled all!", color: modUtils.def_clr}]
      });
  
      modUtils.setTimeout(
        function () { modUtils.sendUI(ship, { id: "ability", visible: false }); }, 
        this.duration * modUtils.abilityTPS
      );
    }, false, true)
  );
  modUtils.abilities.list.push(
    new modUtils.ability("Reset", "L", 2, 1, function (ship) {
      ship.set({ type: 101 });

      modUtils.sendUI(ship, {
        id: "ability",
        position: [42, 18, 32, 30],
        visible: true,
        components: [{type: "text", position: [2, 5, 80, 33], value: "Reset!", color: modUtils.def_clr}]
      });

      modUtils.setTimeout(
        function () { modUtils.sendUI(ship, { id: "ability", visible: false }); }, 
        this.duration * modUtils.abilityTPS
      );
    }, false, true)
  );
}

this.tick = modUtils.tick;
this.event = modUtils.handleUIPress;
this.options = {
  map_size: 80,
  //custom_map: map,
  map_name: "Spedry's Moding",
  max_players: 30,
  vocabulary: modUtils.defaultVocab,
  station_regeneration: 2,
  station_crystal_capacity: 0.1,
  station_repair_threshold: 0.075,
  station_size: 5,
  all_ships_can_respawn: true,
  all_ships_can_dock: true,
  radar_zoom: 4,
  ships: ships,
  reset_tree: true,
  friendly_colors: 0,
  root_mode: "survival",
  speed_mod: 1,
  asteroids_strength: 2,
  crystal_value: 5,
  release_crystal: true,
  crystal_drop: 0.75,
  mines_self_destroy: false,
  survival_time: 30,
};
