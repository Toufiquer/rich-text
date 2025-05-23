'use client'
import RichTextEditor from '@/components/rich-text-editor'
import ViewRichText from '@/components/view-rich-text/page'
import { useState } from 'react'

export default function Home() {
  const [post, setPost] = useState('')

  const onChange = (content: string) => {
    setPost(content)
    console.log(content)
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <RichTextEditor content={post} onChange={onChange} />
      <ViewRichText data={post} />
    </div>
  )
}
