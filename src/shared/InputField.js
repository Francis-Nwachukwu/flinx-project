const InputField = ({
  type,
  placeholder,
  disabled,
  onChange,
  name,
  id,
  onBlur,
  className,
  value,
  defaultValue,
  htmlFor,
  onFocus,
  label,
  autoComplete,
  required,
  divClass,
  autoFocus,
  ref,
  onKeyDown,
}) => {
  const defaultClass =
    "h-[45px] px-2 max-md:h-[40px] w-full border border-[#AAAAAA] rounded-lg placeholder:text-[#AAAAAA] placeholder:text-[14px] max-md:placeholder:text-[12px]";

  return (
    <div className={`flex flex-col ${divClass}`}>
      {label && (
        <div className="flex items-center">
          <label
            className="text-[14px] max-md:text-[12px] mb-[5px] font-medium"
            htmlFor={htmlFor}
          >
            {label}
          </label>
          {required ? <div className="text-red-500">*</div> : <></>}
        </div>
      )}
      <input
        ref={ref}
        autoFocus={autoFocus}
        required={required}
        className={`${className} ${defaultClass}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        name={name}
        id={id}
        onBlur={onBlur}
        value={value}
        onFocus={onFocus}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InputField;
