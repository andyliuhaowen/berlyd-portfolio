/**
 * Made by Haowen Liu in 2021
 * Component for creating a centered section header.
 */

import React from "react";

class SectionHeaderProps {}

export default function SectionHeader(
  props: React.PropsWithChildren<SectionHeaderProps>
) {
  return (
    <div className="text-2xl mt-24 mb-12 text-center font-bold md:text-3xl md:mt-36 md:mb-16">
      {props.children}
    </div>
  );
}
