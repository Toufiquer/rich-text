import ClientComponent from './ClientComponent'
import ServerComponent from './ServerComponent'

/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: my-tiptap-project, May, 2025
|-----------------------------------------
*/
const Page = ({ data }: { data: string }) => {
  const htmlData = data
  return (
    <main className="w-full min-h-[200px] border-1 border-slate-200 mt-2 ">
      {htmlData}
      <ClientComponent data={htmlData} />
      <ServerComponent data={htmlData} />
    </main>
  )
}
export default Page
