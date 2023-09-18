import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import Star from '@mui/icons-material/Star';
import Alert from '@mui/joy/Alert';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Container } from '@app/components/landing-page/Container';
import { RouteNames } from '@app/types';

export function HeroChatGPTPlugin() {
  return (
    <Container className="relative z-10 pt-20 pb-16 mb-12 text-center lg:pt-32">
      <img
        className="absolute left-0 object-contain bg-top opacity-60 -translate-y-1/4"
        src="https://nextsiders.vercel.app/_next/static/media/Hero.Gradient.0bce135c.svg"
        alt=""
      />
      <div className="relative z-10">


        <Link href={RouteNames.CHAT_SITE}>
          {/* <Button sx={{borderRadius: 100, boxShadow: 'md', mb: 4}} size="sm" endDecorator={<ArrowForwardRoundedIcon />} variant='soft' color="success">✨ New: ChatGPT Bot trained on your website</Button> */}

          {/* <div className='inline-flex items-center justify-center max-w-2xl p-2 mx-auto mb-4 border-2 border-indigo-400 rounded-full bg-black/30'>
          <h2 className="text-xs font-semibold leading-none text-indigo-300 ">Open Source</h2>
        </div> */}
        </Link>

        {/* <Alert
          sx={{
            maxWidth: 'sm',
            mx: 'auto',
            zIndex: 10,
            mb: 8,
            mt: -8,
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
          startDecorator={
            <AutoAwesomeRoundedIcon
              sx={{ mt: '2px', mx: '4px' }}
              fontSize="xl2"
            />
          }
          color="success"
          variant="soft"
          // invertedColors
          zize="lg"

          // endDecorator={
          //   <IconButton variant="soft" size="sm" color={color}>
          //     <CloseRoundedIcon />
          //   </IconButton>
          // }
        >
          <div style={{width: '100%'}}>
            <Typography fontWeight="lg" mt={0.25}>
              <Typography fontWeight={'bold'}>New!</Typography> Build a ChatGPT Plugin in minutes
            </Typography>
            <Stack direction="row" alignItems={'center'}  width={'100%'}>
              <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                Connect custom data to ChatGPT!
              </Typography>

            <Link href="/#chatgpt-plugin" style={{marginLeft: 'auto'}}>
              <Button
                size="sm"
                variant="plain"
                endDecorator={<ArrowForwardRoundedIcon />}
                >
                Learn More
              </Button>
                </Link>
            </Stack>
          </div>
        </Alert> */}


        <div className="flex justify-center mt-10 gap-x-6">
          {/* <Button target="_blank" href="https://app.chaindesk.ai/signin">Start Building</Button> */}
          {/* <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="flex-none w-3 h-3 fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3 text-gray-200">Watch video</span>
        </Button> */}
        </div>
        {/* <div className="mt-36 lg:mt-44">
        <p className="text-base text-gray-400 font-display">
          Trusted by by amazing companies
        </p>
        <ul
          role="list"
          className="flex items-center justify-center mt-8 gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}

        {/* <div className="relative pt-16 overflow-hidden">

        <h2 className="mb-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Build in minutes <br />
            Deploy anywhere
          </h2>

          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <iframe
              //   className="w-full h-[300px] rounded-2xl"
              //   width="560"
              className="w-full aspect-video rounded-3xl"
              src="https://www.youtube.com/embed/Pa-cyPJzt5k"
              title="YouTube video player"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div> */}
      </div>
    </Container>
  );
}