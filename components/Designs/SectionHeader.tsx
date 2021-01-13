/**
 * Made by Haowen Liu in 2021
 * Component for creating a centered section header.
 */

import React from "react";

class SectionHeaderProps {}

export default function SectionHeader(
  props: React.PropsWithChildren<SectionHeaderProps>
) {
  return <div className="text-3xl text-center m-12 font-bold">{props.children}</div>;
}