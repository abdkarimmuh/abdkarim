import {
  Column,
  Grid,
  Heading,
  Meta,
  Schema,
  Text,
} from "@once-ui-system/core";

import Product from "@/components/lab/Product";
import { baseURL, lab, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: lab.title,
    description: lab.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(lab.title)}`,
    path: lab.path,
  });
}

export default function Lab() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={lab.title}
        description={lab.description}
        path={lab.path}
        image={`/api/og/generate?title=${encodeURIComponent(lab.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${lab.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="s" variant="heading-strong-xl">
        {lab.header}
      </Heading>
      <Text
        wrap="balance"
        variant="body-default-s"
        onBackground="neutral-weak"
        marginBottom="l"
      >
        {lab.description}
      </Text>
      <Grid columns="2" s={{ columns: 1 }} fillWidth marginBottom="24" gap="16">
        {lab.products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </Grid>
    </Column>
  );
}
