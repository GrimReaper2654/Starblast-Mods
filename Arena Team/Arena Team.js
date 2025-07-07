/*
Credits to Re:Arena and Arena Mod for most of the ship models and ability ideas.

Re:Arena - Arena Mod Remake/Recontinuation (v3.1.3 - v4.0+)
- CEO: Tost
- Coding: Bhpsngum
- Textures: Caramel
- Ships: Caramel
- Maps: Supernova, Caramel, Bylolopro, Nerd69420, Megalodon, Gooby, and others
- Contributors: Tost, Caramel, Lexydrow, Akira, Gooby, and others
- GitHub Repository Contributors: @theonlypwner

GitHub Repository: https://github.com/Bhpsngum/Arena-mod-remake

Original Arena Mod (v1.0 - v3.1.2)
- CEO: Nex
- Coding: Nex
- Textures: Nex, and others
- Ships: Nex, Edward, Supernova, and others
- Maps: Nex, Carme, Caramel, Nerd69420, and others
- Contributors: Lexydrow, Boris, Thuliux, Bylolopro, Caramel, Duschi, Edward, Megalodon, Supernova, ThirdToeMan, Madness, Slayer, and others
*/

const ships = {
  101: '{"name":"Mosquit","level":1,"model":1,"size":1,"next":[201,202],"specs":{"shield":{"capacity":[100,100],"reload":[5,5]},"generator":{"capacity":[30,30],"reload":[30,30]},"ship":{"mass":75,"speed":[145,145],"rotation":[130,130],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,0,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,25,30,18,15,0],"height":[0,6,8,12,18,20,20,18,15,0],"propeller":true,"texture":[4,63,10,2,63,3,2,12,17]},"props":{"section_segments":8,"offset":{"x":20,"y":-5,"z":-12},"position":{"x":[-15,-10,0,0,0,0,0,0,0,0],"y":[-60,-45,-30,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,5,10,10,15,10,10,15,15,0],"texture":[63,3,63,4,5,5,63,8,17],"propeller":true},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,-5,15,30,60],"z":[0,0,0,0,0]},"width":[0,8,15,10,5],"height":[0,15,20,15,5],"propeller":false,"texture":[4,9,9,4,4]},"cannons":{"section_segments":8,"offset":{"x":0,"y":-110,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[5,0,23,27,62,62,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,7,7,4,4,7,7],"height":[0,5,5,7,7,4,4,7,7],"texture":[12,13,4,8,4,4,3,8],"propeller":false,"laser":{"damage":[30,30],"rate":1,"type":1,"speed":[160,160],"number":1}},"side":{"section_segments":12,"offset":{"x":60,"y":40,"z":-15},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,-10,0,10,15],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,10,10,0],"height":[0,5,10,10,10,5,0],"angle":0,"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]},"main2":{"length":[41,12,0],"width":[60,28,28,0],"angle":[-10,-20,0],"position":[6,20,21,20],"doubleside":true,"offset":{"x":0,"y":10,"z":14},"bump":{"position":30,"size":20},"texture":[63]}},"typespec":{"name":"Mosquit","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[100,100],"reload":[5,5]},"generator":{"capacity":[30,30],"reload":[30,30]},"ship":{"mass":75,"speed":[145,145],"rotation":[130,130],"acceleration":[120,120]}},"shape":[2.202,1.726,1.196,1.109,1.052,1.014,0.994,0.957,0.865,0.796,0.807,1.252,1.319,1.587,1.626,1.692,1.767,1.74,1.713,1.607,1.452,1.449,1.437,1.53,1.527,1.503,1.527,1.53,1.437,1.449,1.452,1.607,1.713,1.74,1.767,1.692,1.626,1.587,1.576,1.252,0.807,0.796,0.865,0.957,0.994,1.014,1.052,1.109,1.196,1.726],"lasers":[{"x":0,"y":-2.2,"z":-0.2,"angle":0,"damage":[30,30],"rate":1,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.202,"next":[201,202]}}',
  ability101: '{"name":"Meteor","level":1,"model":2,"size":1.5,"next":[201,202],"specs":{"shield":{"capacity":[400,400],"reload":[15,15]},"generator":{"capacity":[200,200],"reload":[50,50]},"ship":{"mass":300,"speed":[150,150],"rotation":[25,25],"acceleration":[120,120],"dash":{"rate":1,"burst_speed":[200,200],"speed":[180,180],"acceleration":[200,200],"initial_energy":[100,100],"energy":[100,100]}}},"bodies":{"main":{"section_segments":56,"offset":{"x":0,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-125,-120,-110,-95,-80,-25,0,10,15,25,35,50,55,50,50],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,20,35,45,50,50,50,50,40,40,50,50,40,30,0],"height":[0,20,35,45,50,50,50,50,40,40,50,50,40,30,0],"propeller":1,"texture":[63,4,4,4,4,4,4,3,8,3,4,63,5,17]},"top_propulsor":{"section_segments":15,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,44,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"top_propulsor2":{"section_segments":15,"offset":{"x":0,"y":-20,"z":0},"position":{"x":[0,0,0,0],"y":[80,95,100,90],"z":[0,0,0,0]},"width":[5,20,44,0],"height":[5,15,5,0],"propeller":true,"texture":[1,63,12]},"logo":{"vertical":1,"section_segments":20,"offset":{"x":0,"y":50,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-5,5,5,2.1,2.1,2.1],"z":[0,0,0,0,0,0]},"width":[20,20,16,16,12,0],"height":[20,20,16,16,12,0],"texture":[63,63,63,17,5]},"logo2":{"vertical":1,"section_segments":20,"offset":{"x":50,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-5,5,5,2.1,2.1,2.1],"z":[0,0,0,0,0,0]},"width":[20,20,16,16,12,0],"height":[20,20,16,16,12,0],"texture":[63,63,63,17,5],"angle":90},"logo3":{"vertical":1,"section_segments":20,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-5,5,5,2.1,2.1,2.1],"z":[0,0,0,0,0,0]},"width":[20,20,16,16,12,0],"height":[20,20,16,16,12,0],"texture":[63,63,63,17,5],"angle":180},"connector":{"section_segments":56,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[52,52,16,16,52],"height":[52,52,16,16,52],"texture":[63],"angle":0},"x":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":51},"position":{"x":[4,0,-4],"y":[-4,0,4],"z":[0,0,0]},"width":[2,2,2],"height":[2,2,2],"texture":[63],"angle":0},"x2":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":51},"position":{"x":[-4,0,4],"y":[-4,0,4],"z":[0,0,0]},"width":[2,2,2],"height":[2,2,2],"texture":[63],"angle":0},"x3":{"vertical":1,"section_segments":[45,135,225,315],"offset":{"x":51,"y":0,"z":0},"position":{"x":[0,0,0],"y":[-4,0,4],"z":[-4,0,4]},"width":[2,2,2],"height":[2,2,2],"texture":[63],"angle":0},"x4":{"vertical":1,"section_segments":[45,135,225,315],"offset":{"x":51,"y":0,"z":0},"position":{"x":[0,0,0],"y":[-4,0,4],"z":[4,0,-4]},"width":[2,2,2],"height":[2,2,2],"texture":[63],"angle":0},"x5":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":-51},"position":{"x":[4,0,-4],"y":[-4,0,4],"z":[0,0,0]},"width":[2,2,2],"height":[2,2,2],"texture":[63],"angle":0},"x6":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":-51},"position":{"x":[-4,0,4],"y":[-4,0,4],"z":[0,0,0]},"width":[2,2,2],"height":[2,2,2],"texture":[63],"angle":0}},"typespec":{"name":"Meteor","level":1,"model":2,"code":102,"specs":{"shield":{"capacity":[400,400],"reload":[15,15]},"generator":{"capacity":[200,200],"reload":[50,50]},"ship":{"mass":300,"speed":[150,150],"rotation":[25,25],"acceleration":[120,120],"dash":{"rate":1,"burst_speed":[200,200],"speed":[180,180],"acceleration":[200,200],"initial_energy":[100,100],"energy":[100,100]}}},"shape":[2.85,2.811,2.769,2.679,2.574,2.411,2.235,2.053,1.853,1.711,1.756,1.703,1.663,1.663,1.703,1.756,1.708,1.854,1.921,1.881,2.796,2.83,2.818,2.681,2.596,2.555,2.596,2.681,2.818,2.83,2.796,1.881,1.921,1.854,1.708,1.756,1.703,1.663,1.663,1.703,1.756,1.711,1.853,2.053,2.235,2.411,2.574,2.679,2.769,2.811],"lasers":[],"radius":2.85,"next":[201,202]}}',

  201: '{"name":"Sigma","level":2,"model":1,"size":1,"next":[301,302],"specs":{"shield":{"capacity":[240,320],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[30,50]},"ship":{"mass":125,"speed":[88,108],"rotation":[55,65],"acceleration":[100,118]}},"bodies":{"barrel":{"section_segments":12,"offset":{"x":0,"y":-60,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-50,-50,-20,-10,45,50],"z":[0,0,0,0,0,0]},"width":[0,12,12,12,12,0],"height":[0,12,12,12,12,0],"texture":[4,13,4,8,10,1],"angle":0},"main":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-60,-60,-15,0,50,70,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,32,35,45,30,22,0],"height":[0,10,15,15,15,15,0],"texture":[4,4,63,4,3,17],"propeller":true},"main2":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":20,"z":15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-75,-75,-20,10,30,45,60,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,25,30,30,25,20,0],"height":[0,8,10,10,10,10,10,0],"texture":[3,4,3,13,3,4,4]},"main3":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":20,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-10,-10,0,20,50,60,70],"z":[0,0,0,0,0,-1,0,-5,-5]},"width":[0,10,10,10,10,8,5,0],"height":[0,15,15,15,15,15,5,0],"texture":[4]},"sus_engine":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":4,"y":20,"z":19},"position":{"x":[0,0,0,0,0],"y":[-60,-40,-20,0,40],"z":[0,0,0,0,0]},"width":[0,12,15,14,0],"height":[0,8,10,10,0],"texture":[7,9.15,9.15,4],"angle":0},"harry_potter_and_the_chamber_of_secrets":{"section_segments":12,"offset":{"x":0,"y":-15,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-15,-10,0,45,50],"z":[-2,-2,-2,0,0,0]},"width":[0,8,9,9,10,10,0],"height":[0,9,9,9,10,10,0],"texture":[4,10,63,3,2,1],"angle":0},"brake":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":-150,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[35,35,10,10,25,40,40],"z":[0,0,0,0,0,0,0,0]},"width":[5,12,12,22,22,12,10],"height":[5,7,7,12,12,12,10],"propeller":false,"texture":[6,6,1,4,3,17],"laser":{"damage":[8,10],"rate":4,"type":1,"speed":[175,205],"number":6,"error":10,"angle":5,"recoil":15}},"barrelrings":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":50},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[20,20,15,15,20],"height":[25,25,20,20,25],"texture":[63]},"barrelrings3":{"section_segments":8,"offset":{"x":0,"y":-108,"z":0},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[15,15,10,10,15],"height":[14,14,10,10,14],"texture":[63]},"thrust":{"section_segments":10,"offset":{"x":25,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,8,12,12,12,8,8,12,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true}},"wings":{"shields":{"doubleside":true,"offset":{"x":0,"y":-60,"z":-15},"length":[0,10,10,15,10],"width":[60,60,65,65,60,60,60],"angle":[90,10,60,90,150],"position":[0,0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}},"wings1":{"doubleside":true,"offset":{"x":35,"y":60,"z":0},"length":[-10,-10,-30],"width":[50,50,100,30],"angle":[210,315,315],"position":[0,0,-50,0],"texture":[4,3,63],"bump":{"position":10,"size":-5}},"main":{"length":[40,20,15],"width":[100,50,40,30],"angle":[-25,20,25],"position":[30,80,70,45],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":-25,"z":0},"texture":[11,11,63],"doubleside":true}},"typespec":{"name":"Sigma","level":2,"model":1,"code":201,"specs":{"shield":{"capacity":[240,320],"reload":[6,9]},"generator":{"capacity":[100,150],"reload":[30,50]},"ship":{"mass":125,"speed":[88,108],"rotation":[55,65],"acceleration":[100,118]}},"shape":[2.806,2.823,1.685,1.424,1.227,0.956,1.084,1.016,0.932,0.871,0.836,0.813,0.807,1.384,1.417,1.474,1.544,1.571,1.624,1.704,1.712,1.911,1.878,1.836,1.832,1.803,1.832,1.836,1.878,1.911,1.712,1.704,1.624,1.571,1.544,1.474,1.417,1.384,0.807,0.813,0.836,0.871,0.932,1.016,1.084,0.956,1.227,1.424,1.685,2.823],"lasers":[{"x":0,"y":-2.8,"z":0,"angle":0,"damage":[8,10],"rate":4,"type":1,"speed":[175,205],"number":6,"spread":5,"error":10,"recoil":15}],"radius":2.823,"next":[301,302]}}',
  ability201: '{"name":"Sigma","level":2,"model":3,"size":1,"next":[301,302],"specs":{"shield":{"capacity":[240,320],"reload":[0.1,0.1]},"generator":{"capacity":[200,400],"reload":[0.0001,0.0001]},"ship":{"mass":125,"speed":[88,108],"rotation":[55,65],"acceleration":[100,118]}},"bodies":{"barrel":{"section_segments":12,"offset":{"x":0,"y":-60,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-50,-50,-20,-10,45,50],"z":[0,0,0,0,0,0]},"width":[0,12,12,12,12,0],"height":[0,12,12,12,12,0],"texture":[4,13,4,8,10,1],"angle":0},"main":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-60,-60,-15,0,50,70,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,32,35,45,30,22,0],"height":[0,10,15,15,15,15,0],"texture":[4,4,63,4,3,17],"propeller":true},"main2":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":20,"z":15},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-75,-75,-20,10,30,45,60,70],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,20,25,30,30,25,20,0],"height":[0,8,10,10,10,10,10,0],"texture":[3,4,3,13,3,4,4]},"main3":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":20,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-10,-10,-10,0,20,50,60,70],"z":[0,0,0,0,0,-1,0,-5,-5]},"width":[0,10,10,10,10,8,5,0],"height":[0,15,15,15,15,15,5,0],"texture":[4]},"sus_engine":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":4,"y":20,"z":19},"position":{"x":[0,0,0,0,0],"y":[-60,-40,-25,0,40],"z":[0,0,0,0,0]},"width":[0,11,13,14,0],"height":[0,8,10,10,0],"texture":[5,5,17.15,3],"angle":0},"harry_potter_and_the_chamber_of_secrets":{"section_segments":12,"offset":{"x":0,"y":-15,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-15,-10,0,45,50],"z":[-2,-2,-2,0,0,0]},"width":[0,8,9,9,10,10,0],"height":[0,9,9,9,10,10,0],"texture":[4,10,63,3,2,1],"angle":0},"brake":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":-150,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[35,35,10,10,25,40,40],"z":[0,0,0,0,0,0,0,0]},"width":[5,12,12,22,22,12,10],"height":[5,7,7,12,12,12,10],"propeller":false,"texture":[17,17,1,4,3,17],"laser":{"damage":[10,10],"rate":2,"type":1,"speed":[175,265],"number":10,"error":25,"angle":3,"recoil":15}},"barrelrings":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":50},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[20,20,15,15,20],"height":[25,25,20,20,25],"texture":[17]},"barrelrings2":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":105},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[15,15,10,10,15],"height":[20,20,15,15,20],"texture":[17]},"barrelrings3":{"section_segments":8,"offset":{"x":0,"y":-108,"z":0},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[15,15,10,10,15],"height":[14,14,10,10,14],"texture":[63]},"thrust":{"section_segments":10,"offset":{"x":25,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,12,0],"height":[0,8,12,12,12,8,8,12,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true}},"wings":{"shields":{"doubleside":true,"offset":{"x":0,"y":-60,"z":-15},"length":[0,10,10,15,10],"width":[60,60,65,65,60,60,60],"angle":[90,10,60,90,150],"position":[0,0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}},"wings1":{"doubleside":true,"offset":{"x":35,"y":60,"z":0},"length":[-10,-10,-30],"width":[50,50,100,30],"angle":[210,315,315],"position":[0,0,-50,0],"texture":[4,3,63],"bump":{"position":10,"size":-5}},"main":{"length":[40,20,15],"width":[100,50,40,30],"angle":[-25,20,25],"position":[30,80,70,45],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":-25,"z":0},"texture":[11,11,63],"doubleside":true}},"typespec":{"name":"Sigma","level":2,"model":3,"code":203,"specs":{"shield":{"capacity":[240,320],"reload":[0.1,0.1]},"generator":{"capacity":[200,400],"reload":[0.0001,0.0001]},"ship":{"mass":125,"speed":[88,108],"rotation":[55,65],"acceleration":[100,118]}},"shape":[2.806,2.823,2.256,1.424,1.227,0.956,1.084,1.016,0.932,0.871,0.836,0.813,0.807,1.384,1.417,1.474,1.544,1.571,1.624,1.704,1.712,1.911,1.878,1.836,1.832,1.803,1.832,1.836,1.878,1.911,1.712,1.704,1.624,1.571,1.544,1.474,1.417,1.384,0.807,0.813,0.836,0.871,0.932,1.016,1.084,0.956,1.227,1.424,2.256,2.823],"lasers":[{"x":0,"y":-2.8,"z":0,"angle":0,"damage":[10,10],"rate":2,"type":1,"speed":[175,265],"number":10,"spread":3,"error":25,"recoil":15}],"radius":2.823,"next":[301,302]}}',
  
  202: '{"name":"Chimera","level":2,"model":2,"size":1.25,"zoom":0.8,"next":[303,304],"specs":{"shield":{"capacity":[260,320],"reload":[8,10]},"generator":{"capacity":[190,250],"reload":[35,47]},"ship":{"mass":150,"speed":[90,110],"rotation":[40,62],"acceleration":[90,125]}},"bodies":{"rail1":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[-10,-15,-15,0,0,0,0,0],"y":[-117,-105,-60,0,70,105,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,5,25,25,15,0],"height":[0,10,15,20,25,15,0],"propeller":false,"texture":[63,3,18,11,3,12]},"side_propulsors":{"section_segments":10,"offset":{"x":22,"y":17,"z":9.8},"position":{"x":[0,0,0,0,0,0,0,0,-5,-5],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,18,20,13,15,18,10,0],"height":[0,10,15,18,20,13,15,18,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"rail2":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[10,15,15,0,0,0,0,0],"y":[-117,-105,-60,0,70,105,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,5,25,25,15,0],"height":[0,10,15,20,25,15,0],"propeller":true,"texture":[63,3,18,11,3,12]},"gunDeco0":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":101},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco1":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":90},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco2":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":79},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco3":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":68},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco4":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":57},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"railCells":{"vertical":true,"section_segments":8,"offset":{"x":0,"y":10,"z":35},"position":{"x":[0,0,0,0],"y":[0,0,20,20],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"propeller":false,"texture":[8,8,17,17]},"sparkGuns":{"section_segments":8,"offset":{"x":15,"y":-90,"z":10},"position":{"x":[0,0,0,0],"y":[0,0,10,9],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"angle":90,"propeller":false,"texture":[8,8,17,17],"laser":{"damage":[1,2],"rate":10,"type":2,"speed":[10,20],"number":1,"error":65}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":5,"z":25},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,45,70],"z":[0,0,0,0,1]},"width":[0,8,12,13,0],"height":[0,12,15,12,0],"propeller":false,"texture":[4,9,9,4]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-10,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[-43,-50,-20,0,20,50],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,15,0],"height":[0,5,15,15,10,0],"angle":0,"laser":{"damage":[3,6],"speed":[200,250],"rate":1.69,"type":1,"number":30,"recoil":8,"error":0},"propeller":false,"texture":[17,3,3,3,3,3]},"indicator":{"section_segments":8,"offset":{"x":0,"y":-10,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[-43,-50,-20,0,20,50],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,15,0],"height":[0,5,15,15,10,0],"angle":0,"laser":{"damage":[90,180],"speed":[150,210],"rate":1.69,"type":2,"number":105,"recoil":8,"error":0},"propeller":false,"texture":[17,3,3,3,3,3]},"deco":{"section_segments":8,"offset":{"x":45,"y":50,"z":-10},"position":{"x":[0,0,5,5,0,0],"y":[-52,-50,-20,0,20,25],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,8,10,8,0],"angle":1,"laser":{"damage":[4,5.5],"rate":6,"type":1,"speed":[100,170],"number":1,"error":0},"texture":10}},"wings":{"main":{"length":[55,15],"width":[70,50,50],"angle":[-10,20],"position":[30,50,70],"doubleside":true,"bump":{"position":30,"size":10},"texture":[18,63],"offset":{"x":0,"y":0,"z":5}},"winglets":{"length":[12,8],"width":[20,15,65],"angle":[10,-10],"position":[-50,-40,-55],"doubleside":true,"bump":{"position":0,"size":30},"texture":63,"offset":{"x":12,"y":0,"z":5}},"stab1":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":0,"y":0,"z":0}},"stab2":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":-5,"y":-30,"z":0}},"stab3":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":-10,"y":-60,"z":0}}},"typespec":{"name":"Chimera","level":2,"model":2,"code":202,"specs":{"shield":{"capacity":[260,320],"reload":[8,10]},"generator":{"capacity":[190,250],"reload":[35,47]},"ship":{"mass":150,"speed":[90,110],"rotation":[40,62],"acceleration":[90,125]}},"shape":[2.595,2.936,2.661,2.327,1.861,1.476,1.239,1.085,0.974,0.677,0.647,0.631,1.228,1.296,1.392,1.536,1.702,2.108,2.339,2.677,2.925,2.305,2.455,2.514,2.652,2.63,2.652,2.514,2.455,2.305,2.925,2.677,2.339,2.108,1.702,1.536,1.392,1.296,1.228,0.631,0.647,0.677,0.974,1.085,1.239,1.476,1.861,2.327,2.661,2.936],"lasers":[{"x":0.375,"y":-2.25,"z":0.25,"angle":90,"damage":[1,2],"rate":10,"type":2,"speed":[10,20],"number":1,"spread":0,"error":65,"recoil":0},{"x":-0.375,"y":-2.25,"z":0.25,"angle":-90,"damage":[1,2],"rate":10,"type":2,"speed":[10,20],"number":1,"spread":0,"error":65,"recoil":0},{"x":0,"y":-1.5,"z":0.25,"angle":0,"damage":[3,6],"rate":1.69,"type":1,"speed":[200,250],"number":30,"spread":0,"error":0,"recoil":8},{"x":0,"y":-1.5,"z":0.25,"angle":0,"damage":[90,180],"rate":1.69,"type":2,"speed":[150,210],"number":105,"spread":0,"error":0,"recoil":8},{"x":1.102,"y":-0.05,"z":-0.25,"angle":1,"damage":[4,5.5],"rate":6,"type":1,"speed":[100,170],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.102,"y":-0.05,"z":-0.25,"angle":-1,"damage":[4,5.5],"rate":6,"type":1,"speed":[100,170],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.936,"next":[303,304]}}',
  ability202: '{"name":"Chimera","level":2,"model":4,"size":1.8,"zoom":0.8,"next":[303,304],"specs":{"shield":{"capacity":[260,320],"reload":[8,10]},"generator":{"capacity":[380,500],"reload":[140,188]},"ship":{"mass":150,"speed":[90,110],"rotation":[40,62],"acceleration":[90,125]}},"bodies":{"rail1":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[-30,-35,-35,0,0,0,0,0],"y":[-117,-105,-60,0,70,105,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,5,25,25,15,0],"height":[0,10,15,20,25,15,0],"propeller":false,"texture":[63,3,18,11,3,12]},"side_propulsors":{"section_segments":10,"offset":{"x":22,"y":17,"z":9.8},"position":{"x":[0,0,0,0,0,0,0,0,-5,-5],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,18,20,13,15,18,10,0],"height":[0,10,15,18,20,13,15,18,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"rail2":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[30,35,35,0,0,0,0,0],"y":[-117,-105,-60,0,70,105,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,5,25,25,15,0],"height":[0,10,15,20,25,15,0],"propeller":true,"texture":[63,3,18,11,3,12]},"gunDeco0":{"vertical":true,"section_segments":24,"offset":{"x":22,"y":-5,"z":101},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco1":{"vertical":true,"section_segments":24,"offset":{"x":22,"y":-5,"z":90},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco2":{"vertical":true,"section_segments":24,"offset":{"x":22,"y":-5,"z":79},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco3":{"vertical":true,"section_segments":24,"offset":{"x":22,"y":-5,"z":68},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco4":{"vertical":true,"section_segments":24,"offset":{"x":22,"y":-5,"z":57},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"railCells":{"vertical":true,"section_segments":8,"offset":{"x":0,"y":10,"z":35},"position":{"x":[0,0,0,0],"y":[0,0,20,20],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"propeller":false,"texture":[8,8,17,17]},"sparkGuns":{"section_segments":8,"offset":{"x":35,"y":-90,"z":10},"position":{"x":[0,0,0,0],"y":[0,0,10,9],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"angle":90,"propeller":false,"texture":[8,8,17,17],"laser":{"damage":[1,2],"rate":10,"type":2,"speed":[-20,-20],"number":1,"error":65}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":5,"z":25},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,45,70],"z":[0,0,0,0,1]},"width":[0,8,12,13,0],"height":[0,12,15,12,0],"propeller":false,"texture":[4,9,9,4]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-10,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[-43,-50,-20,0,20,50],"z":[0,0,0,0,0,0]},"width":[0,13,15,10,15,0],"height":[0,10,15,15,10,0],"angle":0,"laser":{"damage":[38,50],"speed":[170,200],"rate":1.69,"type":1,"number":10,"recoil":50,"error":0},"propeller":false,"texture":[17,3,3,3,3,3]},"deco":{"section_segments":8,"offset":{"x":45,"y":50,"z":-10},"position":{"x":[0,0,5,5,0,0],"y":[-52,-50,-20,0,20,25],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,8,10,8,0],"angle":1}},"wings":{"main":{"length":[55,15],"width":[70,50,50],"angle":[-10,20],"position":[30,50,70],"doubleside":true,"bump":{"position":30,"size":10},"texture":[18,63],"offset":{"x":0,"y":0,"z":5}},"winglets":{"length":[12,8],"width":[20,15,65],"angle":[10,-10],"position":[-50,-40,-55],"doubleside":true,"bump":{"position":0,"size":30},"texture":63,"offset":{"x":32,"y":0,"z":5}},"stab1":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":0,"y":0,"z":0}},"stab2":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":-5,"y":-30,"z":0}},"stab3":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":-10,"y":-60,"z":0}}},"typespec":{"name":"Chimera","level":2,"model":4,"code":204,"specs":{"shield":{"capacity":[260,320],"reload":[8,10]},"generator":{"capacity":[380,500],"reload":[140,188]},"ship":{"mass":150,"speed":[90,110],"rotation":[40,62],"acceleration":[90,125]}},"shape":[2.164,2.199,4.348,4.166,3.803,3.459,2.91,2.552,2.298,2.123,1.07,0.988,1.769,1.867,2.004,2.211,2.451,3.035,3.369,3.855,4.211,3.319,3.535,3.62,3.818,3.787,3.818,3.62,3.535,3.319,4.211,3.855,3.369,3.035,2.451,2.211,2.004,1.867,1.769,0.988,1.07,2.123,2.298,2.552,2.91,3.459,3.803,4.166,4.348,2.199],"lasers":[{"x":1.26,"y":-3.24,"z":0.36,"angle":90,"damage":[1,2],"rate":10,"type":2,"speed":[-20,-20],"number":1,"spread":0,"error":65,"recoil":0},{"x":-1.26,"y":-3.24,"z":0.36,"angle":-90,"damage":[1,2],"rate":10,"type":2,"speed":[-20,-20],"number":1,"spread":0,"error":65,"recoil":0},{"x":0,"y":-2.16,"z":0.36,"angle":0,"damage":[38,50],"rate":1.69,"type":1,"speed":[170,200],"number":10,"spread":0,"error":0,"recoil":50}],"radius":4.348,"next":[303,304]}}',

  301:'{"name":"Shadow X-2","remodel":"nex","level":3,"model":1,"size":1.2,"zoom":0.8,"next":[401,402],"specs":{"shield":{"capacity":[180,210],"reload":[7,10]},"generator":{"capacity":[5,8],"reload":[160,240]},"ship":{"mass":125,"speed":[130,180],"rotation":[36,48],"acceleration":[145,165]}},"bodies":{"main":{"section_segments":7,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-10,0,40,50,70,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,8,20,30,18,18,30,30,35,35,0],"height":[0,4,4,10,15,10,10,20,15,15,10,10],"texture":[12,4,63,4,5,63,5,4,5],"laser":{"damage":[2,3],"rate":10,"speed":[100,120],"number":1,"error":0}},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,30,2],"height":[3,5,7,8,2],"texture":[63,63,63,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":9},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-20,0,5],"z":[0,0,0,0,0,0]},"width":[0,4,10,15,0],"height":[0,8,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20,-25,0,10,20,25,30,50,80,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,15,18,18,18,10,10,18,14,0],"height":[0,8,15,18,20,18,10,10,18,14,0],"texture":[6,17,4,10,3,4,3,4,15,17],"propeller":true,"angle":0.6},"laser1":{"section_segments":10,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":0}},"laser2":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":0}},"laser3":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":1}},"laser4":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":1}},"laser5":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":2}},"laser6":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":2}},"laser7":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":3}},"laser8":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":3}},"laser9":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":4}},"laser10":{"section_segments":0,"offset":{"x":40,"y":5,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8],"height":[0,8],"texture":[6],"angle":0,"laser":{"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"error":4}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":80,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":80,"z":5},"length":[30],"width":[70,20],"angle":[-13],"position":[0,60],"texture":[63],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":10,"y":40,"z":3},"length":[37,40],"width":[120,90,50],"angle":[0,0],"position":[-65,15,80],"texture":[15.4,4],"bump":{"position":-10,"size":10}},"wings2":{"offset":{"x":15,"y":110,"z":13},"length":[40],"width":[70,50],"angle":[0],"position":[-50,-10],"texture":[3],"bump":{"position":0,"size":15}}},"typespec":{"name":"Shadow X-2","level":3,"model":1,"code":301,"specs":{"shield":{"capacity":[180,210],"reload":[7,10]},"generator":{"capacity":[5,8],"reload":[160,240]},"ship":{"mass":125,"speed":[130,180],"rotation":[36,48],"acceleration":[145,165]}},"shape":[2.4,2.31,1.937,1.587,1.325,1.184,1.094,1.276,1.238,1.311,1.383,1.356,1.356,1.382,1.417,1.479,1.56,1.903,2.475,3.273,3.895,4.048,3.267,3.721,3.531,2.525,3.531,3.721,3.267,4.048,3.895,3.273,2.475,1.903,1.56,1.479,1.417,1.382,1.356,1.356,1.383,1.311,1.238,1.276,1.094,1.184,1.325,1.587,1.937,2.31],"lasers":[{"x":0,"y":-2.4,"z":0,"angle":0,"damage":[2,3],"rate":10,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":1,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":1,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":1,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":1,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":2,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":2,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":2,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":2,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":3,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":3,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":3,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":3,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":4,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":4,"recoil":0},{"x":0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":4,"recoil":0},{"x":-0.96,"y":-0.84,"z":-0.384,"angle":0,"damage":[5,8],"rate":0.22,"type":1,"speed":[180,260],"number":1,"spread":0,"error":4,"recoil":0}],"radius":4.048,"next":[401,402]}}',
  ability301: '{"name":"Shadow X-3","remodel":"Nex","level":3,"model":5,"size":1.75,"zoom":0.8,"next":[401,402],"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[150,250],"reload":[45,60]},"ship":{"mass":300,"speed":[112,142],"rotation":[25,38],"acceleration":[95,115]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-132,-130,-120,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,20,20,20,30,30,30,20,0],"height":[0,5,10,30,25,10,10,15,15,15,10,10],"texture":[12,15.3,15,15.3,63,63,15.3,15.3,5],"laser":{"damage":[150,250],"rate":0.5,"type":2,"speed":[200,350],"number":1,"error":0,"recoil":500}},"air":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[0,-100,-30,-10,10,60,90],"z":[0,0,0,0,0,0,0]},"width":[0,20,35,30,30,35,25],"height":[0,8,10,10,10,10,10,15,15,15,10,10],"texture":[15.3,3,2,15.3,3,3]},"back":{"section_segments":12,"offset":{"x":0,"y":-5,"z":0},"position":{"x":[0,0,0,0,0],"y":[50,40,90,115,90],"z":[0,0,0,0,0]},"width":[10,25,20,25,0],"height":[10,10,10,10,0],"texture":[15.3,8,8],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-30,"z":18},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-25,0,25,40,70,90,120],"z":[0,0,0,-5,-7,-10,-8,-8]},"width":[0,8,13,10,15,20,14,15],"height":[0,15,23,15,10,10,10,5],"texture":[7,9,9,15.3,10,63,4]},"laser":{"section_segments":10,"offset":{"x":80,"y":10,"z":-14},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,10,15,15,15,10,10,15,12,0],"height":[0,6,10,15,15,15,10,10,15,5,0],"texture":[6,17,4,10,3,2,4,2,12,17],"propeller":true,"angle":1.5,"laser":{"damage":[8,12],"rate":5,"type":1,"speed":[220,260],"number":1}},"laser2":{"section_segments":10,"offset":{"x":45,"y":-25,"z":-5},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-40,-20,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,10,15,15,15,10,10,15,12,0],"height":[0,6,10,15,15,15,10,10,15,5,0],"texture":[6,17,4,10,3,4,5,4,3,17],"propeller":true,"angle":1,"laser":{"damage":[8,12],"rate":6,"type":1,"speed":[220,280],"number":1}}},"wings":{"wings":{"offset":{"x":10,"y":0,"z":0},"length":[35,25,15,15,10],"width":[110,60,60,50,40,30],"angle":[-10,20,0,-20,-50],"position":[0,-15,30,40,25,-5],"texture":[15.3,63,15.3,15.3,15.3],"bump":{"position":-20,"size":15}}},"typespec":{"name":"Shadow X-3","level":3,"model":5,"code":305,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[150,250],"reload":[45,60]},"ship":{"mass":300,"speed":[112,142],"rotation":[25,38],"acceleration":[95,115]}},"shape":[4.62,4.359,3.389,2.575,2.11,2.753,2.568,2.581,2.424,2.311,2.956,3.689,3.65,3.638,3.634,3.695,3.795,4.067,4.293,4.083,2.05,2.426,3.332,3.948,3.919,3.858,3.919,3.948,3.332,2.426,2.05,4.083,4.293,4.067,3.795,3.695,3.634,3.638,3.65,3.689,2.956,2.311,2.424,2.581,2.568,2.753,2.11,2.575,3.389,4.359],"lasers":[{"x":0,"y":-4.62,"z":0,"angle":0,"damage":[150,250],"rate":0.5,"type":2,"speed":[200,350],"number":1,"spread":0,"error":0,"recoil":500},{"x":2.763,"y":-1.05,"z":-0.49,"angle":1.5,"damage":[8,12],"rate":5,"type":1,"speed":[220,260],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.763,"y":-1.05,"z":-0.49,"angle":-1.5,"damage":[8,12],"rate":5,"type":1,"speed":[220,260],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.551,"y":-2.275,"z":-0.175,"angle":1,"damage":[8,12],"rate":6,"type":1,"speed":[220,280],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.551,"y":-2.275,"z":-0.175,"angle":-1,"damage":[8,12],"rate":6,"type":1,"speed":[220,280],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.62,"next":[401,402]}}',

  302: '{"name":"(Dark) Phoenix","designer":"Nex","level":3,"model":2,"size":1.5,"zoom":0.9,"next":[402,403],"specs":{"shield":{"capacity":[300,420],"reload":[8,10]},"generator":{"capacity":[300,400],"reload":[45,70]},"ship":{"mass":240,"speed":[100,122],"rotation":[40,64],"acceleration":[110,135]}},"bodies":{"main":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":30,"z":-10},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-50,0,25,50,40],"z":[-10,-10,0,0,0,0,0]},"width":[0,10,40,40,15,0],"height":[0,5,20,15,15,0],"propeller":1,"texture":[1,1,4,3,17]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-90,-95,-85,-65,-65,-55,-40,-10,-10,5,5,20,20,30,30,80,85],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]},"width":[0,5,12,15,20,20,10,10,15,15,10,10,15,15,13,10,0],"height":[0,5,12,15,20,20,10,10,15,15,10,10,12,13,10,10,0],"propeller":false,"texture":[17,5,17,4,8,63,3,4,63,4,3,1,4,3,3],"laser":{"damage":[7,9],"rate":10,"type":1,"speed":[40,50],"number":1,"error":25}},"cannon2":{"section_segments":6,"offset":{"x":0,"y":-55,"z":0},"position":{"x":[0,0],"y":[-40,-50],"z":[0,0]},"width":[0,4],"height":[0,4],"angle":0,"laser":{"damage":[4,6],"rate":8,"type":1,"speed":[20,30],"number":1,"error":60},"propeller":false,"texture":[3,3,10,3]},"cannon3":{"section_segments":6,"offset":{"x":0,"y":-55,"z":0},"position":{"x":[0,0],"y":[-40,-50],"z":[0,0]},"width":[0,4],"height":[0,4],"angle":0,"laser":{"damage":[3,4],"rate":10,"type":1,"speed":[50,60],"number":2,"error":10},"propeller":false,"texture":[3,3,10,3]},"detail6":{"section_segments":[35,65,105,145,215,325],"offset":{"x":0,"y":20,"z":0},"position":{"x":[-20,-20,-20,-20,-20],"y":[-70,-70,-65,0,0],"z":[0,0,0,0,0]},"width":[0,4,7,20,0],"height":[0,6,10,16,0],"texture":[4,63,11],"angle":10},"ignite":{"section_segments":6,"offset":{"x":0,"y":-40,"z":0},"position":{"x":[10,25,30,30,25,5,5],"y":[-80,-60,-30,40,50,70,80],"z":[0,0,0,0,5,5,5]},"width":[0,3,3,3,3,3,0],"height":[0,3,3,3,3,3,0],"texture":[16.9,6,4,2,4,4]},"barrel":{"section_segments":8,"vertical":1,"offset":{"x":0,"y":0,"z":-50},"position":{"x":[20,20,20,20,20,20],"y":[-15,-15,-10,30,35,35],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,10,10,5,0],"angle":30,"texture":[4,4,63,4]},"barrel2":{"section_segments":8,"vertical":1,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[20,20,20,20,20,20],"y":[-15,-15,-10,30,35,35],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,10,10,5,0],"angle":30,"texture":[4,4,63,4]},"barrel3":{"section_segments":8,"vertical":0,"offset":{"x":0,"y":50,"z":-20},"position":{"x":[-30,-30,-30,-30,-30,-30],"y":[-15,-15,-10,30,35,35],"z":[10,10,10,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,10,10,5,0],"angle":-30,"texture":[4,4,63,4]},"detail24":{"section_segments":8,"angle":30,"offset":{"x":0,"y":18,"z":-40},"position":{"x":[30,30,30,30,30,30],"y":[-5,-5,3,3,3,3],"z":[0,0,0,0,0,0]},"width":[0,17,17,15,10,0],"height":[0,27,27,25,23,0],"texture":[4,3,2,4,3],"vertical":1},"cockpit":{"section_segments":6,"offset":{"x":0,"y":40,"z":12},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-51,-50,-40,-28,-13,27,27],"z":[-5,-5,0,0,0,0,0]},"width":[0,5,8,10,15,10,0],"height":[0,5,4,6,8,5,0],"propeller":false,"texture":[6.9,9,9,9,8,3.9]},"reactor":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":-3},"position":{"x":[16,16,16,16,16,16],"y":[-7,-7,6,7,5,5],"z":[0,0,0,0,0,0]},"width":[0,10,10,6,4,0],"height":[0,10,10,5,5,0],"texture":[15,15,4,4,17],"vertical":true,"angle":10},"detail23":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":20,"z":-45},"position":{"x":[-25,-25,-25,-25,-25,-25],"y":[-7,-7,6,7,5,5],"z":[0,0,0,0,0,0]},"width":[0,10,10,6,4,0],"height":[0,25,25,20,24,0],"texture":[15,15,4,4,17],"vertical":true,"angle":-40},"thrust":{"section_segments":6,"offset":{"x":15,"y":65,"z":-14},"position":{"x":[0,0,0,0,0],"y":[-10,-10,0,25,20],"z":[0,0,0,0,0]},"width":[0,5,12,10,0],"height":[0,3,6,5,0],"angle":0,"propeller":true,"texture":[3.9,63,3.9,16.9]},"barrelrings":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":35},"position":{"x":[0,0,0,0,0],"y":[-3,3,3,-3,-3],"z":[0,0,0,0,0]},"width":[10,10,5,5,10],"height":[20,20,15,15,20],"texture":[63]},"barrelrings2":{"section_segments":8,"offset":{"x":0,"y":-35,"z":5},"position":{"x":[0,0,0,0,0],"y":[-3,3,3,-3,-3],"z":[0,0,0,0,0]},"width":[20,20,15,15,20],"height":[10,10,5,5,10],"texture":[63],"angle":90},"shielddetail":{"vertical":1,"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[-35,-35,-35,-35,-35],"y":[-3,3,3,-3,-3],"z":[-15,-15,-15,-15,-15]},"width":[10,10,5,5,10],"height":[20,20,15,15,20],"texture":[4]}},"wings":{"join":{"offset":{"x":0,"y":-13,"z":0},"length":[30],"width":[10,8],"angle":[0],"position":[0,0,0,50],"texture":[63],"bump":{"position":10,"size":20}},"main":{"length":[40,20],"width":[60,50,40],"angle":[-25,20],"position":[30,70,20],"bump":{"position":-20,"size":20},"offset":{"x":0,"y":0,"z":-20},"texture":[4,11],"doubleside":true}},"typespec":{"name":"(Dark) Phoenix","level":3,"model":2,"code":302,"specs":{"shield":{"capacity":[300,420],"reload":[8,10]},"generator":{"capacity":[300,400],"reload":[45,70]},"ship":{"mass":240,"speed":[100,122],"rotation":[40,64],"acceleration":[110,135]}},"shape":[3.154,3.612,3.293,2.834,2.279,1.818,1.529,1.331,1.199,1.11,1.048,1.005,0.984,1.664,1.704,1.774,1.881,2.034,2.14,2.287,2.498,2.804,3.05,2.792,2.749,2.405,2.749,2.792,3.05,2.804,2.498,2.297,2.14,2.034,1.881,1.774,1.704,1.664,1.651,1.356,1.372,1.387,1.402,1.551,1.698,1.718,1.232,1.497,2.352,3.09],"lasers":[{"x":0,"y":-3.15,"z":0,"angle":0,"damage":[7,9],"rate":10,"type":1,"speed":[40,50],"number":1,"spread":0,"error":25,"recoil":0},{"x":0,"y":-3.15,"z":0,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[20,30],"number":1,"spread":0,"error":60,"recoil":0},{"x":0,"y":-3.15,"z":0,"angle":0,"damage":[3,4],"rate":10,"type":1,"speed":[50,60],"number":2,"spread":0,"error":10,"recoil":0}],"radius":3.612,"next":[402,403]}}',
  ability302: '{"name":"(Dark) Phoenix","designer":"Nex","level":3,"model":6,"size":1.6,"zoom":0.75,"next":[402,403],"specs":{"shield":{"capacity":[350,470],"reload":[10,13]},"generator":{"capacity":[12,25],"reload":[2000,2000]},"ship":{"mass":300,"speed":[30,36],"rotation":[5,10],"acceleration":[60,90]}},"bodies":{"FIRE1":{"section_segments":0,"offset":{"x":0,"y":-135,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,30],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE2":{"section_segments":0,"offset":{"x":0,"y":-195,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,30],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE3":{"section_segments":0,"offset":{"x":0,"y":-255,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,30],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE4":{"section_segments":0,"offset":{"x":0,"y":-315,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE5":{"section_segments":0,"offset":{"x":0,"y":-375,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE6":{"section_segments":0,"offset":{"x":0,"y":-435,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE7":{"section_segments":0,"offset":{"x":0,"y":-495,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE8":{"section_segments":0,"offset":{"x":0,"y":-555,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE9":{"section_segments":0,"offset":{"x":0,"y":-615,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE10":{"section_segments":0,"offset":{"x":0,"y":-675,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE11":{"section_segments":0,"offset":{"x":0,"y":-735,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE12":{"section_segments":0,"offset":{"x":0,"y":-795,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE13":{"section_segments":0,"offset":{"x":0,"y":-855,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE14":{"section_segments":0,"offset":{"x":0,"y":-915,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE15":{"section_segments":0,"offset":{"x":0,"y":-975,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"FIRE16":{"section_segments":0,"offset":{"x":0,"y":-1035,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"error":70},"propeller":false,"texture":[17]},"main":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":30,"z":-10},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-50,0,25,50,40],"z":[-10,-10,0,0,0,0,0]},"width":[0,10,40,40,15,0],"height":[0,5,20,15,15,0],"propeller":1,"texture":[1,1,4,3,17]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-110,-115,-105,-85,-90,-70,-51,-45,-40,-25,-20,-15,-10,5,5,20,20,30,30,80,85],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2]},"width":[0,15,20,15,20,21,10,10,15,15,10,10,15,15,10,10,15,15,13,10,0],"height":[0,15,20,15,20,21,10,10,15,15,10,10,15,15,10,10,12,13,10,10,0],"propeller":false,"texture":[17,5,17,4,8,63,17,4,63,4,17,4,63,4,3,1,4,3,3],"laser":{"damage":[8,8],"rate":10,"type":1,"speed":[170,170],"number":1,"error":35}},"Cannon2":{"section_segments":0,"offset":{"x":0,"y":-135,"z":0},"position":{"x":[0,0],"y":[0,20],"z":[0,0]},"width":[0,10],"height":[0,0],"angle":0,"laser":{"damage":[6,6],"rate":10,"type":1,"speed":[150,150],"number":1,"error":40},"propeller":false,"texture":[17]},"detail6":{"section_segments":[35,65,105,145,215,325],"offset":{"x":0,"y":20,"z":0},"position":{"x":[-20,-20,-20,-20,-20],"y":[-70,-70,-65,0,0],"z":[0,0,0,0,0]},"width":[0,4,7,20,0],"height":[0,6,10,16,0],"texture":[4,63,11],"angle":10},"ignite":{"section_segments":6,"offset":{"x":0,"y":-40,"z":0},"position":{"x":[10,30,35,30,25,5,5],"y":[-100,-80,-50,40,50,70,80],"z":[0,0,0,0,5,5,5]},"width":[0,3,3,3,3,3,0],"height":[0,3,3,3,3,3,0],"texture":[16.9,6,4,2,4,4]},"barrel":{"section_segments":8,"vertical":1,"offset":{"x":0,"y":0,"z":-50},"position":{"x":[20,20,20,20,20,20],"y":[-15,-15,-10,30,35,35],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,10,10,5,0],"angle":30,"texture":[4,4,17,4]},"barrel2":{"section_segments":8,"vertical":1,"offset":{"x":0,"y":0,"z":-30},"position":{"x":[20,20,20,20,20,20],"y":[-15,-15,-10,30,35,35],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,10,10,5,0],"angle":30,"texture":[4,4,17,4]},"barrel3":{"section_segments":8,"vertical":0,"offset":{"x":0,"y":50,"z":-20},"position":{"x":[-30,-30,-30,-30,-30,-30],"y":[-15,-15,-10,30,35,35],"z":[10,10,10,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,10,10,5,0],"angle":-30,"texture":[4,4,63,4]},"detail24":{"section_segments":8,"angle":30,"offset":{"x":0,"y":18,"z":-40},"position":{"x":[30,30,30,30,30,30],"y":[-5,-5,3,3,3,3],"z":[0,0,0,0,0,0]},"width":[0,17,17,15,10,0],"height":[0,27,27,25,23,0],"texture":[4,3,2,4,3],"vertical":1},"cockpit":{"section_segments":6,"offset":{"x":0,"y":40,"z":12},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-51,-50,-40,-28,-13,27,27],"z":[-5,-5,0,0,0,0,0]},"width":[0,5,8,10,15,10,0],"height":[0,5,4,6,8,5,0],"propeller":false,"texture":[6.9,9,9,9,8,3.9]},"reactor":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":0,"z":-3},"position":{"x":[16,16,16,16,16,16],"y":[-7,-7,6,7,5,5],"z":[0,0,0,0,0,0]},"width":[0,10,10,6,4,0],"height":[0,10,10,5,5,0],"texture":[15,15,4,4,17],"vertical":true,"angle":10},"detail23":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":20,"z":-45},"position":{"x":[-25,-25,-25,-25,-25,-25],"y":[-7,-7,6,7,5,5],"z":[0,0,0,0,0,0]},"width":[0,10,10,6,4,0],"height":[0,25,25,20,24,0],"texture":[15,15,4,4,17],"vertical":true,"angle":-40},"thrust":{"section_segments":6,"offset":{"x":15,"y":65,"z":-14},"position":{"x":[0,0,0,0,0],"y":[-10,-10,0,25,20],"z":[0,0,0,0,0]},"width":[0,5,12,10,0],"height":[0,3,6,5,0],"angle":0,"propeller":true,"texture":[3.9,63,3.9,16.9]},"barrelrings":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":65},"position":{"x":[0,0,0,0,0],"y":[-3,3,3,-3,-3],"z":[0,0,0,0,0]},"width":[10,10,5,5,10],"height":[20,20,15,15,20],"texture":[63]},"barrelrings2":{"section_segments":8,"offset":{"x":0,"y":-65,"z":10},"position":{"x":[0,0,0,0,0],"y":[-3,3,3,-3,-3],"z":[0,0,0,0,0]},"width":[20,20,15,15,20],"height":[10,10,5,5,10],"texture":[63],"angle":90},"shielddetail":{"vertical":1,"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[-35,-35,-35,-35,-35],"y":[-3,3,3,-3,-3],"z":[-15,-15,-15,-15,-15]},"width":[10,10,5,5,10],"height":[20,20,15,15,20],"texture":[4]}},"wings":{"join":{"offset":{"x":0,"y":-13,"z":0},"length":[30],"width":[10,8],"angle":[0],"position":[0,0,0,50],"texture":[63],"bump":{"position":10,"size":20}},"main":{"length":[40,40],"width":[60,30,10],"angle":[-25,20],"position":[30,65,45],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":0,"z":-15},"texture":[4,4],"doubleside":true},"main1":{"length":[40,40],"width":[60,30,10],"angle":[-25,20],"position":[30,65,45],"bump":{"position":-20,"size":1},"offset":{"x":0,"y":-5,"z":-15},"texture":[4,17],"doubleside":true},"main2":{"length":[40,60],"width":[60,30,10],"angle":[-25,30],"position":[30,70,85],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":0,"z":-15},"texture":[4,3],"doubleside":true},"main21":{"length":[40,60],"width":[60,30,10],"angle":[-25,30],"position":[30,70,85],"bump":{"position":-20,"size":1},"offset":{"x":0,"y":-5,"z":-15},"texture":[4,17],"doubleside":true},"main3":{"length":[40,75],"width":[60,30,10],"angle":[-25,40],"position":[30,80,120],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":0,"z":-15},"texture":[4,2],"doubleside":true},"main31":{"length":[40,75],"width":[60,30,10],"angle":[-25,40],"position":[30,80,120],"bump":{"position":-20,"size":1},"offset":{"x":0,"y":-5,"z":-15},"texture":[4,17],"doubleside":true},"main4":{"length":[40,78],"width":[60,30,10],"angle":[-23,45],"position":[30,80,160],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":0,"z":-14},"texture":[4,1],"doubleside":true},"main41":{"length":[40,78],"width":[60,30,10],"angle":[-23,45],"position":[30,80,160],"bump":{"position":-20,"size":1},"offset":{"x":0,"y":-5,"z":-14},"texture":[4,17],"doubleside":true}},"typespec":{"name":"(Dark) Phoenix","level":3,"model":6,"code":306,"specs":{"shield":{"capacity":[350,470],"reload":[10,13]},"generator":{"capacity":[12,25],"reload":[2000,2000]},"ship":{"mass":300,"speed":[30,36],"rotation":[5,10],"acceleration":[60,90]}},"shape":[4.008,4.491,4.145,3.594,2.771,2.12,1.733,1.491,1.336,1.22,1.139,1.089,1.056,1.043,0.989,0.954,2.695,2.854,3.872,4.702,4.999,6.045,4.225,2.978,2.932,2.565,2.932,2.978,4.225,6.045,4.999,4.702,3.872,2.854,2.695,1.339,1.382,1.406,1.449,1.447,1.464,1.479,1.496,1.655,1.811,1.832,0.842,1.551,3.263,4.029],"lasers":[{"x":0,"y":-4.32,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,30],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-6.24,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,30],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-8.16,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,30],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-10.08,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-12,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-13.92,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-15.84,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-17.76,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-19.68,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,40],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-21.6,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-23.52,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-25.44,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-27.36,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-29.28,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-31.2,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-33.12,"z":0,"angle":0,"damage":[10,12],"rate":4,"type":1,"speed":[20,50],"number":1,"spread":0,"error":70,"recoil":0},{"x":0,"y":-4,"z":0,"angle":0,"damage":[8,8],"rate":10,"type":1,"speed":[170,170],"number":1,"spread":0,"error":35,"recoil":0},{"x":0,"y":-4.32,"z":0,"angle":0,"damage":[6,6],"rate":10,"type":1,"speed":[150,150],"number":1,"spread":0,"error":40,"recoil":0}],"radius":6.045,"next":[402,403]}}',

  303: '{"name":"Hellcat","level":3,"model":3,"size":1.5,"specs":{"shield":{"capacity":[250,350],"reload":[5,8]},"generator":{"capacity":[150,200],"reload":[40,60]},"ship":{"mass":260,"speed":[70,90],"rotation":[50,65],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,90,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,18,25,25,15,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[5,6],"rate":6,"type":1,"speed":[200,300],"number":1,"error":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,10,15,25],"z":[0,0,0,0,0]},"width":[0,7,10,10,5],"height":[0,8,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":50,"y":0,"z":-10},"position":{"x":[-5,-5,-5,0,8,0,-10,-10],"y":[-85,-70,-80,-30,5,35,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,6,7,18,18,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,15,3,4,12],"angle":3,"propeller":true,"laser":{"damage":[8,10],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"thruster":{"section_segments":10,"offset":{"x":25,"y":15,"z":-10},"position":{"x":[-8,-3,0,0,0,0,0,0,5,5],"y":[-55,-35,0,10,20,25,30,40,70,60],"z":[20,10,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,10,10,10,10,10,10,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true},"canon":{"section_segments":12,"offset":{"x":85,"y":27,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3.5,"laser":{"damage":[8,10],"rate":4,"type":1,"speed":[140,190],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,35],"width":[60,30,20],"angle":[-25,10],"position":[30,55,25],"texture":[11,11],"bump":{"position":30,"size":10}},"ear":{"length":[30,30],"width":[60,40,20],"angle":[65,40],"position":[0,0,20],"doubleside":1,"texture":3,"offset":{"x":0,"y":-5,"z":4},"bump":{"position":30,"size":10}},"ear2":{"length":[25,25],"width":[50,30,10],"angle":[65,40],"position":[0,0,15],"doubleside":1,"texture":17,"offset":{"x":0,"y":-3,"z":9},"bump":{"position":30,"size":10}},"font":{"length":[55],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[50],"width":[20,15],"angle":[-11,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}},"back":{"length":[10,10],"width":[30,20,20],"angle":[45,45],"position":[0,10,20],"doubleside":true,"texture":63,"offset":{"x":50,"y":70,"z":-10},"bump":{"position":30,"size":15}},"back2":{"length":[15,10],"width":[30,20,20],"angle":[45,45],"position":[0,10,20],"doubleside":true,"texture":63,"offset":{"x":50,"y":45,"z":-10},"bump":{"position":30,"size":15}},"back3":{"length":[15,10],"width":[30,20,20],"angle":[45,45],"position":[0,10,20],"doubleside":true,"texture":63,"offset":{"x":55,"y":-40,"z":-10},"bump":{"position":30,"size":15}}},"typespec":{"name":"Hellcat","level":3,"model":3,"code":303,"specs":{"shield":{"capacity":[250,350],"reload":[5,8]},"generator":{"capacity":[150,200],"reload":[40,60]},"ship":{"mass":260,"speed":[70,90],"rotation":[50,65],"acceleration":[90,120]}},"shape":[2.104,2.105,1.754,2.804,2.83,2.738,2.514,2.37,2.314,2.359,2.588,2.674,2.694,2.753,2.842,2.926,3.076,3.283,3.303,3.031,3.564,3.424,3.325,2.681,2.737,2.705,2.737,2.681,3.325,3.424,3.564,3.031,3.303,3.283,3.076,2.926,2.842,2.753,2.694,2.674,2.588,2.359,2.314,2.37,2.514,2.738,2.83,2.804,1.754,2.105],"lasers":[{"x":0,"y":-2.1,"z":0.6,"angle":0,"damage":[5,6],"rate":6,"type":1,"speed":[200,300],"number":1,"spread":0,"error":1,"recoil":0},{"x":1.217,"y":-2.539,"z":-0.3,"angle":3,"damage":[8,10],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.217,"y":-2.539,"z":-0.3,"angle":-3,"damage":[8,10],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.458,"y":-0.687,"z":0,"angle":3.5,"damage":[8,10],"rate":4,"type":1,"speed":[140,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.458,"y":-0.687,"z":0,"angle":-3.5,"damage":[8,10],"rate":4,"type":1,"speed":[140,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.564}}',
  ability303: '{"name":"Hellcat","level":3,"model":7,"size":1.5,"specs":{"shield":{"capacity":[250,350],"reload":[5,8]},"generator":{"capacity":[150,200],"reload":[40,60]},"ship":{"mass":260,"speed":[70,90],"rotation":[50,65],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,90,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,18,25,25,15,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[5,6],"rate":6,"type":1,"speed":[200,300],"number":1,"error":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,10,15,25],"z":[0,0,0,0,0]},"width":[0,7,10,10,5],"height":[0,8,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":50,"y":0,"z":-10},"position":{"x":[-5,-5,-5,0,8,0,-10,-10],"y":[-85,-70,-80,-30,5,35,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,6,7,18,18,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,15,3,4,12],"angle":3,"propeller":true,"laser":{"damage":[8,10],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"thruster":{"section_segments":10,"offset":{"x":25,"y":15,"z":-10},"position":{"x":[-8,-3,0,0,0,0,0,0,5,5],"y":[-55,-35,0,10,20,25,30,40,70,60],"z":[20,10,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,10,10,10,10,10,10,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true},"canon":{"section_segments":12,"offset":{"x":85,"y":27,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3.5,"laser":{"damage":[8,10],"rate":4,"type":1,"speed":[140,190],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,35],"width":[60,30,20],"angle":[-25,10],"position":[30,55,25],"texture":[11,11],"bump":{"position":30,"size":10}},"ear":{"length":[30,30],"width":[60,40,20],"angle":[65,40],"position":[0,0,20],"doubleside":1,"texture":3,"offset":{"x":0,"y":-5,"z":4},"bump":{"position":30,"size":10}},"ear2":{"length":[25,25],"width":[50,30,10],"angle":[65,40],"position":[0,0,15],"doubleside":1,"texture":17,"offset":{"x":0,"y":-3,"z":9},"bump":{"position":30,"size":10}},"font":{"length":[55],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[50],"width":[20,15],"angle":[-11,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}},"back":{"length":[10,10],"width":[30,20,20],"angle":[45,45],"position":[0,10,20],"doubleside":true,"texture":63,"offset":{"x":50,"y":70,"z":-10},"bump":{"position":30,"size":15}},"back2":{"length":[15,10],"width":[30,20,20],"angle":[45,45],"position":[0,10,20],"doubleside":true,"texture":63,"offset":{"x":50,"y":45,"z":-10},"bump":{"position":30,"size":15}},"back3":{"length":[15,10],"width":[30,20,20],"angle":[45,45],"position":[0,10,20],"doubleside":true,"texture":63,"offset":{"x":55,"y":-40,"z":-10},"bump":{"position":30,"size":15}}},"typespec":{"name":"Hellcat","level":3,"model":7,"code":307,"specs":{"shield":{"capacity":[250,350],"reload":[5,8]},"generator":{"capacity":[150,200],"reload":[40,60]},"ship":{"mass":260,"speed":[70,90],"rotation":[50,65],"acceleration":[90,120]}},"shape":[2.104,2.105,1.754,2.804,2.83,2.738,2.514,2.37,2.314,2.359,2.588,2.674,2.694,2.753,2.842,2.926,3.076,3.283,3.303,3.031,3.564,3.424,3.325,2.681,2.737,2.705,2.737,2.681,3.325,3.424,3.564,3.031,3.303,3.283,3.076,2.926,2.842,2.753,2.694,2.674,2.588,2.359,2.314,2.37,2.514,2.738,2.83,2.804,1.754,2.105],"lasers":[{"x":0,"y":-2.1,"z":0.6,"angle":0,"damage":[5,6],"rate":6,"type":1,"speed":[200,300],"number":1,"spread":0,"error":1,"recoil":0},{"x":1.217,"y":-2.539,"z":-0.3,"angle":3,"damage":[8,10],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.217,"y":-2.539,"z":-0.3,"angle":-3,"damage":[8,10],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.458,"y":-0.687,"z":0,"angle":3.5,"damage":[8,10],"rate":4,"type":1,"speed":[140,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.458,"y":-0.687,"z":0,"angle":-3.5,"damage":[8,10],"rate":4,"type":1,"speed":[140,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.564}}',
  
  304: '{"name":"Intervention","level":3,"model":4,"size":1.75,"specs":{"shield":{"capacity":[240,270],"reload":[6,9]},"generator":{"capacity":[90,135],"reload":[30,45]},"ship":{"mass":210,"speed":[50,70],"rotation":[40,56],"acceleration":[100,125]}},"bodies":{"main":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,0,25,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,40,20,0],"height":[0,5,20,15,15,0],"propeller":1,"texture":[1,1,4,3,17]},"cannon":{"section_segments":12,"offset":{"x":0,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-145,-145,-150,-140,-130,-100,-90,-90,-50,0,30,35,40],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,20,15,15,20,25,20,20,25,25,0],"height":[0,10,15,20,15,15,20,25,25,25,20,20,0],"propeller":false,"texture":[17,4,63,3,8,3,3,4,2],"laser":{"damage":[60,90],"rate":1,"type":2,"speed":[240,300],"number":1,"error":0}},"cockpit":{"section_segments":6,"offset":{"x":0,"y":-25,"z":24},"position":{"x":[0,0,0,0,0,0],"y":[-15,-15,10,40,70,70],"z":[-1,-1,-1,0,0,0]},"width":[0,7,12,12,8,0],"height":[0,4,6,5,3,0],"propeller":false,"texture":[7,9,8.2,4]},"detail11":{"section_segments":6,"offset":{"x":0,"y":-25,"z":20},"position":{"x":[0,0,0,0,0,0],"y":[-18,-18,10,40,70,70],"z":[-1,-1,-1,0,0,0]},"width":[0,10,15,15,10,0],"height":[0,4,8,5,5,0],"propeller":false,"texture":[4]},"shield":{"section_segments":12,"offset":{"x":30,"y":-55,"z":0},"position":{"x":[0,0,0,-10,-10],"y":[-30,-30,0,20,20],"z":[0,0,0,0,0]},"width":[0,8,8,5,0],"height":[0,30,25,10,0],"texture":4,"angle":90},"sideconnector":{"section_segments":[35,65,105,145,215,325],"offset":{"x":-20,"y":25,"z":0},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-65,0,0],"z":[0,0,0,0,0]},"width":[0,4,7,20,0],"height":[0,6,10,16,0],"texture":[4,63,11]},"detail23":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":13,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-7,-7,6,7,5,5],"z":[0,0,0,0,0,0]},"width":[0,10,10,6,4,0],"height":[0,25,25,20,24,0],"texture":[15,15,4,4,17],"vertical":true,"angle":40},"siderails":{"section_segments":8,"angle":175,"offset":{"x":25,"y":-5,"z":0},"position":{"x":[0,0,0,0],"y":[-5,-5,45,45],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[2]},"sidedetail":{"section_segments":8,"angle":95,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-5,-5,5,5,5,5],"z":[0,0,0,0,0,0]},"width":[0,25,20,15,10,0],"height":[0,10,10,10,5,0],"texture":[2,63,63,17,5]},"legs":{"section_segments":6,"angle":-144,"offset":{"x":10,"y":35,"z":0},"position":{"x":[15,15,5,0,0,0],"y":[-60,-60,-50,-40,0,0],"z":[-20,-20,-20,-5,0,0]},"width":[0,5,9,10,20,0],"height":[0,4,6,6,9,0],"texture":[3.9,63,12.9,3.9]},"barrelrings":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":90},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[20,20,15,15,20],"height":[25,25,20,20,25],"texture":[63]}},"wings":{"I000l":{"length":[46],"width":[30,15],"angle":[10,0],"position":[0,50],"doubleside":true,"texture":[63],"offset":{"x":-5,"y":-70,"z":-5},"bump":{"position":30,"size":20}}},"typespec":{"name":"Intervention","level":3,"model":4,"code":304,"specs":{"shield":{"capacity":[240,270],"reload":[6,9]},"generator":{"capacity":[90,135],"reload":[30,45]},"ship":{"mass":210,"speed":[50,70],"rotation":[40,56],"acceleration":[100,125]}},"shape":[4.384,4.406,3.863,2.437,2.442,2.436,2.475,2.401,1.708,1.609,1.517,1.187,1.205,1.35,1.398,1.475,1.587,1.748,1.979,2.135,2.658,3.196,3.466,3.48,2.672,2.63,2.672,3.48,3.466,3.196,2.658,2.135,1.979,1.748,1.587,1.475,1.398,1.35,1.205,1.187,1.517,1.609,1.708,2.401,2.475,2.436,2.442,2.437,3.863,4.406],"lasers":[{"x":0,"y":-4.375,"z":0,"angle":0,"damage":[60,90],"rate":1,"type":2,"speed":[240,300],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.406}}',
  ability304: '{"name":"Intervention","level":3,"model":8,"size":1.75,"zoom":1,"specs":{"shield":{"capacity":[270,300],"reload":[12,15]},"generator":{"capacity":[240,360],"reload":[0.01,0.01]},"ship":{"mass":1000,"speed":[1,10],"rotation":[18,30],"acceleration":[200,300]}},"bodies":{"NOHITBOX_Laserindicator":{"section_segments":8,"offset":{"x":0,"y":0,"z":40},"position":{"x":[0,0,0,0,0,0],"y":[-2500,30],"z":[0,0,0,0,0,0]},"width":[0.5,0.5],"height":[0.5,0.5],"texture":[16.7]},"main":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,0,25,50,40],"z":[0,0,0,0,0,0,0]},"width":[0,10,40,40,20,0],"height":[0,5,20,15,15,0],"propeller":0,"texture":[1,1,4,3,17]},"cannon":{"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-100,-300,-300,-175,-150,-140,-130,-100,-90,-90,-50,0,30,35,40],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,10,10,15,20,15,15,20,25,20,20,25,25,0],"height":[0,5,5,10,10,15,20,15,15,20,25,25,25,20,20,0],"propeller":false,"texture":[17,6,2,15,8,63,3,8,3,3,4,2]},"cannonringconnector":{"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0],"y":[-285,-200],"z":[0,0]},"width":[4,4],"height":[11,11],"propeller":false,"texture":[63,63]},"cannonringconnector2":{"section_segments":12,"offset":{"x":0,"y":100,"z":0},"position":{"x":[0,0],"y":[-285,-200],"z":[0,0]},"width":[11,11],"height":[4,4],"propeller":false,"texture":[63,63]},"laser1":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":-240,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,35,35,10,10,25,40,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,0,12,12,22,22,12,10],"height":[0,0,7,7,12,12,12,10],"propeller":false,"texture":[6,6,1,4,3,17],"laser":{"damage":[30,45],"rate":0.1,"type":1,"speed":[300,450],"number":5,"recoil":25,"error":0}},"laser2":{"section_segments":[35,55,125,145,215,235,305,325,395],"offset":{"x":0,"y":-240,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-35,35,35,10,10,25,40,40],"z":[0,0,0,0,0,0,0,0]},"width":[0,0,12,12,22,22,12,10],"height":[0,0,7,7,12,12,12,10],"propeller":false,"texture":[6,6,1,4,3,17],"laser":{"damage":[30,45],"rate":0.1,"type":1,"speed":[300,450],"number":3,"recoil":25,"error":0}},"drain1":{"section_segments":12,"offset":{"x":15,"y":-218,"z":0},"position":{"x":[0,0],"y":[-5,5],"z":[0,0]},"width":[0,0],"height":[0,0],"propeller":false,"texture":[6],"angle":-90,"laser":{"damage":[1,1],"rate":10,"type":1,"speed":[5,10],"number":1,"recoil":0,"error":30}},"drain2":{"section_segments":12,"offset":{"x":15,"y":-222,"z":0},"position":{"x":[0,0],"y":[-5,5],"z":[0,0]},"width":[0,0],"height":[0,0],"propeller":false,"texture":[6],"angle":-90,"laser":{"damage":[1,1],"rate":10,"type":1,"speed":[5,10],"number":1,"recoil":0,"error":30}},"shield":{"section_segments":12,"offset":{"x":30,"y":20,"z":0},"position":{"x":[0,0,0,-10,-10],"y":[-30,-30,0,20,20],"z":[0,0,0,0,0]},"width":[0,8,8,5,0],"height":[0,30,25,10,0],"texture":4,"angle":90},"sideconnector":{"section_segments":[35,65,105,145,215,325],"offset":{"x":-20,"y":100,"z":0},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-65,0,0],"z":[0,0,0,0,0]},"width":[0,4,7,20,0],"height":[0,6,10,16,0],"texture":[4,63,11]},"scope":{"section_segments":8,"offset":{"x":0,"y":75,"z":40},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-50,-50,-50,-20,10,35,35,35],"z":[0,0,0,0,0,0,0,0]},"width":[0,8,12,8,8,10,6,0],"height":[0,8,12,8,8,10,6,0],"texture":[7,4,3,10,3,3,7],"angle":0},"detail23":{"section_segments":[45,135,225,315],"offset":{"x":20,"y":13,"z":-75},"position":{"x":[0,0,0,0,0,0],"y":[-7,-7,6,7,5,5],"z":[0,0,0,0,0,0]},"width":[0,10,10,6,4,0],"height":[0,25,25,20,24,0],"texture":[15,15,4,4,17],"vertical":true,"angle":40},"scopeholder":{"section_segments":6,"angle":0,"offset":{"x":0,"y":53,"z":40},"position":{"x":[0,0,0,0],"y":[-5,-5,5,5],"z":[0,0,0,0]},"width":[0,11,11,0],"height":[0,11,11,0],"texture":[3.9]},"scopeholder1":{"section_segments":6,"angle":0,"offset":{"x":0,"y":85,"z":40},"position":{"x":[0,0,0,0],"y":[-5,-5,5,5],"z":[0,0,0,0]},"width":[0,11,11,0],"height":[0,11,11,0],"texture":[3.9]},"scopeholder2":{"vertical":true,"section_segments":6,"angle":0,"offset":{"x":0,"y":25,"z":-53.7},"position":{"x":[0,0,0,0],"y":[-8,-8,8,8],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[3.9]},"scopeholder3":{"vertical":true,"section_segments":6,"angle":0,"offset":{"x":0,"y":25,"z":-85},"position":{"x":[0,0,0,0],"y":[-8,-8,8,8],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[3.9]},"siderails":{"section_segments":8,"angle":175,"offset":{"x":25,"y":70,"z":0},"position":{"x":[0,0,0,0],"y":[-5,-5,45,45],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[2]},"sidedetail":{"section_segments":8,"angle":95,"offset":{"x":35,"y":100,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-5,-5,5,5,10,10],"z":[0,0,0,0,0,0]},"width":[0,25,20,15,10,0],"height":[0,10,10,10,5,0],"texture":[2,63,63,17,5]},"legs":{"section_segments":6,"angle":-144,"offset":{"x":10,"y":110,"z":0},"position":{"x":[-5,5,10,0,0,0],"y":[-110,-110,-90,-50,0,0],"z":[-20,-20,-20,-5,0,0]},"width":[0,5,9,10,20,0],"height":[0,4,6,6,9,0],"texture":[3.9,63,12.9,3.9]},"barrelrings":{"vertical":1,"section_segments":8,"offset":{"x":8,"y":0,"z":15},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[20,20,15,15,20],"height":[25,25,20,20,25],"texture":[63]},"barrelrings2":{"section_segments":8,"offset":{"x":0,"y":-100,"z":0},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[12,12,7,7,12],"height":[12,12,7,7,12],"texture":[63]},"barrelrings3":{"section_segments":8,"offset":{"x":0,"y":-180,"z":0},"position":{"x":[0,0,0,0,0],"y":[-5,5,5,-5,-5],"z":[0,0,0,0,0]},"width":[12,12,7,7,12],"height":[12,12,7,7,12],"texture":[63]}},"wings":{"I000l":{"length":[46],"width":[30,15],"angle":[10,0],"position":[0,50],"doubleside":true,"texture":[63],"offset":{"x":-5,"y":5,"z":-5},"bump":{"position":30,"size":20}}},"typespec":{"name":"Intervention","level":3,"model":8,"code":308,"specs":{"shield":{"capacity":[270,300],"reload":[12,15]},"generator":{"capacity":[240,360],"reload":[0.01,0.01]},"ship":{"mass":1000,"speed":[1,10],"rotation":[18,30],"acceleration":[200,300]}},"shape":[87.5,8.075,2.272,1.782,1.594,1.382,1.292,1.205,1.149,1.113,0.996,0.907,0.847,0.806,0.771,0.704,1.997,2.136,2.008,2.212,2.603,3.663,7.532,7.503,5.414,5.26,5.414,7.503,7.532,3.663,2.603,2.212,2.008,2.136,1.997,0.704,0.771,0.806,0.847,0.907,0.996,1.113,1.149,1.205,1.292,1.382,1.594,1.782,2.272,8.075],"lasers":[{"x":0,"y":-9.625,"z":0,"angle":0,"damage":[30,45],"rate":0.1,"type":1,"speed":[300,450],"number":5,"spread":0,"error":0,"recoil":25},{"x":0,"y":-9.625,"z":0,"angle":0,"damage":[30,45],"rate":0.1,"type":1,"speed":[300,450],"number":3,"spread":0,"error":0,"recoil":25},{"x":0.7,"y":-7.63,"z":0,"angle":-90,"damage":[1,1],"rate":10,"type":1,"speed":[5,10],"number":1,"spread":0,"error":30,"recoil":0},{"x":-0.7,"y":-7.63,"z":0,"angle":90,"damage":[1,1],"rate":10,"type":1,"speed":[5,10],"number":1,"spread":0,"error":30,"recoil":0},{"x":0.7,"y":-7.77,"z":0,"angle":-90,"damage":[1,1],"rate":10,"type":1,"speed":[5,10],"number":1,"spread":0,"error":30,"recoil":0},{"x":-0.7,"y":-7.77,"z":0,"angle":90,"damage":[1,1],"rate":10,"type":1,"speed":[5,10],"number":1,"spread":0,"error":30,"recoil":0}],"radius":87.5}}',


}

const shipCounts = [null,1,2,4];
const shipsArray = [];

for (let shipID of Object.keys(ships)) {
    shipsArray.push(ships[shipID]);
}

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
        case "ship_spawned":
            if (ship.type < ship.custom.type) ship.set({type: ship.custom.type});
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
        // assume at most 9 ships of a tier
        if (Math.floor(ship.type/100) == Math.floor(ship.custom.type/100) && // same tier
            ship.type > ship.custom.type && // ability is active
            ship.generator < 1 && // out of energy
            ship.custom.endIfEmpty) { // should end when empty
          ship.set({type: ship.custom.type})
          ship.set({stats: ship.stats});
          ship.set({shield: ship.shield});
          ship.custom.endIfEmpty = false;
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

  getDist(obj1, obj2) {
    return Math.sqrt((obj1.x - obj2.x)**2 + (obj1.y - obj2.y)**2);
  },
};

// Only designed for abilities, may exhibit unintended behaviour if used elsewhere
function changeType(ship, duration, offset) { 
    ship.custom.type = ship.type;
    ship.set({type: ship.type + offset});
    ship.set({stats: ship.stats}); 
    ship.set({shield: ship.shield});

    modUtils.setTimeout(
      function () {
        if (ship.type - ship.custom.type == offset) {
          ship.set({type: ship.custom.type});
          ship.set({stats: ship.stats});
          ship.set({shield: ship.shield});
        }
      }, duration
    );
}

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
  modUtils.abilities.list.push(new modUtils.ability("Reset", "L", 2, 1, function (ship) {

    ship.set({ type: 101 });

    modUtils.setTimeout(
        function () { modUtils.sendUI(ship, { id: "ability", visible: false }); }, 
        this.duration * modUtils.abilityTPS
    );
    })
);

}
modUtils.abilities.list.push(
  new modUtils.ability("Meteor", "Z", 10, 45, function (ship) {
    changeType(ship, this.duration * modUtils.abilityTPS, shipCounts[1]);
    ship.set({shield: ship.shield+300});
  }, [101,102])
);
modUtils.abilities.list.push(
  new modUtils.ability("Aura", "Z", 3600, 30, function (ship) {
    changeType(ship, this.duration * modUtils.abilityTPS, shipCounts[2]);
    ship.set({generator: 10000});
    ship.custom.endIfEmpty = true;
  }, [201,203])
);
modUtils.abilities.list.push(
  new modUtils.ability("Overload", "Z", 15, 60, function (ship) {
    changeType(ship, this.duration * modUtils.abilityTPS, shipCounts[2]);
  }, [202,204])
);
modUtils.abilities.list.push(
  new modUtils.ability("Evolve", "Z", 30, 75, function (ship) {
    changeType(ship, this.duration * modUtils.abilityTPS, shipCounts[3]);
  }, [301,305])
);
modUtils.abilities.list.push(
  new modUtils.ability("Firewall", "Z", 6, 25, function (ship) {
    changeType(ship, this.duration * modUtils.abilityTPS, shipCounts[3]);
  }, [302,306])
);
modUtils.abilities.list.push(
  new modUtils.ability("Drones", "Z", 1, 20, function (ship) {
    for (let s of game.ships) {
      if (modUtils.getDist(ship, s) <= 60) {
        for (let i = 1; i < s.type/100; i++) {
          game.addCollectible({
            x: s.x,
            y: s.y,
            code: 41 // attack pod
          })
        }
      }
    }
  }, [303])
);
modUtils.abilities.list.push(
  new modUtils.ability("Deploy", "Z", 3600, 5, function (ship) {
    changeType(ship, this.duration * modUtils.abilityTPS, shipCounts[3]);
    ship.set({generator: 10000});
    ship.custom.endIfEmpty = true;
  }, [304,308])
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
  ships: shipsArray,
  reset_tree: true,
  friendly_colors: 0,
  root_mode: "survival",
  speed_mod: 1,
  starting_ship: 101,
  asteroids_strength: 1,
  crystal_value: 5,
  release_crystal: true,
  crystal_drop: 0.75,
  mines_self_destroy: false,
  survival_time: 30,
};

