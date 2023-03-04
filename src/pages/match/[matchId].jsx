const MatchDetails = ({Data, MatchData})=>{
    return(
        <>
            <div dangerouslySetInnerHTML={{__html: MatchData.embed}}></div>
        </>
    )
}

export default MatchDetails;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e21a3cee8mshf98cb345da11a90p17846bjsnff4266b5ca3e',
		'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
	}
};
fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
export async function getServerSideProps(context){
  const responseLatest= await fetch(`https://free-football-soccer-videos.p.rapidapi.com/`, options);
  const Data = await responseLatest.json();
  const {params} = context;
  const response = await fetch(`https://free-football-soccer-videos.p.rapidapi.com/${params.compitition.matchId}`);
    const MatchData = await response.json();
  return{
    props:{
      Data: Data,
      MatchData: MatchData
    }
  }
}