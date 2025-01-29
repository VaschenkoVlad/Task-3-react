import React from "react";
import "../style/main.css"

const ColorBox = ({ color }) => (
    <div className="color-box1" style={{ backgroundColor: color }}></div>
  );
  
  // Компонент палітри кольорів
  const ColorPalette = ({ title, emoji, colors, link }) => (
    <Link to={link} className="palette-link">
      <div className="box-container">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
        <h4>{title}</h4>
        <p>{emoji}</p>
      </div>
    </Link>
  );
  
  // Основний компонент
  const Main = () => {
    // Масиви палітр
    const palettes = [
      {
        title: "Material UI Colors",
        emoji: "🎨",
        link: "/material-ui-colors",
        colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#009688", "#4CAF50", "#8BC34A", "#CDDC39"],
      },
      {
        title: "Flat UI Colors v1",
        emoji: "🤙",
        link: "/flat-ui-colors-v1",
        colors: ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50"],
      },
      {
        title: "Flat UI Colors Dutch",
        emoji: "😎",
        link: "/flat-ui-colors-dutch",
        colors: ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67", "#F79F1F", "#A3CB38", "#1289A7", "#D980FA", "#B53471"],
      },
      {
        title: "Flat UI Colors American",
        emoji: "🤔",
        link: "/flat-ui-colors-american",
        colors: ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#dfe6e9", "#00b894", "#00cec9", "#0984e3", "#6c5ce7", "#b2bec3"],
      },
      {
        title: "Flat UI Colors Aussie",
        emoji: "😍",
        link: "/flat-ui-colors-aussie",
        colors: ["#f6e58d", "#ffbe76", "#ff7979", "#badc58", "#dff9fb", "#f9ca24", "#f0932b", "#eb4d4b", "#6ab04c", "#c7ecee"],
      },
      {
        title: "Flat UI Colors British",
        emoji: "😔",
        link: "/flat-ui-colors-british",
        colors: ["#00a8ff", "#9c88ff", "#fbc531", "#4cd137", "#487eb0", "#0097e6", "#8c7ae6", "#e1b12c", "#44bd32", "#40739e"],
      },
    ];
  
    return (
      <section className="main">
        <div className="container-box1">
          {palettes.map((palette, index) => (
            <ColorPalette
              key={index}
              title={palette.title}
              emoji={palette.emoji}
              link={palette.link}
              colors={palette.colors}
            />
          ))}
        </div>
      </section>
    );
  };
  

export default Main;