import type React from "react";

type JsonValue = Record<string, unknown>;

/**
 * Renders one or more schema.org objects as a JSON-LD `<script>`.
 *
 * `<` is escaped to `<` so a stray angle bracket inside any string value
 * can never break out of the script context — the standard safe way to embed
 * server-controlled JSON in HTML.
 */
export function JsonLd({
  data,
  id,
}: {
  data: JsonValue | JsonValue[];
  id?: string;
}): React.ReactElement {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
