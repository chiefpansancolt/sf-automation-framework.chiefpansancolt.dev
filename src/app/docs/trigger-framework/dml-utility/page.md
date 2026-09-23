---
title: DML Utility
nextjs:
  metadata:
    title: Salesforce Automation Framework - DML Utility
    description: Group DML from multiple handlers into a single statement per pipeline execution.
---

When several handlers in the same pipeline write to the same object, each
one issuing its own DML statement wastes governor limits and can cause
recursive triggers to double-fire. The DML utility collects records from
every handler and performs one DML statement per operation at the end of
the pipeline.

---

## Available methods

- `addInsert(sObject)`
- `addInsert(sObject, Boolean)`
- `addInserts(List<sObject>)`
- `addUpdate(sObject)`
- `addUpdates(List<sObject>)`
- `addDelete(sObject)`
- `addDeletes(List<sObject>)`

## Usage

Call the DML utility from inside a handler instead of issuing `insert`,
`update`, or `delete` directly:

```java
public override void afterInsert(TriggerData triggerData) {
	Account acct = new Account(Id = triggerData.newList[0].Id, Description = 'Touched by handler');
	DMLUtility.addUpdate(acct);
}
```

Every handler in the pipeline execution that calls `addUpdate` for the same
object type contributes to the same batched DML statement, issued once the
pipeline finishes running handlers for that context.
