export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  gradient: string
  gradientText: string
  icon: string
  features?: string[]
  status?: string
  highlights?: string[]
  limitations?: string[]
  disclaimer?: string
}

export const projects: Project[] = [
  {
    slug: 'bodypress',
    name: 'BodyPress',
    tagline: 'Your Body, Briefed Daily',
    description:
      'AI-powered health journal from your wearable data. A cross-platform Flutter app that synthesizes physiological, environmental, and behavioral signals into daily first-person narratives.',
    longDescription:
      'Most health apps show dashboards of numbers. BodyPress takes a different approach: it presents your biometrics as a narrative. Story-framing surfaces correlations you\'d otherwise miss — poor sleep preceding an elevated resting heart rate, high AQI days correlating with fewer steps — and reading about yourself is more engaging than staring at charts.\n\nUnder the hood the app treats the human body as an observable system: collect objective signals throughout the day, feed them to an LLM, and get back a warm, first-person journal entry that reads as though your body is writing to you.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'BLE', 'HealthKit / Health Connect'],
    github: 'https://github.com/the-governor-hq/bodyPress-flutter',
    gradient: 'from-pink-500/20 to-rose-500/20',
    gradientText: 'from-pink-400 to-rose-400',
    icon: '❤️',
    status: 'Active — v1.0.8',
    features: [
      'AI-generated daily journal from real sensor data — headline, mood, summary, full body narrative',
      'Background captures with WorkManager, quiet-hour and battery awareness',
      'BLE Heart Rate streaming — Polar, Wahoo, Garmin straps with live ECG-style waveform',
      'HRV & autonomic tone — RMSSD / SDNN from BLE RR intervals, plain-language stress hints',
      'Patterns & trends — AI-derived insights aggregated from capture history',
      'Cross-platform — iOS (HealthKit) and Android (Health Connect)',
      'User annotations — free-text notes and mood emojis per day',
      'Material 3 theming with dark & light mode',
    ],
    highlights: [
      'Data sources: steps, HR, HRV, sleep, calories, workouts, BLE HR, GPS, weather, AQI, UV, calendar',
      'Privacy-first: all data stored locally in encrypted SQLite, location never persisted',
      'Open source under MIT license',
    ],
  },
  {
    slug: 'hemolens',
    name: 'HemoLens',
    tagline: 'Non-Invasive Hemoglobin Estimation',
    description:
      'Experimental on-device pipeline for non-invasive hemoglobin level estimation from fingernail images. Two-stage browser pipeline with YOLOv8-nano nail detection and MobileNetV4 Hb regression.',
    longDescription:
      'HemoLens estimates hemoglobin (Hb) levels from smartphone camera images of fingernail beds — no blood draw required. The pipeline runs entirely in the browser with two ONNX models:\n\n1. **Nail Detection (Stage 1)** — YOLOv8-nano (11.6 MB ONNX) detects nail bounding boxes in camera frames at 320×320. Trained on 1,500 annotated boxes from the Yakimov dataset. Achieves mAP50 = 0.995 with perfect recall.\n\n2. **Hb Regression (Stage 2)** — Frozen MobileNetV4-Conv-Small backbone + Ridge regression head (~10 MB ONNX). Runs on each detected nail crop (224×224). Multi-frame median reduces noise.\n\n3. **Web App** — Progressive Web App via ONNX Runtime Web (WASM). Camera capture, auto nail detection, multi-frame inference (30 frames → IQR outlier rejection → median), WHO severity classification. Fully offline-capable.',
    tech: ['ONNX Runtime', 'YOLOv8', 'MobileNetV4', 'Python', 'PWA', 'WASM'],
    github: 'https://github.com/the-governor-hq/HemoLens',
    gradient: 'from-red-500/20 to-orange-500/20',
    gradientText: 'from-red-400 to-orange-400',
    icon: '🔬',
    status: 'Research / Experimental',
    features: [
      'Two-stage ONNX inference pipeline — nail detection + Hb regression',
      'Runs entirely in-browser — no images leave the device',
      'Multi-frame capture: 30 frames with IQR outlier rejection and median aggregation',
      'WHO severity classification (severe, moderate, mild, normal)',
      'YOLOv8-nano nail detector: mAP50 = 0.995, Recall = 1.000',
      'Hb regression CV MAE: 1.91 ± 0.27 g/dL (3-fold session-aware CV)',
      'Offline-capable Progressive Web App',
      'Image upload mode for single-image analysis',
    ],
    highlights: [
      'Trained on 2024 Yakimov et al. fingernail dataset (250 patients, single center)',
      'Best offline hybrid holdout: test MAE = 1.305 g/dL (CNN + color features + CatBoost)',
      'Deployed web model: test MAE ≈ 1.52 g/dL when averaging 3 crops per patient',
      'Severe anemia detection remains unreliable — further research needed',
    ],
    limitations: [
      'Tiny dataset: 250 patients from a single center. Results may not generalize to other populations, skin tones, cameras, or lighting conditions.',
      'Severe anemia detection is unreliable: the model\'s error on severe cases (Hb < 8 g/dL) is ~4 g/dL — this is the most clinically important class and the model fails on it.',
      'CV R² is negative: under session-aware cross-validation, the model does not reliably outperform predicting the population mean.',
      'Train/deploy gap: the best offline model (CatBoost + color features) cannot run in the browser. The deployed web model (CNN-only Ridge) is weaker.',
      'Multi-frame reduces variance, not bias: if the model systematically mispredicts under certain conditions, 30 frames will converge to the wrong answer with high confidence.',
      'No true uncertainty estimation: the reported confidence stats (std dev, range) measure inter-frame consistency, not prediction accuracy.',
      'WHO severity bins: the code uses general-population thresholds (8/11/13 g/dL). Real WHO guidelines are sex- and age-specific.',
    ],
    disclaimer:
      'This project is NOT a medical device. HemoLens is a personal research project and is provided strictly for educational and experimental purposes. It has not been validated in a clinical setting, is not approved by any regulatory body (FDA, CE, Health Canada, etc.), and must never be used to make medical decisions, diagnose anemia, or replace a blood test. Do not rely on this software for any health-related purpose. If you suspect anemia or any medical condition, consult a qualified healthcare professional and get a proper complete blood count (CBC). The authors assume no liability for any use or misuse of this software.',
  },
  {
    slug: 'constitution',
    name: 'Constitution',
    tagline: 'AI Safety Framework',
    description:
      'Constraint-enforcement framework for AI-assisted development with health data. Enforces strict boundaries between wellness observations and clinical assertions.',
    longDescription:
      'Constitution is a runtime constraint-enforcement framework designed for AI-assisted health applications. It ensures that AI-generated content stays within safe boundaries — distinguishing between wellness observations ("your sleep was shorter than usual") and clinical assertions ("you have insomnia") that require medical authority.\n\nThe framework integrates via MCP (Model Context Protocol) and provides real-time validation of AI outputs, making it safe to use language models in health-adjacent applications.',
    tech: ['TypeScript', 'Runtime Validation', 'MCP'],
    github: 'https://github.com/the-governor-hq/constitution',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    gradientText: 'from-blue-400 to-cyan-400',
    icon: '⚖️',
    features: [
      'Runtime constraint enforcement for AI-generated health content',
      'Strict wellness vs. clinical assertion boundaries',
      'MCP (Model Context Protocol) integration',
      'Configurable rule sets and validation pipelines',
    ],
  },
  {
    slug: 'wearable-sdk',
    name: 'Wearable SDK',
    tagline: 'Ship Wearable OAuth in 15 Minutes',
    description:
      'TypeScript-first SDK for connecting to Garmin, Fitbit, and more. Passport.js-like DX with Prisma-first storage and auto token refresh.',
    longDescription:
      'Wearable SDK provides a TypeScript-first developer experience for integrating wearable device data into your applications. Inspired by the simplicity of Passport.js, it handles the complexity of OAuth flows, token management, and data normalization across providers like Garmin, Fitbit, and more.\n\nWith Prisma-first storage and automatic token refresh, you can go from zero to collecting wearable data in under 15 minutes.',
    tech: ['TypeScript', 'OAuth 2.0', 'Prisma'],
    github: 'https://github.com/the-governor-hq/wearable-sdk',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    gradientText: 'from-emerald-400 to-teal-400',
    icon: '⌚',
    features: [
      'Passport.js-like developer experience',
      'Multi-provider support: Garmin, Fitbit, and more',
      'Prisma-first token and data storage',
      'Automatic OAuth token refresh',
      'TypeScript-first with full type safety',
    ],
  },
  {
    slug: 'ambient-scan',
    name: 'Ambient Scan',
    tagline: 'Environmental Data Scraper',
    description:
      'Zero-dependency single-file server for normalized environmental data: temperature, air quality, UV index, humidity, wind, and geolocation.',
    longDescription:
      'Ambient Scan is a lightweight, zero-dependency Node.js server that provides normalized environmental data via a simple REST API. Given a GPS coordinate, it returns temperature, air quality index, UV index, humidity, wind conditions, atmospheric pressure, and more.\n\nDesigned to be the environmental data backbone for health applications like BodyPress, it aggregates data from multiple sources and normalizes it into a consistent format.',
    tech: ['Node.js', 'Zero Dependencies', 'REST API'],
    github: 'https://github.com/the-governor-hq/ambient-scan',
    gradient: 'from-violet-500/20 to-purple-500/20',
    gradientText: 'from-violet-400 to-purple-400',
    icon: '🌍',
    features: [
      'Single-file, zero-dependency Node.js server',
      'Normalized environmental data from GPS coordinates',
      'Temperature, AQI, UV, humidity, wind, pressure',
      'Ready to deploy on Fly.io or any container host',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
