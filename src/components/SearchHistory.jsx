import React from "react";

export default function SearchHistory({ history, onSelect, onDelete }) {
  return (
    <div className="history-wrap">
      <div className="history-header">
        <strong>Recent Searches</strong>
      </div>

      <div className="history-list">
        {history.length === 0 ? (
          <div className="history-empty">No recent searches</div>
        ) : (
          history.map((item, index) => (
            <div key={index} className="history-chip">
              <span onClick={() => onSelect(item)}>{item}</span>
              <button className="delete-btn" onClick={() => onDelete(item)}>✕</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
