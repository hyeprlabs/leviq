"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export function LegalContent({ content }: { content: SerializedEditorState }) {
  return (
    <RichText
      className="max-w-none space-y-4 text-sm leading-relaxed text-foreground/90 [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:font-medium [&_h3]:text-base [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-medium [&_strong]:text-foreground"
      data={content}
    />
  );
}
