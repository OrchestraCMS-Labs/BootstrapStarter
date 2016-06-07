# Bootstrap Starter

<!-- MarkdownTOC depth=3 -->

1. [Summary](#summary)
    1. [Compatibility](#compatibility)
    1. [Prerequisites](#prerequisites)
    1. [Deployment](#deployment)
    1. [Configuration](#configuration)
1. [Versioning](#versioning)
    1. [Major Versions](#major-versions)
    1. [Minor Versions](#minor-versions)
    1. [Patch Versions](#patch-versions)

<!-- /MarkdownTOC -->

<a name="summary"></a>
## Summary

The Bootstrap Starter includes a very basic page template as a starting point for either site development or to
quickly start working with OrchestraCMS Labs content types.

<a name="compatibility"></a>
### Compatibility

This content type requires a minimum of OrchestraCMS package 7.184 (Winter 2016, v7.3 Build #7.184).

<a name="prerequisites"></a>
### Prerequisites

1. A compatible version of OrchestraCMS is installed in the target Salesforce organization.
2. A site has been created in OrchestraCMS.

<a name="deployment"></a>
### Deployment

1. Zip the contents of resource-bundles/BootstrapHelpers.resource and deploy the compressed file as BootstrapHelpers.resource
2. Deploy the following Visualforce pages to the target Salesforce organization
    1. BootstrapSingleColumn.page

<a name="configuration"></a>
### Configuration

Within the target OrchestraCMS site install the `BootstrapSingleColumn` page template.

<a name="versioning"></a>
## Versioning

Versions of this content type are numbered MAJOR.MINOR.PATCH.

Any modifications to this code outside of this repository are customizations and will impact upgradeability.

<a name="major-versions"></a>
### Major Versions

Major versions introduce new functionality and may break existing implementations.

<a name="minor-versions"></a>
### Minor Versions

Minor versions introduce new functionality, but will not break existing implementations.

<a name="patch-versions"></a>
### Patch Versions

Patches correct defects in the implementation and do not introduce new functionality.
