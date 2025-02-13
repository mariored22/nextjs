import Link from "next/link"

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  console.log(posts, 'posts')
  return (
    <ul className="mt-10" >
     {posts.map((post: any) => (
      <li><Link href={`/blog/${post.id}`} key={post.id}>{post.title}</Link></li>
      ))}
    </ul>
  )
}