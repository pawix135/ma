import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <section className="flex flex-col py-5 gap-5 ">
      <div className="flex flex-1 flex-row flex-wrap">
        <div className="flex w-full md:flex-1 flex-col">
          <h3 className="py-3 font-medium">{post.title}</h3>
          {!seeMore && isMobile ? (
            <p
              className="cursor-pointer select-none"
              onClick={() => setSeeMore(!seeMore)}
            >
              See more...
            </p>
          ) : !isMobile ? undefined : (
            <p
              className="cursor-pointer select-none"
              onClick={() => setSeeMore(!seeMore)}
            >
              Hide
            </p>
          )}
          <div
            className={classNames(
              "scale-x-0 transform duration-150 origin-left",
              {
                "scale-x-100": seeMore && isMobile,
                "scale-x-100 ": !isMobile,
              }
            )}
          >
            <p className="py-3 text-sm">{post.description}</p>
            {post.secondDescription && (
              <p className="text-[#606060] text-sm py-5">
                {post.secondDescription}
              </p>
            )}
            <a href={post.link} className="mt-auto">
              {post.linkText}
            </a>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img src={post.image} alt="image" />
        </div>
      </div>
      <hr className="border border-black" />
    </section>
  );
};

export default Post;
