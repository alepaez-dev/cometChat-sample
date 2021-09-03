import Head from 'next/head'
import dynamic from "next/dynamic";
import React, { useEffect } from 'react';

const CometChatNoSSR = dynamic(
  () => import('components/CometChatNOSSR'),
  { ssr: false }
); 


export default function Home() {


  useEffect(()=>{
    window.CometChat=require('@cometchat-pro/chat').CometChat
  });

  return (
    <div>
      <CometChatNoSSR />
    </div>
  )
}
