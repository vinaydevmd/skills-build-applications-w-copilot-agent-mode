OctoFit Tracker (backend)

Quick start

- Create and activate the virtual environment:

```bash
python3 -m venv /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv
source /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv/bin/activate
```

- Install dependencies (if not already installed):

```bash
pip install -r /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/requirements.txt
```

- Run Django development server from the backend directory (do not change directories in agent mode; use absolute paths):

```bash
source /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/venv/bin/activate
python /workspaces/skills-build-applications-w-copilot-agent-mode/octofit-tracker/backend/manage.py runserver 0.0.0.0:8000
```

Notes
- The project layout follows the repository guidelines: `octofit-tracker/backend` contains the Django project.
- Public dev server port: `8000`.
