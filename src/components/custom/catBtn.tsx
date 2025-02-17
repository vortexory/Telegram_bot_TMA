import * as React from "react";

export interface CatBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstTitle: string;
  lastTitle: string;
}

const CatBtn = React.forwardRef<HTMLDivElement, CatBtnProps>(
  ({ firstTitle, lastTitle, className, ...props }, ref) => {
    const [toggle, setToggle] = React.useState(true);

    const handleToggle = () => {
      setToggle(!toggle);
    };

    return (
      <div
        ref={ref}
        className={`flex flex-row bg-[#f399321a] rounded-[5px] justify-center ${className}`}
      >
        <button
          {...props}
          className={`py-[10px] px-[53px] flex-grow h-[35px] flex justify-center items-center rounded-[5px] tracking-wide text-white ${
            toggle === true ? "bg-[#F39932]" : ""
          }`}
          onClick={handleToggle}
        >
          {firstTitle}
        </button>
        <button
          {...props}
          className={`py-[10px] px-[53px] h-[35px] flex-grow flex justify-center items-center text-white tracking-wide rounded-[5px] ${
            toggle === false ? "bg-[#F39932]" : ""
          }`}
          onClick={handleToggle}
        >
          {lastTitle}
        </button>
      </div>
    );
  }
);

CatBtn.displayName = "CatBtn";

export { CatBtn };
