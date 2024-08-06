import './Background.css';

const Background = ({ gradient }) => {
  const gradients = {
    initial: 'radial-gradient(circle, rgba(255, 87, 51, 0.8), rgba(255, 252, 51, 0.8))',
    transition: 'radial-gradient(circle, rgba(128, 0, 128, 0.8), rgba(0, 0, 255, 0.8))'
  };

  const currentGradient = gradients[gradient] || gradients.initial;

  return (
    <div className="neon-background" style={{ background: `black` }}>
      <div className="gradient-spot" style={{ background: currentGradient }} />
    </div>
  );
};

export default Background;