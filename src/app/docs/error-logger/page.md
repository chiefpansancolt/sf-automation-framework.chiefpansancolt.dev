---
title: Error Logger
nextjs:
  metadata:
    title: Salesforce Automation Framework - Error Logger
    description: Log exceptions to a queryable Error_Log__c record.
---

The error logger writes exceptions to an `Error_Log__c` record, so failures
in triggers, batch jobs, and flows land somewhere queryable instead of only
in a debug log.

It can be called anywhere in Apex, but it's most useful placed only where an
error is actually caught or produced. Wrapping every method in a try/catch
just to call the logger adds noise without adding signal.

---

## Usage

### Exception only

```java
try {
	// ...
} catch (Exception e) {
	ErrorLogger.logError(e);
}
```

### Exception with originating class

Pass a second argument to record which class produced the error. This is
useful once more than one handler could plausibly be the source:

```java
try {
	// ...
} catch (Exception e) {
	ErrorLogger.logError(e, 'TestObjectHandler');
}
```

## Working with logged errors

`Error_Log__c` ships with a record page (`Error_Log_Record_Page`) and a path
assistant on status, so a queue of open errors can be triaged the same way a
case queue would be.

{% callout title="Check out the example" %}
See [Error logger](/docs/examples/error-logger) for a complete example of
catching and logging an exception.
{% /callout %}
