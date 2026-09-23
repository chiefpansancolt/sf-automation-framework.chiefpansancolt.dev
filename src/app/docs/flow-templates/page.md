---
title: Flow Templates
nextjs:
  metadata:
    title: Salesforce Automation Framework - Flow Templates
    description: Record-triggered flow templates for before-save, after-save, and before-delete automation.
---

The framework ships six Record-Triggered Flow templates to jump-start
building automation as flows rather than Apex. Each template comes in a
with-bypass and without-bypass variant. The bypass variant checks the
`Exclude_Flow` custom permission before running, the same permission a
trigger handler checks via `Exclude_Trigger`. See
[Configuration](/docs/configuration) for assigning the bypass group.

---

## Available templates

| Template                                               | Trigger point |
| ------------------------------------------------------ | ------------- |
| `Record_Trigger_Before_Save_With_Bypass_Template`      | Before Save   |
| `Record_Trigger_Before_Save_Without_Bypass_Template`   | Before Save   |
| `Record_Trigger_After_Save_With_Bypass_Template`       | After Save    |
| `Record_Trigger_After_Save_Without_Bypass_Template`    | After Save    |
| `Record_Trigger_Before_Delete_With_Bypass_Template`    | Before Delete |
| `Record_Trigger_Before_Delete_Without_Bypass_Template` | Before Delete |

Clone the template that matches your trigger point and bypass needs, then
point it at your object.

## Naming convention

Set up flows one per object, per context, per concern, and name them so the
context is obvious at a glance. For example, on Account:

- Account Record Trigger: Before Save No Bypass
- Account Record Trigger: Before Save
- Account Record Trigger: After Save
- Account Record Trigger: After Save (Email Alerts)
- Account Record Trigger: Before Delete
- Account Record Trigger: After Save Job (Update Name)

Deviating from this pattern is reasonable when it doesn't fit, but stay
consistent within an org once a convention is picked.
