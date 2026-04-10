# Git Push Troubleshooting (Broken pipe / remote hung up)

If your push fails with errors like:

- `client_loop: send disconnect: Broken pipe`
- `fatal: the remote end hung up unexpectedly`

use the helper script:

```bash
./scripts/fix_git_push.sh [branch]
```

What it does:

1. Sets local Git transport defaults (`HTTP/1.1`, lower compression, larger `http.postBuffer`).
2. Adds SSH keepalive settings for GitHub over port 443.
3. Converts `origin` from HTTPS to SSH when it points to GitHub.

Then run:

```bash
ssh -T git@github.com
git push origin <branch>
```
