interface ChainSelectorProps {
  selectedChain: string;
  onChainChange: (chain: string) => void;
}

const ChainSelector = ({ selectedChain, onChainChange }: ChainSelectorProps) => {
  return (
    <div style={{
      position: "absolute",
      top: "10px",
      left: "10px",
      zIndex: 1000,
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      padding: "8px"
    }}>
      <select
        value={selectedChain}
        onChange={(e) => onChainChange(e.target.value)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "6px 12px",
          fontSize: "14px",
          backgroundColor: "white",
          cursor: "pointer"
        }}
      >
        <option value="all">全てのコンビニ</option>
        <option value="セブンイレブン">セブンイレブン</option>
        <option value="ファミリーマート">ファミリーマート</option>
        <option value="ローソン">ローソン</option>
        <option value="サンクス">サンクス</option>
        <option value="ミニストップ">ミニストップ</option>
      </select>
    </div>
  );
};

export default ChainSelector;