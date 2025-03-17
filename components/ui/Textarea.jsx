import * as React from "react";
// Note: In JavaScript, type interfaces are not supported.
// The original TypeScript interface "TextareaProps" has been omitted.

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
      className={`textarea ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
