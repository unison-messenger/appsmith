import React from "react";
import { importSvg } from "@appsmith/ads-old";

const AppsmithLogo = importSvg(
  async () => import("assets/svg/appsmith-logo-no-pad.svg"),
);

function BrandingBadge() {
  return <div />;
}

export default BrandingBadge;
