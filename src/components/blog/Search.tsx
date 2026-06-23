"use client";

import { useMemo } from "react";

import { Kbar, Row, Icon, Text } from "@once-ui-system/core";
import { useRouter } from "next/navigation";

type ServerItem = {
  id: string;
  name: string;
  section?: string;
  keywords?: string;
  href?: string;
  icon?: string;
  description?: string;
};

export function Search({ items = [] }: { items?: ServerItem[] }) {
  const router = useRouter();

  const kbarItems = useMemo(() => {
    return items.map((it) => ({
      id: it.id,
      name: it.name,
      section: it.section || "Posts",
      shortcut: [],
      keywords: it.keywords || "",
      href: it.href,
      icon: it.icon || "document",
      perform: () => {
        if (it.href) router.push(it.href);
      },
      description: it.description,
    }));
  }, [items, router]);

  return (
    <Kbar items={kbarItems} cursor="interactive">
      <Row
        gap="8"
        paddingX="12"
        paddingY="8"
        marginBottom="l"
        vertical="center"
      >
        <Icon name="search" size="xs" onBackground="neutral-weak" />
        <Text variant="label-default-s" onBackground="neutral-weak">
          Search posts…
        </Text>
        <Text
          variant="label-default-s"
          onBackground="neutral-weak"
          marginLeft="8"
        >
          ⌘K
        </Text>
      </Row>
    </Kbar>
  );
}
