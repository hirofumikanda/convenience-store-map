import { useState } from "react";
import ChainSelector from "./ChainSelector";
import LayerToggle from "./LayerToggle";
import Legend from "./Legend";
import useMapInit from "../hooks/useMapInit";
import useMapFilter from "../hooks/useMapFilter";
import useLayerToggle from "../hooks/useLayerToggle";

const MapView = () => {
  const [selectedChain, setSelectedChain] = useState<string>("all");
  const [isDidLayerVisible, setIsDidLayerVisible] = useState<boolean>(true);
  
  const { mapContainerRef, mapRef } = useMapInit();
  useMapFilter(mapRef.current, selectedChain);
  useLayerToggle(mapRef.current, "did", isDidLayerVisible);

  return (
    <>
      <ChainSelector 
        selectedChain={selectedChain} 
        onChainChange={setSelectedChain} 
      />
      <LayerToggle 
        isVisible={isDidLayerVisible}
        onToggle={setIsDidLayerVisible}
        label="人口集中地区レイヤー"
      />
      <Legend selectedChain={selectedChain} />
      <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default MapView;
