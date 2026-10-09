import { Project, Article, ExperienceItem } from '../types/portfolio';

export const personalBio = {
  name: 'Alexander Vex',
  title: 'Principal Systems Architect & Venture Engineer',
  location: 'San Francisco, CA (UTC-7) • Global Remote',
  email: 'alexander.vex@portfolio.dev',
  tagline: 'Bridging high-concurrency systems, computational design, and early-stage venture building.',
  summary:
    'Over the last 8+ years, I have architected mission-critical distributed engines, co-founded tech ventures backed by Tier-1 institutions, and built high-fidelity human interfaces that scale to millions of daily interactions. My focus lies at the boundary of zero-latency systems, spatial computing, and scalable venture infrastructure.',
  stats: [
    { label: 'Years in Production', value: '8+' },
    { label: 'Cumulative Venture Value', value: '$3.4B+' },
    { label: 'Shipped Deployments', value: '24+' },
    { label: 'Global Open-Source Stars', value: '18k+' },
  ],
  principles: [
    {
      title: 'First-Principles Engineering',
      desc: 'Eliminating abstraction bloat. We reason from bare-metal latencies, memory layout, and user psychology.',
    },
    {
      title: 'Extreme Aesthetic Rigor',
      desc: 'Form is not ornamentation; it is communication. Every micro-interaction and pixel carries operational intent.',
    },
    {
      title: 'Structural Durability',
      desc: 'Designing systems that withstand adversarial loads, organizational scaling, and technological paradigm shifts.',
    },
  ],
  techArsenal: {
    'Languages & Runtimes': ['TypeScript', 'Rust', 'Go', 'Python', 'C++ / WASM', 'Node.js'],
    'Frontend & Spatial': ['React 19', 'Next.js', 'Tailwind CSS', 'Three.js / WebGL', 'WebGPU', 'Motion'],
    'Infrastructure & Cloud': ['Docker / K8s', 'Distributed Redis', 'PostgreSQL', 'Cloudflare Workers', 'AWS / GCP'],
    'Venture & Architecture': ['High-Frequency Systems', 'Consensus Engines', 'System Observability', 'GTM Mechanics'],
  },
};

export const careerTimeline: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Founder & Principal Architect',
    company: 'VEX Studio Labs',
    location: 'San Francisco & Remote',
    description:
      'Directing core architectural research and incubating frontier technology ventures from zero to Series A.',
    achievements: [
      'Incubated 3 spin-out architectures with cumulative institutional backing surpassing $42M.',
      'Developed proprietary high-throughput state synchronization layer handling 80k events/sec.',
      'Advised tier-1 founders on cryptographic infrastructure, latency reduction, and engineering team scaling.',
    ],
    skills: ['Rust', 'Distributed Consensus', 'Venture Strategy', 'React', 'WASM'],
  },
  {
    period: '2021 — 2024',
    role: 'Head of Product Engineering & Core Systems',
    company: 'HyperScale Systems',
    location: 'San Francisco, CA',
    description:
      'Led a 26-engineer organization across core infrastructure, real-time streaming engines, and client applications.',
    achievements: [
      'Reduced p99 API latency from 180ms to 9ms via intelligent edge-caching and zero-copy deserialization.',
      'Scaled global active user footprint from 250k to 3.8M MAU with 99.995% service uptime.',
      'Architected design token engine unifying web, mobile, and desktop application interfaces.',
    ],
    skills: ['TypeScript', 'Go', 'PostgreSQL', 'WebSockets', 'Kubernetes'],
  },
  {
    period: '2018 — 2021',
    role: 'Senior Systems Engineer',
    company: 'Aura Interactive',
    location: 'New York, NY',
    description:
      'Designed real-time interactive canvas engines and high-volume data visualization tools for institutional clients.',
    achievements: [
      'Pioneered GPU-accelerated spatial rendering engine in browser delivering 60fps across millions of data points.',
      'Authored 4 foundational open-source packages adopted by over 40,000 active developers worldwide.',
    ],
    skills: ['WebGL', 'TypeScript', 'C++', 'Node.js', 'Distributed State'],
  },
  {
    period: '2016 — 2018',
    role: 'Software Engineer',
    company: 'Nexus Core Labs',
    location: 'Seattle, WA',
    description:
      'Built backend microservices, real-time messaging pipelines, and automated deployment pipelines.',
    achievements: [
      'Re-engineered transactional pipeline processing $25M in monthly transaction volume.',
      'Collaborated on initial continuous deployment system cutting deployment cycle times by 65%.',
    ],
    skills: ['Go', 'Docker', 'AWS', 'Redis', 'Python'],
  },
];

export const portfolioProjects: Project[] = [
  {
    id: 'kite-core',
    title: 'Kite Distributed State Layer',
    category: 'Venture Systems',
    year: '2025',
    tagline: 'Sub-millisecond collaborative state reconciliation across distributed nodes.',
    description:
      'A high-performance CRDT state engine engineered in Rust and compiled to WebAssembly for seamless client-edge replication.',
    longDescription:
      'Collaborative applications consistently struggle with split-brain states and high network overhead. Kite solves this by implementing an event-sourced Conflict-Free Replicated Data Type (CRDT) engine that compresses state diffs and serializes payloads into flat binary buffers.',
    impactMetrics: [
      { label: 'Latency p99', value: '< 2.4 ms' },
      { label: 'Throughput', value: '140k msg/sec' },
      { label: 'Payload Reduction', value: '78%' },
    ],
    tags: ['Rust', 'WebAssembly', 'CRDT', 'Zero-Copy', 'WebSockets'],
    challenge:
      'Traditional operational transform servers introduce catastrophic choke points when concurrency surges beyond 10,000 simultaneous editors.',
    solution:
      'Decentralized tree-based state vectors with deterministic local resolution and optimistic concurrency control, verified via formal property testing.',
    architecture: [
      'Binary serialization via flatbuffers without reflection overhead',
      'WASM worker execution isolated from main browser UI thread',
      'Edge peer-to-peer relay fallback via WebRTC data channels',
    ],
    demoUrl: 'https://github.com/vex-labs/kite-core',
    githubUrl: 'https://github.com/vex-labs/kite-core',
    featured: true,
  },
  {
    id: 'aether-terminal',
    title: 'Aether Capital Terminal',
    category: 'Venture Systems',
    year: '2025',
    tagline: 'Institutional-grade portfolio intelligence and quantitative risk telemetry.',
    description:
      'A streamlined financial dashboard streaming live orderbook data, liquidation heatmaps, and macro sensitivity models.',
    longDescription:
      'Built for family offices and quantitative hedge funds managing diversified multi-asset portfolios. Aether combines real-time streaming sockets with hardware-accelerated canvas graphs to render millions of data ticks without dropping a single frame.',
    impactMetrics: [
      { label: 'Assets Monitored', value: '$1.8B+' },
      { label: 'Tick Latency', value: '12 ms' },
      { label: 'Frame Rate', value: 'Locked 60 FPS' },
    ],
    tags: ['React 19', 'TypeScript', 'WebGL', 'WebSockets', 'Tailwind CSS'],
    challenge:
      'Rendering dynamic orderbook depths with thousands of simultaneous DOM elements degraded browser responsiveness during market volatility.',
    solution:
      'Moved data ingestion to dedicated Web Worker and replaced standard SVG visualizers with a lightweight custom WebGL 2D renderer.',
    architecture: [
      'WebWorker thread data decoding and circular ring buffer',
      'Shader-based price depth gradient rasterization',
      'Predictive caching layer for historical candle aggregation',
    ],
    demoUrl: 'https://github.com/vex-labs/aether-terminal',
    githubUrl: 'https://github.com/vex-labs/aether-terminal',
    featured: true,
  },
  {
    id: 'nexus-neural',
    title: 'Nexus Neural Orchestrator',
    category: 'AI & Data',
    year: '2024',
    tagline: 'Deterministic graph executor for autonomous multi-agent pipelines.',
    description:
      'An agent framework providing compile-time type safety, memory persistence, and auditable tool execution chains.',
    longDescription:
      'Generative agents fail in production when prompts hallucinate unstructured parameters. Nexus introduces strict schema-validated execution graphs with rollback capability, comprehensive tracing, and token economics monitoring.',
    impactMetrics: [
      { label: 'Execution Reliability', value: '99.8%' },
      { label: 'Token Cost Reduction', value: '42%' },
      { label: 'Active Deployments', value: '12 Enterprise' },
    ],
    tags: ['Python', 'TypeScript', 'FastAPI', 'Vector Indexes', 'OpenAI / Gemini SDK'],
    challenge:
      'Agent loops frequently enter non-terminating circular reasoning cycles and incur runaway API costs without deterministic safety guards.',
    solution:
      'Finite State Machine (FSM) constraint wrapping each agent step with automatic budget ceilings, timeout breakers, and deterministic test fixtures.',
    architecture: [
      'DAG topological sorting for parallel node execution',
      'Dual-tier memory: short-term in Redis, semantic in HNSW index',
      'Structured telemetry streaming via OpenTelemetry exporter',
    ],
    demoUrl: 'https://github.com/vex-labs/nexus-neural',
    githubUrl: 'https://github.com/vex-labs/nexus-neural',
    featured: true,
  },
  {
    id: 'prism-canvas',
    title: 'Prism Spatial Studio',
    category: 'Frontend & Design',
    year: '2024',
    tagline: 'Next-generation 3D spatial interface & procedural mesh manipulation platform.',
    description:
      'A browser-based CAD and spatial composition environment leveraging Three.js, GLSL shaders, and liquid glass ergonomics.',
    longDescription:
      'Prism empowers spatial designers and architectural modelers to collaborate in an interactive 3D viewport directly inside the browser, featuring real-time physics, procedural mesh boolean operations, and photorealistic PBR material rendering.',
    impactMetrics: [
      { label: 'Monthly Active Artists', value: '45k+' },
      { label: 'Export Formats', value: 'GLTF, USDZ, OBJ' },
      { label: 'Shader Performance', value: '120 Hz Ready' },
    ],
    tags: ['Three.js', 'GLSL', 'WebGL', 'TypeScript', 'Tailwind CSS'],
    challenge:
      'Complex boolean mesh geometry calculations routinely caused UI stutter on consumer-grade mobile and laptop GPUs.',
    solution:
      'Integrated C++ computational geometry engine compiled via Emscripten into WebAssembly with SIMD acceleration.',
    architecture: [
      'OffscreenCanvas rendering worker architecture',
      'Custom post-processing pipeline for atmospheric depth',
      'Undo/redo delta history tree with zero memory leaks',
    ],
    demoUrl: 'https://github.com/vex-labs/prism-canvas',
    githubUrl: 'https://github.com/vex-labs/prism-canvas',
  },
  {
    id: 'veloce-db',
    title: 'Veloce In-Memory Edge Store',
    category: 'Developer Tools',
    year: '2023',
    tagline: 'Ultra-lean embedded key-value engine with zero-allocation read paths.',
    description:
      'Written in Go and designed for edge workers requiring microsecond reads, TTL expirations, and write-ahead WAL logging.',
    longDescription:
      'When deploying microservices at the global edge, standard database roundtrips add 50-100ms of unavoidable latency. Veloce sits alongside serverless functions as an embedded store providing atomic CAS operations and automatic snapshot compaction.',
    impactMetrics: [
      { label: 'Read Latency', value: '< 450 ns' },
      { label: 'Binary Footprint', value: '6.4 MB' },
      { label: 'Community Downloads', value: '250k+' },
    ],
    tags: ['Go', 'Memory Architecture', 'WAL', 'Distributed Systems', 'Edge'],
    challenge:
      'Garbage collector pauses in runtime environments spiked latency percentiles unpredictably during sustained traffic spikes.',
    solution:
      'Engineered an off-heap buffer management pool that recycles memory chunks and completely bypasses Go runtime GC scans.',
    architecture: [
      'Lock-free skip list for concurrent ordered keys',
      'Append-only write-ahead log with zstd compression',
      'Memory-mapped disk persistence for near-instant boot times',
    ],
    demoUrl: 'https://github.com/vex-labs/veloce-db',
    githubUrl: 'https://github.com/vex-labs/veloce-db',
  },
  {
    id: 'chronos-tokens',
    title: 'Chronos Design System Core',
    category: 'Frontend & Design',
    year: '2023',
    tagline: 'Accessibility-first token engine & zero-runtime UI component primitive library.',
    description:
      'A hardened design foundation adopted across 14 enterprise web properties, supporting 100% WCAG AAA contrast compliance.',
    longDescription:
      'Chronos combines mathematical spacing scales, fluid typography clamps, and keyboard-first accessibility primitives into an unopinionated CSS design architecture built for long-term maintenance.',
    impactMetrics: [
      { label: 'WCAG Compliance', value: '100% AAA' },
      { label: 'Bundle Overhead', value: '2.1 KB gzipped' },
      { label: 'Component Primitives', value: '42 Components' },
    ],
    tags: ['Design Systems', 'Accessibility', 'CSS Architecture', 'TypeScript', 'React'],
    challenge:
      'Enterprise product teams spent 30% of sprint capacity repairing accessibility violations and UI visual regressions.',
    solution:
      'Built a headless state machine core with automated contrast verification in CI and automated ARIA role assertion testing.',
    architecture: [
      'Headless hook architecture separated from presentation layer',
      'CSS custom properties tokens with dark/high-contrast auto-adaptation',
      'Zero external styling runtime overhead',
    ],
    demoUrl: 'https://github.com/vex-labs/chronos-tokens',
    githubUrl: 'https://github.com/vex-labs/chronos-tokens',
  },
];

export const articles: Article[] = [
  {
    id: 'end-of-slop',
    title: 'The End of Slop: Architectural Discipline in the Era of Generative Code',
    category: 'Architecture',
    publishedDate: 'February 2026',
    readTime: '6 min read',
    summary:
      'Why the abundance of cheap code makes aesthetic restraint, taste, and systems engineering more critical than ever before.',
    tags: ['Software Philosophy', 'Frontend Design', 'Code Quality', 'AI'],
    content: [
      'We have entered an era where synthesizing two thousand lines of functional syntax takes thirty seconds. For junior observers, this looks like the democratization of software. For senior architects, it reveals a profound reckoning: syntax is free, but coherence has never been more scarce.',
      'The proliferation of generic AI templates has flooded the web with uniform aesthetic slop—gradient pills, floating cards with arbitrary 1px borders, and boilerplate micro-services stitched together without a unifying mental model.',
      'True craft begins where generation ends: knowing which fifty lines to delete, which abstractions to reject, and how to maintain unyielding spatial discipline across every breakpoint.',
      'When code generation costs approach zero, the premium shifts entirely toward judgment: systems architecture, human psychology, performance boundaries, and domain truth.',
    ],
  },
  {
    id: 'zero-latency-systems',
    title: 'Designing for Zero-Latency: Lessons from 100M Daily WebSocket Messages',
    category: 'Systems',
    publishedDate: 'January 2026',
    readTime: '8 min read',
    summary:
      'Tactical architecture patterns for keeping p99 latency under 10ms across distributed browser clients under severe load.',
    tags: ['Distributed Systems', 'WebSockets', 'Performance', 'Rust'],
    content: [
      'In high-frequency trading and real-time collaborative studios, 50ms of network latency feels like an eternity. If the user moves their cursor or edits a state variable, feedback must be registered within 16ms to maintain continuous cognitive immersion.',
      'We discovered that the primary villain is rarely raw network transit; it is serialization overhead and garbage collection pauses in intermediate runtimes.',
      'By transitioning from JSON-based REST contracts to binary flatbuffer schemas and streaming diffs over multiplexed WebSockets, we cut our bandwidth utilization by 78% and eliminated heap allocations on hot read paths.',
      'Rule number one of high-concurrency systems: the fastest byte sent is the byte that never had to be parsed.',
    ],
  },
  {
    id: 'venture-studio-mechanics',
    title: 'Venture Studio Engineering: Why Most Corporate Labs Fail and How to Build Right',
    category: 'Venture',
    publishedDate: 'November 2025',
    readTime: '5 min read',
    summary:
      'Deconstructing the economic incentives and technical velocity required to incubate 0-to-1 companies from stealth.',
    tags: ['Venture Capital', 'Startup Building', 'Studio Strategy', 'Incubation'],
    content: [
      'Corporate innovation labs almost always fail because they decouple risk from reward. They build proof-of-concepts that look impressive in PowerPoint presentations to board committees, but dissolve upon contact with real market gravity.',
      'At VEX, we run on a different theorem: we build from day zero as if the parent entity will vanish tomorrow. The tech stack must be production-ready, the unit economics must be solvent, and the founders must own decisive sovereign equity.',
      'Engineers in a high-velocity venture studio are not ticket-takers; they are co-founders with compiler access.',
    ],
  },
  {
    id: 'liquid-interfaces',
    title: 'The Mathematical Beauty of Liquid Interfaces and Spatial Motion',
    category: 'Design',
    publishedDate: 'September 2025',
    readTime: '7 min read',
    summary:
      'Exploring non-linear easing curves, backdrop luminosity blending, and tactile glass dynamics in modern web products.',
    tags: ['Design Systems', 'CSS & WebGL', 'Motion', 'Ergonomics'],
    content: [
      'Static flat design was a necessary cleansing ritual following early-2000s skeuomorphism. But flat design also stripped digital interfaces of depth, tactile hierarchy, and optical delight.',
      'Modern liquid glass interfaces resurrect physical spatial awareness without returning to fake bevels and embossed drop shadows.',
      'By harnessing backdrop luminosity filters, linear gradient border masks, and physics-based spring dampening, we create surfaces that feel grounded in real optical physics. The interface breathes with the content beneath it.',
    ],
  },
];
