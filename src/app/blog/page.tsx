import { Column, Heading, Meta, Row, Schema } from "@once-ui-system/core";

import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Search } from "@/components/blog/Search";
import { baseURL, blog, person } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  const kbarItems = posts.map((p) => ({
    id: p.slug,
    name: p.metadata.title || p.slug,
    section: "Posts",
    keywords: `${p.metadata.title} ${p.metadata.summary}`,
    href: `/blog/${p.slug}`,
    icon: "document",
    description: p.metadata.summary,
  }));
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row
        vertical="center"
        horizontal="between"
        gap="m"
        marginBottom="l"
        s={{ direction: "column", horizontal: "start" }}
      >
        <Heading variant="heading-strong-xl" marginLeft="24">
          {blog.header}
        </Heading>
        <Row vertical="center" horizontal="center" fillWidth>
          <Search items={kbarItems} />
        </Row>
      </Row>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[4]} columns="2" />
        <Mailchimp marginBottom="l" />
      </Column>
    </Column>
  );
}
