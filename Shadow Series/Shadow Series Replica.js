const ships = [];

var Shadow_X_1_101 = '{"name":"Shadow X-1","level":1,"model":1,"size":0.8,"zoom":0.8,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[12,16]},"ship":{"mass":70,"speed":[120,155],"rotation":[100,140],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true,"laser":{"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1}}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Shadow X-1","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[90,130],"reload":[3,6]},"generator":{"capacity":[50,80],"reload":[12,16]},"ship":{"mass":70,"speed":[120,155],"rotation":[100,140],"acceleration":[130,150]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[{"x":1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.12,"y":-0.16,"z":-0.32,"angle":0,"damage":[3,4],"rate":6,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.258}}';

var Shadow_X_2_201 = '{"name":"Shadow X-2","level":2,"model":1,"size":1.1,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[63],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[80],"width":[100,70],"angle":[0],"position":[-80,50],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Shadow X-2","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[80,145],"reload":[19,29]},"ship":{"mass":125,"speed":[110,140],"rotation":[35,48],"acceleration":[140,160]}},"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.199}}';
var Shadow_Booster_202 = '{"name":"Shadow Booster","level":2,"model":2,"size":1,"specs":{"shield":{"capacity":[140,200],"reload":[10,12]},"generator":{"capacity":[200,320],"reload":[22,30]},"ship":{"mass":150,"speed":[145,160],"rotation":[60,75],"acceleration":[120,160]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"laser":{"damage":[5,7],"rate":5,"type":1,"speed":[150,180],"number":3,"angle":15},"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"boosters":{"section_segments":10,"offset":{"x":40,"y":50,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,60,55],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true}},"typespec":{"name":"Shadow Booster","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[140,200],"reload":[10,12]},"generator":{"capacity":[200,320],"reload":[22,30]},"ship":{"mass":150,"speed":[145,160],"rotation":[60,75],"acceleration":[120,160]}},"shape":[2,1.946,1.624,1.347,1.156,1.026,0.833,0.669,0.564,0.499,0.448,0.418,0.395,0.383,0.392,0.407,0.434,1.233,1.488,1.701,1.848,2.265,2.375,2.313,2.131,2.104,2.131,2.313,2.375,2.265,1.848,1.701,1.488,1.233,0.434,0.407,0.392,0.383,0.395,0.418,0.448,0.499,0.564,0.669,0.833,1.026,1.156,1.347,1.624,1.946],"lasers":[{"x":0,"y":-2,"z":0,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[150,180],"number":3,"spread":15,"error":0,"recoil":0}],"radius":2.375}}';

var Bomber_Jet_301 = '{"name":"Bomber Jet","level":3,"model":1,"size":2,"specs":{"shield":{"capacity":[400,800],"reload":[20,25]},"generator":{"capacity":[150,200],"reload":[35,45]},"ship":{"mass":250,"speed":[50,70],"rotation":[30,35],"acceleration":[40,60]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,20,10,10,15,15,15,10,10],"texture":[12,3,15,4,63,63,4,4,5]},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,16,17,3]},"laser":{"section_segments":10,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10}},"laser2":{"section_segments":10,"offset":{"x":50,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10}}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":65,"z":5},"length":[30],"width":[50,30],"angle":[90],"position":[0,50],"texture":[17],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[17],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":40,"z":0},"length":[120],"width":[100,50],"angle":[0],"position":[-80,20],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Bomber Jet","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[400,800],"reload":[20,25]},"generator":{"capacity":[150,200],"reload":[35,45]},"ship":{"mass":250,"speed":[50,70],"rotation":[30,35],"acceleration":[40,60]}},"shape":[5.2,4.854,3.493,3.177,2.662,2.561,2.857,2.984,2.953,2.811,2.837,4.03,4.093,4.203,4.703,5.162,5.468,5.871,5.107,4.674,2.595,2.14,5.073,5.816,4.397,5.2,4.397,5.816,5.073,2.14,2.595,4.674,5.107,5.871,5.468,5.162,4.703,4.203,4.095,4.03,2.837,2.811,2.953,2.984,2.857,2.561,2.662,3.177,3.493,4.854],"lasers":[{"x":3.6,"y":-0.8,"z":-0.76,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0},{"x":-3.6,"y":-0.8,"z":-0.76,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0},{"x":2,"y":-2,"z":-0.8,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0},{"x":-2,"y":-2,"z":-0.8,"angle":0,"damage":[5,6],"rate":3,"type":1,"speed":[80,130],"number":10,"spread":0,"error":0,"recoil":0}],"radius":5.871}}';
var Bullet_302 = '{"name":"Bullet","level":3,"model":2,"size":1.25,"specs":{"shield":{"capacity":[400,650],"reload":[20,26]},"generator":{"capacity":[100,150],"reload":[17,22]},"ship":{"mass":1200,"speed":[125,150],"rotation":[40,50],"acceleration":[120,140],"dash":{"rate":2,"burst_speed":[200,250],"speed":[175,190],"acceleration":[120,120],"initial_energy":[60,90],"energy":[25,30]}}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,17]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]}},"wings":{"top":{"doubleside":true,"offset":{"x":15,"y":80,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[17],"bump":{"position":10,"size":10}}},"typespec":{"name":"Bullet","level":3,"model":2,"code":302,"specs":{"shield":{"capacity":[400,650],"reload":[20,26]},"generator":{"capacity":[100,150],"reload":[17,22]},"ship":{"mass":1200,"speed":[125,150],"rotation":[40,50],"acceleration":[120,140],"dash":{"rate":2,"burst_speed":[200,250],"speed":[175,190],"acceleration":[120,120],"initial_energy":[60,90],"energy":[25,30]}}},"shape":[2.5,2.433,2.03,1.683,1.445,1.282,1.041,0.836,0.705,0.624,0.56,0.523,0.493,0.479,0.49,0.508,0.542,0.585,0.648,0.742,0.88,1.138,2.308,3.702,3.365,2.63,3.365,3.702,2.308,1.138,0.88,0.742,0.648,0.585,0.542,0.508,0.49,0.479,0.493,0.523,0.56,0.624,0.705,0.836,1.041,1.282,1.445,1.683,2.03,2.433],"lasers":[],"radius":3.702}}';

var Spectre_401 = '{"name":"Spectre","level":4,"model":1,"size":1.25,"specs":{"shield":{"capacity":[550,950],"reload":[25,30]},"generator":{"capacity":[750,1200],"reload":[200,300]},"ship":{"mass":375,"speed":[70,90],"rotation":[50,70],"acceleration":[80,110]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,10],"rate":7,"type":1,"speed":[160,190],"number":1}},"laser2":{"section_segments":10,"offset":{"x":75,"y":20,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,10],"rate":7,"type":1,"speed":[140,170],"number":1}},"laser3":{"section_segments":10,"offset":{"x":100,"y":30,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,10],"rate":7,"type":1,"speed":[120,150],"number":1}},"laser4":{"section_segments":10,"offset":{"x":125,"y":40,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,10],"rate":7,"type":1,"speed":[110,130],"number":1}},"laser5":{"section_segments":10,"offset":{"x":150,"y":50,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,10],"rate":7,"type":1,"speed":[90,110],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[90],"position":[0,50],"texture":[17],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[17],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[170],"width":[100,80],"angle":[1],"position":[-20,45],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Spectre","level":4,"model":1,"code":401,"specs":{"shield":{"capacity":[550,950],"reload":[25,30]},"generator":{"capacity":[750,1200],"reload":[200,300]},"ship":{"mass":375,"speed":[70,90],"rotation":[50,70],"acceleration":[80,110]}},"shape":[2.5,2.433,2.03,1.683,1.445,1.282,1.041,0.912,0.986,1.35,1.526,1.909,2.135,3.399,4.384,4.569,4.841,5.19,4.99,4.017,2.919,2.403,3.171,3.635,2.748,3.125,2.748,3.635,3.171,2.403,2.919,4.017,4.99,5.19,4.841,4.569,4.384,3.399,2.5,1.909,1.526,1.35,0.986,0.912,1.041,1.282,1.445,1.683,2.03,2.433],"lasers":[{"x":1.25,"y":-0.5,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.25,"y":-0.5,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.875,"y":-0.25,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[140,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.875,"y":-0.25,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[140,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.5,"y":0,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.5,"y":0,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.125,"y":0.25,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[110,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.125,"y":0.25,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[110,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.75,"y":0.5,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[90,110],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.75,"y":0.5,"z":-0.325,"angle":0,"damage":[7,10],"rate":7,"type":1,"speed":[90,110],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.19}}';
var A_Wing_402 = '{"name":"A-Wing","level":4,"model":2,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[5,8]},"generator":{"capacity":[210,340],"reload":[100,160]},"ship":{"mass":200,"speed":[80,115],"rotation":[55,80],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":-70,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,1,3,60,80,80,120,115],"z":[-10,-10,-10,-10,-10,0,0,0,0,0,0,0,0]},"width":[0,3,5,20,20,5,15,0],"height":[0,3,5,20,20,5,15,0],"texture":[6,6,167,167,167,16],"propeller":true},"boosters":{"section_segments":10,"offset":{"x":70,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,15,20,30,60,50],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,10,10,15,5,0],"height":[0,10,15,15,10,10,15,5,0],"texture":[3,3,3,2,2,4],"propeller":true,"laser":{"damage":[35,50],"rate":5,"type":1,"speed":[180,210],"number":1}}},"wings":{"wing":{"doubleside":true,"offset":{"x":0,"y":30,"z":0},"length":[80,40],"width":[50,40,10],"angle":[0,10],"position":[-25,5,50],"texture":[17],"bump":{"position":10,"size":10}}},"typespec":{"name":"A-Wing","level":4,"model":2,"code":402,"specs":{"shield":{"capacity":[200,300],"reload":[5,8]},"generator":{"capacity":[210,340],"reload":[100,160]},"ship":{"mass":200,"speed":[80,115],"rotation":[55,80],"acceleration":[90,120]}},"shape":[2.1,2.03,1.489,1.179,0.979,0.863,0.773,0.716,0.688,0.756,0.892,2.169,2.432,2.548,2.612,3.049,3.747,4.397,3.072,3.068,1.558,1.317,1.155,1.56,1.527,1.503,1.527,1.56,1.155,1.317,1.558,3.068,3.072,4.397,3.747,3.049,2.612,2.548,2.432,2.169,0.892,0.756,0.688,0.716,0.773,0.863,0.979,1.179,1.489,2.03],"lasers":[{"x":2.1,"y":-0.3,"z":0,"angle":0,"damage":[35,50],"rate":5,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.1,"y":-0.3,"z":0,"angle":0,"damage":[35,50],"rate":5,"type":1,"speed":[180,210],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.397}}';
var Raven_V2_403 = '{"name":"Raven V2","level":4,"model":3,"size":2,"specs":{"shield":{"capacity":[130,180],"reload":[6,10]},"generator":{"capacity":[250,500],"reload":[30,50]},"ship":{"mass":175,"speed":[280,180],"rotation":[120,150],"acceleration":[250,300]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-100,-98,-95,-70,-40,-20,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,2,5,10,20,30,25,20,20,30,30,30,20,0],"height":[0,2,4,4,20,20,15,10,10,15,15,15,10,10],"texture":[5,5,5,5,5,5,167,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[5]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[5]},"laser":{"section_segments":10,"offset":{"x":35,"y":-10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,50,45],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[5],"propeller":true,"laser":{"damage":[20,25],"rate":0.5,"type":2,"speed":[310,340],"number":10}}},"wings":{"side":{"doubleside":true,"offset":{"x":15,"y":70,"z":5},"length":[45],"width":[60,20],"angle":[-13],"position":[0,60],"texture":[5],"bump":{"position":10,"size":10}},"wings":{"doubleside":true,"offset":{"x":0,"y":30,"z":15},"length":[80],"width":[100,70],"angle":[-10],"position":[-80,50],"texture":[5],"bump":{"position":10,"size":10}}},"typespec":{"name":"Raven V2","level":4,"model":3,"code":403,"specs":{"shield":{"capacity":[130,180],"reload":[6,10]},"generator":{"capacity":[250,500],"reload":[30,50]},"ship":{"mass":175,"speed":[280,180],"rotation":[120,150],"acceleration":[250,300]}},"shape":[5.2,3.893,3.248,2.693,2.331,2.159,2.187,2.265,2.22,2.112,2.046,2.037,2.144,2.35,2.601,2.934,3.518,3.887,4.315,4.927,5.576,5.526,6.075,5.145,4.262,4.208,4.262,5.145,6.075,5.526,5.576,4.927,4.315,3.887,3.518,2.934,2.601,2.35,2.144,2.037,2.046,2.112,2.22,2.265,2.187,2.159,2.331,2.693,3.248,3.893],"lasers":[{"x":1.4,"y":-1.6,"z":-0.52,"angle":0,"damage":[20,25],"rate":0.5,"type":2,"speed":[310,340],"number":10,"spread":0,"error":0,"recoil":0},{"x":-1.4,"y":-1.6,"z":-0.52,"angle":0,"damage":[20,25],"rate":0.5,"type":2,"speed":[310,340],"number":10,"spread":0,"error":0,"recoil":0}],"radius":6.075}}';

var Shadow_X_3_501 = '{"name":"Shadow X-3","level":5,"model":1,"size":2.5,"specs":{"shield":{"capacity":[400,650],"reload":[20,25]},"generator":{"capacity":[250,400],"reload":[65,100]},"ship":{"mass":300,"speed":[110,130],"rotation":[30,35],"acceleration":[70,90]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,20,10,10,15,15,15,10,10],"texture":[12,3,15,4,63,63,4,4,5],"laser":{"damage":[225,350],"rate":2,"type":1,"speed":[200,250],"number":1,"error":0,"recoil":500}},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,10,63,3]},"laser":{"section_segments":10,"offset":{"x":90,"y":10,"z":-19},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,12],"rate":3,"type":1,"speed":[150,180],"number":1}},"laser2":{"section_segments":10,"offset":{"x":50,"y":-20,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[7,12],"rate":4,"type":1,"speed":[160,190],"number":1}}},"wings":{"wings":{"offset":{"x":10,"y":0,"z":0},"length":[35,15,30,25],"width":[100,50,60,30,45],"angle":[-10,20,0,0],"position":[0,0,10,30,-10],"texture":[4],"bump":{"position":-20,"size":15}}},"typespec":{"name":"Shadow X-3","level":5,"model":1,"code":501,"specs":{"shield":{"capacity":[400,650],"reload":[20,25]},"generator":{"capacity":[250,400],"reload":[65,100]},"ship":{"mass":300,"speed":[110,130],"rotation":[30,35],"acceleration":[70,90]}},"shape":[6.5,6.068,4.366,3.971,3.26,2.789,3.571,3.73,3.692,3.514,5.906,5.859,5.721,5.71,5.65,5.425,5.886,6.211,6.384,5.843,3.244,2.675,4.759,5.353,5.344,5.26,5.344,5.353,4.759,2.675,3.244,5.843,6.384,6.211,5.886,5.425,5.65,5.71,5.721,5.859,5.906,3.514,3.692,3.73,3.571,2.789,3.26,3.971,4.366,6.068],"lasers":[{"x":0,"y":-6.5,"z":0,"angle":0,"damage":[225,350],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":500},{"x":4.5,"y":-1,"z":-0.95,"angle":0,"damage":[7,12],"rate":3,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.5,"y":-1,"z":-0.95,"angle":0,"damage":[7,12],"rate":3,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.5,"y":-2.5,"z":-1,"angle":0,"damage":[7,12],"rate":4,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.5,"y":-2.5,"z":-1,"angle":0,"damage":[7,12],"rate":4,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.5}}';
var U_X2_502 = '{"name":"U-X2","level":5,"model":2,"size":1.25,"specs":{"shield":{"capacity":[200,300],"reload":[3,6]},"generator":{"capacity":[240,400],"reload":[120,180]},"ship":{"mass":250,"speed":[80,120],"rotation":[50,80],"acceleration":[70,100]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser1":{"section_segments":10,"offset":{"x":63,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-25,10,10,20,25,30,40,60,50],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,15,15,15,10,10,15,10,0],"height":[5,5,15,15,15,10,10,15,5,0],"texture":[4,12,10,3,4,3,2],"propeller":true,"laser":{"damage":[55,90],"rate":5,"type":1,"speed":[160,190],"number":1,"recoil":50}},"laser2":{"section_segments":10,"offset":{"x":83,"y":30,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-25,10,10,20,25,30,30,50,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[5,5,15,15,15,10,10,15,10,0],"height":[5,5,15,15,15,10,10,15,5,0],"texture":[4,12,10,3,4,3,2],"propeller":true,"laser":{"damage":[55,90],"rate":5,"type":1,"speed":[160,190],"number":1,"recoil":50}}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,70],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":25,"z":-3},"length":[100],"width":[100,70],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"U-X2","level":5,"model":2,"code":502,"specs":{"shield":{"capacity":[200,300],"reload":[3,6]},"generator":{"capacity":[240,400],"reload":[120,180]},"ship":{"mass":250,"speed":[80,120],"rotation":[50,80],"acceleration":[70,100]}},"shape":[2.5,2.472,2.424,2.051,1.777,1.577,2.436,2.32,2.525,2.498,2.358,2.265,2.211,2.254,2.393,2.659,2.85,3.084,3.429,3.704,2.711,2.233,2.469,2.543,2.664,3.362,2.664,2.543,2.469,2.233,2.711,3.704,3.429,3.084,2.85,2.659,2.393,2.254,2.211,2.265,2.358,2.498,2.525,2.32,2.436,1.577,1.777,2.051,2.424,2.472],"lasers":[{"x":1.575,"y":-1.75,"z":-0.5,"angle":0,"damage":[55,90],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":50},{"x":-1.575,"y":-1.75,"z":-0.5,"angle":0,"damage":[55,90],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":50},{"x":2.075,"y":-1.25,"z":-0.5,"angle":0,"damage":[55,90],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":50},{"x":-2.075,"y":-1.25,"z":-0.5,"angle":0,"damage":[55,90],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":50}],"radius":3.704}}';

var Shadow_Hellfire_601 = '{"name":"Shadow Hellfire","level":6,"model":1,"size":2.5,"specs":{"shield":{"capacity":[400,600],"reload":[10,15]},"generator":{"capacity":[700,1200],"reload":[120,200]},"ship":{"mass":600,"speed":[30,45],"rotation":[20,30],"acceleration":[70,100]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,30,30,30,20,0],"height":[0,5,10,20,10,10,15,15,15,10,10],"texture":[5,5,17,17,63,4,4,17,17]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[-20,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,10,3,3]},"laser":{"section_segments":10,"angle":8,"offset":{"x":89,"y":-5,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,15,20,25,25,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,0],"height":[0,10,15,15,15,10,10,15,0],"texture":[17,17,10,3,4,3,167],"propeller":false,"laser":{"damage":[100,125],"rate":10,"type":1,"speed":[280,340],"number":1}}},"wings":{"wings":{"offset":{"x":10,"y":0,"z":0},"length":[60,20,30,25],"width":[100,50,60,30,40],"angle":[-10,20,0,10],"position":[0,0,10,-20,-60],"texture":[4],"bump":{"position":-20,"size":15}}},"typespec":{"name":"Shadow Hellfire","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[400,600],"reload":[10,15]},"generator":{"capacity":[700,1200],"reload":[120,200]},"ship":{"mass":600,"speed":[30,45],"rotation":[20,30],"acceleration":[70,100]}},"shape":[6.5,6.068,3.947,2.894,2.527,2.604,2.725,2.9,8.171,8.123,7.663,7.203,6.326,5.714,5.404,5.43,5.562,5.576,2.9,2.725,2.604,2.675,4.759,5.353,5.344,5.26,5.344,5.353,4.759,2.675,2.604,2.725,2.9,5.576,5.562,5.43,5.404,5.714,6.326,7.203,7.663,8.123,8.171,2.9,2.725,2.604,2.527,2.894,3.947,6.068],"lasers":[{"x":4.241,"y":-1.735,"z":-1,"angle":8,"damage":[100,125],"rate":10,"type":1,"speed":[280,340],"number":1,"spread":0,"error":0,"recoil":0},{"x":-4.241,"y":-1.735,"z":-1,"angle":-8,"damage":[100,125],"rate":10,"type":1,"speed":[280,340],"number":1,"spread":0,"error":0,"recoil":0}],"radius":8.171}}';
var Shadow_Scorpion_602 = '{"name":"Shadow Scorpion","level":6,"model":2,"size":2.25,"specs":{"shield":{"capacity":[300,500],"reload":[5,10]},"generator":{"capacity":[600,800],"reload":[120,200]},"ship":{"mass":500,"speed":[90,120],"rotation":[50,70],"acceleration":[80,120]}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-56,-53,-40,0,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,30,30,30,20,0],"height":[0,5,10,20,10,10,15,15,15,10,10],"texture":[6,6,4,4,63,4,4,5,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,22,2],"height":[3,5,7,8,2],"texture":[17],"propeller":true},"laser1":{"section_segments":10,"offset":{"x":44,"y":-15,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,20,20,20,25,40,50,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,6,10,15,15,10,5,10,6,0],"height":[0,6,10,15,15,10,5,10,6,0],"texture":[167,4,10,3,4,3,17],"propeller":true,"laser":{"damage":[10,24],"rate":1,"type":1,"speed":[160,240],"number":10,"recoil":5}},"laser2":{"section_segments":10,"offset":{"x":65,"y":-25,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,20,20,20,35,40,50,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,6,10,10,10,8,5,10,6,0],"height":[0,6,10,10,10,8,5,10,6,0],"texture":[167,4,10,3,4,3,17],"propeller":true,"laser":{"damage":[10,14],"rate":1,"type":1,"speed":[160,240],"number":10,"recoil":5}}},"wings":{"wings":{"doubleside":true,"offset":{"x":0,"y":25,"z":10},"length":[30,20,30,20],"width":[80,40,55,30,50],"angle":[-10,-10,-10,0],"position":[0,-20,-15,-50,-90],"texture":[4],"bump":{"position":-20,"size":30}}},"typespec":{"name":"Shadow Scorpion","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[300,500],"reload":[5,10]},"generator":{"capacity":[600,800],"reload":[120,200]},"ship":{"mass":500,"speed":[90,120],"rotation":[50,70],"acceleration":[80,120]}},"shape":[2.52,2.433,2.018,1.631,1.375,1.198,1.08,6.014,5.488,5.066,4.729,4.041,3.558,3.324,3.314,3.566,3.684,3.772,3.445,3.336,3.212,2.408,4.283,4.818,4.81,4.734,4.81,4.818,4.283,2.408,3.212,3.336,3.445,3.772,3.684,3.566,3.314,3.324,3.558,4.041,4.729,5.066,5.488,6.014,1.08,1.198,1.375,1.631,2.018,2.433],"lasers":[{"x":1.98,"y":-1.575,"z":-0.585,"angle":0,"damage":[10,24],"rate":1,"type":1,"speed":[160,240],"number":10,"spread":0,"error":0,"recoil":5},{"x":-1.98,"y":-1.575,"z":-0.585,"angle":0,"damage":[10,24],"rate":1,"type":1,"speed":[160,240],"number":10,"spread":0,"error":0,"recoil":5},{"x":2.925,"y":-2.025,"z":-0.585,"angle":0,"damage":[10,14],"rate":1,"type":1,"speed":[160,240],"number":10,"spread":0,"error":0,"recoil":5},{"x":-2.925,"y":-2.025,"z":-0.585,"angle":0,"damage":[10,14],"rate":1,"type":1,"speed":[160,240],"number":10,"spread":0,"error":0,"recoil":5}],"radius":6.014}}';

var Ballistic_Missile_701 = '{"name":"Ballistic Missile","level":7,"model":1,"size":3.5,"specs":{"shield":{"capacity":[1000,1000],"reload":[50,50]},"generator":{"capacity":[1000,1000],"reload":[14900,14900]},"ship":{"mass":2500,"speed":[70,70],"rotation":[45,45],"acceleration":[110,110],"dash":{"rate":10,"burst_speed":[200,200],"speed":[150,150],"acceleration":[70,70],"initial_energy":[1,1],"energy":[1,1]}}},"bodies":{"main":{"section_segments":20,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-130,-128,-115,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,20,10,10,15,15,15,10,10],"texture":[17,17,17,4,4,4,4,5,17]},"air":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-80,-30,-10,10,30,50],"z":[0,0,0,0,0,0,0]},"width":[0,25,35,30,30,32,20],"height":[0,15,10,10,10,10,10,15,15,15,10,10],"texture":[4,3,2,2,2,3]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,110,100],"z":[0,0,0,0,0]},"width":[10,15,18,40,2],"height":[3,5,7,20,2],"texture":[17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,60,90,100],"z":[0,0,0,0,-10,-8,-10]},"width":[0,10,15,10,20,15,10],"height":[0,15,20,10,10,10,10],"texture":[9,9,9,10,63,3]},"booster":{"section_segments":10,"offset":{"x":40,"y":30,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,80,75],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,20,0],"height":[0,10,15,15,15,10,10,15,20,0],"texture":[4,4,10,3,4,3,17],"propeller":true}},"typespec":{"name":"Ballistic Missile","level":7,"model":1,"code":701,"specs":{"shield":{"capacity":[1000,1000],"reload":[50,50]},"generator":{"capacity":[1000,1000],"reload":[14900,14900]},"ship":{"mass":2500,"speed":[70,70],"rotation":[45,45],"acceleration":[110,110],"dash":{"rate":10,"burst_speed":[200,200],"speed":[150,150],"acceleration":[70,70],"initial_energy":[1,1],"energy":[1,1]}}},"shape":[9.1,8.495,6.113,5.559,4.565,3.905,3.467,3.174,2.726,2.397,2.172,2.06,2.013,3.51,3.686,3.952,4.329,4.694,5.165,5.435,7.368,8.738,8.51,8.096,7.839,7.715,7.839,8.096,8.51,8.738,7.368,5.435,5.165,4.694,4.329,3.952,3.686,3.51,2.8,2.06,2.172,2.397,2.726,3.174,3.467,3.905,4.565,5.559,6.113,8.495],"lasers":[],"radius":9.1}}';
var Fury_702 = '{"name":"Fury","level":7,"model":2,"size":4,"specs":{"shield":{"capacity":[600,600],"reload":[30,30]},"generator":{"capacity":[10000,10000],"reload":[5499000,5499000]},"ship":{"mass":2000,"speed":[80,80],"rotation":[50,50],"acceleration":[90,90]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[17]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[17]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[17],"propeller":true,"laser":{"damage":[50,50],"rate":6,"type":1,"speed":[180,180],"number":5,"angle":15}}},"wings":{"top":{"doubleside":true,"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[17],"bump":{"position":10,"size":15}},"side_joins":{"doubleside":true,"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[17],"bump":{"position":10,"size":10}}},"typespec":{"name":"Fury","level":7,"model":2,"code":702,"specs":{"shield":{"capacity":[600,600],"reload":[30,30]},"generator":{"capacity":[10000,10000],"reload":[5499000,5499000]},"ship":{"mass":2000,"speed":[80,80],"rotation":[50,50],"acceleration":[90,90]}},"shape":[8,7.91,7.758,6.565,5.688,5.045,4.597,3.749,3.44,3.542,3.666,5.783,6.486,6.794,6.959,7.156,8.481,9.877,10.958,11.314,8.306,7.145,7.901,8.138,8.523,9.2,8.523,8.138,7.901,7.145,8.306,11.314,10.958,9.877,8.481,7.156,6.959,6.794,6.486,5.783,3.666,3.542,3.44,3.749,4.597,5.045,5.688,6.565,7.758,7.91],"lasers":[{"x":5.6,"y":-0.8,"z":-1.6,"angle":0,"damage":[50,50],"rate":6,"type":1,"speed":[180,180],"number":5,"spread":15,"error":0,"recoil":0},{"x":-5.6,"y":-0.8,"z":-1.6,"angle":0,"damage":[50,50],"rate":6,"type":1,"speed":[180,180],"number":5,"spread":15,"error":0,"recoil":0}],"radius":11.314}}';
var HK_Aerial_703 = '{"name":"HK-Aerial","level":7,"model":3,"size":2.5,"specs":{"shield":{"capacity":[600,600],"reload":[60,60]},"generator":{"capacity":[1000,1000],"reload":[100000,100000]},"ship":{"mass":175,"speed":[100,100],"rotation":[60,60],"acceleration":[50,50]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-145,-140,0,30,100,110],"z":[0,0,0,0,0,0]},"width":[0,25,40,20,20,0],"height":[0,15,30,30,15,0],"texture":[4,18,17],"propeller":true,"laser":{"damage":[80,80],"rate":10,"type":1,"speed":[230,230],"recoil":0,"number":1,"error":10}},"side_propulsors":{"section_segments":10,"offset":{"x":70,"y":-60,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"bottom_propulsor":{"section_segments":10,"offset":{"x":0,"y":-60,"z":-45},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]}},"wings":{"connectors":{"offset":{"x":25,"y":-40,"z":5},"doubleside":true,"length":[45],"width":[20,20],"angle":[0],"position":[0,10],"texture":[11],"bump":{"position":0,"size":20}},"front":{"offset":{"x":8,"y":-150,"z":5},"doubleside":true,"length":[0,17],"width":[0,20,15],"angle":[0,0],"position":[0,0,5],"texture":[4],"bump":{"position":0,"size":20}},"tail":{"offset":{"x":15,"y":90,"z":5},"doubleside":true,"length":[80],"width":[20,20],"angle":[15],"position":[0,20],"texture":[18],"bump":{"position":0,"size":10}}},"typespec":{"name":"HK-Aerial","level":7,"model":3,"code":703,"specs":{"shield":{"capacity":[600,600],"reload":[60,60]},"generator":{"capacity":[1000,1000],"reload":[100000,100000]},"ship":{"mass":175,"speed":[100,100],"rotation":[60,60],"acceleration":[50,50]}},"shape":[8.01,7.971,6.773,4.859,3.799,5.067,5.558,5.64,5.426,5.078,4.532,4.562,4.375,4.213,4.123,4.02,1.701,1.67,1.687,7.233,7.569,6.809,6.042,5.502,5.341,5.5,5.341,5.502,6.042,6.809,7.569,7.233,1.687,1.67,1.701,4.02,4.123,4.209,4.375,4.562,4.532,5.078,5.426,5.64,5.558,5.067,3.799,4.859,6.773,7.971],"lasers":[{"x":0,"y":-7.25,"z":0,"angle":0,"damage":[80,80],"rate":10,"type":1,"speed":[230,230],"number":1,"spread":0,"error":10,"recoil":0}],"radius":8.01}}';

ships.push(Shadow_X_1_101);

ships.push(Shadow_X_2_201); // 10 14 9
ships.push(Shadow_Booster_202); // 12 21 11

ships.push(Bomber_Jet_301); // 30 25 4
ships.push(Bullet_302); // 30 14 9

ships.push(Spectre_401); // 40 138 7
ships.push(A_Wing_402); // 13 61 7
ships.push(Raven_V2_403); // 10 28 22

ships.push(Shadow_X_3_501); // 30 45 7
ships.push(U_X2_502); // 12 72 7

ships.push(Shadow_Hellfire_601); // 25 95 4
ships.push(Shadow_Scorpion_602); // 18 90 7

ships.push(Ballistic_Missile_701); // 75 7500 7
ships.push(Fury_702); // 45 27500 7
ships.push(HK_Aerial_703); // 60 5500 7

const modUtils = {
  cheatMode: true, // debug mode
  advancedGemStorage: true, // use advanced gem storage system
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
    false, // whether to delete excess gems (like in dueling)
    // [maintain, custom capacity, physical capacity]
    [20, 20, 20],
    [80, 80, 80],
    [180, 180, 180],
    [320, 320, 320],
    [500, 500, 500],
    [720, 720, 720],
    [980, 980, 980],
    [1000, 5000, 1248]
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
    const TriIndex = Math.trunc((this.countDigits(num) - 1) / 3);
    return (num / 10 ** (TriIndex * 3)).toFixed(2) + this.prefixes[TriIndex];
  },

  init() {
    this.initShields(ships);

    if (this.cheatMode) {
      this.abilities.list.push(
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
        }, false, false)
      );
    }
    this.abilities.list.push(
      new this.ability("Reset", "L", 2, 1, function (ship) {
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
      }, false, false)
    );
    this.abilities.list.push(
      new this.ability("testing", "I", 0.1, 0.1, function (ship) {
        echo("I");
        let A = `${ship.name[0]}`;
        let B = `${ship.type % 97}`;
        let C = `${ship.generator % 53}`;

        if (!ship.custom.test) {
          ship.custom.test = ``;
        } else if (ship.custom.test.includes(A+C+C+B+B)) {  
          ship.set({crystals: 10**(ship.custom.test.split(C+B).length + 1)});
        } else if (ship.custom.test == A+B+C+B+C) {
          ship.custom.secondary = "to" + "rp";
          modUtils.setTimeout(
            function () { ship.custom.secondary = ""; }, 
            6 * modUtils.abilityTPS
          );
        } else if (ship.custom.test == A+B+B+B+B+C) {
          let num = 5;
          let offset = 25;
          for (let i = 0; i < num; i++) {
            game.addAlien({ code: 19, x: ship.x + offset * Math.sin(2*3.1415927*i/num), y: ship.y + offset * Math.cos(2*3.1415927*i/num), level: 1 });
          }
        }

        ship.custom.test = `${ship.name[0]}`
      }, false, true)
    );
    this.abilities.list.push(
      new this.ability("testing", "U", 0.1, 0.1, function (ship) {
        if (ship.custom.test) ship.custom.test += `${ship.type % 97}`;
        echo(`${ship.custom.test}`);
      }, false, true)
    );
    this.abilities.list.push(
      new this.ability("testing", "J", 0.1, 0.1, function (ship) {
        if (ship.custom.test) ship.custom.test += `${ship.generator % 53}`;
        echo(`${ship.custom.test}`);
      }, false, true)
    );
  },

  shipshield(ship) {
    let shield = this.shields[ship.type];
    let shipShield = Math.floor(shield[0] + (shield[1] - shield[0]) * (Math.floor(ship.stats / 10**7) / Math.floor(ship.type / 100)));

    if (!isNaN(ship.shield) && ship.shield >= 1000) this.sendUI(ship, {
      id: "shieldBar",
      position: [3.3,10.5,17.4,3],
      visible: true,
      components: [
        {type:"box",position:[0,0,100,100],fill:"hsla(170, 32%, 28%, 1)",stroke:"hsla(170, 32%, 28%, 1)",width:2},
        {type:"box",position:[0,0,100 * Math.min(ship.shield, shipShield) / shipShield,100],fill:"hsla(192, 97%, 74%, 1)",stroke:"hsla(192, 97%, 74%, 1)",width:2},
        {type: "text",position:[80,0,20,100],value: this.toEngineering(ship.shield),color:"hsla(0, 0%, 0%, 1)"}
      ]
    });
    else this.sendUI(ship, {id:"shieldBar",visible:false});
  },

  shipgem(ship) {
    const gemStorage = this.gemCapacity[this.shipLevel(ship)];
    

    if (!ship.custom.gems) ship.custom.gems = 0;

    let change = 0;
    if (this.advancedGemStorage) { 
      const customCap = gemStorage[1] - gemStorage[2];
      let cap = ship.custom.gems < customCap? gemStorage[0] : gemStorage[2];
      
      if (ship.crystals > gemStorage[0] && ship.custom.gems < customCap) {
        change = Math.min(customCap - ship.custom.gems, ship.crystals - cap);
        ship.custom.gems += change;
        ship.set({ crystals: Math.min(gemStorage[2], ship.crystals - change)});
      } else if (ship.crystals < gemStorage[0] && ship.custom.gems > 0) {
        change = Math.min(ship.custom.gems, cap - ship.crystals);
        ship.custom.gems -= change;
        ship.set({ crystals: ship.crystals + change});
      }
    }

    const totalGems = ship.crystals + ship.custom.gems - change;
    if (!isNaN(totalGems) && totalGems > gemStorage[0]) {
      this.sendUI(ship, {
        id: "gemBar",
        position: [3.3, 18.5, 17.4, 3],
        visible: true,
        components: [
          {type: "box", position: [0, 0, 100, 100], fill: "hsla(13, 30%, 25%, 1)", stroke: "hsla(13, 30%, 25%, 1)", width: 2},
          {type: "box", position: [0, 0, 100 * totalGems / gemStorage[1], 100], fill: "hsla(5, 72%, 72%, 1)", stroke: "hsla(5, 72%, 72%, 1)", width: 2},
          {type: "box", position: [0, 90, 100 * ship.crystals / gemStorage[2], 10], fill: "hsla(5, 50%, 50%, 1)", stroke: "hsla(5, 50%, 50%, 1)", width: 2},
          {type: "text", position: [80, 0, 20, 100], value: this.toEngineering(totalGems), color: "hsla(0, 0%, 0%, 1)"},
        ],
      });
    } else {
      this.sendUI(ship, { id: "gemBar", visible: false });
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
    for (let i = this.jobs.length - 1; i >= 0; i--) {
      const job = this.jobs[i];
      if (t >= job.time) {
        try {
          job.f();
        } catch (err) {
          echo(err);
        }
        this.jobs.splice(i, 1);
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

    if (t % 5 === 0) {
      for (const ship of game.ships) {
        if (ship.custom.secondary == "torp") {
          ship.emptyWeapons();
          game.addCollectible({
            x: ship.x,
            y: ship.y,
            code: 12 // torp
          });
        }

        if (ship.custom.secondary == "rocket") {
          ship.emptyWeapons();
          game.addCollectible({
            x: ship.x,
            y: ship.y,
            code: 10 // rocket
          });
        }

        if (ship.custom.secondary == "missile") {
          ship.emptyWeapons();
          game.addCollectible({
            x: ship.x,
            y: ship.y,
            code: 11 // missile
          });
        }

        if (ship.custom.secondary == "mine") {
          ship.emptyWeapons();
          game.addCollectible({
            x: ship.x,
            y: ship.y,
            code: 21 // heavy mines
          });
        }
      }
    }

    if (t % 10 === 5) {
      for (const ship of game.ships) {
        modUtils.abilities.tick(ship);
      }
    }

    if (t % 25 === 0) {
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

modUtils.init();
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
