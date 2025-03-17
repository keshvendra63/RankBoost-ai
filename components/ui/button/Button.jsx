import React, { forwardRef } from "react";

const Button = forwardRef(({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"; // Span for "asChild" support

  return (
    <Comp className={`btn ${variant} ${size} ${className}`} ref={ref} {...props} />
  );
});

Button.displayName = "Button";

export { Button };
