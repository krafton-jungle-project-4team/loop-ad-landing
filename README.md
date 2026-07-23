# LoopAd Landing

LoopAd 프로젝트를 소개하는 정적 랜딩 페이지입니다.

- React 19
- Vite
- TypeScript
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`main` 브랜치에 변경 사항이 반영되면
[GitHub Actions](./.github/workflows/deploy-pages.yml)가 정적 빌드를 생성하고
GitHub Pages에 배포합니다. Pull request에서는 빌드 검증만 실행합니다.
