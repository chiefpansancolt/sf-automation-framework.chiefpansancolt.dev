---
title: Error Logger Example
nextjs:
  metadata:
    title: Salesforce Automation Framework - Error Logger Example
    description: An example of catching and logging an exception with the error logger.
---

The same `AccountHandler` from
[Trigger pipeline (Account)](/docs/examples/trigger-pipeline), with the
field update wrapped in a try/catch that logs to `Error_Log__c` on failure.

---

## AccountHandler

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
			try {
				account.Sample_Checkbox__c = true;
			} catch (Exception ex) {
				ErrorLogger.logError(ex, 'AccountHandler');
			}
		}
	}
}
```

The second argument to `logError` records `AccountHandler` as the
originating class on the `Error_Log__c` record, so a failure here is easy to
tell apart from one raised by a different handler.

See [Error Logger](/docs/error-logger) for the full usage reference.

---

Full source is in
[`examples/error-logger`](https://github.com/chiefpansancolt/salesforce-automation-framework/tree/main/examples/error-logger)
in the repo.
