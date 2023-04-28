#!/bin/bash
set -e

echo "Deploying to Verdaccio"

# Check for uncommitted changes
if [[ -n $(git status --porcelain) ]]; then
  read -p "There are uncommitted changes in the repository. Commit them before continuing? (y/n) " answer
  if [[ $answer == [Yy] ]]; then
    git add .
    read -p "Enter a commit message: " commit_message
    git commit -m "$commit_message"
  else
    echo "Aborting deploy."
    exit 1
  fi
fi

# Increase build number in package.json
npm version patch

# Build the project
npm publish --registry https://npm.kevtucker.com/

echo "Deployed to Verdaccio"

# Prompt the user for a commit message
read -p "Enter a commit message: " message

# Commit and push the changes to GitHub
git add .
git commit -m "$message"
git push origin "$(git branch --show-current)"

echo "Changes pushed to GitHub"