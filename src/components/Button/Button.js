import './Button.scss';

const Button = ({ btnClassName, btnLabel, onClick, btnType }) => {

  return (
    <button 
    className={btnClassName} 
    type={btnType} 
    onClick={onClick}>{btnLabel}</button>
  )
}

export default Button;
