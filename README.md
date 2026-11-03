LEARNPA - Open edX Custom Branding

Welcome to the custom branding and configuration repository for the LEARNPA Open edX platform. This project was developed as part of a Web Development internship at the Cavite State University (CvSU) ICT-DIT department by Kurt P. Cadorna, Kurt Loezano and Kursten Mercado

This repository serves as the source of truth for the platform's custom SCSS styling, Micro-Frontend (MFE) overrides, and Tutor build configurations.

🏗️ Project Architecture

To ensure system stability and upgradability, customizations are strictly isolated from the core Open edX engine. The architecture is split into:

Tutor Configuration & Plugins (This Repo): Manages the deployment environment, custom YAML plugins, and build interception.

Brand-OpenEdX (React Dashboard Theme): Contains the specific SCSS overrides (e.g., Paragon UI overrides).

edx-platform: The underlying core course engine and logic (left untouched to allow for safe upgrades).

🚀 Development Journey: Strategies & Iterations

Customizing the Open edX platform required extensive trial and error. Below is a record of the strategies used to theme the website, documenting both the successful implementations and the failed attempts that informed our final architecture.

❌ Strategy 1: Direct File Edits & Manual Workarounds (Failed)

The Approach: Attempted to manually remove the default "Powered by Open edX" logos from footer navigation links and header files by editing the files directly in the local environment.

The Result: The changes were wiped out and reset to placeholders unexpectedly after a system restart and normal rebuilds.

The Lesson: Direct edits to core files or compiled outputs do not persist. All UI extensions must be implemented using the officially supported Tutor plugin methodology.

❌ Strategy 2: Core Repository Modification (Abandoned)

The Approach: Explored editing the core course engine (edx-platform) and the modern styling repositories directly to force design changes.

The Result: Discovered that modern MFEs and legacy views use completely independent styling systems. Modifying the core repositories directly was overly complex and risked breaking underlying logic.

The Lesson: Visual changes should be isolated to dedicated branding packages rather than mixed into the core engine code.

❌ Strategy 3: Uncached Multi-MFE Builds (Failed)

The Approach: When Docker's layer caching kept bypassing updated GitHub SCSS commits, we attempted to force a fresh pull by running a full, uncached build (tutor images build mfe --no-cache).

The Result: Compiling 15 React Micro-Frontend applications simultaneously without caching completely exhausted the WSL memory allocation, causing the host system to freeze and crash.

The Lesson: Hardware limitations (16GB RAM) make uncached multi-app builds impossible on local development machines.

⚠️ Strategy 4: Global SCSS Variable Injection (Refined)

The Approach: Injected $primary: #D35400; directly into paragon/core.scss to globally override the default Open edX blue theme.

The Result: While it successfully changed the color, early iterations disrupted UI contrast ratios and dark mode display rules.

The Lesson: SCSS injection must be carefully scoped, and preserving WCAG contrast guidelines for dark mode is more critical than forcing a global color override on every single component.

✅ Strategy 5: Cache-Busting via YAML Comments (Success)

The Approach: To solve the Docker layer caching issue without crashing the system, we injected a forced update comment tag (e.g., # Force update 1) into the custom plugin file.

The Result: This lightweight text edit altered the file's hash, successfully tricking Docker into invalidating only that specific build layer. The build pulled fresh SCSS from GitHub without exhausting system RAM.

✅ Strategy 6: Custom Tutor Plugin / Remote Source of Truth (Success & Final Architecture)

The Approach: Engineered a custom Tutor plugin (custombrand.yml) to intercept the Docker build pipeline. This instructed the build engine to bypass default npm brand packages and pull our learnpa-brand-openedx repository directly from GitHub.

The Result: A stable, automated injection of our custom Orange theme and streamlined footer across the platform.

⚙️ Prerequisites for Future Developers

OS: Linux or Windows Subsystem for Linux (WSL2 - Ubuntu recommended)

Containerization: Docker Desktop

CLI Tool: Tutor (Open edX distribution manager)

Hardware Requirements: Minimum 16GB RAM allocated to WSL2/Docker (via .wslconfig) to prevent uwsgi build crashes. Native Linux filesystem utilization (~) is highly recommended over cross-OS Windows mounts (/mnt/c/) to prevent I/O lockups.

🛠️ Local Development Workflow

1. Mounting the Theme

To link this repository to your local Tutor environment for active development:

# Navigate to the hidden Tutor environment
cd $(tutor config printroot)

# Mount the brand repository to the MFE
tutor mounts add /path/to/your/learnpa-brand-openedx


2. Live Reloading

For active development on React components (like the Learner Dashboard):

tutor dev launch


Changes made to the SCSS files will now hot-reload directly in the browser via Webpack.

3. Compiling Production Images

tutor images build mfe
tutor local start -d


⚠️ Critical Warning on Configuration Saves

The Tutor configuration engine strictly parses templates as text. Ensure absolutely no binary files (such as leftover .bak image files or old logo backups) are left inside the template directories. Binary files will cause tutor config save to fail silently.
