import Link from "next/link";
import { Button } from "./ui/button";

const SingleBlogPost = ({ data }) => {
  return (
    <div className="flex flex-col justify-center gap-4 mt-6">
      <h2 className="text-2xl text-center">{data.title}</h2>
      <div className="overflow-hidden whitespace-nowrap pb-4">
        <p className="text-xl text-center">{data.content}</p>
      </div>
      <div className="flex flex-row justify-center">
        <Button asChild>
          <Link href={`blogs/${data.id}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default SingleBlogPost;
