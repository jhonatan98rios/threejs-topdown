import dynamic from 'next/dynamic';

export default function Home() {

  const DynamicCanvas = dynamic(() => import('@/components/Canvas'), { ssr: false })

  return <DynamicCanvas />
}