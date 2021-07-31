// Packages
import styled from "styled-components";

// Components
import Wrapper from "../components/Containers/Wrapper";
import Container from "../components/Containers/Container";
import Link from "next/link";

// Blog
import { getSortedPosts } from "../lib/posts";

// Data
import SiteData from "../components/data/SiteData";

// Styles

// Text variables
const pageTitle = "Homepage";
const blogTitle = "Posts";
const description = "Meta description";
const keywords = ["keyword", "keyword"];

export default function Home({ allPostsData }) {
    return (
        <Wrapper
            title={pageTitle}
            description={description}
            keywords={keywords}
        >
            <Container>
                <h1>{SiteData.siteName}</h1>

                <h2>{blogTitle}</h2>

                {allPostsData.map(({ slug, date, title, excerpt }) => (
                    <section key={slug}>
                        <Link
                            key={slug}
                            href="/blog/[slug]"
                            as={`/blog/${slug}`}
                        >
                            <a>{title}</a>
                        </Link>
                    </section>
                ))}
            </Container>
        </Wrapper>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPosts();
    return {
        props: {
            allPostsData,
        },
    };
}
