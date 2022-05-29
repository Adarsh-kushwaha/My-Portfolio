import React from 'react'
import Image from 'next/image';
import moment from 'moment';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';


const BlogContent = ({ content }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4 text-black dark:text-white">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-two':
        return <h2 key={index} className="text-2xl font-semibold mb-4 text-black dark:text-white">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-7">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-lg font-semibold mb-4 text-black dark:text-white">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'code-block':
        return <div key={index} className="mb-7">{modifiedText.map((item, i) => <React.Fragment key={i} ><SyntaxHighlighter language='javascript' showLineNumbers={true} wrapLines={true} >{item}</SyntaxHighlighter></React.Fragment>)}</div>
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div>
      <h1 className='md:text-4xl text-3xl font-bold capitalize'>{content.title}</h1>
      <div className='flex flex-col justify-start gap-3 mt-2 items-start text-[14px] text-gray-400 mb-8'>
        <div className='flex flex-row justify-start gap-4 mt-4 items-center'>
          <Image src={content.author.image.url} alt="adarsh" width={25} height={25} className="rounded-full" />
          <p className='text-[14px] text-gray-400'>{content.author.name}</p>
        </div>
        <div className='flex gap-4'>
          <div>{moment(content.createdAt).fromNow()}</div>
          <div className='w-[1px] bg-gray-400 rounded-full'></div>
          <div>{parseInt(content.content.raw.children.length / 5)} min to read</div>
        </div>
      </div>
      <div className='mt-4 text-gray-700 dark:text-gray-300'>
        {content.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type,)
        })}
      </div>
    </div>
  )
}

export default BlogContent;