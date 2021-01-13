/**
 * Made by Haowen Liu in 2021
 * Component for creating headers with banners.
 */

import React from "react";

class BannerHeaderProps {
  color: string = "";
}

export default function BannerHeader(
  props: React.PropsWithChildren<BannerHeaderProps>
) {
  return (
    <div
      className={`text-center bg-${props.color} mt-48 mb-12 leading-loose py-6 text-4xl font-bold`}
    >
      {props.children}
    </div>
  );
}
