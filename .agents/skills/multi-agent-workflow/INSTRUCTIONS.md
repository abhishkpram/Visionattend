# Multi-Agent Collaboration Workflow

When working in a multi-agent environment (e.g., multiple AI agents like Claude, Codex, Qwen, Gemini, etc., collaborating on a repository by picking up GitHub issues), it is crucial to follow a strict workflow to avoid conflicts and overlapping work.

## Workflow Rules

1. **One Issue at a Time**:
   - Only pick up 1 GitHub issue at a time. Do not attempt to batch fix multiple unassigned issues unless specifically requested or using a dedicated batch skill.

2. **Mark Your Presence**:
   - Before starting work on an issue, you must comment on the issue to signal that you are working on it.
   - Example: `gh issue comment <issue_number> -b "Working on this."`
   - This ensures other agents checking the issue queue know it is claimed and will not attempt to fix the same issue simultaneously.

3. **Isolated Fixes**:
   - Make your changes targeting *only* the scope of the claimed issue.
   - Commit the change with a clear and descriptive message matching the issue.
   - Example: `git commit -m "Fix #<issue_number>: <Description>"`

4. **Closing the Loop**:
   - Push your changes to the target branch (e.g., `main`).
   - Add a final comment to the issue summarizing the fix. Example: `gh issue comment <issue_number> -b "Implemented fix for <feature>. Fixed in main."`
   - Close the issue properly: `gh issue close <issue_number>`

5. **Continuous Processing**:
   - After completing the loop for an issue, return to the queue, find the next open and unassigned/unclaimed issue, and repeat the process.

## Checking the Queue

Use `gh issue list` to see available issues.
Before picking one, you can use `gh issue view <issue_number>` to read the existing comments and ensure no other agent has already commented "Working on this."

By adhering to this workflow, we ensure that multi-agentic work is seamless, transparent, and highly efficient.

---

## Conflict Resolution & Push Strategy

When multiple agents work simultaneously, merge conflicts and push rejections are inevitable. Follow these rules:

### Rule 1: Always Pull Before Push

```bash
# Step 1: Fetch latest
git fetch origin

# Step 2: Attempt regular pull (rebase preferred for linear history)
git pull --rebase origin main

# Step 3: If rebase succeeds, push
git push origin main
```

### Rule 2: Handling Rebase Conflicts

When `git pull --rebase` fails with conflicts:

```bash
# Option A: Resolve conflicts manually (preferred for small changes)
# 1. Edit conflicted files, remove <<<<<< and >>>>>> markers
# 2. git add <resolved-files>
# 3. git rebase --continue

# Option B: If your changes are easily replaceable (e.g., you rewrote the whole file)
git rebase --abort
git reset --hard origin/main
# Re-apply your changes cleanly on top of the latest main
# Then commit and push
```

### Rule 3: When to Use Force Push

Only use `git push --force-with-lease` when:
- Your change rewrites a large file completely (e.g., full HTML refactor)
- Other agents' changes don't overlap with your scope
- Regular push is rejected AND rebase creates complex conflicts

```bash
# ALWAYS use --force-with-lease (safer than --force)
git push --force-with-lease origin main

# NEVER use bare --force (can destroy others' work)
# git push --force origin main  # DANGEROUS - DO NOT USE
```

### Rule 4: Conflict-Free Workflow Pattern

To minimize conflicts when multiple agents work simultaneously:

1. **Work on separate files when possible** - Different agents editing index.html will conflict; one on HTML, one on CSS, one on JS is safer
2. **Use surgical edits** - Small, targeted changes conflict less than full file rewrites
3. **Pull frequently** - Before committing, always `git pull --rebase`
4. **Communicate via issue comments** - Signal which files you're touching

### Rule 5: Recovering from Failed Push

If `git push` is rejected:

```bash
# 1. Fetch latest remote state
git fetch origin

# 2. Try rebase first
git pull --rebase origin main

# 3. If rebase succeeds - push normally
git push origin main

# 4. If rebase conflicts - resolve or reset
#    a) Resolve: edit files → git add → git rebase --continue
#    b) Reset: git rebase --abort → git reset --hard origin/main → redo work
```

### Real-World Example (VisionAttend AI Session)

During the Issue #11 fix, multiple agents pushed simultaneously:

```
Agent A: Pushed fix for #6, #7, #8, #9, #10
Agent B (Qwen): Attempted push for #11 → REJECTED
Agent B: git pull --rebase → CONFLICT in index.html
Agent B: git rebase --abort → git reset --hard origin/main
Agent B: Re-applied #11 fix cleanly on latest main
Agent B: git push --force-with-lease origin main → SUCCESS
```

**Key takeaway**: When in doubt, reset to `origin/main` and re-apply your changes cleanly rather than fighting complex merge conflicts.
