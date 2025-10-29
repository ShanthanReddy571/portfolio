export const projects = [
  {
    slug: "connected-associate-modules",
    title: "Connected Associate A� Real�?`time Self�?`Checkout",
    summary: "Core modules for retail self�?`checkout with MQTT sync across 100k+ devices.",
    description:
      "Built and hardened modules for the Connected Associate application enabling real�?`time self�?`checkout lane management on Android and tablet devices. Implemented MQTT�?`based messaging, OAuth2/OpenID authorization flows, and CI�?`backed testing to ensure reliability at scale.",
    tags: ["React Native", "TypeScript", "MQTT", "OAuth2", "OpenID", "CI/CD"],
    tech: ["React Native", "TypeScript", "Redux", "Jest", "Cucumber", "MQTT", "OpenID"],
    highlights: [
      "Reduced sync latency by ~40% across checkout lanes via MQTT real�?`time updates.",
      "Added OAuth2 + OpenID flows to streamline and secure access for 2k+ users.",
      "E2E & unit tests with CI reduced post�?`deploy support tickets by ~20%.",
    ],
    links: { live: null, repo: null },
    year: "2023",
  },
  {
    slug: "pano-stitching-ransac",
    title: "Panoramic Image Stitching A� Samsung Research",
    summary: "RANSAC�?`based transforms with feature matching; 92% alignment, �^'40% latency.",
    description:
      "Implemented a panoramic image stitching pipeline leveraging keypoint detection and RANSAC�?`based perspective transforms. Optimized feature matching & blending to reduce stitching latency while improving preview quality for high�?`resolution camera feeds.",
    tags: ["OpenCV", "RANSAC", "Image Processing", "C++"],
    tech: ["OpenCV", "SIFT", "Homography", "Image Blending"],
    highlights: [
      "Achieved ~92% alignment accuracy across image pairs.",
      "Optimized pipeline to cut stitching latency by ~40%.",
    ],
    links: { live: null, repo: null },
    year: "2021",
  },
  {
    slug: "adas-3d-scene-understanding",
    title: "Monocular 3D Scene Understanding for ADAS",
    summary: "CUDA�?`accelerated perception; �^'35% frame time; multi�?`object tracking stability +22%.",
    description:
      "Research project implementing monocular 3D perception modules for ADAS using PyTorch and CUDA. Included back�?`projection, Kalman filtering, MiDaS/YOLO/SMPL components, and HPC deployment for real�?`time inference.",
    tags: ["PyTorch", "CUDA", "YOLO", "OpenCV", "HPC"],
    tech: ["PyTorch", "CUDA", "Kalman Filter", "YOLO", "OpenCV"],
    highlights: [
      "Improved tracking temporal stability by ~22% via Kalman filtering.",
      "~35% lower frame�?`wise processing time on full driving sequences.",
      "1.6A- GPU speedup on HPC clusters with CUDA optimizations.",
    ],
    links: { live: null, repo: null },
    year: "2025",
  },
  {
    slug: "pintos-os-dev",
    title: "Pintos OS Development",
    summary: "Thread scheduler, synchronization primitives, VM improvements, and kernel tuning.",
    description:
      "Extended the Pintos educational OS with priority scheduling, donations, advanced queues, and VM features such as lazy loading, memory�?`mapped files, and demand paging. Tuned the scheduler and solved concurrency issues with 100% stability across regression tests.",
    tags: ["C", "OS", "Threads", "VM"],
    tech: ["C", "Round�?`Robin", "Priority Scheduler", "MMap"],
    highlights: [
      "Cut average waiting time by ~28% via dynamic time quantum & queue tuning.",
      "Stability at 100% across regression tests with robust synchronization.",
    ],
    links: { live: null, repo: null },
    year: "2024",
  },
  {
    slug: "airbnb-nyc-pricing-explorer",
    title: "Airbnb NYC Pricing Explorer",
    summary: "Interactive map & charts; pricing insights by borough and season.",
    description:
      "A Next.js + charts dashboard that explores NYC Airbnb listings with map overlays, filters, and seasonal pricing trends. Backed by a small Python API for data processing.",
    tags: ["Next.js", "Charts", "Map", "Python"],
    tech: ["Next.js", "react�?`chartjs", "Leaflet", "FastAPI"],
    highlights: [
      "Client�?`side filtering with virtualized lists keeps 60fps interactions.",
    ],
    links: { live: "#", repo: "#" },
    year: "2024",
  },
  {
    slug: "secure-notes",
    title: "Secure Notes",
    summary: "End�?`to�?`end encrypted notes with NextAuth + Prisma.",
    description:
      "Zero�?`knowledge note app using client�?`side crypto, NextAuth for auth, and Prisma/Postgres for storage. Includes device key management and secure share links.",
    tags: ["Next.js", "Prisma", "Postgres", "Security"],
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
    highlights: [
      "Local encryption keys never leave the browser; server stores only ciphertext.",
    ],
    links: { live: "#", repo: "#" },
    year: "2024",
  },
  {
    slug: "algoplayground",
    title: "AlgoPlayground",
    summary: "Interactive visualizations for graphs & DP.",
    description:
      "Educational visualizer for graph algorithms and dynamic programming with canvas�?`based animations and step�?`through execution.",
    tags: ["Next.js", "Canvas", "Education"],
    tech: ["Canvas", "Next.js"],
    highlights: ["Step debugging and state snapshots for learning."],
    links: { live: "#", repo: "#" },
    year: "2023",
  },
];

export const projectMap = Object.fromEntries(projects.map((p) => [p.slug, p]));
