---
title: Permissions
nextjs:
  metadata:
    title: Salesforce Automation Framework - Permissions
    description: Reference for every custom permission, permission set, and permission set group the framework ships.
---

The framework ships two custom permissions, four permission sets, and one
permission set group. This page explains what each one does. For which ones
to assign and when, see [Configuration](/docs/configuration).

---

## Custom permissions

### Exclude Trigger

`Exclude_Trigger`. When assigned to a user, any trigger handler that checks
this permission in `shouldExecute()` will not execute for that user. See
[Creating a handler](/docs/trigger-framework/handler).

### Exclude Flow

`Exclude_Flow`. When assigned to a user, any flow that checks this
permission at its entry Decision element will not run for that user. See
[Flow Templates](/docs/flow-templates).

Neither permission does anything on its own. A handler or flow has to
explicitly check it, and the check is opt-in per handler and per flow, not
automatic.

---

## Permission sets

### Exclude Trigger

Grants the `Exclude_Trigger` custom permission. Assigned on its own, or
through the `Exclude_User` permission set group.

### Exclude Flow

Grants the `Exclude_Flow` custom permission. Assigned on its own, or through
the `Exclude_User` permission set group.

### Trigger Framework Access

Everyday access for a user running any trigger pipeline built on the
framework:

- Apex class access to `ADMLDataProvider`, `ATriggerHandler`, `DMLUtility`,
  `ErrorLogger`, `ITriggerHandler`, `TriggerData`, and `TriggerPipeline`.
- Read access to `Trigger_Handler__mdt` and `Trigger_Pipeline__mdt` custom
  metadata.
- Read and edit access to every `Error_Log__c` field.
- Create and read on `Error_Log__c` records, without edit, delete, or
  view-all/modify-all.

This lets the framework log errors as a user works, without giving that
user the ability to browse or change other users' error logs.

### Trigger Framework Admin

The same class, custom metadata, and field access as
`Trigger_Framework_Access`, with full object permissions on `Error_Log__c`
instead (create, read, edit, delete, view all, modify all), plus the
`Error_Log__c` tab made visible. Assign this to whoever triages and resolves
logged errors.

---

## Permission set groups

### Exclude User

Bundles the `Exclude_Trigger` and `Exclude_Flow` permission sets into a
single assignment. Assign it to any user, most often an integration or data
load user, that framework-built triggers and flows should skip entirely.
