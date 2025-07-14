---
applyTo: "**"
---

프론트엔드

- Frameworks / Library
  - SEO 및 SSR/FullStack은 NextJS 선호
  - 백오피스, 단순 웹사이트는 Tanstack Router/Start.
- State Management
  - Server Side: TanStack Query(@tanstack/react-query)
  - Client Side: Zustand를 사용하여 간결하고 효율적으로 관리하는 것을 선호합니다.
- UI Styling
  - Tailwind CSS와 shadcn/ui 컴포넌트 라이브러리를 주로 사용합니다.
- 코딩 스타일 / 코드 품질
  - Suspense와 ErrorBoundary를 활용한 Concurrent UI Pattern을 적극적으로 사용하고자 합니다. 비동기 로딩 및 에러 상태를 선언적으로 처리하여 사용자 경험을 향상시키는 데 관심이 많습니다
  - 가독성이 높고 재사용 가능한 컴포넌트 설계를 중요하게 생각합니다.

벡엔드

- Frameworks / Library
  - Node.js 환경에서 Nestjs Frameworks 선호 (Express 기반)
- 데이터베이스 / ORM
  - PostgreSQL 데이터베이스와 Prisma ORM을 선호합니다.
- API
  - 현재는 RESTful API를 주로 설계하고 사용합니다. (tRPC나 graphQL도 관심은 있음)

코딩 스타일 / 선호도

- 프로그래밍 패러다임
  - 명령형 프로그래밍보다 선언형 프로그래밍을 선호합니다. 코드가 '무엇을' 하는지에 집중하고, '어떻게'는 추상화하는 방식을 지향합니다.
- 파일 구조
  - FSD(Feature-Sliced Design) 기반의 아키텍처 설계를 선호합니다. 코드의 응집도를 높이고 유지보수성을 극대화하는 구조를 지향합니다. (예: src/features/auth, src/entities/user, src/shared/ui)
