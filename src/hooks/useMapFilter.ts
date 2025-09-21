import { useEffect } from "react";
import maplibregl from "maplibre-gl";

const useMapFilter = (map: maplibregl.Map | null, selectedChain: string) => {
  const updateLayerFilter = (chain: string) => {
    if (!map) return;
    
    // マップが読み込まれ、レイヤーが存在するかチェック
    if (!map.isStyleLoaded() || !map.getLayer("convenience_store_labels") || !map.getLayer("convenience_store_buffers")) {
      return;
    }
    
    let filter = null;
    
    if (chain === "all") {
      // 全て表示
      filter = null;
    } else if (chain === "ファミリーマート") {
      filter = [
        "any",
        ["in", "ファミリーマート", ["get", "name"]],
        ["in", "FamilyMart", ["get", "name"]],
        ["in", "ファミマ", ["get", "name"]]
      ];
    } else if (chain === "セブンイレブン") {
      filter = [
        "any",
        ["in", "セブンイレブン", ["get", "name"]],
        ["in", "7-Eleven", ["get", "name"]],
        ["in", "Seven-Eleven", ["get", "name"]],
        ["in", "セブン-イレブン", ["get", "name"]]
      ];
    } else if (chain === "ローソン") {
      filter = [
        "any",
        ["in", "ローソン", ["get", "name"]],
        ["in", "LAWSON", ["get", "name"]],
        ["in", "Lawson", ["get", "name"]]
      ];
    } else if (chain === "ミニストップ") {
      filter = [
        "any",
        ["in", "ミニストップ", ["get", "name"]],
        ["in", "Mini Stop", ["get", "name"]],
        ["in", "Ministop", ["get", "name"]]
      ];
    } else if (chain === "サンクス") {
      filter = [
        "any",
        ["in", "サンクス", ["get", "name"]]
      ];
    } else {
      // その他のチェーンの場合
      filter = [
        "in",
        chain,
        ["get", "name"]
      ];
    }
    
    // 両方のレイヤーに同じフィルターを適用
    map.setFilter("convenience_store_labels", filter as maplibregl.FilterSpecification);
    map.setFilter("convenience_store_buffers", filter as maplibregl.FilterSpecification);
  };

  // selectedChainが変更されたときにフィルターを更新
  useEffect(() => {
    console.log("Selected chain changed:", selectedChain);
    updateLayerFilter(selectedChain);
  }, [selectedChain, map]);

  return { updateLayerFilter };
};

export default useMapFilter;