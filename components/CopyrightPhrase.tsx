import { cacheLife } from "next/cache";
import React from "react";

const CopyrightPhrase: React.FC = async () => {
  "use cache";
  cacheLife("seconds");
  const time = new Date().getMinutes();
  return (
    <p>
      LUVRA &copy; <span>{time}</span>. All rights reserved.
    </p>
  );
};

export default CopyrightPhrase;
