---
title: Creating a Handler
nextjs:
  metadata:
    title: Salesforce Automation Framework - Creating a Handler
    description: Extend ATriggerHandler to add logic to a trigger pipeline.
---

A handler extends `ATriggerHandler` and overrides only the context methods
it needs. `getType()` is the only required override.

---

## Splitting handlers

Think about the breakdown before writing a handler:

- One handler per related object or concern, for example
  `TestObjectAccountHandler` rather than one handler for everything.
- Don't duplicate a query across handlers that need the same data.
- Keep the DML for a given record in a single handler, not spread across
  several.

## Handler shape

```java
public with sharing class TestObjectHandler extends ATriggerHandler {
	// Optional. Omit to always run.
	public override Boolean shouldExecute() {
		return !FeatureManagement.checkPermission('Exclude_Trigger');
	}

	/**
	 * Required. Return the Type of the implementing class, e.g.
	 * TestObjectHandler.class.
	 */
	public override Type getType() {
		return TestObjectHandler.class;
	}

	/**
	 * Optional. Salesforce guarantees triggers fire once for insert and
	 * delete, but not for update. Override this and return true if the
	 * handler needs special double-fire protection on update.
	 */
	public override Boolean isDoubleFireSafe() {
		return false;
	}

	public override void beforeInsert(TriggerData triggerData) {
	}

	public override void afterInsert(TriggerData triggerData) {
	}

	public override void beforeUpdate(TriggerData triggerData) {
	}

	public override void afterUpdate(TriggerData triggerData) {
	}

	public override void beforeDelete(TriggerData triggerData) {
	}

	public override void afterDelete(TriggerData triggerData) {
	}

	public override void afterUndelete(TriggerData triggerData) {
	}
}
```

Add or remove the context methods based on what the `Trigger_Handler__mdt`
record for this handler enables. An overridden method for a context the
metadata record doesn't check off simply never runs.

## Registering the handler

Create a `Trigger_Handler__mdt` record naming the handler class, and check
off every trigger context it should participate in. Repeat for each new
handler on the object.

### Fields

| Field                   | Type                  | Purpose                                                                                                                 |
| ----------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `Class_Name__c`         | Text                  | The fully qualified name of the handler class, exactly as returned by `getType()`, for example `TestObjectHandler`.     |
| `Trigger_Pipeline__c`   | Metadata Relationship | Links this handler to its `Trigger_Pipeline__mdt` record, by that record's `DeveloperName`.                             |
| `Is_Active__c`          | Checkbox              | Master switch for the handler. If unchecked, the handler never runs, even if individual context checkboxes are checked. |
| `Order__c`              | Number                | Execution order among handlers on the same pipeline and context. Lower numbers run first.                               |
| `Use_Before_Insert__c`  | Checkbox              | Runs `beforeInsert()` on this handler.                                                                                  |
| `Use_After_Insert__c`   | Checkbox              | Runs `afterInsert()` on this handler.                                                                                   |
| `Use_Before_Update__c`  | Checkbox              | Runs `beforeUpdate()` on this handler.                                                                                  |
| `Use_After_Update__c`   | Checkbox              | Runs `afterUpdate()` on this handler.                                                                                   |
| `Use_Before_Delete__c`  | Checkbox              | Runs `beforeDelete()` on this handler.                                                                                  |
| `Use_After_Delete__c`   | Checkbox              | Runs `afterDelete()` on this handler.                                                                                   |
| `Use_After_Undelete__c` | Checkbox              | Runs `afterUndelete()` on this handler. There is no before-undelete equivalent; Salesforce does not support it.         |

A `Use_*` checkbox only has an effect if the matching context is also
enabled on the handler's `Trigger_Pipeline__mdt` record; see
[Creating a pipeline](/docs/trigger-framework/pipeline) for that side of the
wiring. Overriding a context method in the class without checking the
matching `Use_*` box here means the method is simply never called.

{% callout title="Check out the example" %}
See [Trigger pipeline (Account)](/docs/examples/trigger-pipeline) for a
handler wired up end to end.
{% /callout %}
