"use client";
import React from "react";

type DescParserProps = {
  description: string;
};
const DescParser: React.FC<DescParserProps> = ({ description }) => {
  const htmlString = description;
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const paragraphs = doc.getElementsByTagName("p");
  const paragraphContent = Array.from(paragraphs).map(
    (paragraph) => paragraph.textContent,
  )[0];

  return paragraphContent
    ? paragraphContent
    : doc.getElementsByTagName("body")[0].textContent;
};

export default DescParser;
