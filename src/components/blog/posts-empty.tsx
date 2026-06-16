"use client";

import { useRouter } from "next/navigation";
import { FileText, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function PostsEmpty() {
  const router = useRouter();

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileText />
        </EmptyMedia>
        <EmptyTitle>No Posts</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New posts will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={() => router.refresh()}>
          <RefreshCcw />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  );
}
