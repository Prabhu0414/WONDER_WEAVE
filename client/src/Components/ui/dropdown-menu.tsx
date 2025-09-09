import React, { useState, useRef, useEffect, createContext, useContext, forwardRef } from "react";
import type { ReactNode, HTMLAttributes, MouseEvent as ReactMouseEvent } from "react";

interface DropdownMenuContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropdownMenuContext = createContext<DropdownMenuContextProps | undefined>(undefined);

export const DropdownMenu: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = "" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className={`relative inline-block ${className}`} ref={ref}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
};

export const DropdownMenuTrigger = forwardRef<HTMLDivElement, { asChild?: boolean; children: ReactNode; className?: string }>(
  ({ asChild, children, className = "" }, ref) => {
    const ctx = useContext(DropdownMenuContext);
    if (!ctx) throw new Error("DropdownMenuTrigger must be used within DropdownMenu");
    const { open, setOpen } = ctx;
    const handleClick = (e: ReactMouseEvent) => {
      e.stopPropagation();
      setOpen(!ctx.open);
    };
    if (asChild && React.isValidElement(children)) {
      const childProps = (children as React.ReactElement<any>).props as { className?: string };
      return React.cloneElement(children as React.ReactElement<any>, {
        ref,
        onClick: handleClick,
        className: `${childProps.className || ""} ${className}`,
      });
    }
    return (
      <div ref={ref} onClick={handleClick} className={`cursor-pointer select-none ${className}`}>
        {children}
      </div>
    );
  }
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export const DropdownMenuContent: React.FC<{ children: ReactNode; className?: string; align?: string; forceMount?: boolean }> = ({ children, className = "", forceMount }) => {
  const ctx = useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenuContent must be used within DropdownMenu");
  const { open } = ctx;
  if (!open && !forceMount) return null;
  return (
    <div className={`absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 ${className}`}>
      {children}
    </div>
  );
};

export const DropdownMenuItem: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => {
  const ctx = useContext(DropdownMenuContext);
  const handleClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (ctx) ctx.setOpen(false);
    if (props.onClick) props.onClick(e);
  };
  return (
    <div className={`px-4 py-2 text-sm cursor-pointer ${className}`} {...props} onClick={handleClick}>
      {children}
    </div>
  );
};

export const DropdownMenuSeparator: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`my-1 border-t border-gray-200 ${className}`} />
);
