export default function Indicators() {
  const indices = [
    { name: "Auditory Texture", abbr: "AT", description: "Diversity and pleasantness of the sound environment. Measures the presence of natural sounds, human activity, and absence of intrusive mechanical noise.", score: 72, range: "0–100" },
    { name: "Thermal Comfort", abbr: "TC", description: "Range and predictability of microclimate conditions. Assesses sun/shade variation, wind mitigation, surface temperature, and seasonal adaptability.", score: 58, range: "0–100" },
    { name: "Visual Rhythm", abbr: "VR", description: "Proportion of human-scale elements to vehicular infrastructure. Measures façade variation, fenestration, vertical rhythm, and ground-level activation.", score: 81, range: "0–100" },
    { name: "Olfactory Identity", abbr: "OI", description: "Presence of distinctive, non-pollutant odors that contribute to place identity. Includes natural (vegetation, water), culinary, and material scents.", score: 44, range: "0–100" },
    { name: "Tactile Ground", abbr: "TG", description: "Quality and variation of walking surfaces. Evaluates texture, hardness contrast, gradient, and material diversity underfoot.", score: 65, range: "0–100" },
  ];

  const total = Math.round(indices.reduce((s, i) => s + i.score, 0) / indices.length);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="border-b border-border pb-10 mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Measurement</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">Indicators</h1>
        <p className="text-base text-muted-foreground max-w-xl">
          The Machisensibility Index (MSI) is composed of five sub-indices, each measuring a distinct dimension of urban sensory experience.
        </p>
      </div>

      {/* MSI Composite */}
      <div className="border border-border p-8 mb-12 bg-secondary/20">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Composite Score</p>
            <p className="text-6xl font-light">{total}</p>
            <p className="text-xs text-muted-foreground mt-1 font-mono">MSI — Machisensibility Index</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              This example score represents a mid-tier sensibility environment — one with notable strengths in visual rhythm and auditory texture, but requiring intervention in olfactory identity and thermal comfort. Pilot applications in Osaka's Minami district established a regional baseline of 52.
            </p>
          </div>
        </div>
      </div>

      {/* Sub-indices */}
      <div className="space-y-0">
        {indices.map((idx, i) => (
          <div key={idx.abbr} className="border-b border-border py-8 grid md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-1">{String(i + 1).padStart(2, "0")}</p>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{idx.abbr}</p>
            </div>
            <div className="md:col-span-3">
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="text-xl font-light">{idx.name}</h2>
                <span className="text-2xl font-light text-foreground">{idx.score}</span>
              </div>
              <div className="w-full bg-secondary rounded-none h-px mb-4">
                <div
                  className="bg-foreground h-px transition-all duration-700"
                  style={{ width: `${idx.score}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{idx.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology note */}
      <div className="mt-16 border-t border-border pt-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Methodology</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              MSI scores are derived from a combination of expert walking surveys, participant observation, and structured community consultation. Each sub-index is scored by a minimum of three trained assessors using standardized protocols. Composite scores are weighted equally across sub-indices unless site-specific conditions warrant adjustment.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The index is designed to be applied at the street segment scale (typically 200–500m) and aggregated to district and city scales. It is not a substitute for detailed environmental measurement but provides a rapid, reproducible, and comparative assessment tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
