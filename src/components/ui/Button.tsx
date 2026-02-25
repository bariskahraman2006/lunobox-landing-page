import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  // Temel Özellikler: Flex yapısı, font, geçiş animasyonları (transition) ve disabled state (%40 opaklık)
  "inline-flex items-center justify-center font-nunito transition-all duration-200 ease-out disabled:opacity-40 disabled:pointer-events-none active:duration-100 active:ease-in outline-none",
  {
    variants: {
      variant: {
        // Sarı Buton (Default)
        default:
          "bg-accent-3 text-bg-2 hover:bg-accent-3-hover active:bg-accent-3-hover",
        // Mavi Buton (Secondary)
        secondary:
          "bg-main text-bg-2 hover:bg-main-hover active:bg-main-hover",
      },
      size: {
        // Large Boyut: Mobilde küçülür (h: 48px -> 60px vb.), active stroke mobilde 1px, masaüstünde 2px
        large:
          "h-[48px] md:h-[60px] px-[20px] md:px-[30px] py-[8px] md:py-[10px] rounded-[20px] md:rounded-[40px] gap-[12px] md:gap-[15px] font-extrabold text-[18px] md:text-[30px] leading-[24px] md:leading-[40px] active:ring-[1px] md:active:ring-[2px] active:ring-inset active:ring-bg-2",
        // Medium Boyut: Mobilde hafif küçülür (h: 34px -> 37px), active stroke her zaman 2px
        medium:
          "h-[34px] md:h-[37px] px-[18px] py-[6px] rounded-[20px] gap-[10px] font-bold text-[16px] md:text-[18px] leading-tight active:ring-[2px] active:ring-inset active:ring-bg-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "large",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";