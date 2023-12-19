import { useRouter } from "next/router";
function BlogPostPage() {
  const router = useRouter(); //http://localhost:3001/blog/as/ash/ron/kon/don------> we can as many routes here.
  console.log(router.query); //This will give all the Route in the form of array. slug:['as', 'ash', 'ron', 'kon', 'don']
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostPage;
