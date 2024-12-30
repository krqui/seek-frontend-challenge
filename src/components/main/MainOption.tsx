"use client";

import React from "react";

type MainOptionProps = {
  current: boolean;
  value: string;
  text: string;
  setOption: (value: string) => void;
};

export const MainOption: React.FC<MainOptionProps> = ({
  current,
  value,
  text,
  setOption,
}) => {
  const handleClick = () => {
    setOption(value);
  };

  return (
    <div
      className={`flex w-full items-center rounded-[5px] border-[1.5px] border-solid py-[14px] pr-[22px] lg:pr-10 ${
        current ? "border-primary-700" : "cursor-pointer border-[#DEDEDE]"
      }`}
      onClick={handleClick}
    >
      <div>
        <div className="flex h-full w-[52px] items-center justify-center">
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-solid ${
              current ? "border-primary-700" : "border-[#CBCBCB]"
            }`}
          >
            {current && (
              <div className="h-4 w-4 rounded-full bg-primary-700"></div>
            )}
          </div>
        </div>
      </div>
      <span className="text-wrap text-[18px]">{text}</span>
    </div>
  );
};
