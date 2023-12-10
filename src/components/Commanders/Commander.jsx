import styled from "styled-components";

const Commander = ({data}) =>{
    return(
        <CommanderCard>
            <img src={data.avatar} alt={data.name}/>
            <div className={'info'}>
                <p className={'name'}>{data.name}</p>
                <p className={'rank'}>{data.rank}</p>
                <p className={'position'}>{data.position}</p>
                <p className={'desc'}>{data.description}</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                <button>Нагороди</button>
                </div>
            </div>
        </CommanderCard>
    )
}
const CommanderCard = styled.div`
  width: 600px;
  height: 400px;
  background-color: rgba(30, 29, 29, 0.48);
  border-radius: 10px;
  display: flex;

  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 240px;
    height: 400px;
  }

  .info {
    display: flex;
    flex-direction: column;
    color: white;
    button{
      width: 150px;
      height: 40px;
      background-color: black;
      border: 2px solid white;
      color: white;
      font-family: 'Comfortaa',sans-serif;
      cursor: pointer;
      transition: .6s ease-in-out;
    }
    button:hover{
      scale: 1.1;
      color: black;
      background-color: white;
      font-weight: bold;
      border-radius: 50px;
    }
    .name {
      font-size: 28px;
      text-align: center;
      margin-bottom: 6px;
    }

    .rank {
      margin: 4px 0;
      text-align: center;
      font-weight: bolder;
      text-decoration: underline;
      
    }

    .position {
      text-align: center;
      font-style: oblique;
    }
  }
  .desc{
    padding: 0 20px;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
`
export default Commander