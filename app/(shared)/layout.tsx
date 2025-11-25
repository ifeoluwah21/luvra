import React from "react";
const AuctionsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <section className="px-4 py-4 md:px-20 lg:px-20">{children}</section>;
};

export default AuctionsLayout;
