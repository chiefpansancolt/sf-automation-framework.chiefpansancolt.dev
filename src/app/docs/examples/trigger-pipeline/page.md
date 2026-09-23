---
title: Trigger Pipeline Example
nextjs:
  metadata:
    title: Salesforce Automation Framework - Trigger Pipeline Example
    description: A complete trigger pipeline built on the Account object.
---

A working trigger pipeline on the Account object, showing the trigger and
handler from [Creating a pipeline](/docs/trigger-framework/pipeline) and
[Creating a handler](/docs/trigger-framework/handler) wired together end to
end.

---

## AccountTrigger

```java
trigger AccountTrigger on Account (before insert, after insert, before update, after update, before delete, after delete, after undelete) {
	new TriggerPipeline(Schema.Account.sObjectType);
}
```

## AccountHandler

`shouldExecute()` checks the `Exclude_Trigger` custom permission, and
`isDoubleFireSafe()` is set so the field update below only runs once per
update even if Account is touched again later in the same transaction.

```java
public with sharing class AccountHandler extends ATriggerHandler {
	public override Type getType() {
		return AccountHandler.class;
	}

	public override Boolean shouldExecute() {
		return !FeatureManagement.checkPermission('Exclude_Trigger');
	}

	public override Boolean isDoubleFireSafe() {
		return true;
	}

	public override void beforeInsert(TriggerData triggerData) {
		performFieldUpdate(triggerData);
	}

	public override void beforeUpdate(TriggerData triggerData) {
		performFieldUpdate(triggerData);
	}

	private void performFieldUpdate(TriggerData triggerData) {
		for (Account account : (List<Account>) triggerData.newObjects) {
			account.Sample_Checkbox__c = true;
		}
	}
}
```

With this in place, create a `Trigger_Pipeline__mdt` record for Account
enabling the Before Insert and Before Update contexts, and a
`Trigger_Handler__mdt` record naming `AccountHandler` with the same two
contexts checked off.

---

Full source, including the metadata XML, is in
[`examples/trigger-framework`](https://github.com/chiefpansancolt/salesforce-automation-framework/tree/main/examples/trigger-framework)
in the repo.
