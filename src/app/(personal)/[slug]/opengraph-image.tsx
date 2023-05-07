import { ImageResponse, NextRequest } from 'next/server'

export const alt = 'About Acme'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
export const runtime = 'edge'

export default async function og(req: NextRequest) {
  const regularFont = fetch(
    new URL('../../../assets/MuseoModerno-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())
  const boldFont = fetch(
    new URL('../../../assets/MuseoModerno-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const [regularFontData, boldFontData] = await Promise.all([
    regularFont,
    boldFont,
  ])
  const title = 'Default' || 'frasty'

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          background:
            'radial-gradient(circle closest-side, #770A23 40%, #0a0a0a)',
          position: 'relative',
        }}
      >
        <svg
          width="56"
          height="55"
          viewBox="0 0 56 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: 80,
            height: 80,
            marginBottom: 16,
            position: 'absolute',
            bottom: 16,
            left: 16,
          }}
        >
          <g filter="url(#filter0_b_5_85)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4615 0C14.0433 0 10.4615 3.58173 10.4615 8.00001V13.7778C10.4615 11.5686 12.2524 9.77778 14.4615 9.77778H38.4615C40.6707 9.77778 42.4615 11.5686 42.4615 13.7778V15.6701C42.4615 17.8793 40.6707 19.6701 38.4615 19.6701H26.7034C24.557 19.6701 22.8171 21.4101 22.8171 23.5564C22.8171 25.7028 24.5571 27.4427 26.7034 27.4427H36.506C38.7151 27.4427 40.506 29.2336 40.506 31.4427V33.3351C40.506 35.5442 38.7151 37.3351 36.506 37.3351H26.8171C24.608 37.3351 22.8171 39.1259 22.8171 41.3351V45.2222H48C52.4183 45.2222 56 41.6405 56 37.2222V8C56 3.58172 52.4183 0 48 0H18.4615Z"
              fill="#D84064"
            />
          </g>
          <g filter="url(#filter1_b_5_85)">
            <mask id="path-2-inside-1_5_85" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 9.77778C3.58172 9.77778 0 13.3595 0 17.7778V47C0 51.4183 3.58172 55 8 55H37.5385C41.9567 55 45.5385 51.4183 45.5385 47V17.7778C45.5385 14.4218 43.472 11.5484 40.5421 10.3608C41.6931 11.0631 42.4615 12.3307 42.4615 13.7778V15.6701C42.4615 17.8793 40.6707 19.6701 38.4615 19.6701H26.7034C24.557 19.6701 22.8171 21.4101 22.8171 23.5564C22.8171 25.7028 24.557 27.4427 26.7034 27.4427H36.506C38.7151 27.4427 40.506 29.2336 40.506 31.4427V33.3351C40.506 35.5442 38.7151 37.3351 36.506 37.3351H26.8171C24.608 37.3351 22.8171 39.1259 22.8171 41.3351V45.2222H18.4615C14.0433 45.2222 10.4615 41.6405 10.4615 37.2222V13.7778C10.4615 11.5686 12.2524 9.77778 14.4615 9.77778H8Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 9.77778C3.58172 9.77778 0 13.3595 0 17.7778V47C0 51.4183 3.58172 55 8 55H37.5385C41.9567 55 45.5385 51.4183 45.5385 47V17.7778C45.5385 14.4218 43.472 11.5484 40.5421 10.3608C41.6931 11.0631 42.4615 12.3307 42.4615 13.7778V15.6701C42.4615 17.8793 40.6707 19.6701 38.4615 19.6701H26.7034C24.557 19.6701 22.8171 21.4101 22.8171 23.5564C22.8171 25.7028 24.557 27.4427 26.7034 27.4427H36.506C38.7151 27.4427 40.506 29.2336 40.506 31.4427V33.3351C40.506 35.5442 38.7151 37.3351 36.506 37.3351H26.8171C24.608 37.3351 22.8171 39.1259 22.8171 41.3351V45.2222H18.4615C14.0433 45.2222 10.4615 41.6405 10.4615 37.2222V13.7778C10.4615 11.5686 12.2524 9.77778 14.4615 9.77778H8Z"
              fill="#941E3A"
            />
            <path
              d="M40.5421 10.3608L40.9177 9.434L40.0212 11.2144L40.5421 10.3608ZM22.8171 45.2222V46.2222H23.8171V45.2222H22.8171ZM1 17.7778C1 13.9118 4.13401 10.7778 8 10.7778V8.77778C3.02944 8.77778 -1 12.8072 -1 17.7778H1ZM1 47V17.7778H-1V47H1ZM8 54C4.13401 54 1 50.866 1 47H-1C-1 51.9706 3.02944 56 8 56V54ZM37.5385 54H8V56H37.5385V54ZM44.5385 47C44.5385 50.866 41.4045 54 37.5385 54V56C42.509 56 46.5385 51.9706 46.5385 47H44.5385ZM44.5385 17.7778V47H46.5385V17.7778H44.5385ZM40.1664 11.2875C42.7319 12.3275 44.5385 14.8429 44.5385 17.7778H46.5385C46.5385 14.0007 44.212 10.7694 40.9177 9.434L40.1664 11.2875ZM43.4615 13.7778C43.4615 11.9678 42.4991 10.3835 41.0629 9.50712L40.0212 11.2144C40.8871 11.7427 41.4615 12.6936 41.4615 13.7778H43.4615ZM43.4615 15.6701V13.7778H41.4615V15.6701H43.4615ZM38.4615 20.6701C41.223 20.6701 43.4615 18.4316 43.4615 15.6701H41.4615C41.4615 17.327 40.1184 18.6701 38.4615 18.6701V20.6701ZM26.7034 20.6701H38.4615V18.6701H26.7034V20.6701ZM23.8171 23.5564C23.8171 21.9624 25.1093 20.6701 26.7034 20.6701V18.6701C24.0048 18.6701 21.8171 20.8578 21.8171 23.5564H23.8171ZM26.7034 26.4427C25.1093 26.4427 23.8171 25.1505 23.8171 23.5564H21.8171C21.8171 26.255 24.0048 28.4427 26.7034 28.4427V26.4427ZM36.506 26.4427H26.7034V28.4427H36.506V26.4427ZM41.506 31.4427C41.506 28.6813 39.2674 26.4427 36.506 26.4427V28.4427C38.1628 28.4427 39.506 29.7859 39.506 31.4427H41.506ZM41.506 33.3351V31.4427H39.506V33.3351H41.506ZM36.506 38.3351C39.2674 38.3351 41.506 36.0965 41.506 33.3351H39.506C39.506 34.9919 38.1628 36.3351 36.506 36.3351V38.3351ZM26.8171 38.3351H36.506V36.3351H26.8171V38.3351ZM23.8171 41.3351C23.8171 39.6782 25.1602 38.3351 26.8171 38.3351V36.3351C24.0557 36.3351 21.8171 38.5736 21.8171 41.3351H23.8171ZM23.8171 45.2222V41.3351H21.8171V45.2222H23.8171ZM18.4615 46.2222H22.8171V44.2222H18.4615V46.2222ZM9.46154 37.2222C9.46154 42.1928 13.491 46.2222 18.4615 46.2222V44.2222C14.5955 44.2222 11.4615 41.0882 11.4615 37.2222H9.46154ZM9.46154 13.7778V37.2222H11.4615V13.7778H9.46154ZM14.4615 8.77778C11.7001 8.77778 9.46154 11.0164 9.46154 13.7778H11.4615C11.4615 12.1209 12.8047 10.7778 14.4615 10.7778V8.77778ZM8 10.7778H14.4615V8.77778H8V10.7778Z"
              fill="#941E3A"
              mask="url(#path-2-inside-1_5_85)"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_5_85"
              x="2.46155"
              y="-8"
              width="61.5385"
              height="61.2222"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_5_85"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_5_85"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_b_5_85"
              x="-8"
              y="1.77778"
              width="61.5385"
              height="61.2222"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_5_85"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_5_85"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <h1
          style={{
            fontSize: '100px',
            fontFamily: 'MuseoModerno Bold',
            background:
              'linear-gradient(to top right, #ffffff 40%, #BB2649 80%)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: '5rem',
            letterSpacing: '-0.025em',
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'MuseoModerno Regular',
          data: regularFontData,
          style: 'normal',
        },
        {
          name: 'MuseoModerno Bold',
          data: boldFontData,
        },
      ],
    }
  )
}
