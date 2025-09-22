interface LayerToggleProps {
  isVisible: boolean;
  onToggle: (visible: boolean) => void;
  label: string;
}

const LayerToggle = ({ isVisible, onToggle, label }: LayerToggleProps) => {
  return (
    <div style={{
      position: "absolute",
      top: "60px", // プルダウンメニューの下
      left: "10px",
      zIndex: 1000,
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      padding: "8px 12px"
    }}>
      <label style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "14px",
        userSelect: "none"
      }}>
        <div style={{
          position: "relative",
          width: "40px",
          height: "20px",
          backgroundColor: isVisible ? "#ffff0066" : "#ccc",
          borderRadius: "10px",
          transition: "background-color 0.3s",
          marginRight: "8px"
        }}>
          <div style={{
            position: "absolute",
            top: "2px",
            left: isVisible ? "22px" : "2px",
            width: "16px",
            height: "16px",
            backgroundColor: "white",
            borderRadius: "50%",
            transition: "left 0.3s",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
          }}></div>
        </div>
        <span style={{ color: "#333" }}>{label}</span>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => onToggle(e.target.checked)}
          style={{ 
            position: "absolute",
            opacity: 0,
            cursor: "pointer"
          }}
        />
      </label>
    </div>
  );
};

export default LayerToggle;