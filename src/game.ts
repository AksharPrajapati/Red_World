import { createChannel } from "../node_modules/decentraland-builder-scripts/channel";
import { createInventory } from "../node_modules/decentraland-builder-scripts/inventory";
import Script1 from "../310e908c-751e-4045-ac88-2d6b1fbadf85/src/item";
import Script2 from "../3e3df11c-8e39-4494-ac4e-d6faab495f13/src/item";
import * as utils from "@dcl/ecs-scene-utils";

const _scene = new Entity("_scene");
engine.addEntity(_scene);
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
_scene.addComponentOrReplace(transform);

const entity = new Entity("entity");
engine.addEntity(entity);
entity.setParent(_scene);
const gltfShape = new GLTFShape(
  "ea013d0a-8f70-44ca-be3d-706d46cb7ed2/FloorBaseGrass_02/FloorBaseGrass_02.glb"
);
gltfShape.withCollisions = true;
gltfShape.isPointerBlocker = true;
gltfShape.visible = true;
entity.addComponentOrReplace(gltfShape);
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity.addComponentOrReplace(transform2);

const entity2 = new Entity("entity2");
engine.addEntity(entity2);
entity2.setParent(_scene);
entity2.addComponentOrReplace(gltfShape);
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity2.addComponentOrReplace(transform3);

const entity3 = new Entity("entity3");
engine.addEntity(entity3);
entity3.setParent(_scene);
entity3.addComponentOrReplace(gltfShape);
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity3.addComponentOrReplace(transform4);

const entity4 = new Entity("entity4");
engine.addEntity(entity4);
entity4.setParent(_scene);
entity4.addComponentOrReplace(gltfShape);
const transform5 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity4.addComponentOrReplace(transform5);

const entity5 = new Entity("entity5");
engine.addEntity(entity5);
entity5.setParent(_scene);
entity5.addComponentOrReplace(gltfShape);
const transform6 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity5.addComponentOrReplace(transform6);

const entity6 = new Entity("entity6");
engine.addEntity(entity6);
entity6.setParent(_scene);
entity6.addComponentOrReplace(gltfShape);
const transform7 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity6.addComponentOrReplace(transform7);

const entity7 = new Entity("entity7");
engine.addEntity(entity7);
entity7.setParent(_scene);
entity7.addComponentOrReplace(gltfShape);
const transform8 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity7.addComponentOrReplace(transform8);

const entity8 = new Entity("entity8");
engine.addEntity(entity8);
entity8.setParent(_scene);
entity8.addComponentOrReplace(gltfShape);
const transform9 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity8.addComponentOrReplace(transform9);

const entity9 = new Entity("entity9");
engine.addEntity(entity9);
entity9.setParent(_scene);
entity9.addComponentOrReplace(gltfShape);
const transform10 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
entity9.addComponentOrReplace(transform10);

const wallPlainWhiteBack = new Entity("wallPlainWhite");
engine.addEntity(wallPlainWhiteBack);
wallPlainWhiteBack.setParent(_scene);
const transform11 = new Transform({
  position: new Vector3(44.5, 0, 44.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(20, 2.1907405853271484, 1),
});
wallPlainWhiteBack.addComponentOrReplace(transform11);
const gltfShape2 = new GLTFShape(
  "45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb"
);
gltfShape2.withCollisions = true;
gltfShape2.isPointerBlocker = true;
gltfShape2.visible = true;
wallPlainWhiteBack.addComponentOrReplace(gltfShape2);

const wallPlainWhiteLeftHalf = new Entity("wallPlainWhite4");
engine.addEntity(wallPlainWhiteLeftHalf);
wallPlainWhiteLeftHalf.setParent(_scene);
const transform12 = new Transform({
  position: new Vector3(6.5, 0, 13.613651275634766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.1907405853271484, 1),
});
wallPlainWhiteLeftHalf.addComponentOrReplace(transform12);
wallPlainWhiteLeftHalf.addComponentOrReplace(gltfShape2);

const wallPlainWhiteRightHalf = new Entity("wallPlainWhite5");
engine.addEntity(wallPlainWhiteRightHalf);
wallPlainWhiteRightHalf.setParent(_scene);
wallPlainWhiteRightHalf.addComponentOrReplace(gltfShape2);
const transform13 = new Transform({
  position: new Vector3(44.77798843383789, 0, 13.613651275634766),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 2.1907405853271484, 1),
});
wallPlainWhiteRightHalf.addComponentOrReplace(transform13);

const wallPlainGlass2 = new Entity("wallPlainGlass2");
engine.addEntity(wallPlainGlass2);
wallPlainGlass2.setParent(_scene);
const gltfShape3 = new GLTFShape(
  "e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb"
);
gltfShape3.withCollisions = true;
gltfShape3.isPointerBlocker = true;
gltfShape3.visible = true;
wallPlainGlass2.addComponentOrReplace(gltfShape3);
const transform14 = new Transform({
  position: new Vector3(42.74312210083008, 0, 13.65268325805664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 1.679750919342041, 1),
});
wallPlainGlass2.addComponentOrReplace(transform14);

const wallPlainWhiteSideLeft = new Entity("wallPlainWhiteSideLeft");
engine.addEntity(wallPlainWhiteSideLeft);
wallPlainWhiteSideLeft.setParent(_scene);
wallPlainWhiteSideLeft.addComponentOrReplace(gltfShape2);
const transform15 = new Transform({
  position: new Vector3(4.5, 0, 44.5),
  rotation: new Quaternion(
    1.5394203364713045e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(15.441461563110352, 2.1907405853271484, 1),
});
wallPlainWhiteSideLeft.addComponentOrReplace(transform15);

const wallPlainWhiteSideRight = new Entity("wallPlainWhiteSideRight");
engine.addEntity(wallPlainWhiteSideRight);
wallPlainWhiteSideRight.setParent(_scene);
wallPlainWhiteSideRight.addComponentOrReplace(gltfShape2);
const transform16 = new Transform({
  position: new Vector3(44.5, 0, 44.5),
  rotation: new Quaternion(
    1.5394203364713045e-15,
    0.7071067690849304,
    -8.429368847373553e-8,
    -0.7071068286895752
  ),
  scale: new Vector3(15.441461563110352, 2.1907405853271484, 1),
});
wallPlainWhiteSideRight.addComponentOrReplace(transform16);

const sandTile = new Entity("sandTile");
engine.addEntity(sandTile);
sandTile.setParent(_scene);
const transform17 = new Transform({
  position: new Vector3(24.650569915771484, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(20.139314651489258, 1, 15.474743843078613),
});
sandTile.addComponentOrReplace(transform17);
const gltfShape4 = new GLTFShape(
  "1874152b-dd3d-4890-960a-4e7719346326/FloorBlock_02/FloorBlock_02.glb"
);
gltfShape4.withCollisions = true;
gltfShape4.isPointerBlocker = true;
gltfShape4.visible = true;
sandTile.addComponentOrReplace(gltfShape4);

const loveseat = new Entity("loveseat");
engine.addEntity(loveseat);
loveseat.setParent(_scene);
const transform18 = new Transform({
  position: new Vector3(36, 0, 14.731977462768555),
  rotation: new Quaternion(
    -1.4282873903300537e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
});
loveseat.addComponentOrReplace(transform18);
const gltfShape5 = new GLTFShape(
  "c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb"
);
gltfShape5.withCollisions = true;
gltfShape5.isPointerBlocker = true;
gltfShape5.visible = true;
loveseat.addComponentOrReplace(gltfShape5);

const classicChandelier = new Entity("classicChandelier");
engine.addEntity(classicChandelier);
classicChandelier.setParent(_scene);
const transform19 = new Transform({
  position: new Vector3(25, 4, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
classicChandelier.addComponentOrReplace(transform19);

const atomicLight = new Entity("atomicLight");
engine.addEntity(atomicLight);
atomicLight.setParent(_scene);
const transform20 = new Transform({
  position: new Vector3(9.5, 4, 21),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
atomicLight.addComponentOrReplace(transform20);

const squareCanopy = new Entity("squareCanopy");
engine.addEntity(squareCanopy);
squareCanopy.setParent(_scene);
const transform21 = new Transform({
  position: new Vector3(7, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
squareCanopy.addComponentOrReplace(transform21);
const gltfShape6 = new GLTFShape(
  "bc789145-d689-4559-a1ff-71c2da79b7de/Canopy_01/Canopy_01.glb"
);
gltfShape6.withCollisions = true;
gltfShape6.isPointerBlocker = true;
gltfShape6.visible = true;
squareCanopy.addComponentOrReplace(gltfShape6);

const birdSNestFernContainer = new Entity("birdSNestFernContainer");
engine.addEntity(birdSNestFernContainer);
birdSNestFernContainer.setParent(_scene);
const transform22 = new Transform({
  position: new Vector3(31.5, 0, 14.19916820526123),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(
    1.1841177940368652,
    1.6046932935714722,
    1.5000046491622925
  ),
});
birdSNestFernContainer.addComponentOrReplace(transform22);
const gltfShape7 = new GLTFShape(
  "6aeafe19-cc0d-42ec-b7da-51104af39778/PlantPot_02/PlantPot_02.glb"
);
gltfShape7.withCollisions = true;
gltfShape7.isPointerBlocker = true;
gltfShape7.visible = true;
birdSNestFernContainer.addComponentOrReplace(gltfShape7);

const birdSNestFernContainer2 = new Entity("birdSNestFernContainer2");
engine.addEntity(birdSNestFernContainer2);
birdSNestFernContainer2.setParent(_scene);
birdSNestFernContainer2.addComponentOrReplace(gltfShape7);
const transform23 = new Transform({
  position: new Vector3(40, 0, 14.19916820526123),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(
    1.1841180324554443,
    1.6046932935714722,
    1.5000051259994507
  ),
});
birdSNestFernContainer2.addComponentOrReplace(transform23);

const birdSNestFernContainer3 = new Entity("birdSNestFernContainer3");
engine.addEntity(birdSNestFernContainer3);
birdSNestFernContainer3.setParent(_scene);
birdSNestFernContainer3.addComponentOrReplace(gltfShape7);
const transform24 = new Transform({
  position: new Vector3(17.5, 0, 14.19916820526123),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(
    1.1841180324554443,
    1.6046932935714722,
    1.5000051259994507
  ),
});
birdSNestFernContainer3.addComponentOrReplace(transform24);

const birdSNestFernContainer4 = new Entity("birdSNestFernContainer4");
engine.addEntity(birdSNestFernContainer4);
birdSNestFernContainer4.setParent(_scene);
birdSNestFernContainer4.addComponentOrReplace(gltfShape7);
const transform25 = new Transform({
  position: new Vector3(9, 0, 14.19916820526123),
  rotation: new Quaternion(
    -1.5394153601527394e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(
    1.1841182708740234,
    1.6046932935714722,
    1.5000056028366089
  ),
});
birdSNestFernContainer4.addComponentOrReplace(transform25);

const loveseat2 = new Entity("loveseat2");
engine.addEntity(loveseat2);
loveseat2.setParent(_scene);
loveseat2.addComponentOrReplace(gltfShape5);
const transform26 = new Transform({
  position: new Vector3(13.395305633544922, 0, 14.731977462768555),
  rotation: new Quaternion(
    -1.4282873903300537e-15,
    0.7071068286895752,
    -8.429369557916289e-8,
    0.7071068286895752
  ),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955),
});
loveseat2.addComponentOrReplace(transform26);

const coinGeckoPot = new Entity("coinGeckoPot");
engine.addEntity(coinGeckoPot);
coinGeckoPot.setParent(_scene);
const transform27 = new Transform({
  position: new Vector3(43.5, 0, 43.424381256103516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
coinGeckoPot.addComponentOrReplace(transform27);
const gltfShape8 = new GLTFShape(
  "19ff62b6-e28c-491f-b2eb-8118f2e429a7/GeckoBush_01/GeckoBush_01.glb"
);
gltfShape8.withCollisions = true;
gltfShape8.isPointerBlocker = true;
gltfShape8.visible = true;
coinGeckoPot.addComponentOrReplace(gltfShape8);

const coinGeckoPot2 = new Entity("coinGeckoPot2");
engine.addEntity(coinGeckoPot2);
coinGeckoPot2.setParent(_scene);
coinGeckoPot2.addComponentOrReplace(gltfShape8);
const transform28 = new Transform({
  position: new Vector3(5.5, 0, 43.424381256103516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
coinGeckoPot2.addComponentOrReplace(transform28);

const coinGeckoPot3 = new Entity("coinGeckoPot3");
engine.addEntity(coinGeckoPot3);
coinGeckoPot3.setParent(_scene);
coinGeckoPot3.addComponentOrReplace(gltfShape8);
const transform29 = new Transform({
  position: new Vector3(5.5, 0, 14.424381256103516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
coinGeckoPot3.addComponentOrReplace(transform29);

const coinGeckoPot4 = new Entity("coinGeckoPot4");
engine.addEntity(coinGeckoPot4);
coinGeckoPot4.setParent(_scene);
coinGeckoPot4.addComponentOrReplace(gltfShape8);
const transform30 = new Transform({
  position: new Vector3(43.5, 0, 14.424381256103516),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
coinGeckoPot4.addComponentOrReplace(transform30);

const roofWhiteSmall = new Entity("roofWhiteSmall");
engine.addEntity(roofWhiteSmall);
roofWhiteSmall.setParent(_scene);
const transform31 = new Transform({
  position: new Vector3(
    44.78775802612305,
    4.583802604675293,
    44.271339416503906
  ),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(20.14666374206543, 1, 15.304259872436523),
});
roofWhiteSmall.addComponentOrReplace(transform31);
const gltfShape9 = new GLTFShape(
  "dab40751-bb69-4b3b-a0d4-bb44d676a45c/WhiteRoof_Small.glb"
);
gltfShape9.withCollisions = true;
gltfShape9.isPointerBlocker = true;
gltfShape9.visible = true;
roofWhiteSmall.addComponentOrReplace(gltfShape9);

const atomicLight2 = new Entity("atomicLight2");
engine.addEntity(atomicLight2);
atomicLight2.setParent(_scene);
const transform32 = new Transform({
  position: new Vector3(9.5, 4, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
atomicLight2.addComponentOrReplace(transform32);

const atomicLight3 = new Entity("atomicLight3");
engine.addEntity(atomicLight3);
atomicLight3.setParent(_scene);
const transform33 = new Transform({
  position: new Vector3(39, 4, 38),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
atomicLight3.addComponentOrReplace(transform33);

const atomicLight4 = new Entity("atomicLight4");
engine.addEntity(atomicLight4);
atomicLight4.setParent(_scene);
const transform34 = new Transform({
  position: new Vector3(39, 4, 20),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1),
});
atomicLight4.addComponentOrReplace(transform34);

const wallPlainWhite6 = new Entity("wallPlainWhite6");
engine.addEntity(wallPlainWhite6);
wallPlainWhite6.setParent(_scene);
wallPlainWhite6.addComponentOrReplace(gltfShape2);
const transform35 = new Transform({
  position: new Vector3(
    43.236175537109375,
    8.801422119140625,
    13.61660041809082
  ),
  rotation: new Quaternion(0, 0, 0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0420074462890625, 9.39175033569336, 1),
});
wallPlainWhite6.addComponentOrReplace(transform35);

const wallPlainGlass = new Entity("wallPlainGlass");
engine.addEntity(wallPlainGlass);
wallPlainGlass.setParent(_scene);
wallPlainGlass.addComponentOrReplace(gltfShape3);
const transform36 = new Transform({
  position: new Vector3(20.070968627929688, 0, 13.65268325805664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.75, 1.679750919342041, 1),
});
wallPlainGlass.addComponentOrReplace(transform36);

// Glass Doors

const glassDoorRight = new Entity("glassDoorRight");
engine.addEntity(glassDoorRight);
glassDoorRight.setParent(_scene);
const transform291 = new Transform({
  position: new Vector3(24.8, 0, 13.65268325805664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.36, 1.679750919342041, 1),
});
glassDoorRight.addComponentOrReplace(transform291);
glassDoorRight.addComponentOrReplace(gltfShape3);

const glassDoorLeft = new Entity("glassDoorLeft");
engine.addEntity(glassDoorLeft);
glassDoorLeft.setParent(_scene);
glassDoorLeft.addComponentOrReplace(gltfShape3);
const transform301 = new Transform({
  position: new Vector3(29.25, 0, 13.65268325805664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.35, 1.679750919342041, 1),
});
glassDoorLeft.addComponentOrReplace(transform301);

// Define open and closed positions for both door sides
const doorLClosed = new Vector3(29.25, 0, 13.65268325805664);
const doorLOpen = new Vector3(34, 0, 13.65268325805664);
const doorRClosed = new Vector3(24.8, 0, 13.65268325805664);
const doorROpen = new Vector3(20, 0, 13.65268325805664);

// This parent entity holds the state for both door sides
const doorParent = new Entity();
doorParent.addComponent(
  new Transform({
    position: new Vector3(0, 0, 0),
  })
);

engine.addEntity(doorParent);

// Set the doorParent as a parent of both door sides
glassDoorLeft.setParent(doorParent);
glassDoorRight.setParent(doorParent);

//Opening and Closing Door on Trigger
const trigger = new Entity();
engine.addEntity(trigger);
trigger.addComponent(
  new Transform({
    position: new Vector3(25, 0.88, 14),
  })
);

trigger.addComponent(
  new utils.TriggerComponent(
    new utils.TriggerBoxShape(new Vector3(8.5, 3, 8), Vector3.Zero()),
    {
      onCameraEnter: () => {
        glassDoorLeft.addComponentOrReplace(
          new utils.MoveTransformComponent(doorLClosed, doorLOpen, 2)
        );
        glassDoorRight.addComponentOrReplace(
          new utils.MoveTransformComponent(doorRClosed, doorROpen, 2)
        );
      },
      onCameraExit: () => {
        // close doors
        glassDoorLeft.addComponentOrReplace(
          new utils.MoveTransformComponent(doorLOpen, doorLClosed, 2)
        );
        glassDoorRight.addComponentOrReplace(
          new utils.MoveTransformComponent(doorROpen, doorRClosed, 2)
        );
      },
    }
  )
);
// Finish Glass Door

const channelId = Math.random().toString(16).slice(2);
const channelBus = new MessageBus();
const inventory = createInventory(UICanvas, UIContainerStack, UIImage);
const options = { inventory };

const script1 = new Script1();
const script2 = new Script2();
script1.init(options);
script2.init(options);
script1.spawn(
  classicChandelier,
  { startOn: true, clickable: true },
  createChannel(channelId, classicChandelier, channelBus)
);
script2.spawn(
  atomicLight,
  { startOn: true, clickable: true },
  createChannel(channelId, atomicLight, channelBus)
);
script2.spawn(
  atomicLight2,
  { startOn: true, clickable: true },
  createChannel(channelId, atomicLight2, channelBus)
);
script2.spawn(
  atomicLight3,
  { startOn: true, clickable: true },
  createChannel(channelId, atomicLight3, channelBus)
);
script2.spawn(
  atomicLight4,
  { startOn: true, clickable: true },
  createChannel(channelId, atomicLight4, channelBus)
);
