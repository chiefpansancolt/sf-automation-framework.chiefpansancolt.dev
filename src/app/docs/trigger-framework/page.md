---
title: Trigger Framework Overview
nextjs:
  metadata:
    title: Salesforce Automation Framework - Trigger Framework
    description: How the metadata-driven trigger framework is put together.
---

The trigger framework separates three concerns that are usually tangled
together in a single trigger: the trigger itself, the pipeline that decides
which handlers run, and the handlers that hold the actual logic.

---

## How it fits together

1. **The trigger**: a one-line trigger on your object that constructs a
   `TriggerPipeline` for the object's `SObjectType`. See
   [Creating a pipeline](/docs/trigger-framework/pipeline).
2. **`Trigger_Pipeline__mdt`**: a custom metadata record that tells the
   pipeline which contexts (before insert, after update, and so on) are
   enabled for the object.
3. **`Trigger_Handler__mdt`**: one custom metadata record per handler,
   naming the handler class and which contexts it participates in.
4. **The handler**: a class extending `ATriggerHandler`, overriding only
   the context methods it needs. See
   [Creating a handler](/docs/trigger-framework/handler).

Because the wiring lives in custom metadata, adding, removing, or reordering
handlers on an object never requires touching the trigger or redeploying
Apex. It's a metadata change.

## Supported trigger contexts

- Before Insert
- After Insert
- Before Update
- After Update
- Before Delete
- After Delete
- After Undelete

{% callout title="Deploy trigger contexts intentionally" %}
Only declare the contexts your trigger actually needs in the trigger
definition. An unused context still fires the pipeline, which then has to
check custom metadata for handlers that don't exist for it.
{% /callout %}

## DML

Handlers should not perform DML directly. Route inserts, updates, and
deletes through the DML utility instead, so multiple handlers writing to the
same object in one pipeline execution collapse into a single DML statement.
See [DML utility](/docs/trigger-framework/dml-utility).
