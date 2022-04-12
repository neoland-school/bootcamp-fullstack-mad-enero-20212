import { useTranslation } from "react-i18next";
import { withTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import React, { H1 } from "react";

function MyMultilanguagePage() {
  return (
    <Trans>
      <h1>Welcome to React</h1>
    </Trans>
  );
}

export default MyMultilanguagePage;
