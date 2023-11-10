// This file is part of Invenio-RDM-Records
// Copyright (C) 2020-2023 CERN.
// Copyright (C) 2020-2022 Northwestern University.
// Copyright (C) 2021 Graz University of Technology.
//
// Invenio-RDM-Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FieldLabel, FormEditorField } from "react-invenio-forms";
import { AdditionalDescriptionsField } from "./components";
import { i18next } from "@translations/invenio_rdm_records/i18next";

export class DescriptionsField extends Component {
  render() {
    const { fieldPath, label, labelIcon, options, recordUI } = this.props;
    return (
      <>
        <FormEditorField
          className="description-field rel-mb-1 rel-mt-2"
          fieldPath={fieldPath}
          label={<FieldLabel htmlFor={fieldPath} icon={labelIcon} label={label} />}
          optimized
        />
        <AdditionalDescriptionsField
          recordUI={recordUI}
          options={options}
          fieldPath="metadata.additional_descriptions"
        />
      </>
    );
  }
}

DescriptionsField.propTypes = {
  fieldPath: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelIcon: PropTypes.string,
  recordUI: PropTypes.object,
  options: PropTypes.object.isRequired,
};

DescriptionsField.defaultProps = {
  label: i18next.t("Description"),
  labelIcon: "pencil",
  recordUI: undefined,
};
