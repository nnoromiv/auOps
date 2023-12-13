
interface loadingProps {
    load: boolean
}

export default function Loading( {load}: loadingProps){
  return (
    <main>
        {
            load && <div className="loading loading-dots loading-xl text-primary-color-default flex m-auto"></div>
        }
    </main>
  )
}
