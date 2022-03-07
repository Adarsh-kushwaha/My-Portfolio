import React from 'react'
import { getPostDetails, getPosts } from '../../services';
import { useRouter } from 'next/router';

const BlogDetails = ({ article }) => {

    const router = useRouter();
    console.log(article)
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <BlogDetails article={article}/>
        </div>
    )
}

export default BlogDetails;

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug);

    return {
        props: {
            article: data
        }
    }
}


export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}