"use client";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow min-h-[68px]">
      <div>
        <span className="font-inter font-semibold text-2xl leading-[150%] tracking-normal">
          ticktock
        </span>
        <span className=" ml-8 font-inter font-semibold text-sm leading-[150%] tracking-normal">
          Timesheets
        </span>
      </div>
      <div className="font-sans text-sm text-body">John Doe ▾</div>
    </header>
  );
}
