import "./Button.css";

function Button({
  children,
  href,
  icon,
  className = "",
}) {
  return (
    <a
      href={href}
      className={`button ${className}`}
    >
      <span>{children}</span>
      {icon}
    </a>
  );
}

export default Button;