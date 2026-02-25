import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[8px] w-full">
        {label && (
          <label className="text-body-large font-bold text-text-main">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full min-h-[167px] p-[24px] rounded-[10px] border-[2px] 
            bg-white text-text-main text-body-large
            placeholder:text-text-main/50
            focus:outline-none focus:border-main focus:ring-1 focus:ring-main
            transition-colors resize-y
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-bg-2"}
            ${className}
          `}
          {...props}
        />
        {error && (
          <span className="text-body-caption text-red-500 pl-[10px]">{error}</span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";