#!/bin/bash

# GitHub Push Script for HITCHIN-MARKET-001
# This script handles GitHub repository creation and pushing code

# Use environment variable for token security
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
ORG_NAME="WebSmartTeam"
REPO_NAME="hitchin-market"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Error: GITHUB_TOKEN environment variable not set"
    echo "Please set your GitHub token: export GITHUB_TOKEN=your_token_here"
    exit 1
fi

echo "🚀 Starting GitHub push process for ${REPO_NAME}..."

# Check if repository exists
echo "📡 Checking if repository exists..."
REPO_CHECK=$(curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
  "https://api.github.com/repos/${ORG_NAME}/${REPO_NAME}" | grep -o '"message": "Not Found"')

if [[ "$REPO_CHECK" == '"message": "Not Found"' ]]; then
    echo "📝 Repository doesn't exist. Creating new repository..."
    
    # Create repository
    curl -X POST \
      -H "Authorization: token ${GITHUB_TOKEN}" \
      -H "Accept: application/vnd.github.v3+json" \
      "https://api.github.com/orgs/${ORG_NAME}/repos" \
      -d "{\"name\":\"${REPO_NAME}\",\"private\":false}"
    
    echo "✅ Repository created successfully!"
    sleep 2
else
    echo "✅ Repository already exists!"
fi

# Add all files to git
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M:%S') - Hitchin Market Website Development

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

git commit -m "$COMMIT_MSG"

# Set up remote if it doesn't exist
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Setting up remote origin..."
    git remote add origin "https://${GITHUB_TOKEN}@github.com/${ORG_NAME}/${REPO_NAME}.git"
else
    echo "🔗 Updating remote origin..."
    git remote set-url origin "https://${GITHUB_TOKEN}@github.com/${ORG_NAME}/${REPO_NAME}.git"
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin master

echo "✅ Successfully pushed to GitHub!"
echo "🌐 Repository URL: https://github.com/${ORG_NAME}/${REPO_NAME}"

# Report to farm master
echo "📡 Reporting to farm master..."
node communicate-fixed.js send "GITHUB PUSH COMPLETE: hitchin-market pushed to https://github.com/${ORG_NAME}/${REPO_NAME}.git - Ready for deployment request"

echo "🎉 GitHub push process completed!"