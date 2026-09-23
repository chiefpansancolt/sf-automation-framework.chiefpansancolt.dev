---
title: Creating a Pipeline
nextjs:
  metadata:
    title: Salesforce Automation Framework - Creating a Pipeline
    description: Wire a trigger to the framework and register it in custom metadata.
---

A pipeline is the entry point for one object. It's a trigger plus a
`Trigger_Pipeline__mdt` record.

---

## 1. Create the trigger

Create a trigger on the object, constructing a `TriggerPipeline` for the
object's `SObjectType`:

```java
trigger TestObjectTrigger on Test_Object__c (before insert, after insert, before update, after update, before delete, after delete, after undelete) {
	new TriggerPipeline(Schema.Test_Object__c.sObjectType);
}
```

Only declare the trigger contexts you actually plan to use. See
[Trigger Framework Overview](/docs/trigger-framework) for the full list of
supported contexts.

## 2. Create the `Trigger_Pipeline__mdt` record

Create a record in the `Trigger_Pipeline__mdt` custom metadata type for the
object, enabling the same contexts declared on the trigger. A context left
unchecked here is skipped even if the trigger fires for it.

### Fields

| Field                       | Type     | Purpose                                                                                                                                     |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `DeveloperName` / `Label`   | Standard | The record's name. Not read by the framework; name it after the object for readability.                                                     |
| `Object_API_Name__c`        | Text     | The API name of the object this pipeline runs for, for example `Test_Object__c`. Must match the object the trigger is on.                   |
| `Is_Active__c`              | Checkbox | Master switch for the pipeline. If unchecked, the pipeline does not run for any context, even if individual context checkboxes are checked. |
| `Before_Insert_Enabled__c`  | Checkbox | Runs handlers for the before insert context.                                                                                                |
| `After_Insert_Enabled__c`   | Checkbox | Runs handlers for the after insert context.                                                                                                 |
| `Before_Update_Enabled__c`  | Checkbox | Runs handlers for the before update context.                                                                                                |
| `After_Update_Enabled__c`   | Checkbox | Runs handlers for the after update context.                                                                                                 |
| `Before_Delete_Enabled__c`  | Checkbox | Runs handlers for the before delete context.                                                                                                |
| `After_Delete_Enabled__c`   | Checkbox | Runs handlers for the after delete context.                                                                                                 |
| `After_Undelete_Enabled__c` | Checkbox | Runs handlers for the after undelete context. There is no before-undelete equivalent; Salesforce does not support it.                       |

Each context checkbox only takes effect if the trigger itself also declares
that context, and only enables the pipeline to look for handlers there.
Whether a given handler actually runs is controlled separately, on its own
`Trigger_Handler__mdt` record.

## 3. Register handlers

Each handler that should participate in this pipeline needs its own
`Trigger_Handler__mdt` record. See
[Creating a handler](/docs/trigger-framework/handler) for how a handler
class is built, and what to check off in its metadata record.

{% callout title="Check out the example" %}
See [Trigger pipeline (Account)](/docs/examples/trigger-pipeline) for a
complete, working pipeline on the Account object.
{% /callout %}
