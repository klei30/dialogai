import React from 'react';

type Props = {};

const CompanyLogos = (props: Props) => {
  return (
    <div className="pb-24 bg-black sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold leading-8 text-center text-white">
          Partnering with the world’s most innovative teams
        </h2>
        <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="./openai1.png"
            alt="Openai"
            width={158}
            height={48}
          />
          <img
            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="langchain.png"
            alt="langchain"
            width={158}
            height={48}
          />
          <img
            className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            src="./milvus.png"
            alt="milvus"
            width={158}
            height={48}
          />
          <img
            className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
            src="./pinecone.png"
            alt="pinecone"
            width={158}
            height={48}
          />
          <img
            className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
            src="airtable.png"
            alt="airtable"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
