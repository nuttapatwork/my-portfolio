import { useEffect, useState } from "react";

type DataSource = "checking" | "api" | "static";

interface Props {
  source: DataSource;
  apiUrl: string;
}

export default function ApiStatus({ source, apiUrl }: Props) {
  const [ping, setPing] = useState<number | null>(null);

  // วัด latency ทุก 30 วินาที เมื่อ backend online
  useEffect(() => {
    if (source !== "api") return;
    const measure = async () => {
      const t0 = Date.now();
      try {
        await fetch(`${apiUrl}/health`, { signal: AbortSignal.timeout(4000) });
        setPing(Date.now() - t0);
      } catch {
        setPing(null);
      }
    };
    measure();
    const interval = setInterval(measure, 30_000);
    return () => clearInterval(interval);
  }, [source, apiUrl]);

  const config = {
    checking: {
      dot: "status__dot--checking",
      label: "Connecting…",
      sub: "Checking backend",
    },
    api: {
      dot: "status__dot--online",
      label: "Backend Online",
      sub: ping != null ? `Go API · ${ping}ms` : "Go API · connected",
    },
    static: {
      dot: "status__dot--offline",
      label: "Offline Mode",
      sub: "Using local data.ts",
    },
  }[source];

  return (
    <div className={`status__badge status__badge--${source}`}>
      <span className={`status__dot ${config.dot}`} />
      <div className="status__text">
        <span className="status__label">{config.label}</span>
        <span className="status__sub">{config.sub}</span>
      </div>
    </div>
  );
}
