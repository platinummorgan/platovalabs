import React from "react";

type AccessibleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  ariaLabel?: string;
  className?: string;
};

const AccessibleButton = React.forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ children, ariaLabel, className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

AccessibleButton.displayName = "AccessibleButton";

export default AccessibleButton;
