/**
 * Server Component for injecting one or more JSON-LD blobs.
 * Renders an <script type="application/ld+json"> per payload.
 */
export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((j, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }}
        />
      ))}
    </>
  );
}
