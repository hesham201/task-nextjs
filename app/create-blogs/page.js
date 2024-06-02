import CreateBlogForm from "./_components/BlogForm";

const CreateBlogs = () => {
  return (
    <section className="min-h-screen w-full flex">
      <div className="container flex flex-col justify-center items-centers">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl mb-4">Share your blogs Free</h1>
          <CreateBlogForm />
        </div>
      </div>
    </section>
  );
};

export default CreateBlogs;
