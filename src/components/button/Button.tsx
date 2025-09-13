import './button.css';

type buttonProps = {
  className: string;
  label: string;
  onClick?: () => void;
};

const Button = ({ className, label, onClick }: buttonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
