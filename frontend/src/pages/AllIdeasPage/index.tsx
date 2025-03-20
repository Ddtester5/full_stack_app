import { trpc } from "../../lib/trpc"

export function AllIdeasPage(){
    const {data,error,isLoading,isFetching,isError} = trpc.getIdeas.useQuery()

    if(isLoading || isFetching){return <span>Loading...</span>}
    if(isError){return <span>{error.message}</span>}
    return(<div>
        <h2>All ideas</h2>
{data?.ideas.map((idea)=>{
    return(
        <div key={idea.nike}>
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
        </div>
    )
})}
    </div>
      
    )
}