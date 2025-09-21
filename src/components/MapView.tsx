import { useState } from "react";
import ChainSelector from "./ChainSelector";
import Legend from "./Legend";
import useMapInit from "../hooks/useMapInit";
import useMapFilter from "../hooks/useMapFilter";

const MapView = () => {
  const [selectedChain, setSelectedChain] = useState<string>("all");
  
  const { mapContainerRef, mapRef } = useMapInit();
  useMapFilter(mapRef.current, selectedChain);

  return (
    <>
      <ChainSelector 
        selectedChain={selectedChain} 
        onChainChange={setSelectedChain} 
      />
      <Legend selectedChain={selectedChain} />
      <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default MapView;
