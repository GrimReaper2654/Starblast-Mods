const ships = [];

var Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"next":[201,202],"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856,"next":[201,202]}}';
var Shrink_151 = '{"name":"Shrink","level":1.5,"model":1,"size":0.25,"zoom":0.75,"next":[201,202],"specs":{"shield":{"capacity":[75,112.5],"reload":[2,3.5]},"generator":{"capacity":[40,70],"reload":[10,17.5]},"ship":{"mass":20,"speed":[145,182.5],"rotation":[130,160],"acceleration":[100,130]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6.5],"rate":4,"type":1,"speed":[160,190],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Shrink","level":1.5,"model":1,"code":151,"specs":{"shield":{"capacity":[75,112.5],"reload":[2,3.5]},"generator":{"capacity":[40,70],"reload":[10,17.5]},"ship":{"mass":20,"speed":[145,182.5],"rotation":[130,160],"acceleration":[100,130]}},"shape":[0.326,0.326,0.26,0.23,0.21,0.197,0.188,0.183,0.18,0.185,0.202,0.226,0.26,0.397,0.406,0.423,0.442,0.435,0.415,0.402,0.363,0.337,0.318,0.382,0.382,0.376,0.382,0.382,0.318,0.337,0.363,0.402,0.415,0.435,0.442,0.423,0.406,0.397,0.394,0.226,0.202,0.185,0.18,0.183,0.188,0.197,0.21,0.23,0.26,0.326],"lasers":[{"x":0,"y":-0.325,"z":-0.05,"angle":0,"damage":[5,6.5],"rate":4,"type":1,"speed":[160,190],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":0.442,"next":[201,202]}}';

var Delta_Fighter_201 = '{"name":"Delta-Fighter","level":2,"model":1,"size":1.3,"specs":{"shield":{"capacity":[100,150],"reload":[3,4]},"generator":{"capacity":[50,80],"reload":[15,25]},"ship":{"mass":80,"speed":[110,135],"rotation":[80,100],"acceleration":[110,120]}},"bodies":{"cockpit":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-20,"z":12},"position":{"x":[0,0,0,0,0],"y":[-20,-10,0,10,20],"z":[-7,-3,0,5,3]},"width":[3,12,18,16,3],"height":[3,6,8,6,3],"texture":[9]},"cockpit2":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-10,"z":12},"position":{"x":[0,0,0,0],"y":[-10,0,10,40],"z":[0,0,5,3]},"width":[5,18,16,3],"height":[5,12,10,5],"texture":[9,2,11]},"propulsor":{"section_segments":8,"offset":{"x":0,"y":35,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,10,20,30,40,30],"z":[0,0,0,0,0]},"width":[5,15,10,10,10,0],"height":[15,15,15,15,10,0],"texture":[63,63,4,5,12],"propeller":true},"bumps":{"section_segments":8,"offset":{"x":40,"y":40,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-10,0,10,40,45],"z":[0,0,0,0,0,0]},"width":[0,5,8,12,5,0],"height":[0,25,28,22,15,0],"texture":[63]},"gunsupport":{"section_segments":8,"offset":{"x":30,"y":-40,"z":5},"position":{"x":[-30,-20,-10,0,0,0],"y":[-20,-15,-5,10,40,55],"z":[-20,-20,-10,0,0,0]},"width":[3,5,8,4,5,0],"height":[3,5,8,12,15,0],"texture":63},"gun":{"section_segments":8,"offset":{"x":0,"y":-60,"z":-15},"position":{"x":[0,0,0,0],"y":[-20,-10,5,10],"z":[0,0,0,0]},"width":[3,7,8,3],"height":[3,7,8,3],"texture":[6,4,5],"laser":{"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"angle":15,"error":0}}},"wings":{"main":{"doubleside":true,"offset":{"x":0,"y":-25,"z":5},"length":[100],"width":[120,30,40],"angle":[0,20],"position":[30,90,85],"texture":11,"bump":{"position":30,"size":20}}},"typespec":{"name":"Delta-Fighter","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[100,150],"reload":[3,4]},"generator":{"capacity":[50,80],"reload":[15,25]},"ship":{"mass":80,"speed":[110,135],"rotation":[80,100],"acceleration":[110,120]}},"shape":[2.081,1.969,1.501,1.455,1.403,1.368,1.263,1.192,1.095,1.063,1.128,1.209,1.352,1.545,1.85,2.348,2.965,3.211,3.33,2.93,2.496,2.442,2.441,1.866,1.967,1.954,1.967,1.866,2.441,2.442,2.496,2.93,3.33,3.211,2.965,2.348,1.85,1.545,1.352,1.209,1.128,1.063,1.095,1.192,1.263,1.368,1.403,1.455,1.501,1.969],"lasers":[{"x":0,"y":-2.08,"z":-0.39,"angle":0,"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"spread":15,"error":0,"recoil":0}],"radius":3.33}}';
var Super_Shotgun_251 = '{"name":"Super-Shotgun","level":2.5,"model":1,"size":1.3,"specs":{"shield":{"capacity":[100,162.5],"reload":[3,4.25]},"generator":{"capacity":[25,43.75],"reload":[0.00001,0.00001]},"ship":{"mass":80,"speed":[110,135],"rotation":[80,105],"acceleration":[110,122.5]}},"bodies":{"cockpit":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-20,"z":12},"position":{"x":[0,0,0,0,0],"y":[-20,-10,0,10,20],"z":[-7,-3,0,5,3]},"width":[3,12,18,16,3],"height":[3,6,8,6,3],"texture":[9]},"cockpit2":{"angle":0,"section_segments":8,"offset":{"x":0,"y":-10,"z":12},"position":{"x":[0,0,0,0],"y":[-10,0,10,40],"z":[0,0,5,3]},"width":[5,18,16,3],"height":[5,12,10,5],"texture":[9,2,11]},"propulsor":{"section_segments":8,"offset":{"x":0,"y":35,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[0,10,20,30,40,30],"z":[0,0,0,0,0]},"width":[5,15,10,10,10,0],"height":[15,15,15,15,10,0],"texture":[63,63,4,5,12],"propeller":true},"bumps":{"section_segments":8,"offset":{"x":40,"y":40,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-10,0,10,40,45],"z":[0,0,0,0,0,0]},"width":[0,5,8,12,5,0],"height":[0,25,28,22,15,0],"texture":[63]},"gunsupport":{"section_segments":8,"offset":{"x":30,"y":-40,"z":5},"position":{"x":[-30,-20,-10,0,0,0],"y":[-20,-15,-5,10,40,55],"z":[-20,-20,-10,0,0,0]},"width":[3,5,8,4,5,0],"height":[3,5,8,12,15,0],"texture":63},"gun":{"section_segments":8,"offset":{"x":0,"y":-60,"z":-15},"position":{"x":[0,0,0,0],"y":[-20,-10,5,10],"z":[0,0,0,0]},"width":[3,7,8,3],"height":[3,7,8,3],"texture":[6,4,5],"laser":{"damage":[5,8.75],"rate":0.1,"type":1,"speed":[100,125],"number":5,"angle":0,"error":15}}},"wings":{"main":{"doubleside":true,"offset":{"x":0,"y":-25,"z":5},"length":[100],"width":[120,30,40],"angle":[0,20],"position":[30,90,85],"texture":11,"bump":{"position":30,"size":20}}},"typespec":{"name":"Super-Shotgun","level":2.5,"model":1,"code":251,"specs":{"shield":{"capacity":[100,162.5],"reload":[3,4.25]},"generator":{"capacity":[25,43.75],"reload":[0.00001,0.00001]},"ship":{"mass":80,"speed":[110,135],"rotation":[80,105],"acceleration":[110,122.5]}},"shape":[2.081,1.969,1.501,1.455,1.403,1.368,1.263,1.192,1.095,1.063,1.128,1.209,1.352,1.545,1.85,2.348,2.965,3.211,3.33,2.93,2.496,2.442,2.441,1.866,1.967,1.954,1.967,1.866,2.441,2.442,2.496,2.93,3.33,3.211,2.965,2.348,1.85,1.545,1.352,1.209,1.128,1.063,1.095,1.192,1.263,1.368,1.403,1.455,1.501,1.969],"lasers":[{"x":0,"y":-2.08,"z":-0.39,"angle":0,"damage":[5,8.75],"rate":0.1,"type":1,"speed":[100,125],"number":5,"spread":0,"error":15,"recoil":0}],"radius":3.33}}';

var Trident_202 = '{"name":"Trident","level":2,"model":2,"size":1.2,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-50,0,30,70,100,90],"z":[0,0,0,0,0,0,0]},"width":[1,25,15,30,30,20,10],"height":[1,20,20,30,30,10,0],"texture":[1,1,10,2,3],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":50,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,15,15,10,5,0],"angle":0,"laser":{"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"angle":0,"error":0},"propeller":false,"texture":[4,4,10,4,63,4]}},"wings":{"main":{"offset":{"x":0,"y":60,"z":0},"length":[80,30],"width":[70,50,60],"texture":[4,63],"angle":[0,0],"position":[10,-20,-50],"bump":{"position":-10,"size":15}},"winglets":{"length":[30,20],"width":[10,30,0],"angle":[50,20],"position":[90,80,50],"texture":[63],"bump":{"position":10,"size":30},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Trident","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[125,175],"reload":[3,5]},"generator":{"capacity":[50,80],"reload":[15,20]},"ship":{"mass":100,"speed":[110,135],"rotation":[70,85],"acceleration":[90,110]}},"shape":[2.4,2.164,1.784,1.529,1.366,0.981,0.736,0.601,0.516,0.457,0.415,2.683,2.66,2.66,2.724,2.804,2.763,2.605,2.502,2.401,2.596,2.589,2.426,2.448,2.443,2.52,2.443,2.448,2.426,2.589,2.596,2.401,2.502,2.605,2.763,2.804,2.724,2.66,2.66,2.683,0.415,0.457,0.516,0.601,0.736,0.981,1.366,1.529,1.784,2.164],"lasers":[{"x":1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.804}}';
var Piercing_Shot_252 = '{"name":"Piercing Shot","level":2.5,"model":2,"size":1.2,"specs":{"shield":{"capacity":[125,187.5],"reload":[3,5.5]},"generator":{"capacity":[80,180],"reload":[0.0001,0.0001]},"ship":{"mass":100,"speed":[110,141.25],"rotation":[70,88.75],"acceleration":[90,115]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-50,0,30,70,100,90],"z":[0,0,0,0,0,0,0]},"width":[1,25,15,30,30,20,10],"height":[1,20,20,30,30,10,0],"texture":[1,1,10,2,3],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9],"propeller":false},"cannons":{"section_segments":12,"offset":{"x":50,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-75,-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0,0]},"width":[0,2,5,10,10,15,10,0],"height":[0,2,5,15,15,10,5,0],"angle":0,"laser":{"damage":[4,9],"rate":0.1,"type":1,"speed":[140,190],"number":10,"angle":0,"error":0,"recoil":5},"propeller":false,"texture":[6,4,4,10,4,63,4]},"ball0":{"section_segments":13,"angle":0,"offset":{"x":50,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"height":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"texture":[17],"vertical":true,"propeller":false},"ball1":{"section_segments":13,"angle":60,"offset":{"x":50,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"height":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"texture":[17],"vertical":true,"propeller":false},"ball2":{"section_segments":13,"angle":120,"offset":{"x":50,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"height":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"texture":[17],"vertical":true,"propeller":false},"ball3":{"section_segments":13,"angle":180,"offset":{"x":50,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-7.8,-7.5,-6.6,-4.5,0,4.5,6.6,7.5,7.8],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"height":[0,3,5.1,7.199999999999999,8.4,7.199999999999999,5.1,3,0],"texture":[17],"vertical":true,"propeller":false}},"wings":{"main":{"offset":{"x":0,"y":60,"z":0},"length":[80,30],"width":[70,50,60],"texture":[4,63],"angle":[0,0],"position":[10,-20,-50],"bump":{"position":-10,"size":15}},"winglets":{"length":[30,20],"width":[10,30,0],"angle":[50,20],"position":[90,80,50],"texture":[63],"bump":{"position":10,"size":30},"offset":{"x":0,"y":0,"z":0}}},"typespec":{"name":"Piercing Shot","level":2.5,"model":2,"code":252,"specs":{"shield":{"capacity":[125,187.5],"reload":[3,5.5]},"generator":{"capacity":[80,180],"reload":[0.0001,0.0001]},"ship":{"mass":100,"speed":[110,141.25],"rotation":[70,88.75],"acceleration":[90,115]}},"shape":[2.4,2.164,1.784,1.529,1.366,0.981,0.736,0.601,1.465,1.385,1.411,2.683,2.66,2.66,2.724,2.804,2.763,2.605,2.502,2.401,2.596,2.589,2.426,2.448,2.443,2.52,2.443,2.448,2.426,2.589,2.596,2.401,2.502,2.605,2.763,2.804,2.724,2.66,2.66,2.683,1.409,1.385,1.465,0.601,0.736,0.981,1.366,1.529,1.784,2.164],"lasers":[{"x":1.2,"y":-0.84,"z":0,"angle":0,"damage":[4,9],"rate":0.1,"type":1,"speed":[140,190],"number":10,"spread":0,"error":0,"recoil":5},{"x":-1.2,"y":-0.84,"z":0,"angle":0,"damage":[4,9],"rate":0.1,"type":1,"speed":[140,190],"number":10,"spread":0,"error":0,"recoil":5}],"radius":2.804}}';


ships.push(Fly_101);
ships.push(Shrink_151);


ships.push(Delta_Fighter_201);
ships.push(Super_Shotgun_251);

ships.push(Trident_202);
ships.push(Piercing_Shot_252);

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

        // reset energy based abilities
        if (Math.floor((ship.type % 100) / 10) == 5 && ship.generator < 1) {
          ship.set({type: ship.type - 50})
          ship.set({stats: ship.stats});
          ship.set({shield: ship.shield});
        }
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
    }, false, true)
  );
}
modUtils.abilities.list.push(
  new modUtils.ability("Shrink", "Z", 8, 45, function (ship) {
    modUtils.sendUI(ship, { id: "ability", visible: false });
    ship.set({type: 151});
    ship.set({stats: ship.stats}); 
    ship.set({shield: ship.shield});

    modUtils.setTimeout(
      function () {
        if (ship.type == 151) {
          ship.set({type: 101});
          ship.set({stats: ship.stats});
          ship.set({shield: ship.shield});
        }
      }, this.duration * modUtils.abilityTPS
    );
  }, [101,151])
);
modUtils.abilities.list.push(
  new modUtils.ability("Super Shotgun", "Z", 15, 15, function (ship) {
    modUtils.sendUI(ship, { id: "ability", visible: false });
    ship.set({type: 251});
    ship.set({stats: ship.stats}); 
    ship.set({shield: ship.shield});
    ship.set({generator: 9999999});

    modUtils.setTimeout(
      function () {
        if (ship.type == 251) {
          ship.set({type: 201});
          ship.set({stats: ship.stats});
          ship.set({shield: ship.shield});
        }
      }, this.duration * modUtils.abilityTPS
    );
  }, [201,221])
);
modUtils.abilities.list.push(
  new modUtils.ability("Piercing Shot", "Z", 30, 30, function (ship) {
    modUtils.sendUI(ship, { id: "ability", visible: false });
    ship.set({type: 252});
    ship.set({stats: ship.stats}); 
    ship.set({shield: ship.shield});
    ship.set({generator: 9999999});

    modUtils.setTimeout(
      function () {
        if (ship.type == 252) {
          ship.set({type: 202});
          ship.set({stats: ship.stats});
          ship.set({shield: ship.shield});
        }
      }, this.duration * modUtils.abilityTPS
    );
  }, [202,222])
);



this.tick = modUtils.tick;
this.event = modUtils.handleUIPress;
this.options = {
  map_size: 80,
  //custom_map: map,
  map_name: "Spedtopia",
  max_players: 30,
  vocabulary: modUtils.defaultVocab,
  radar_zoom: 1,
  ships: ships,
  reset_tree: true,
  friendly_colors: 0,
  root_mode: "survival",
  speed_mod: 1,
  starting_ship: 101,
  asteroids_strength: 2,
  crystal_value: 5,
  release_crystal: true,
  crystal_drop: 0.75,
  mines_self_destroy: false,
  survival_time: 30,
};

