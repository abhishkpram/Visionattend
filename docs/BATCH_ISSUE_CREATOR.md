# Batch Issue Creator

Use this workflow when you need to create multiple GitHub issues (more than 2 or 3) at once to avoid rate limits or interactive prompt constraints.

When tasked with creating multiple GitHub issues based on a code review or analysis, do NOT attempt to create them one by one interactively if there are many issues. 

## Workflow

1. Formulate the title, description, and recommendations for each issue you intend to create.
2. Create a temporary bash script (e.g., `create_issues.sh`) in the workspace.
3. Write `gh issue create` commands into the bash script for each issue.
4. Execute the bash script to batch-create all issues.
5. Delete the temporary bash script.

## Script Example

```bash
#!/bin/bash

# Issue 1
gh issue create --title "[Category] Issue Title 1" --body "**Description:** The issue description.

**Problem:** What the problem is.

**Recommendation:** How to fix it."

# Issue 2
gh issue create --title "[Category] Issue Title 2" --body "..."
```

## Execution

Use your available shell command tools to run the script:
```bash
bash create_issues.sh
rm create_issues.sh
```

By batching these commands, you operate efficiently without requiring repetitive user confirmation for each individual issue creation step.