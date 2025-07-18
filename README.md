This project was created by `pnpx create-tanstack@latest --add-ons`

새로운 TanStack 앱에 오신 것을 환영합니다\!

# 시작하기

이 애플리케이션을 실행하려면:

```bash
pnpm install
pnpm start
```

---

# 프로덕션 빌드

이 애플리케이션을 프로덕션 용도로 빌드하려면:

```bash
pnpm build
```

---

## 테스팅

이 프로젝트는 테스팅을 위해 [Vitest](https://vitest.dev/)를 사용합니다. 다음 명령어로 테스트를 실행할 수 있습니다:

```bash
pnpm test
```

---

## 스타일링

이 프로젝트는 스타일링을 위해 [Tailwind CSS](https://tailwindcss.com/)를 사용합니다.

---

## 린팅 및 포맷팅

이 프로젝트는 린팅 및 포맷팅을 위해 [Biome](https://biomejs.dev/)을 사용합니다. 다음 스크립트를 사용할 수 있습니다:

```bash
pnpm lint
pnpm format
pnpm check
```

---

## Shadcn

최신 버전의 [Shadcn](https://ui.shadcn.com/)을 사용하여 컴포넌트를 추가하세요.

```bash
pnpx shadcn@latest add button
```

---

## T3Env

- T3Env를 사용하여 환경 변수에 타입 안정성을 추가할 수 있습니다.
- `src/env.mjs` 파일에 환경 변수를 추가하세요.
- 코드에서 환경 변수를 사용하세요.

### 사용법

```ts
import { env } from "@/env";

console.log(env.VITE_APP_TITLE);
```

---

# TanStack 채팅 애플리케이션

TanStack Start, TanStack Store, Claude AI로 구축된 예제 채팅 애플리케이션입니다.

## .env 업데이트

```env
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## ✨ 특징

### AI 기능

- 🤖 Claude 3.5 Sonnet 기반
- 📝 구문 강조 기능이 포함된 풍부한 마크다운 포맷팅
- 🎯 맞춤형 AI 동작을 위한 커스텀 시스템 프롬프트
- 🔄 실시간 메시지 업데이트 및 스트리밍 응답 (곧 제공 예정)

### 사용자 경험

- 🎨 Tailwind CSS와 Lucide 아이콘으로 구현된 현대적인 UI
- 🔍 대화 관리 및 히스토리
- 🔐 안전한 API 키 관리
- 📋 코드 하이라이팅을 포함한 마크다운 렌더링

### 기술적 특징

- 📦 TanStack Store를 이용한 중앙 집중식 상태 관리
- 🔌 여러 AI 제공자를 위한 확장 가능한 아키텍처
- 🛠️ 타입 안전성을 위한 TypeScript 사용

---

## 아키텍처

### 기술 스택

- **프론트엔드 프레임워크**: TanStack Start
- **라우팅**: TanStack Router
- **상태 관리**: TanStack Store
- **스타일링**: Tailwind CSS
- **AI 연동**: Anthropic의 Claude API

---

## 라우팅

이 프로젝트는 [TanStack Router](https://tanstack.com/router)를 사용합니다. 초기 설정은 파일 기반 라우터입니다. 즉, 라우트는 `src/routes` 디렉토리 안의 파일로 관리됩니다.

### 라우트 추가하기

애플리케이션에 새로운 라우트를 추가하려면 `./src/routes` 디렉토리에 새 파일을 추가하기만 하면 됩니다.

TanStack이 자동으로 라우트 파일의 내용을 생성해 줄 것입니다.

이제 두 개의 라우트가 생겼으므로, `Link` 컴포넌트를 사용하여 라우트 간에 이동할 수 있습니다.

### 링크 추가하기

SPA (Single Page Application) 네비게이션을 사용하려면 `@tanstack/react-router`에서 `Link` 컴포넌트를 가져와야 합니다.

```tsx
import { Link } from "@tanstack/react-router";
```

그런 다음 JSX 어디에서든 다음과 같이 사용할 수 있습니다:

```tsx
<Link to="/about">About</Link>
```

이렇게 하면 `/about` 라우트로 이동하는 링크가 생성됩니다.

`Link` 컴포넌트에 대한 더 자세한 정보는 [Link 문서](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent)에서 찾을 수 있습니다.

### 레이아웃 사용하기

파일 기반 라우팅 설정에서 레이아웃은 `src/routes/__root.tsx`에 위치합니다. 이 루트 라우트에 추가하는 모든 것은 모든 라우트에 나타나게 됩니다. 라우트 내용은 JSX에서 `<Outlet />` 컴포넌트를 사용하는 위치에 표시됩니다.

다음은 헤더를 포함하는 예제 레이아웃입니다:

```tsx
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
```

`<TanStackRouterDevtools />` 컴포넌트는 필수가 아니므로, 레이아웃에 포함하고 싶지 않다면 제거해도 됩니다.

레이아웃에 대한 더 자세한 정보는 [레이아웃 문서](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts)에서 찾을 수 있습니다.

---

## 데이터 페칭(Data Fetching)

애플리케이션에서 데이터를 가져오는 방법은 여러 가지가 있습니다. TanStack Query를 사용하여 서버에서 데이터를 가져올 수도 있지만, TanStack Router에 내장된 `loader` 기능을 사용하여 라우트가 렌더링되기 전에 데이터를 로드할 수도 있습니다.

예를 들면:

```tsx
const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/people",
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json() as Promise<{
      results: {
        name: string;
      }[];
    }>;
  },
  component: () => {
    const data = peopleRoute.useLoaderData();
    return (
      <ul>
        {data.results.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  },
});
```

`loader`는 데이터 페칭 로직을 극적으로 단순화합니다. 더 자세한 정보는 [Loader 문서](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters)에서 확인하세요.

### React-Query

React-Query(TanStack Query)는 라우트 로딩에 대한 훌륭한 추가 기능 또는 대안이며, 애플리케이션에 통합하는 것은 매우 쉽습니다.

먼저 의존성을 추가합니다:

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools
```

다음으로, 쿼리 클라이언트와 프로바이더를 생성해야 합니다. 이들을 `main.tsx`에 두는 것을 권장합니다.

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ...

const queryClient = new QueryClient();

// ...

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
```

루트 라우트에 TanStack Query Devtools를 추가할 수도 있습니다 (선택 사항).

```tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools />
    </>
  ),
});
```

이제 `useQuery`를 사용하여 데이터를 가져올 수 있습니다.

```tsx
import { useQuery } from "@tanstack/react-query";

import "./App.css";

function App() {
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => data.results as { name: string }[]),
    initialData: [],
  });

  return (
    <div>
      <ul>
        {data.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

React-Query 사용법에 대한 모든 정보는 [React-Query 문서](https://tanstack.com/query/latest/docs/framework/react/overview)에서 찾을 수 있습니다.

---

## 상태 관리

React 애플리케이션의 또 다른 일반적인 요구 사항은 상태 관리입니다. React에는 많은 상태 관리 옵션이 있습니다. TanStack Store는 프로젝트를 위한 훌륭한 출발점을 제공합니다.

먼저 TanStack Store를 의존성으로 추가해야 합니다:

```bash
pnpm add @tanstack/store
```

이제 `src/App.tsx` 파일에 간단한 카운터를 만들어 시연해 보겠습니다.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

function App() {
  const count = useStore(countStore);
  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
    </div>
  );
}

export default App;
```

TanStack Store의 여러 좋은 기능 중 하나는 다른 상태에서 상태를 파생시키는 기능입니다. 이 파생된 상태는 기본 상태가 업데이트될 때 함께 업데이트됩니다.

파생된 상태를 사용하여 카운트를 두 배로 만들어 확인해 보겠습니다.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store, Derived } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

const doubledStore = new Derived({
  fn: () => countStore.state * 2,
  deps: [countStore],
});
doubledStore.mount();

function App() {
  const count = useStore(countStore);
  const doubledCount = useStore(doubledStore);

  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
      <div>Doubled - {doubledCount}</div>
    </div>
  );
}

export default App;
```

`Derived` 클래스를 사용하여 다른 스토어에서 파생된 새 스토어를 만듭니다. `Derived` 클래스에는 파생된 스토어의 업데이트를 시작하는 `mount` 메서드가 있습니다.

파생된 스토어를 만든 후에는 `useStore` 훅을 사용하여 다른 스토어처럼 `App` 컴포넌트에서 사용할 수 있습니다.

TanStack Store 사용법에 대한 모든 정보는 [TanStack Store 문서](https://tanstack.com/store/latest)에서 찾을 수 있습니다.

---

# 데모 파일

`demo` 접두사가 붙은 파일은 안전하게 삭제할 수 있습니다. 이 파일들은 설치한 기능을 시험해 볼 수 있는 시작점을 제공하기 위해 존재합니다.

---

# 더 알아보기

TanStack이 제공하는 모든 것에 대해 [TanStack 문서](https://tanstack.com)에서 더 자세히 알아볼 수 있습니다.
