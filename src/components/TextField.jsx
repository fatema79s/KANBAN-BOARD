import clsx from "clsx";

/**
 * TextField component to render an input field with optional validation
 * 
 * @param {Object} props - The properties object
 * @param {string} props.placeholder - Placeholder text for the input field
 * @param {boolean} props.isInvalid - Whether the input field has an error state
 * @param {string} props.name - The name attribute of the input field
 * @param {boolean} props.required - Whether the input field is required
 * @param {string} props.defaultValue - The default value of the input field
 * 
 * @returns {JSX.Element} - A text input field component
 */


const TextField = ({
  placeholder,
  isInvalid,
  name,
  required,
  defaultValue,
}) => {
  return (
    <div className="relative flex min-w-80 flex-1 items-center">
      {isInvalid && (
        <span className="absolute right-4 text-body-l text-red">
          Can’t be empty
        </span>
      )}
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className={clsx(
          "w-full rounded-[4px] border border-medium-grey/25 py-2 pl-4 text-body-l",
          {
            "border-red pr-32": isInvalid,
            "pr-4": !isInvalid,
          },
        )}
      />
    </div>
  );
};

export default TextField;
