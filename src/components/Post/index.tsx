export type PostType = {
  title: string;
  description: string;
  secondDescription?: string;
  link: string;
  linkText: string;
  image: string;
};

interface Props {
  post: PostType;
}

const Post: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <section className="flex flex-col py-5 gap-5 my-5">
      <div className="flex flex-1 flex-row flex-wrap gap-3">
        <div className="flex w-full md:flex-1 flex-col">
          <h3 className="py-3 font-medium text-base md:text-xl lg:text-2xl">
            {post.title}
          </h3>
          <p className="py-3 text-sm font-medium max-w-[500px] md:text-base lg:text-lg">
            {post.description}
          </p>
          {post.secondDescription && (
            <p className="text-[#606060] text-xs py-5 max-w-[500px]">
              {post.secondDescription}
            </p>
          )}
          <a
            href={post.link}
            target="_blank"
            className="mt-auto underline font-medium text-right md:text-left pt-5"
          >
            {post.linkText}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end w-full">
          <img
            src={post.image}
            alt="avatar"
            className="shadow-[1px_2px_15px_2px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
      <hr className="border border-black my-[75px]" />
    </section>
  );
};

export default Post;
