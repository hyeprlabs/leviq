"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export function PostContent({ content }: { content: SerializedEditorState }) {
  return <RichText data={content} />;
}
