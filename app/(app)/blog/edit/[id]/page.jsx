'use client' 

import dynamic from 'next/dynamic';

const CustomEditor = dynamic( () => {
  return import( '@/components/CustomEditor' );
}, { ssr: false } );

export default function page() {
  return (
    <CustomEditor 
      initialData='<h1>Hello from CKEditor in Next.js!</h1>'
    />
  );
}
