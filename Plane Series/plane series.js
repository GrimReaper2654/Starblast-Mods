const ships = [];

var Wright_Flyer_101 = '{"name":"Wright Flyer","level":1,"model":1,"size":0.5,"zoom":1.75,"specs":{"shield":{"capacity":[25,25],"reload":[2,2]},"generator":{"capacity":[6,6],"reload":[5,5]},"ship":{"mass":50,"speed":[90,90],"rotation":[20,20],"acceleration":[30,30]}},"bodies":{"engines":{"section_segments":25,"offset":{"x":60,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,-60],"y":[-30,-30,-29,-29,-5,-5,5,5,0,0],"z":[0,0,0,0,0,0,0,0,0,-20]},"width":[0,18,18,2,2,5,5,0,1,1],"height":[0,18,18,2,2,5,5,0,1,1],"texture":[13,3,13,4,17,10,1,1,4],"propeller":false},"gun_mount":{"section_segments":[45,135,225,315],"offset":{"x":35,"y":-10,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-10,-10,-9,9,10,10],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,10,10,8,0],"height":[0,6,7,7,6,0],"texture":[4,17,18,17,4],"propeller":false},"gun":{"section_segments":25,"offset":{"x":35,"y":-5,"z":-15},"position":{"x":[0,0,0,0,0,0,0,0,0,-60],"y":[-30,-30,-27,-27,-25,-25,-10],"z":[0,0,0,0,0,0,0,0,0,-20]},"width":[0,1.5,1.5,1,1,2,2],"height":[0,1.5,1.5,1,1,2,2],"texture":[17,4,4,17,4,12],"propeller":false,"laser":{"damage":[1,1],"rate":4,"type":1,"speed":[60,60],"error":5,"number":1}},"main_wing_supports1":{"section_segments":6,"offset":{"x":100,"y":0,"z":20},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports2":{"section_segments":6,"offset":{"x":80,"y":0,"z":20},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports3":{"section_segments":6,"offset":{"x":60,"y":0,"z":20},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports4":{"section_segments":6,"offset":{"x":40,"y":0,"z":20},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports5":{"section_segments":6,"offset":{"x":20,"y":0,"z":20},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports6":{"section_segments":6,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports7":{"section_segments":6,"offset":{"x":100,"y":0,"z":0},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports8":{"section_segments":6,"offset":{"x":80,"y":0,"z":0},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports9":{"section_segments":6,"offset":{"x":60,"y":0,"z":0},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports10":{"section_segments":6,"offset":{"x":40,"y":0,"z":0},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports11":{"section_segments":6,"offset":{"x":20,"y":0,"z":0},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"main_wing_supports12":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0],"y":[-20,20],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]},"rudder_support1":{"section_segments":6,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0],"y":[-37,0],"z":[0,0]},"width":[1,1],"height":[1,1],"texture":[6]},"rudder_support2":{"section_segments":6,"offset":{"x":0,"y":0,"z":-20},"position":{"x":[0,0],"y":[-37,0],"z":[0,0]},"width":[1,1],"height":[1,1],"texture":[6]},"rudder_support3":{"section_segments":6,"offset":{"x":0,"y":-37,"z":-20},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"angle":90,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"rudder_support4":{"section_segments":6,"offset":{"x":0,"y":-37,"z":20},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"angle":90,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"rudder_support5":{"section_segments":6,"offset":{"x":0,"y":-44,"z":17},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"angle":90,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"rudder_support6":{"section_segments":6,"offset":{"x":0,"y":-44,"z":0},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"angle":90,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"rudder_support7":{"section_segments":6,"offset":{"x":0,"y":-44,"z":-14},"position":{"x":[0,0],"y":[-10,10],"z":[0,0]},"angle":90,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"skids":{"section_segments":6,"offset":{"x":10,"y":0,"z":-30},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-30,-5,20,-30,50,75],"z":[0,0,8,0,0,0,23]},"width":[0,1,1,1,1,1,1,1],"height":[0,1,1,1,1,1,1,1],"texture":[6]},"skids_support":{"section_segments":6,"offset":{"x":10,"y":0,"z":20},"position":{"x":[0,0],"y":[23,50],"z":[-2,-50]},"width":[1,1],"height":[2,2],"texture":[6]},"tail_supports1":{"section_segments":6,"offset":{"x":35,"y":0,"z":-75},"position":{"x":[0,0],"y":[-7,7],"z":[0,0]},"vertical":true,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"tail_supports2":{"section_segments":6,"offset":{"x":19,"y":0,"z":-66},"position":{"x":[0,0],"y":[-7,7],"z":[0,0]},"vertical":true,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"tail_supports3":{"section_segments":6,"offset":{"x":19,"y":0,"z":-84},"position":{"x":[0,0],"y":[-7,7],"z":[0,0]},"vertical":true,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"tail_supports4":{"section_segments":6,"offset":{"x":0,"y":0,"z":-66},"position":{"x":[0,0],"y":[-7,7],"z":[0,0]},"vertical":true,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]},"tail_supports5":{"section_segments":6,"offset":{"x":0,"y":0,"z":-84},"position":{"x":[0,0],"y":[-7,7],"z":[0,0]},"vertical":true,"width":[0.5,0.5],"height":[0.5,0.5],"texture":[6]}},"wings":{"bottom":{"length":[100,10,5],"width":[50,50,30,10],"angle":[0,0,0],"position":[0,0,0,0],"texture":[11,4,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":0,"z":-20}},"top":{"length":[100,10,5],"width":[50,50,30,10],"angle":[0,0,0],"position":[0,0,0,0],"texture":[11,4,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":0,"z":20}},"tail_bottom":{"length":[20,15,2],"width":[20,20,7,3],"angle":[0,0,0],"position":[0,0,0,0],"texture":[1,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":75,"z":-7}},"tail_top":{"length":[20,15,2],"width":[20,20,7,3],"angle":[0,0,0],"position":[0,0,0,0],"texture":[1,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":75,"z":7}},"rudder":{"length":[2,5,30,5,2],"width":[2,5,10,10,5,2],"angle":[90,90,90,90,90],"position":[3,2,0,0,2,3],"texture":[63],"doubleside":true,"bump":{"position":0,"size":15},"offset":{"x":10,"y":-40,"z":-20}}},"typespec":{"name":"Wright Flyer","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[25,25],"reload":[2,2]},"generator":{"capacity":[6,6],"reload":[5,5]},"ship":{"mass":50,"speed":[90,90],"rotation":[20,20],"acceleration":[30,30]}},"shape":[0.445,0.452,0.461,0.319,0.292,0.32,0.506,0.501,0.623,0.815,1.002,1.114,1.151,1.151,1.114,1.002,0.678,0.515,0.422,0.361,0.32,0.853,0.863,0.873,0.865,0.852,0.865,0.873,0.863,0.853,0.32,0.361,0.422,0.515,0.678,1.002,1.114,1.151,1.151,1.114,1.002,0.815,0.623,0.501,0.506,0.32,0.292,0.319,0.461,0.452],"lasers":[{"x":0.35,"y":-0.35,"z":-0.15,"angle":0,"damage":[1,1],"rate":4,"type":1,"speed":[60,60],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.35,"y":-0.35,"z":-0.15,"angle":0,"damage":[1,1],"rate":4,"type":1,"speed":[60,60],"number":1,"spread":0,"error":5,"recoil":0}],"radius":1.151}}';

var Biplane_201 = '{"name":"Biplane","level":2,"model":1,"size":0.8,"zoom":1.5,"specs":{"shield":{"capacity":[75,75],"reload":[1,1]},"generator":{"capacity":[26,26],"reload":[5,5]},"ship":{"mass":75,"speed":[100,100],"rotation":[30,30],"acceleration":[45,45]}},"bodies":{"main":{"section_segments":25,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-33,-33,-30,-30,-29,-29,-15,-25,-23,-20,40,90,97,100],"z":[0,0,0,0,0,0,0,0,0,0,0,8,8,10]},"width":[0,3,4,30,30,4,4,10,12,13,13,5,3,0],"height":[0,3,4,30,30,4,4,10,12,13,13,5,3,0],"texture":[3,3,13,3,13,4,12,63,1],"propeller":false},"cockpit":{"section_segments":6,"offset":{"x":0,"y":25,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,8,12,10,0],"height":[0,8,12,5,0],"texture":[9,9,10]},"gun_mount":{"section_segments":[48,138,228,318],"offset":{"x":0,"y":0,"z":-5},"position":{"x":[35,35,35,35,35,35,35,35,35,35],"y":[-10,-10,-9,9,10,10],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,10,10,8,0],"height":[0,6,7,7,6,0],"texture":[4,17,63,17,2],"propeller":false},"gun_mount2":{"section_segments":[42,132,222,312],"offset":{"x":0,"y":0,"z":-5},"position":{"x":[-35,-35,-35,-35,-35,-35,-35,-35,-35,-35],"y":[-10,-10,-9,9,10,10],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,10,10,8,0],"height":[0,6,7,7,6,0],"texture":[4,17,63,17,2],"propeller":false},"gun":{"section_segments":25,"offset":{"x":35,"y":10,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,-60],"y":[-30,-30,-27,-27,-25,-25,-10],"z":[0,0,0,0,0,0,0,0,0,-20]},"width":[0,1.5,1.5,1,1,2,2],"height":[0,1.5,1.5,1,1,2,2],"texture":[17,4,4,17,4,12],"propeller":false,"laser":{"damage":[1,1],"rate":5,"type":1,"speed":[60,60],"error":5,"number":1}},"deco":{"section_segments":25,"offset":{"x":50,"y":25.8,"z":-10},"position":{"x":[0,0,0,0],"y":[0,0,1,1],"z":[0,0,0,0]},"width":[0,13,13,0],"height":[0,13,13,0],"texture":[63],"vertical":true,"propeller":false},"main_wing_supports1":{"section_segments":6,"offset":{"x":40,"y":0,"z":0},"position":{"x":[0,0],"y":[-10,25],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]}},"wings":{"bottom":{"length":[75,3,2],"width":[35,30,20,10],"angle":[3,3,3],"position":[0,0,0,0],"texture":[2,4,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":10,"z":-12}},"top":{"length":[75,3,2],"width":[35,30,20,10],"angle":[0,0,0],"position":[0,0,0,0],"texture":[2,4,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":10,"z":25}},"tail_top":{"length":[0,25,3],"width":[0,20,10,8],"angle":[0,5,60],"position":[0,0,10,12],"texture":[1,11,63],"doubleside":true,"bump":{"position":40,"size":5},"offset":{"x":0,"y":80,"z":7}},"vertical_stabiliser":{"length":[0,30],"width":[0,30,15],"angle":[0,90],"position":[0,0,10],"texture":[63],"doubleside":true,"bump":{"position":40,"size":5},"offset":{"x":0,"y":85,"z":10}}},"typespec":{"name":"Biplane","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[75,75],"reload":[1,1]},"generator":{"capacity":[26,26],"reload":[5,5]},"ship":{"mass":75,"speed":[100,100],"rotation":[30,30],"acceleration":[45,45]}},"shape":[0.529,0.53,0.505,0.53,0.568,0.623,0.678,0.278,0.664,0.666,0.643,0.75,1.248,1.29,1.302,1.288,1.098,0.852,0.713,0.615,0.552,0.506,0.664,1.593,1.523,1.64,1.523,1.593,0.664,0.506,0.552,0.615,0.713,0.852,1.098,1.288,1.302,1.29,1.248,0.75,0.643,0.666,0.664,0.278,0.678,0.623,0.568,0.53,0.505,0.53],"lasers":[{"x":0.56,"y":-0.32,"z":-0.08,"angle":0,"damage":[1,1],"rate":5,"type":1,"speed":[60,60],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.56,"y":-0.32,"z":-0.08,"angle":0,"damage":[1,1],"rate":5,"type":1,"speed":[60,60],"number":1,"spread":0,"error":5,"recoil":0}],"radius":1.64}}';
var Monoplane_202 = '{"name":"Monoplane","level":2,"model":2,"size":0.8,"zoom":1.5,"specs":{"shield":{"capacity":[60,60],"reload":[1,1]},"generator":{"capacity":[16,16],"reload":[8,8]},"ship":{"mass":60,"speed":[110,110],"rotation":[45,45],"acceleration":[60,60]}},"bodies":{"main":{"section_segments":25,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-33,-33,-30,-30,-29,-29,-15,-25,-23,-20,-10,0,40,90,97,100],"z":[0,0,0,0,0,0,0,0,0,0,0,5,5,13,13,20]},"width":[0,3,4,30,30,4,4,10,12,13,13,13,13,5,3,0],"height":[0,3,4,30,30,4,4,10,12,13,13,17,17,10,8,0],"texture":[3,3,13,3,13,4,12,63,1],"propeller":false},"cockpit":{"section_segments":8,"offset":{"x":0,"y":25,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-30,0,5],"z":[0,0,0,0,0,0]},"width":[0,8,12,10,0],"height":[0,8,15,5,0],"texture":[1,9,1]},"gun_mount":{"section_segments":[45,135,225,315],"offset":{"x":30,"y":10,"z":17},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-10,-10,-9,9,10,10],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,10,10,8,0],"height":[0,6,7,7,6,0],"texture":[4,17,18,17,4],"propeller":false},"gun":{"section_segments":25,"offset":{"x":30,"y":20,"z":17},"position":{"x":[0,0,0,0,0,0,0,0,0,-60],"y":[-30,-30,-27,-27,-25,-25,-10],"z":[0,0,0,0,0,0,0,0,0,-20]},"width":[0,1.5,1.5,1,1,2,2],"height":[0,1.5,1.5,1,1,2,2],"texture":[17,4,4,17,4,12],"propeller":false,"laser":{"damage":[1,1],"rate":6,"type":1,"speed":[70,70],"error":5,"number":1}},"deco":{"section_segments":25,"offset":{"x":50,"y":22.8,"z":-20},"position":{"x":[0,0,0,0],"y":[0,0,1,1],"z":[0,0,0,0]},"width":[0,13,13,0],"height":[0,13,13,0],"texture":[63],"vertical":true,"propeller":false},"main_wing_supports1":{"section_segments":6,"offset":{"x":10,"y":0,"z":-10},"position":{"x":[0,20],"y":[0,22],"z":[0,0]},"vertical":true,"width":[1,1],"height":[1,1],"texture":[6]}},"wings":{"top":{"length":[75,3,2],"width":[35,30,20,10],"angle":[0,0,0],"position":[0,0,0,0],"texture":[2,4,63],"doubleside":true,"bump":{"position":0,"size":5},"offset":{"x":0,"y":20,"z":22}},"tail_top":{"length":[0,25,3],"width":[0,20,10,8],"angle":[0,5,60],"position":[0,0,10,12],"texture":[1,11,63],"doubleside":true,"bump":{"position":40,"size":5},"offset":{"x":0,"y":80,"z":7}},"vertical_stabiliser":{"length":[0,30],"width":[0,30,15],"angle":[0,90],"position":[0,0,10],"texture":[63],"doubleside":true,"bump":{"position":40,"size":5},"offset":{"x":0,"y":85,"z":10}}},"typespec":{"name":"Monoplane","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[60,60],"reload":[1,1]},"generator":{"capacity":[16,16],"reload":[8,8]},"ship":{"mass":60,"speed":[110,110],"rotation":[45,45],"acceleration":[60,60]}},"shape":[0.529,0.53,0.505,0.53,0.568,0.623,0.678,0.284,0.256,0.237,0.529,0.52,0.516,1.256,1.321,1.341,1.335,1.167,0.968,0.843,0.756,0.695,0.667,1.593,1.523,1.64,1.523,1.593,0.667,0.695,0.756,0.843,0.968,1.167,1.335,1.341,1.321,1.256,0.571,0.52,0.529,0.237,0.256,0.284,0.678,0.623,0.568,0.53,0.505,0.53],"lasers":[{"x":0.48,"y":-0.16,"z":0.272,"angle":0,"damage":[1,1],"rate":6,"type":1,"speed":[70,70],"number":1,"spread":0,"error":5,"recoil":0},{"x":-0.48,"y":-0.16,"z":0.272,"angle":0,"damage":[1,1],"rate":6,"type":1,"speed":[70,70],"number":1,"spread":0,"error":5,"recoil":0}],"radius":1.64}}';


ships.push(Wright_Flyer_101);
ships.push(Biplane_201);
ships.push(Monoplane_202);

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
    undefined, // maintain, custom limit, physical capacity
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

    if (ship.crystals > gemStorage[2]) ship.set({crystals: gemStorage[2]});
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
if (modUtils.cheatMode) {
  modUtils.abilities.list.push(
    new modUtils.ability("Restock", "B", 3, 1, function (ship) {
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
    }, false)
  );
}
modUtils.abilities.list.push(
  new modUtils.ability("Reset", "J", 3, 1, function (ship) {
    modUtils.sendUI(ship, { id: "ability", visible: false });
    
    if (ship.type != 101) ship.set({ type: 101 });
    else ship.set({ type: 102 });

    if (!ship.custom.gems) ship.custom.gems = 0;
    ship.custom.gems += Math.max(0, ship.crystals-20);
    
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
  })
);

this.tick = modUtils.tick;
this.event = modUtils.handleUIPress;
this.options = {
  map_size: 80,
  //custom_map: map,
  map_name: "Aviation Series",
  max_players: 30,
  vocabulary: modUtils.defaultVocab,
  radar_zoom: 2,
  ships: ships,
  reset_tree: true,
  friendly_colors: 0,
  root_mode: "team",
  speed_mod: 1,
  asteroids_strength: 0.1,
  crystal_value: 1,
  release_crystal: true,
  crystal_drop: 5,
  mines_self_destroy: false,
  survival_time: 30,
};
