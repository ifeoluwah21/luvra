import React from "react";
const AuctionsLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section className="3xl:max-w-4/5 mx-auto px-4 py-4 md:px-20 lg:px-30">
      {children}
    </section>
  );
};

export default AuctionsLayout;
