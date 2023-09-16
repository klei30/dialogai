import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Diverse Applications',
    description: `From customer service to e-learning, e-commerce, and healthcare, our tailored AI applications are designed to meet the unique demands of various industries. Let us build the perfect solution to cater to your specific needs.
    .`,
    icon: CloudArrowUpIcon,
  },
  {
    name: '24/7 Support',
    description:
      'Ensure uninterrupted service for your customers, no matter the time of day. Our AI solutions are here to facilitate 24/7 engagement, handling inquiries and providing support even when your team is offline',
    icon: LockClosedIcon,
  },
  // {
  //   name: 'Easy to Implement',
  //   description:
  //     'Deploying your bespoke AI solution is smooth and straightforward. We provide you with a streamlined process where all you need to do is integrate our meticulously crafted code onto your platform, and you’re set to provide immediate assistance to your users.',
  //   icon: ServerIcon,
  // },
];

export default function Example() {
  return (
    <div
      id="for-customer-support"
      className="py-24 overflow-hidden bg-black sm:py-32"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-500">
              For Every Industry
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tailored AI Solutions at Your Service
              </p>
              {/* <p className="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p> */}
              <dl className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute w-5 h-5 text-indigo-500 left-1 top-1"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative px-6 pt-8 overflow-hidden bg-indigo-500 isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
   <img
  src="/2.gif"
  alt="Product screenshot"
  className="rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[28.5rem] md:-ml-4 lg:-ml-0"
  width={1216}
  height={865}
/>

              <div
                className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
