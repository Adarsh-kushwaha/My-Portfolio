import React from 'react';
import BlogContent from '../../components/blog/BlogContent';
import { getPostDetails, getPosts } from "../../services";
import { useRouter } from 'next/router';


const BlogDetails = ({ content }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p>loading...</p>;
    }

    return (
        <div><BlogContent content={content} /></div>
    )
}

export default BlogDetails;

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)

    return {
        props: {
            content: data
        }
    }
}


export async function getStaticPaths({ params }) {
    const post = await getPosts()
    return {
        paths: post.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false,
    }
}