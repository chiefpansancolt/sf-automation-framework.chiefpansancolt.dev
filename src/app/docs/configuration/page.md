---
title: Configuration
nextjs:
  metadata:
    title: Salesforce Automation Framework - Configuration
    description: Permission sets and bypass groups to assign before building your first trigger pipeline.
---

Before implementing a new trigger pipeline, assign the permission sets
below. They control who the framework runs for, not what it does. The
pipeline and handler configuration itself lives in custom metadata, covered
in [Trigger Framework](/docs/trigger-framework).

---

## Permission sets

| Permission set             | Assign to                                                                       |
| -------------------------- | ------------------------------------------------------------------------------- |
| `Trigger_Framework_Access` | Every user who should run any trigger pipeline built on the framework.          |
| `Trigger_Framework_Admin`  | Admins who maintain `Trigger_Pipeline__mdt` and `Trigger_Handler__mdt` records. |

## Bypass groups

Assign the `Exclude_User` permission set group to any integration user that
automation should never run for: data loads, migration users, and similar
service accounts.

`Exclude_User` grants the `Exclude_Trigger` and `Exclude_Flow` custom
permissions. A handler opts into the trigger bypass with
`FeatureManagement.checkPermission('Exclude_Trigger')` inside
`shouldExecute()`; see [Creating a handler](/docs/trigger-framework/handler).
A flow checks `Exclude_Flow` the same way, using a Decision element at the
top of the flow.

{% callout title="Bypass is opt-in per handler" %}
Assigning `Exclude_User` does nothing on its own. Each trigger handler and
flow must explicitly check the corresponding custom permission. That check
is not automatic.
{% /callout %}

See [Permissions](/docs/permissions) for what each permission set, custom
permission, and permission set group grants in detail.
