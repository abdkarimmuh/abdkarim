"use client";

import {
  Card,
  Column,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

import { LabItem } from "@/types";

interface ProductProps {
  product: LabItem;
}

export default function Product({ product }: ProductProps) {
  return (
    <Card
      fillWidth
      direction="column"
      border="transparent"
      background="transparent"
      padding="4"
      radius="l-4"
    >
      <Media
        priority
        sizes="(max-width: 768px) 100vw, 640px"
        border="neutral-alpha-weak"
        cursor="interactive"
        radius="l"
        src={product.image.src}
        alt={product.image.alt}
        aspectRatio="16 / 9"
      />
      <Row fillWidth>
        <Column fillWidth gap="20" paddingY="m" paddingX="m">
          <Row fillWidth gap="20">
            <Text variant="heading-strong-l" wrap="balance">
              {product.title}
            </Text>
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={product.link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          </Row>

          <Text variant="body-default-m" onBackground="neutral-weak">
            {product.description}
          </Text>
          <Row wrap gap="8" paddingTop="8">
            {product.techStack.map((tag, tagIndex) => (
              <Tag
                key={`${product.title}-${tagIndex}`}
                size="l"
                prefixIcon={tag.icon}
              >
                {tag.name}
              </Tag>
            ))}
          </Row>
        </Column>
      </Row>
    </Card>
  );
}
