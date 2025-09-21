interface LegendProps {
  selectedChain: string;
}

const Legend = ({ selectedChain }: LegendProps) => {
  const legendItems = [
    { chain: "セブンイレブン", color: "rgb(255, 0, 0)", variants: ["セブンイレブン", "7-Eleven"] },
    { chain: "ファミリーマート", color: "rgb(0, 128, 0)", variants: ["ファミリーマート", "ファミマ"] },
    { chain: "ローソン", color: "rgb(64, 158, 255)", variants: ["ローソン", "LAWSON"] },
    { chain: "ミニストップ", color: "rgb(0, 0, 255)", variants: ["ミニストップ", "Mini Stop"] },
    { chain: "サンクス", color: "rgb(255, 215, 0)", variants: ["サンクス"] }
  ];

  // 選択されたチェーンがある場合は、そのチェーンのみ表示
  const filteredItems = selectedChain === "all" ? legendItems : legendItems.filter(item => item.chain === selectedChain);

  return (
    <div style={{
      position: "absolute",
      bottom: "10px",
      left: "10px",
      zIndex: 1000,
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      padding: "12px",
      minWidth: "150px"
    }}>
      <h4 style={{
        margin: "0 0 8px 0",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#333"
      }}>
        凡例
      </h4>
      {filteredItems.map((item) => (
        <div key={item.chain} style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "6px",
          fontSize: "12px"
        }}>
          <div style={{
            width: "16px",
            height: "16px",
            backgroundColor: item.color,
            borderRadius: "3px",
            marginRight: "8px",
            border: "1px solid #ddd"
          }}></div>
          <div>
            <div style={{ fontWeight: "500", color: "#333" }}>{item.chain}</div>
          </div>
        </div>
      ))}
      {selectedChain === "all" && (
        <div style={{
          marginTop: "8px",
          paddingTop: "8px",
          borderTop: "1px solid #eee",
          fontSize: "10px",
          color: "#666"
        }}>
          • 店舗アイコン: 各チェーンの位置
          <br />
          • カバレッジエリア: 推定商圏範囲
        </div>
      )}
    </div>
  );
};

export default Legend;