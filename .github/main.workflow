name: Change Avatar

on:
  push:
    branches:
      - main

jobs:
  change_avatar:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Change avatar
        run: |
          cp .github/avatar.png $GITHUB_WORKSPACE/.github/avatar.png
          git add .github/avatar.png
          git config user.name "DarkFlameMaster596"
          git config user.email "415277290@qq.com"
          git commit -m "Change avatar"
          git push
