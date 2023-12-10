import styled from "styled-components";

const Task = ({ data }) => {
    return (
        <TaskContainer>
            <h1 className="title_task">{data.title}</h1>
            <p className="title_desc">{data.description}</p>
            <div className="percents_block">
                <h2 className="title_percents">Процес виконання:</h2>
                <h2 className="title_percents">{data.percents}</h2>
            </div>
        </TaskContainer>
    )
}

const TaskContainer = styled.div`
     width: 600px;
  height: 400px;
  background-color: rgba(30, 29, 29, 0.48);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
    color:white;
    text-align: center;

    .title_task{
        padding: 0 20px;
        font-size: 28px;
    }
    .title_desc{
        padding: 0 40px;
        color:gray;
    }
    .percents_block{

    }
    .title_percents{
        font-size: 36px;
    }
    
        
        
    transition: 1s ease-in-out;
    &:hover{
        color:black;
        background-color: rgb(255, 255, 255);
        scale: 1.05;
        .title_task{
            color: #a0702d;
        }
       
        border: 1px solid #fafafa58;
    }
`

export default Task;