import { useEffect } from "react";
import maplibregl from "maplibre-gl";

const useLayerToggle = (map: maplibregl.Map | null, layerId: string, isVisible: boolean) => {
  useEffect(() => {
    if (!map) return;
    
    // マップが読み込まれ、レイヤーが存在するかチェック
    if (!map.isStyleLoaded() || !map.getLayer(layerId)) {
      return;
    }
    
    // レイヤーの表示/非表示を切り替え
    map.setLayoutProperty(layerId, "visibility", isVisible ? "visible" : "none");
  }, [map, layerId, isVisible]);
};

export default useLayerToggle;