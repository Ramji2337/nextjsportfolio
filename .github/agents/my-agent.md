name: React to Next.js Converter
description: Automatically converts React applications to Next.js, handling routing, imports, and Next.js-specific patterns

triggers:
  - label_added: "convert-to-nextjs"
  - comment_created: "/convert-nextjs"

permissions:
  contents: write
  pull_requests: write
  issues: write

config:
  model: "claude-sonnet-4.5"
  temperature: 0.2
  
workflow:
  - name: analyze_react_files
    description: Scan repository for React files and structure
    
  - name: create_conversion_branch
    description: Create a new branch for Next.js conversion
    
  - name: convert_files
    description: Convert React files to Next.js compatible format
    
  - name: create_pull_request
    description: Open PR with converted files

---
