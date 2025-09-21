import maplibregl from "maplibre-gl";

export async function onMapLoad(map: maplibregl.Map) {
  const red = await map.loadImage("img/red.png");
  map.addImage("red", red.data);
  const blue = await map.loadImage("img/blue.png");
  map.addImage("blue", blue.data);
  const green = await map.loadImage("img/green.png");
  map.addImage("green", green.data);
  const water = await map.loadImage("img/water.png");
  map.addImage("water", water.data);
  const gold = await map.loadImage("img/gold.png");
  map.addImage("gold", gold.data);
  const black = await map.loadImage("img/black.png");
  map.addImage("black", black.data);
}
