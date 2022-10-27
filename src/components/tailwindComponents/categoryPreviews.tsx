import Link from "next/link"

const callouts = [
  {
    name: 'Wear',
    description: 'Clothing, Backpack, handbags',
    imageSrc: 'https://images.ctfassets.net/3s5io6mnxfqz/1jW0ClXkocn7TU6RbHnfVk/162bc75700473c6231c5612d13a0f702/AdobeStock_302958346.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: 'wear',
  },
  {
    name: 'Food',
    description: 'Meal, Ice Cream',
    imageSrc: 'https://tecnohotelnews.com/wp-content/uploads/2018/04/siete-claves-para-ofrecer-platos-saludables-atractivos-a-los-comensales.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: 'food',
  },
  {
    name: 'Hardware Store',
    description: 'Hardware',
    imageSrc: 'https://almanacnews.com/news/photos/2022/march/28/59305_col.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'hardware',
  },
]

export const CategoryPreviews = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 lg:max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">Sites</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href={`/dashboard/sites/${callout.href}`}>
                <a>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export const CategoryPreviewProjects = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 lg:max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">Sites</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href={`/dashboard/projects/${callout.href}`}>
                <a>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}