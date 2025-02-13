
// This is a Server Component, and params can be directly accessed within it
export default function Home({ params }: { params: { postId: string } }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-center">Post {params?.postId}</p>
    </div>
  );
}
