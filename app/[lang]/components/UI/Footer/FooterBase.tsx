import React from "react";
import Container from "../Container";

const FooterBase = ({ data }: any) => {
  return (
    <div className="text-xs text-light-60 dark:text-dark-60 h-10 bg-light-30 dark:bg-dark-30 items-center mt-10 flex border-t dark:border-t-white/20">
      <Container>{data.text}</Container>
    </div>
  );
};

export default FooterBase;
