# Contributing Guide

Welcome 
This repository uses a Pull Request based workflow.  
Please read and follow the rules below before contributing.

---

## 🔒 Main Branch Protection

The `main` branch is **protected**.

🚫 Direct push to `main` is NOT allowed.  
All changes must go through a **Pull Request (PR)**.

---

## 🌿 Branch Workflow

Every task must be developed in a separate branch created from `main`.

### Branch naming format

feature/short-description
fix/short-description
docs/short-description
refactor/short-description
style/short-description
chore/short-description


### Examples

feature/navbar
feature/services-page
fix/mobile-menu
docs/readme-update
refactor/api-structure


---

## 💬 Commit Message Convention

We use **Conventional Commits**.

### Format

type: short description


### Allowed types

| Type | Description |
|---|---|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| style | UI / formatting (no logic change) |
| refactor | Code improvement without new feature |
| chore | Config / tooling / dependencies |
| test | Tests |

### Good examples

feat: add contact form
fix: resolve navbar overflow bug
docs: update installation steps
style: improve hero section spacing
refactor: simplify API logic
chore: update dependencies


### ❌ Avoid these commit messages

update
changes
fix bug
last version
asdf


A commit message must clearly explain **what changed**.

---

## 🔀 Pull Request Process

1️⃣ Create a branch from `main`  
2️⃣ Implement your changes  
3️⃣ Commit using the rules above  
4️⃣ Push the branch  
5️⃣ Open a Pull Request  
6️⃣ Wait for review & approval  
7️⃣ After approval → Merge

---

## 📝 Pull Request Checklist

Before opening a PR, make sure:

- The project runs locally
- No console errors exist
- UI changes are tested (mobile & desktop if applicable)
- PR description is filled

---

## 📌 Golden Rule

> If it touches `main`, it must go through a Pull Request.

Thanks for contributing 🚀