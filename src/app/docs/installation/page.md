---
title: Installation
nextjs:
  metadata:
    title: Salesforce Automation Framework - Installation
    description: Deploy the Salesforce Automation Framework into an org with the sf CLI or a release zip.
---

The framework is not distributed as a managed or unlocked package. Deploy
its source directly into your org, in your own namespace, so every class is
yours to extend or override.

---

## Requirements

| Requirement | Version                       |
| ----------- | ----------------------------- |
| sf CLI      | latest (`sf update` to check) |
| API access  | Metadata API-enabled org      |

## Deploy with the sf CLI

Clone or download the repository, authenticate the sf CLI against your
target org, then deploy the `src` directory:

```bash
sf project deploy start -d src
```

## Deploy with a release zip

If you don't have the sf CLI available, download the zip attached to the
latest [release](https://github.com/chiefpansancolt/salesforce-automation-framework/releases)
and deploy it through Workbench (**Migration → Deploy**).

## Post-install steps

Deploying the source does not grant access on its own. Before building your
first trigger pipeline, work through [Configuration](/docs/configuration) to
assign the permission sets that control who the framework runs for.
