interface IButton {
   className: string;
   path?: string;
   text: string;
   icon?: any;
}

const Button = ({ className, path, text, icon }: IButton) => {
  return (
   <a 
   href={path} 
   className={className}
   >
      {text} 
      {icon && icon}
   </a>
  )
}

export default Button;

