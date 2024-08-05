import './Button.css';

const Button = ({ text, onClick }) => {
  return (
    <a className="button" onClick={onClick}>
      {text}
    </a>
  );
}

export default Button;