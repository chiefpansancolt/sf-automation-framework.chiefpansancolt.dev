---
title: How to contribute
nextjs:
  metadata:
    title: Salesforce Automation Framework - How to contribute
    description: See what ways you can contribute to the project.
---

Bug reports, feature requests, and pull requests are welcome on GitHub at
[chiefpansancolt/salesforce-automation-framework](https://github.com/chiefpansancolt/salesforce-automation-framework).
This project is intended to be a safe, welcoming space for collaboration,
and contributors are expected to adhere to the
[Contributor Covenant](https://github.com/chiefpansancolt/salesforce-automation-framework/blob/main/.github/CODE_OF_CONDUCT.md)
code of conduct.

---

## Reporting bugs

Before creating a bug report, check the
[open issues](https://github.com/chiefpansancolt/salesforce-automation-framework/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
in case it's already tracked. When filing one, include as much detail as
possible: org edition, API version, and a minimal reproduction if the bug
involves the trigger framework.

## Suggesting enhancements

Check the [open enhancement requests](https://github.com/chiefpansancolt/salesforce-automation-framework/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)
before opening a new one.

## Development

Development happens in your own Salesforce org. Developing directly against
the framework means no methods can be renamed or removed without a breaking
change. Treat the public surface of `TriggerPipeline`, `ATriggerHandler`,
`DMLUtility`, and `ErrorLogger` as a contract.

## Pull requests

1. Fork the repo and create a new branch.
2. Make your changes and commit them.
3. Open a pull request following the
   [pull request template](https://github.com/chiefpansancolt/salesforce-automation-framework/blob/main/.github/PULL_REQUEST_TEMPLATE.md).
4. Verify all status checks pass and merge conflicts are resolved.

See the full
[contributing guide](https://github.com/chiefpansancolt/salesforce-automation-framework/blob/main/.github/CONTRIBUTING.md)
for more detail.
