import data from "./postsData";
import PostCard from "./PostCard";

function BlogPost() {
  return (
    <div className="container">
      {data.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
          views={post.views}
        />
      ))}
    </div>
  );
}

export default BlogPost;