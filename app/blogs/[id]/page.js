import SingleBlogHelper from "./_components/SingleBlogHelper";

const SinglePostPage = ({ params }) => {
  console.log(params.id);
  return <SingleBlogHelper id={params.id} />;
};

export default SinglePostPage;
