const ships = [];

var Shadow_X_1_101 = '{"name":"Shadow X-1","level":1,"model":1,"size":0.8,"zoom":0.8,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[12,16]},"ship":{"mass":70,"speed":[120,155],"rotation":[100,140],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true,"laser":{"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1}}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Shadow X-1","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[12,16]},"ship":{"mass":70,"speed":[120,155],"rotation":[100,140],"acceleration":[130,150]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[{"x":1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.258}}';

var Shadow_X_2_201 = '{"name":"Shadow X-2","level":2,"model":1,"size":1.1,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[63],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[80],"width":[100,70],"angle":[0],"position":[-80,50],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Shadow X-2","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.199}}';
var Shadow_Booster_202 = '{"name":"Shadow Booster","level":2,"model":2,"size":1,"specs":{"shield":{"capacity":[140,200],"reload":[6,8]},"generator":{"capacity":[200,320],"reload":[20,28]},"ship":{"mass":150,"speed":[140,160],"rotation":[45,60],"acceleration":[120,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[150,180],"number":3,"angle":15},"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"boosters":{"section_segments":10,"offset":{"x":40,"y":50,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,60,55],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true}},"typespec":{"name":"Shadow Booster","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[140,200],"reload":[6,8]},"generator":{"capacity":[200,320],"reload":[20,28]},"ship":{"mass":150,"speed":[140,160],"rotation":[45,60],"acceleration":[120,160]}},"shape":[2,1.946,1.624,1.347,1.156,1.026,0.833,0.669,0.564,0.499,0.448,0.418,0.395,0.383,0.392,0.407,0.434,1.233,1.488,1.701,1.848,2.265,2.375,2.313,2.131,2.104,2.131,2.313,2.375,2.265,1.848,1.701,1.488,1.233,0.434,0.407,0.392,0.383,0.395,0.418,0.448,0.499,0.564,0.669,0.833,1.026,1.156,1.347,1.624,1.946],"lasers":[{"x":0,"y":-2,"z":0,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[150,180],"number":3,"spread":15,"error":0,"recoil":0}],"radius":2.375}}';

var Bomber_Jet_301 = '{"name":"Bomber Jet","level":3,"model":1,"size":2,"specs":{"shield":{"capacity":[400,800],"reload":[20,25]},"generator":{"capacity":[150,200],"reload":[35,45]},"ship":{"mass":250,"speed":[50,70],"rotation":[30,35],"acceleration":[40,60]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,20,10,10,15,15,15,10,10],"texture":[12,3,15,4,63,63,4,4,5]},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,16,17,3]},"laser":{"section_segments":10,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10}},"laser2":{"section_segments":10,"offset":{"x":50,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10}}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":65,"z":5},"length":[30],"width":[50,30],"angle":[90],"position":[0,50],"texture":[17],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[17],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":40,"z":0},"length":[120],"width":[100,50],"angle":[0],"position":[-80,20],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Bomber Jet","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[400,800],"reload":[20,25]},"generator":{"capacity":[150,200],"reload":[35,45]},"ship":{"mass":250,"speed":[50,70],"rotation":[30,35],"acceleration":[40,60]}},"shape":[5.2,4.854,3.493,3.177,2.662,2.561,2.857,2.984,2.953,2.811,2.837,4.03,4.093,4.203,4.703,5.162,5.468,5.871,5.107,4.674,2.595,2.14,5.073,5.816,4.397,5.2,4.397,5.816,5.073,2.14,2.595,4.674,5.107,5.871,5.468,5.162,4.703,4.203,4.095,4.03,2.837,2.811,2.953,2.984,2.857,2.561,2.662,3.177,3.493,4.854],"lasers":[{"x":3.6,"y":-0.8,"z":-0.76,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0},{"x":-3.6,"y":-0.8,"z":-0.76,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0},{"x":2,"y":-2,"z":-0.8,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0},{"x":-2,"y":-2,"z":-0.8,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0}],"radius":5.871}}';
var Bullet_302 = '{"name":"Bullet","level":3,"model":2,"size":1.25,"specs":{"shield":{"capacity":[400,650],"reload":[20,26]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":350,"speed":[125,150],"rotation":[40,50],"acceleration":[120,140],"dash":{"rate":2,"burst_speed":[200,250],"speed":[175,190],"acceleration":[120,120],"initial_energy":[40,70],"energy":[35,45]}}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":15,"y":80,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[17],"bump":{"position":10,"size":10}}},"typespec":{"name":"Bullet","level":3,"model":2,"code":302,"specs":{"shield":{"capacity":[400,650],"reload":[20,26]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":350,"speed":[125,150],"rotation":[40,50],"acceleration":[120,140],"dash":{"rate":2,"burst_speed":[200,250],"speed":[175,190],"acceleration":[120,120],"initial_energy":[40,70],"energy":[35,45]}}},"shape":[2.5,2.433,2.03,1.683,1.445,1.282,1.041,0.836,0.705,0.624,0.56,0.523,0.493,0.479,0.49,0.508,0.542,0.585,0.648,0.742,0.88,1.138,2.308,3.702,3.365,2.63,3.365,3.702,2.308,1.138,0.88,0.742,0.648,0.585,0.542,0.508,0.49,0.479,0.493,0.523,0.56,0.624,0.705,0.836,1.041,1.282,1.445,1.683,2.03,2.433],"lasers":[],"radius":3.702}}';


ships.push(Shadow_X_1_101);

ships.push(Shadow_X_2_201); // 10 14 9
ships.push(Shadow_Booster_202); // 10 20 10

ships.push(Bomber_Jet_301); // 30 25 4
ships.push(Bullet_302); // 30 14 9

const modUtils = {
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
    undefined,
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
    constructor(name, shortcut, duration, cooldown, effect, hidden = false) {
      this.name = name;
      this.shortcut = shortcut;
      this.duration = duration;
      this.cooldown = cooldown;
      this.effect = effect;
      this.hidden = hidden;
    }
  },

  abilities: {
    list: [],

    tick(ship) {
      modUtils.abilities.abilityactivation(ship);
      if (!ship.custom.info) {
        ship.custom.info = true;
        modUtils.abilities.abilityinfo(ship);
      }
    },

    abilityinfo(ship) {
      echo("Test");
      const def_clr = modUtils.def_clr;
      const a = modUtils.abilities.list.length;
      for (let i = 0; i < a; i++) {
        const ab = modUtils.abilities.list[i];
        modUtils.sendUI(ship, {
          id: "abilityinfo" + i,
          position: [2.5, 37 + (i - 1) * 6 + (ab.hidden ? 10000 : 0), 15, 10],
          visible: true,
          components: [
            {type: "text", position: [5, 5, 20, 30], value: ab.shortcut, color: def_clr},
            {type: "text", position: [30, 5, 65, 25], value: ab.name, color: def_clr},
            {type: "box", position: [5, 35, 90, 1], fill: "hsla(0, 0%, 100%, 1)", stroke: "hsla(0, 0%, 41%, 1)", width: 2},
          ],
        });
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
      for (let i = 0; i < a; i++) {
        const ab = modUtils.abilities.list[i];
        modUtils.sendUI(ship, {
          id: "ability" + i,
          position: [2.5, 37 + (i - 1) * 6, 15, 10],
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
    let shipshield = modUtils.shields[ship.type][1] || 1000;

    if (!isNaN(ship.shield) && ship.shield >= 1000) {
      modUtils.sendUI(ship, {
        id: "shieldBar",
        position: [3.3, 10.5, 17.4, 3],
        visible: true,
        components: [
          {type: "box", position: [0, 0, 100, 100], fill: "hsla(170, 32%, 28%, 1)", stroke: "hsla(170, 32%, 28%, 1)", width: 2},
          {type: "box", position: [0, 0, 100 * (ship.shield / shipshield), 100], fill: "hsla(192, 97%, 74%, 1)", stroke: "hsla(192, 97%, 74%, 1)", width: 2},
          {type: "text", position: [80, 0, 20, 100], value: modUtils.toEngineering(ship.shield), color: "hsla(0, 0%, 0%, 1)"},
        ],
      });
    } else {
      modUtils.sendUI(ship, { id: "shieldBar", visible: false });
    }
  },

  shipgem(ship) {
    const gemStorage = modUtils.gemCapacity[modUtils.shipLevel(ship)];
    const customCap = gemStorage[1] - gemStorage[2];

    ship.custom = ship.custom || {};
    ship.custom.fakeCrystals = -1;
    if (!ship.custom.gems) ship.custom.gems = 0;

    let cap = gemStorage[0];
    if (ship.custom.gems > customCap) cap = gemStorage[2];

    if (ship.crystals < cap) {
      const moveToMain = Math.min(ship.custom.gems, cap - ship.crystals);
      if (moveToMain > 0) {
        ship.custom.gems -= moveToMain;
        ship.set({ crystals: ship.crystals + moveToMain });
        ship.custom.fakeCrystals = ship.crystals + moveToMain;
      }
    } else if (ship.crystals > cap && ship.custom.gems < customCap) {
      const moveToCustom = Math.min(
        ship.crystals - cap,
        customCap - ship.custom.gems
      );
      ship.custom.gems += moveToCustom;
      ship.set({ crystals: ship.crystals - moveToCustom });
      ship.custom.fakeCrystals = ship.crystals - moveToCustom;
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
          {type: "box", position: [0, 90, (100 * (ship.custom.fakeCrystals === -1? ship.crystals : ship.custom.fakeCrystals)) / gemStorage[2], 10], fill: "hsla(5, 50%, 50%, 1)", stroke: "hsla(5, 50%, 50%, 1)", width: 2},
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

    if (t % 21 === 0) {
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
modUtils.abilities.list.push(new modUtils.ability("Restock", "B", 3, 1, function (ship) {
    modUtils.sendUI(ship, { id: "ability", visible: false });
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
  })
);

this.tick = modUtils.tick;
this.event = modUtils.handleUIPress;
this.options = {
  map_size: 80,
  //custom_map: map,
  map_name: "Shadow Series",
  max_players: 30,
  vocabulary: modUtils.defaultVocab,
  radar_zoom: 1,
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
