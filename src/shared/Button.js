const Button = ({ onClick, type, children, state, className }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={state}
      className={`h-[40px] whitespace-nowrap text-[14px] text-black border-borderGray border-2 rounded-lg px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
