const ships = [];

var Warthog_101 = '{"name":"Warthog","designer":"nex","level":1,"model":1,"size":1.47,"zoom":0.82,"specs":{"shield":{"capacity":[250,250],"reload":[8,8]},"generator":{"capacity":[100,100],"reload":[1e+300,1e+300]},"ship":{"mass":120,"speed":[144,144],"rotation":[48,48],"acceleration":[138,138]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-20,"z":6},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-80,-92,-65,-40,0,25,30,75,80,130,125],"z":[-6,-6,-6,-6,-6,-3,0,0,0,0,0]},"width":[0,6,15,20,20,20,10,10,15,12,0],"height":[0,6,10,13,15,12,10,10,10,11,0,0],"texture":[3,2,4,3,63,4,4,4,3,17],"propeller":1},"gun":{"section_segments":8,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,5],"height":[0,5],"texture":[6],"propeller":false,"angle":1.5},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-50,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[-50,-40,-20,0,20,40],"z":[-1,-3,-1,0,3,2]},"width":[0,6,8,12,10,6],"height":[0,9,14,15,10,6],"texture":[3,9,9,4],"propeller":false},"fuelbarrels":{"section_segments":8,"offset":{"x":13,"y":50,"z":5},"position":{"x":[0,8,10,0,-2,-5,0],"y":[-120,-85,-50,-30,-10,0,12],"z":[0,0,0,-5,-6,-3,-3]},"width":[0,10,10,10,10,10,0],"height":[0,10,10,10,10,10,0],"texture":[3,4,63,1,4,4,2,13,17,3],"propeller":false},"turbines":{"section_segments":12,"offset":{"x":25,"y":-75,"z":-8},"position":{"x":[0,0,0,0,0,0,0,0],"y":[20,25,20,25,35,75,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,4,8,12,14,12,10,0],"height":[0,4,6,8,10,10,8,0],"texture":[13,3,63,63,10,13,17],"propeller":true},"turbines2":{"section_segments":12,"offset":{"x":25,"y":-15,"z":-1},"position":{"x":[0,0,0],"y":[10,20,30],"z":[0,0,0]},"width":[0,4,10],"height":[0,4,10],"texture":[13,3,63],"propeller":true},"missiles":{"section_segments":4,"offset":{"x":70,"y":0,"z":-10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-40,-20,-12,15,22.5,30,50,45],"z":[0,0,0,0,0,0,0,0]},"width":[0,4,6,7,5,7,7,0],"height":[0,4,6,7,5,7,7,0],"texture":[2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4],"angle":0},"missiles2":{"section_segments":4,"offset":{"x":57.5,"y":-10,"z":-2},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-40,-20,-12,15,22.5,30,50,45],"z":[0,0,0,0,0,0,0,0]},"width":[0,4,6,7,5,7,7,0],"height":[0,4,6,7,5,7,7,0],"texture":[2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4],"angle":0},"missiles3":{"section_segments":4,"offset":{"x":45,"y":-20,"z":4},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-40,-20,-12,15,22.5,30,50,45],"z":[0,0,0,0,0,0,0,0]},"width":[0,4,6,7,5,7,7,0],"height":[0,4,6,7,5,7,7,0],"texture":[2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4,2,4],"angle":0},"emitter0":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter1":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter2":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter3":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter4":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter5":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter6":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter7":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter8":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter9":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter10":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter11":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter12":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter13":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter14":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter15":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter16":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter17":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter18":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter19":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter20":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter21":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter22":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter23":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter24":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter25":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter26":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter27":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter28":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter29":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter30":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter31":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter32":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter33":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter34":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter35":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter36":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter37":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter38":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter39":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter40":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter41":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter42":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter43":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter44":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter45":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter46":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter47":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter48":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter49":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter50":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter51":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter52":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter53":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter54":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter55":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter56":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter57":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter58":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter59":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter60":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter61":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter62":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter63":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter64":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter65":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter66":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter67":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter68":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter69":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter70":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter71":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter72":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter73":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter74":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter75":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter76":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter77":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter78":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter79":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter80":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter81":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter82":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter83":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter84":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter85":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter86":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter87":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter88":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter89":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter90":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter91":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter92":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter93":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter94":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter95":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter96":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter97":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter98":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter99":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}},"emitter100":{"section_segments":0,"offset":{"x":1,"y":-40,"z":0},"position":{"x":[0,0],"y":[-60,-70],"z":[0,0]},"width":[0,0],"height":[0,0],"texture":[5],"propeller":false,"angle":1.5,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"error":6.5,"angle":0,"recoil":6}}},"wings":{"mein":{"offset":{"x":10,"y":-30,"z":-5},"length":[40,30,15],"width":[80,60,45,40],"angle":[25,-30,30],"position":[-10,40,50,40],"texture":[18,4,63],"doubleside":true,"bump":{"position":20,"size":5}},"mein2":{"offset":{"x":10,"y":-30,"z":-1},"length":[40,30],"width":[40,20,15],"angle":[25,-30],"position":[-10,40,50],"texture":[63,63],"doubleside":true,"bump":{"position":0,"size":0}},"spine":{"length":[25,25],"width":[30,40,30],"angle":[90,90],"position":[0,0,20],"doubleside":true,"texture":[18,63],"offset":{"x":0,"y":90,"z":0},"bump":{"position":30,"size":12}},"winglets":{"offset":{"x":0,"y":95,"z":5},"length":[15,15,10],"width":[35,35,25,25],"angle":[0,-10,40],"position":[-10,-10,0,10],"texture":[3,4,63],"doubleside":true,"bump":{"position":0,"size":15}}},"typespec":{"name":"Warthog","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[250,250],"reload":[8,8]},"generator":{"capacity":[100,100],"reload":[1e+300,1e+300]},"ship":{"mass":120,"speed":[144,144],"rotation":[48,48],"acceleration":[138,138]}},"shape":[3.298,3.22,2.447,1.937,1.886,2.205,2.116,2.24,2.37,2.357,2.285,2.262,2.523,2.524,2.585,2.656,2.606,2.699,2.501,1.073,1.184,1.391,3.556,3.626,3.253,3.675,3.253,3.626,3.556,1.391,1.184,1.073,2.501,2.699,2.606,2.656,2.585,2.524,2.523,2.262,2.285,2.357,2.37,2.24,2.116,2.205,1.886,1.937,2.447,3.22],"lasers":[{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":-0.024,"y":-3.233,"z":0,"angle":1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6},{"x":0.024,"y":-3.233,"z":0,"angle":-1.5,"damage":[10,10],"rate":10,"type":1,"speed":[160,160],"number":1,"spread":0,"error":6.5,"recoil":6}],"radius":3.675}}';

ships.push(Warthog_101);

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
