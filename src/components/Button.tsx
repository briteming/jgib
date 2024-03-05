import React from "react";

export default function Button({ children }: React.PropsWithChildren) {
  return (
    <button type="button" className="border rounded-md p-2 hover:bg-blue-100">
      {children}
    </button>
  );
}
