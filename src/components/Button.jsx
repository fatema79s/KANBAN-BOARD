import { cva } from "class-variance-authority";

/**
 * Button component with customizable variants, sizes, and states
 *
 * @param {Object} props - The properties object
 * @param {string} props.variant - The variant style of the button (e.g., 'primary', 'secondary', 'destructive')
 * @param {string} props.size - The size of the button (e.g., 'sm', 'lg')
 * @param {boolean} props.isFullWidth - Whether the button should span the full width of its container
 * @param {boolean} props.isDisabled - Whether the button is disabled
 * @param {string} props.className - Additional class names to apply to the button
 * @param {React.ReactNode} props.children - The content to be displayed inside the button
 * @param {Object} props.props - Any additional props to pass to the button element
 * 
 * @returns {JSX.Element} - A customizable button component 
 */


const button = cva("rounded-full px-6 duration-200 text-[13px] font-bold", {
  variants: {
    variant: {
      primary: "text-white bg-main-purple hover:bg-main-purple-hover",
      secondary: "text-main-purple bg-main-purple/10 hover:bg-main-purple/25",
      destructive: "text-white bg-red hover:bg-red-hover",
    },
    size: {
      sm: "h-10",
      lg: "h-12",
    },
    isFullWidth: {
      true: "w-full",
    },
    isDisabled: {
      true: "cursor-not-allowed opacity-25 hover:bg-main-purple",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

const Button = ({
  children,
  variant,
  size,
  isFullWidth,
  className,
  isDisabled,
  ...props
}) => {
  return (
    <button
      className={button({ variant, size, isFullWidth, className, isDisabled })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
