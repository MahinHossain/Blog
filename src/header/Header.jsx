import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headertitleSm">React & Node</span>
        <span className="headertitlezLg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://images.unsplash.com/photo-1547039996-61c1135690c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1797&q=80"
      />
    </div>
  );
}
