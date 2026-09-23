---
title: Getting Started
nextjs:
  metadata:
    title: Salesforce Automation Framework - Getting Started
    description: Getting started with the Salesforce Automation Framework.
---

The Salesforce Automation Framework is a trigger framework, error logger,
and set of flow templates for building automation on the Salesforce
platform. It is not a managed or unlocked package. It deploys straight from
source using the sf CLI, so every class ships in your org's namespace and is
free to extend.

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Deploy the framework into an org with the sf CLI or a release zip." /%}

{% quick-link title="Trigger Framework" icon="presets" href="/docs/trigger-framework" description="Custom-metadata-driven trigger pipelines and handlers." /%}

{% quick-link title="Error Logger" icon="plugins" href="/docs/error-logger" description="Log exceptions to a queryable Error_Log__c record." /%}

{% quick-link title="Flow Templates" icon="theming" href="/docs/flow-templates" description="Before/after-save and before-delete record-triggered flow starting points." /%}

{% /quick-links %}

---

## What's included

- **Trigger Framework**: a `TriggerPipeline` entry point plus an
  `ATriggerHandler` base class, driven by `Trigger_Pipeline__mdt` and
  `Trigger_Handler__mdt` custom metadata so handlers can be added, removed,
  or reordered without touching a trigger.
- **Error Logger**: a single `ErrorLogger.logError()` call that writes an
  `Error_Log__c` record, ready to page through in a list view or route with
  a flow.
- **Flow templates**: six Record-Triggered Flow templates covering
  before-save, after-save, and before-delete, each with a with-bypass and
  without-bypass variant.
- **Bypass permissions**: `Exclude_Trigger` and `Exclude_Flow` custom
  permissions, plus an `Exclude_User` permission set group, so integration
  users can skip automation without special-casing them in code.

---

## Resources

### License

The Salesforce Automation Framework is available as open source under the
terms of the [MIT License](https://github.com/chiefpansancolt/salesforce-automation-framework/blob/main/LICENSE).

### Change Log

See the [change log](/docs/change-log) for release history.

---

## Getting help

### Contributing

Bug reports, feature requests, and pull requests are welcome on GitHub at
[chiefpansancolt/salesforce-automation-framework](https://github.com/chiefpansancolt/salesforce-automation-framework).
See [how to contribute](/docs/how-to-contribute) for details.

### Join the community

Join the [Discord server](https://discord.gg/FPfA3w6) to ask questions or
talk through a trigger pipeline design.
