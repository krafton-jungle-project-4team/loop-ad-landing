const GITHUB_ORG_URL = "https://github.com/krafton-jungle-project-4team";
const DASHBOARD_URL = "https://dashboard.dev.loop-ad.org";
const DEMO_URL = "https://demo-shoppingmall.dev.loop-ad.org";

const pipeline = [
  {
    number: "01",
    title: "Collect",
    description: "브라우저 SDK와 수집 API가 사용자 행동 이벤트를 안정적으로 기록합니다.",
    technology: "TypeScript SDK · Go"
  },
  {
    number: "02",
    title: "Understand",
    description: "이벤트와 전환 흐름을 분석해 사용자 맥락과 행동 패턴을 구성합니다.",
    technology: "ClickHouse · PostgreSQL"
  },
  {
    number: "03",
    title: "Decide",
    description: "AI가 마케팅 액션과 콘텐츠 후보를 만들고 실험 전략을 추천합니다.",
    technology: "Python · OpenAI"
  },
  {
    number: "04",
    title: "Activate",
    description: "선택된 광고 소재를 적절한 지면에 전달하고 결과를 다시 학습합니다.",
    technology: "NestJS · React"
  }
];

const repositories = [
  ["Dashboard", "운영 지표, 캠페인, 실험을 한 화면에서 관리", "loop-ad_dashboard"],
  ["Decision", "행동 분석과 다음 액션 추천을 담당하는 AI 서비스", "loop-ad_decision"],
  ["Event Collector", "대규모 행동 이벤트를 수집하는 Go API", "loop-ad_event_collector"],
  ["Advertisement", "광고 선택과 소재 전달을 담당하는 실행 서비스", "loop-ad_advertisement"],
  ["Infrastructure", "AWS 기반 개발 환경과 서비스 인프라", "loop-ad_infra"],
  ["SDK", "이벤트 수집과 광고 렌더링을 위한 브라우저 SDK", "loop-ad_event_sdk"]
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LoopAd 홈">
          <LogoMark />
          <span>LoopAd</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#product">Product</a>
          <a href="#architecture">Architecture</a>
          <a href="#repositories">Repositories</a>
        </nav>
        <a className="header-github" href={GITHUB_ORG_URL} target="_blank" rel="noreferrer">
          <GithubIcon />
          <span>GitHub</span>
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              AI MARKETING DECISION ENGINE
            </p>
            <h1>
              행동 데이터를,
              <br />
              <em>다음 액션</em>으로.
            </h1>
            <p className="hero-description">
              LoopAd는 흩어진 사용자 행동을 실시간으로 수집하고 분석해,
              <br className="desktop-break" />
              전환을 만드는 마케팅 액션을 추천하고 실행합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={DEMO_URL} target="_blank" rel="noreferrer">
                Live demo
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href={GITHUB_ORG_URL} target="_blank" rel="noreferrer">
                <GithubIcon />
                Explore GitHub
              </a>
            </div>
          </div>

          <div className="signal-card" aria-label="LoopAd 데이터 처리 흐름">
            <div className="signal-card-header">
              <div>
                <span className="status-dot" />
                Decision engine
              </div>
              <span>LIVE</span>
            </div>
            <div className="signal-visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="signal-core">
                <LogoMark />
              </div>
              <span className="signal-node node-event">event</span>
              <span className="signal-node node-context">context</span>
              <span className="signal-node node-action">action</span>
            </div>
            <div className="signal-metrics">
              <div>
                <span>INPUT</span>
                <strong>Behavior stream</strong>
              </div>
              <div>
                <span>OUTPUT</span>
                <strong>Next best action</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="problem-strip" aria-label="LoopAd 핵심 가치">
          <p>Collect every signal.</p>
          <span />
          <p>Understand the context.</p>
          <span />
          <p>Act at the right moment.</p>
        </section>

        <section className="section product-section" id="product">
          <div className="section-heading">
            <p className="section-index">01 / PRODUCT</p>
            <h2>
              데이터에서 실행까지,
              <br />
              하나의 피드백 루프.
            </h2>
          </div>
          <p className="section-intro">
            분석 결과가 대시보드에 머물지 않도록 설계했습니다.
            수집부터 추천, 광고 전달, 성과 학습까지 각 서비스가 명확한 계약으로 연결됩니다.
          </p>

          <div className="pipeline-grid">
            {pipeline.map((item) => (
              <article className="pipeline-card" key={item.number}>
                <div className="pipeline-number">{item.number}</div>
                <div className="pipeline-connector" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.technology}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section architecture-section" id="architecture">
          <div className="architecture-copy">
            <p className="section-index section-index-light">02 / ARCHITECTURE</p>
            <h2>
              작게 나누고,
              <br />
              명확하게 연결했습니다.
            </h2>
            <p>
              각 서비스는 독립적으로 배포되고 관측됩니다. 이벤트와 API 계약을 기준으로 연결해
              기술 스택이 달라도 같은 데이터 흐름을 공유합니다.
            </p>
            <a href={DASHBOARD_URL} target="_blank" rel="noreferrer">
              Dashboard 열기 <ArrowIcon />
            </a>
          </div>

          <div className="architecture-map">
            <div className="architecture-row">
              <span>USER TOUCHPOINTS</span>
              <div className="architecture-node">Shopping demo</div>
              <div className="architecture-node">Event SDK</div>
              <div className="architecture-node">Ad SDK</div>
            </div>
            <div className="architecture-line">
              <i />
              <i />
              <i />
            </div>
            <div className="architecture-row architecture-row-main">
              <span>LOOPAD PLATFORM</span>
              <div className="architecture-node node-accent">Event collector</div>
              <div className="architecture-node node-accent">Decision API</div>
              <div className="architecture-node node-accent">Ad server</div>
            </div>
            <div className="architecture-line architecture-line-down">
              <i />
              <i />
              <i />
            </div>
            <div className="architecture-row">
              <span>DATA &amp; OPS</span>
              <div className="architecture-node">ClickHouse</div>
              <div className="architecture-node">PostgreSQL</div>
              <div className="architecture-node">Dashboard</div>
            </div>
          </div>
        </section>

        <section className="section repositories-section" id="repositories">
          <div className="section-heading">
            <p className="section-index">03 / OPEN SOURCE</p>
            <h2>서비스 경계를 그대로 담은 저장소.</h2>
          </div>
          <div className="repository-list">
            {repositories.map(([name, description, repository], index) => (
              <a
                className="repository-row"
                href={`${GITHUB_ORG_URL}/${repository}`}
                target="_blank"
                rel="noreferrer"
                key={repository}
              >
                <span className="repository-index">{String(index + 1).padStart(2, "0")}</span>
                <strong>{name}</strong>
                <p>{description}</p>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </section>

        <section className="closing-section">
          <p>Built by Team 4 · KRAFTON JUNGLE</p>
          <h2>
            광고 시스템을
            <br />
            끝까지 만들어 봤습니다.
          </h2>
          <a className="button button-inverse" href={GITHUB_ORG_URL} target="_blank" rel="noreferrer">
            View organization
            <ArrowIcon />
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <LogoMark />
          <span>LoopAd</span>
        </a>
        <p>Behavior in. Better actions out.</p>
        <p>© 2026 LoopAd</p>
      </footer>
    </div>
  );
}

export default App;
