import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;
export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  overflow: hidden;
  margin: 0 10px;
  flex-direction: column;
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    img{ width: 64px}
    strong{
      font-size: 24px;
      margin-top: 10px;
    }
    small{
      font-size: 14px;
      color: #333;
    }
  }
  ul{
      list-style: none;
      li{
        font-weight: bold;
        padding: 12px 20px;
        i{
          margin-right:10px;
          color:#4e4e4e;
        }
        small{
          font-weight: normal;
          font-size: 12px;
          color: #999;
          font-style: italic;
          margin-left: 5px;
        }
        &:nth-child(2n -1){
          background: #f4f4f4; 
        }
      }
    }
    form{
      width: 100%;
      flex: 1;
      display: flex;
      button{
        flex: 1;
        padding: 8px;
        border: 0;
        cursor: pointer;
        &.update{
          background: #b5cff1;
          &:hover{
             background: #98aeca;
          }
          color: #0639cf;
          i{
            display: none;
          }
          &.now{
            i{
              display: inline;
            }
          }
        }
        
        &.delete{
          background: #f1cbc9;
          &:hover{
             background: #caa4a3;
          }
          color: #cf0000;
          i{
            display: none;
          }
          &.now{
            i{
              display: inline;
            }
          }
        }
      }
    }
`;
