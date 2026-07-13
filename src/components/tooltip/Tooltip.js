import { Component } from "react";
import "./tooltip.css";

const icons = [
  { emoji: "🏠", label: "Home" },
  { emoji: "📧", label: "Email" },
  { emoji: "⚙️", label: "Settings" },
];

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoveredIndex: null,
    };
  }

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { hoveredIndex } = this.state;

    return (
      <div className="container">
        {icons.map((icon, index) => (
          <div
            key={icon.label}
            className="box"
            onMouseEnter={() => this.handleMouseEnter(index)}
            onMouseLeave={this.handleMouseLeave}
          >
            {hoveredIndex === index && (
              <div className="tooltip">{icon.label}</div>
            )}

            <span>{icon.emoji}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Tooltip;
