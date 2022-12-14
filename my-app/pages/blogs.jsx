const posts = [
    {
      title: 'XRC Swap: Unlocking Liquidity with a Decentralized Token Exchange Protocol',
      href: '/blogs/unlocking',
      category: { name: 'Article', href: '#' },
      description:
        'The rise of decentralized finance (DeFi) has revolutionized the financial world, allowing anyone to access a variety of financial services and investments without relying on a centralized entity.',
      date: 'Jan 12, 2022',
      datetime: '2022-01-12',
      imageUrl:
        'https://dspyt.com/_next/image?url=%2Fimages%2Fposts%2Fxrcswap%2Fimage.webp&w=640&q=75',
      readingTime: '6 min',
      author: {
        name: 'Our Twitter',
        href: 'https://twitter.com/XrcSwap',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1599419783618904064/1spC1U1G_400x400.jpg',
      },
    },
    {
      title: 'XRC Swap: Unlocking Liquidity with a Decentralized Token Exchange Protocol',
      href: '/blogs/unlocking',
      category: { name: 'Article', href: '#' },
      description:
        'The rise of decentralized finance (DeFi) has revolutionized the financial world, allowing anyone to access a variety of financial services and investments without relying on a centralized entity.',
      date: 'Jan 12, 2022',
      datetime: '2022-01-12',
      imageUrl:
        'https://dspyt.com/_next/image?url=%2Fimages%2Fposts%2Fxrcswap%2Fimage.webp&w=640&q=75',
      readingTime: '6 min',
      author: {
        name: 'Our Twitter',
        href: 'https://twitter.com/XrcSwap',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1599419783618904064/1spC1U1G_400x400.jpg',
      },
    },
    {
      title: 'XRC Swap: Unlocking Liquidity with a Decentralized Token Exchange Protocol',
      href: '/blogs/unlocking',
      category: { name: 'Article', href: '#' },
      description:
        'The rise of decentralized finance (DeFi) has revolutionized the financial world, allowing anyone to access a variety of financial services and investments without relying on a centralized entity.',
      date: 'Jan 12, 2022',
      datetime: '2022-01-12',
      imageUrl:
        'https://dspyt.com/_next/image?url=%2Fimages%2Fposts%2Fxrcswap%2Fimage.webp&w=640&q=75',
      readingTime: '6 min',
      author: {
        name: 'Our Twitter',
        href: 'https://twitter.com/XrcSwap',
        imageUrl:
          'https://pbs.twimg.com/profile_images/1599419783618904064/1spC1U1G_400x400.jpg',
      },
    },
  ]
  
  export default function Example() {
    return (
      <div className="relative bg-orange-400 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-orange-400 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our blogs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-900 sm:mt-4">
            Here you can read our posts and learn something new and interesting.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }